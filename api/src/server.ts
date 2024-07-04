import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from "@fastify/jwt";
import fcookie from "@fastify/cookie";
import { userSchemas } from "./modules/users/users.schema";
import { usersRoutes } from "./modules/users/users.route";
import { COOKIE_SECRET_KEY, JWT_SECRET_KEY } from "./utils/constants";

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

  server.register(fjwt, {
    secret: JWT_SECRET_KEY,
  });

  server.addHook(
    "preHandler",
    (req: FastifyRequest, reply: FastifyReply, next) => {
      req.jwt = server.jwt;
      return next();
    }
  );

  server.register(fcookie, {
    secret: COOKIE_SECRET_KEY,
  });

  server.get("/v1/healthcheck", async () => ({ status: "ok" }));

  server.register(usersRoutes, { prefix: "v1/users" });
  return server;
}
