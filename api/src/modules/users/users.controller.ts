import { FastifyReply, FastifyRequest } from "fastify";
import { hashPassword } from "../../utils/password";
import { db } from "../../db";
import { usersTable } from "../../db/schema/users.schema";
import { CreateUserInput } from "./users.schema";
import { createdUser } from "../../utils/types";
import { sql } from "drizzle-orm";

async function createUserHandler(
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) {
  const { username, firstName, lastName, email, password } = request.body;
  try {
    const hashedPassword = await hashPassword(password);

    const user: createdUser = await db
      .insert(usersTable)
      .values({
        username,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      })
      .returning({
        id: usersTable.id,
        username: usersTable.username,
        email: usersTable.email,
      })
      .then((result) => result[0]);

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const refreshToken = request.jwt.sign({ id: user.id });
    const accessToken = request.jwt.sign(payload);

    await db
      .update(usersTable)
      .set({
        refreshToken: refreshToken,
      })
      .where(sql`${usersTable.id} = ${user.id}`);

    reply.setCookie("accessToken", accessToken, {
      path: "/",
      httpOnly: true,
      secure: true,
    });

    reply.setCookie("refreshToken", refreshToken, {
      path: "/",
      httpOnly: true,
      secure: true,
    });

    reply.code(201).send("User created and logged in Succesfully!");
  } catch (e) {
    console.log(e);
    reply.code(500).send({
      message: "Error Creating the User",
      error: e,
    });
  }
}

export { createUserHandler };
