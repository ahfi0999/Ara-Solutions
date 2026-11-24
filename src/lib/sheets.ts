import { createSign } from 'node:crypto';

/**
 * Appends rows to a Google Sheet as a Google Cloud service account (server only). The sheet must be
 * shared with the service account's email as an Editor. No Google library needed: the account signs a
 * short-lived token request itself, and the token is reused until it expires.
 */

export type SheetConfig = {
  sheetId: string;
  clientEmail: string;
  /** The service account's private key; "\n" escapes (as stored in env files) are turned back into new lines. */
  privateKey: string;
  /** Tab to append to (default Sheet1). */
  tab?: string;
};

let cached: { token: string; expires: number } | undefined;

async function accessToken(clientEmail: string, privateKey: string) {
  if (cached && cached.expires > Date.now() + 60_000) return cached.token;
  const now = Math.floor(Date.now() / 1000);
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(privateKey, 'base64url');
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error(`google token responded ${response.status}`);
  const data = (await response.json()) as { access_token: string; expires_in: number };
  cached = { token: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return cached.token;
}

/** Adds one row below the last filled row. Values are stored exactly as given (never run as formulas). */
export async function appendRow(config: SheetConfig, row: string[]) {
  const token = await accessToken(config.clientEmail, config.privateKey.replace(/\\n/g, '\n'));
  const range = encodeURIComponent(`'${config.tab ?? 'Sheet1'}'!A1`);
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${config.sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] }),
      signal: AbortSignal.timeout(10_000),
    },
  );
  if (!response.ok) throw new Error(`google sheets responded ${response.status}`);
}
