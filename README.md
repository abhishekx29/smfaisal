# Dr. Syed Mohammad Faisal

Official academic website for Dr. Syed Mohammad Faisal, featuring research publications, academic profile, patents, books, conferences, teaching, and contact information.

## Development

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

The development server starts the site locally with Vite.

## Production

The site visit counter uses an Upstash Redis database, so it remains consistent across devices, server restarts, and server instances. Create a Redis database at [Upstash](https://console.upstash.com/), then add its REST URL and token as server environment variables:

```sh
UPSTASH_REDIS_REST_URL=https://your-redis-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-rest-token
```

The contact form sends mail through [Resend](https://resend.com/). Add these server environment variables as well:

```sh
RESEND_API_KEY=re_your-api-key
RESEND_FROM_EMAIL=Website Contact <contact@your-verified-domain.com>
RESEND_TO_EMAIL=faisalsharar786@gmail.com
```

`RESEND_FROM_EMAIL` must use a domain verified in Resend. `RESEND_TO_EMAIL` is optional and defaults to the site's contact email.

For local development, create a `.env` file from `.env.example`. Set the same variables in the production host's environment settings. The credentials must never use the `VITE_` prefix, which would expose them to browsers.

```sh
npm run build
npm run start
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
