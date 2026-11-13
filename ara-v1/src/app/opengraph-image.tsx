import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'ARA Solutions: IT training and placement in Hyderabad';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social preview image (WhatsApp, LinkedIn, X...), generated at build time. */
export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/logo-white.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        color: 'white',
        background:
          'radial-gradient(60% 60% at 85% 10%, rgba(46,58,190,0.6), transparent 70%), radial-gradient(50% 50% at 5% 100%, rgba(229,35,45,0.35), transparent 70%), #0d1150',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={330} height={45} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          Build the tech career companies hire for
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: 'rgba(255,255,255,0.7)' }}>
          Salesforce · ServiceNow · AI · Cybersecurity · Full Stack
        </div>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {['13+ years in IT', '1,000+ professionals placed', 'Placement assistance'].map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              padding: '12px 22px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: 24,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
