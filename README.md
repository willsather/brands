# Brands

This monorepo is built around creating clones of existing websites but built to highlight the feature-set of Next.js & 
Vercel.

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

## Running Locally

This repository is a simple Turborepo starter that contains the basic Turborepo setup and configuration.

To start using, you can use the following commands:

```zsh
pnpm install

pnpm dev

pnpm build
```

This project also has some configured some tools like:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Vitest](https://vitest.dev/) for unit testing
- [Biome](https://biomejs.dev/) for code linting & formatting

## Applications

Located under `/apps`, you will find an application.

- `vermes`: a [Next.js](https://nextjs.org/) clone of Hermes

## Packages

In this example, there is a shared package called `ui` which is basic [`shadcn/ui`](https://ui.shadcn.com/) package.

## Shared Configuration

Located under `/packages/config` is all the shared configuration which the Turborepo uses. This is a great space to put
handy developer tools and code cleanliness configuration.

- `@brands/vitest-config`: `vitest` configurations for `base` and `ui` configurations
- `@brands/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Useful Turborepo Links

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
