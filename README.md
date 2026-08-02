# Hazzem Sukar — Personal Website

My personal portfolio, rebuilt with a modern dark tech aesthetic.

**Stack:** Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion

**Features:**

- Animated hero with typewriter effect
- Filterable project showcase
- Live Discord presence widget (via [Lanyard](https://github.com/Phineas/lanyard)) with persistent "last seen" (Upstash Redis)
- Fully responsive, dark metallic-blue theme

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables (optional)

For the persistent "last seen" feature in production, add a free [Upstash Redis](https://upstash.com) database:

```
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

Without these, the widget still works — it just won't persist last-seen across deploys.

## Legacy

The previous static site is preserved on the `legacy/old-site` branch.
