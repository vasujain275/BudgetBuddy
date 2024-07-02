import Fastify from "fastify";
export function buildserver() {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  });

  server.get("/v1/healthcheck", async () => ({ status: "ok" }));
  return server;
}
