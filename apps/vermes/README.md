# Vermes

Currently, the one application is a clone of [`hermes.com`](https://www.hermes.com/us/en/) using Next.js and Vercel.

This application features:

* Home Page (Static) (`/`)
* Category Pages (ISR) (`/category/[id]`)
* Product Pages (PPR) (`/product/[id]`)
* Search Page (Dynamic) (`/search?q=`)

These four types of pages demonstrate the powerful rendering strategies that come out of the box with Next.js.

## Partial Prerendering

The product pages (`/product/[id]`) are
[Partial Prerendered](https://nextjs.org/docs/app/getting-started/partial-prerendering#enabling-partial-prerendering),
which means that Next.js combines static and dynamic content on the same page. This allows for a performant initial
load while streaming in data after the initial load.

This enables an incredibly performant page load while still maintaining the customization and personalization of a
dynamic page.  To simulate this, the product page dynamically renders a `Perfect Partner` component to dynamically
stream in _similar_ products (this simulation just provides random products, but the technology at play is the same).

## Incremental Static Regeneration

The category pages (`/category/[id]`) pages are using
[Incremental Static Regeneration](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
which enables you statically build pages during the build process while being able to regenerate (rebuild) each page on demand.

This is a highly performant way to serve static pages to users and only update the static pages when the underlying
data changes.

To revalidate a path, you can invoke `/api/revalidate?path=` (for example: `/api/revalidate?path=product/grace-silk-bloom-headband`).
This endpoint uses the Next.js [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) API.

## Middleware

This application also uses Next.js `middleware.ts` and Vercel's `geolocation` API to grab the user's `postalCode` and pass to each page.
This allows for the Product page to show `Estimated Delivery to ${USER_POSTAL_CODE}: 2-4 days` without needing to dynamically render the entire
page or fetch user data on the client.

## Edge Config

The Product API (a JSON list of products and categories) is stored
in [Vercel Edge Config](https://vercel.com/docs/edge-config) and invoked in `@/lib/products.ts`.  These `fetch` calls
are using `{ cache: "force-cache" }` to further demonstrate the various rendering strategies.

This Edge Config is deployed in `@willsather`'s Vercel team.

This list of products is also exposed via a Next.js API route (`/api/products` and `/api/products/[id]`), just in
case it's useful.

## Getting Started

### Development mode

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Production mode

```bash
pnpm install
pnpm run build
pnpm run start
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)!

### Vercel Features

#### Analytics

This starter uses [Vercel Analytics](https://vercel.com/docs/analytics) to gather user metrics and integrate directly
into the Vercel dashboard, without the need for a third party tool or cookies.

#### Speed Insights

This starter also uses [Vercel Speed Insights](https://vercel.com/docs/speed-insights) to provide detailed performance
metrics directly in Vercel's dashboard. This allows for a more granular Core Web Vitals dataset that is tracked per
deployment, rather than the standard rolling 30-day average.

#### Feature Flags

This starter uses the [Flags SDK](https://flags-sdk.dev/) to abstract feature flags and integrate into the [Vercel
Toolbar](https://vercel.com/docs/vercel-toolbar)

1. Generate `FLAGS_TOKEN`
    ```bash
   node -e "console.log(crypto.randomBytes(32).toString('base64url'))"
   ```
2. Add to [`env.local`](./.env.local)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) — your feedback and contributions are welcome!