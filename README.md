# Turborepo Next.js 14 Express Winston PNPM Prettier Husky TypeCheck ESLint boilerplate

This is an example setup for a full-stack monorepo using [Turborepo](https://turborepo.com) with [Next.js](https://nextjs.org/) and [Express](https://expressjs.com/) [PNPM](https://pnpm.io/). Most other Turborepo examples I've seen using Express or other plain TS Apps take a different approach to bundling shared packages.

Most examples like [Turbo kitchen-sink example](https://github.com/vercel/turbo/blob/main/examples/kitchen-sink/packages/logger/package.json) will have `dev` and `build` scripts for each shared package, which then watch the package for any changes and rebuild on each change.

I wanted to to find a way to avoid having a `dev` and `build` step for each package, and simply import the package into the app that needs it, and have the app bundle the package during it's `build` step.

With Next.js 14 we have no problems with Transpile packages, it goes on fly with Next compiler.

Doing this with Express however was not as straight-forward, but you can get it working with a pretty simple setup using [tsup](https://github.com/egoist/tsup)

Building an app using `tsup` with the following config will automatically transpile and bundle local shared packages during the `build` step

```ts
// tsup.config.ts

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  noExternal: ["@package"],
  splitting: false,
  bundle: true,
  outDir: "./dist",
  clean: true,
  env: { IS_SERVER_BUILD: "true" },
  loader: { ".json": "copy" },
  minify: true,
  sourcemap: true,
});
```

The magic here is `noExternal: ['@package']`

This one setting allows you to bundle any external shared packages matching `@package` **and** their dependencies into the app's build output.

Example: shared packages named `@package/logger` will be bundled into the app's build output, along with their dependencies.
Thanks to [Riley-Brown](https://github.com/Riley-Brown)

## Try it out yourself:

Turborepo will run these commands for all packages and apps from the root directory

Install all dependencies for all packages and apps

```bash
pnpm i
```

Start dev env for both server and front-end

```bash
pnpm dev
```

Build both server and front-end apps

```bash
pnpm build
```

Run both server and front-end apps

```bash
pnpm start
```

Run to clean all project

```bash
pnpm clean
```

Run to typecheck all project

```bash
pnpm typecheck
```

## Also try it with [Bun](bun.sh) on bun branch:

```bash
bun i
```
