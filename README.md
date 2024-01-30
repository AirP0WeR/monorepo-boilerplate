# Turborepo Next.js 14 Express Winston BUN Prettier Husky TypeCheck ESLint boilerplate

This is an example setup for a full-stack monorepo using [Turborepo](https://turborepo.com) with [Next.js](https://nextjs.org/) and [Express](https://expressjs.com/) compiled with [BUN](https://bun.sh/). Most other Turborepo examples I've seen using Express or other plain TS Apps take a different approach to bundling shared packages.

Most examples like [Turbo kitchen-sink example](https://github.com/vercel/turbo/blob/main/examples/kitchen-sink/packages/logger/package.json) will have `dev` and `build` scripts for each shared package, which then watch the package for any changes and rebuild on each change.

I wanted to to find a way to avoid having a `dev` and `build` step for each package, and simply import the package into the app that needs it, and have the app bundle the package during it's `build` step.

With Next.js 14 we have no problems with Transpile packages, it goes on fly with Next compiler.

Doing this with Express however was not as straight-forward, but you can get it working with a pretty simple setup using [BUN](https://bun.sh/).
```
    bun build --target=bun ./index.ts --outfile ./dist/index.js
```
you can use ```--target=node``` if you will use node to run compiled app.

## Try it out yourself:

Turborepo will run these commands for all packages and apps from the root directory

Install all dependencies for all packages and apps
```bash
bun i
```
Start dev env for both server and front-end
```bash
bun dev
```
Build both server and front-end apps
```bash
bun run build
```
Run both server and front-end apps
```bash
bun start
```
Run to clean all project
```bash
bun clean
```
Run to typecheck all project
```bash
bun typecheck
```
Run to husky install
```bash
bun husky install
```
