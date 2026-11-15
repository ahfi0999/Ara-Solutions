# Notes for coding agents

- This is the ARA Solutions website: **Next.js 15** (App Router), React 19, TypeScript, Tailwind CSS v4.
- Stay on Next.js 15 until AWS Amplify Hosting officially supports a newer major version (see README, Deploy).
- Site content lives in `src/content/`; edit it there rather than in components.
- Never commit secrets: `.env.local` and `.env.production` are git-ignored; production values live in the Amplify console.
- Branch flow: work on `dev`, test on `qa`, release on `main`. Each push deploys automatically through Amplify.
