import Fastify from "fastify";
import { userSchemas } from "./modules/users/users.schema";
import { usersRoutes } from "./modules/users/users.route";
export function buildserver() {
  const server = Fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  });

  for (const schema of [...userSchemas]) {
    server.addSchema(schema);
  }

  server.get("/v1/healthcheck", async () => ({ status: "ok" }));

  server.register(usersRoutes, { prefix: "v1/users" });
  return server;
}
