import { FastifyReply, FastifyRequest } from "fastify";
import { hashPassword } from "../../utils/password";
import { db } from "../../db";
import { usersTable } from "../../db/schema/users.schema";
import { CreateUserInput } from "./users.schema";

async function createUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const { username, firstName, lastName, email, password } = request.body;
  try {
    const hashedPassword = await hashPassword(password);
    await db.insert(usersTable).values({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    reply.code(201).send("User Created Succesfully!");
  } catch (e) {
    reply.code(500).send({
      message: "Error Creating the User",
      error: e,
    });
  }
}

export { createUserHandler };
