import { FastifyInstance } from "fastify";
import { createUserHandler } from "./users.controller";
import { $ref } from "./users.schema";

export async function usersRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createUsersSchema"),
      },
    },
    createUserHandler
  );
}
