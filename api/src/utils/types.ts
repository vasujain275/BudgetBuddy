import { JWT } from "@fastify/jwt";

declare module "fastify" {
  interface FastifyRequest {
    jwt: JWT;
  }
}

export interface createdUser {
  id: string | null;
  username: string | null;
  email: string | null;
}
