# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# install all dependencies
FROM base AS install
COPY . .
RUN bun install --ignore-scripts

ENV NODE_ENV=production

RUN cd /usr/src/app/apps/worker && bun run build
# RUN cd /usr/src/app/apps/worker/dist && bun run index.js

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /usr/src/app/apps/worker/dist/index.js .
COPY --from=install /usr/src/app/apps/worker/package.json .

# run the app
ENV WORKER_PORT=9000
USER bun
EXPOSE 9000/tcp
ENTRYPOINT [ "bun", "run", "index.js" ]
