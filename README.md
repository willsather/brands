# Brands

This monorepo is built around creating clones of existing websites but built to highlight the feature-set of Next.js & 
Vercel.

Currently, the one application is a clone of [`hermes.com`](https://www.hermes.com/us/en/) using Next.js and Vercel.

This application features:

* Home Page (Static) (`/`)
* Category Pages (ISR) (`/category/[id]`)
* Product Pages (PPR) (`/product/[id]`)

These three types of pages demonstrate the powerful rendering strategies that come out of the box with Next.js.

## Edge Config

The Product API (a JSON list of products and categories) is stored
in [Vercel Edge Config](https://vercel.com/docs/edge-config) and invoked in `@/lib/products.ts`.  These `fetch` calls
are using `{ cache: "force-cache" }` to further demonstrate the various rendering stragies.  

This Edge Config is deployed in `@willsather`'s Vercel team. 

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
