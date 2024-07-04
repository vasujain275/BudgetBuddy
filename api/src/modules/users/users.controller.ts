import { FastifyReply, FastifyRequest } from "fastify";
import { hashPassword, verifyPassword } from "../../utils/password";
import { db } from "../../db";
import { usersTable } from "../../db/schema/users.schema";
import { CreateUserInput, LoginUserInput } from "./users.schema";
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
        password: usersTable.password,
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

    return reply.code(201).send({
      message: "User created and logged in Succesfully!",
    });
  } catch (e) {
    reply.code(500).send({
      message: "Error Creating the User",
      error: e,
    });
  }
}

async function loginUserHandler(
  request: FastifyRequest<{
    Body: LoginUserInput;
  }>,
  reply: FastifyReply
) {
  const { email, password } = request.body;
  try {
    const user: createdUser = await db
      .select({
        id: usersTable.id,
        username: usersTable.username,
        email: usersTable.email,
        password: usersTable.password,
      })
      .from(usersTable)
      .where(sql`${usersTable.email} = ${email.toLowerCase()}`)
      .then((result) => result[0]);

    let isMatch;

    if (user.password) {
      isMatch = await verifyPassword(user.password, password);
    }

    if (!user || !isMatch) {
      return reply.code(401).send({
        message: "Invalid email or password",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const refreshToken = request.jwt.sign({ id: user.id });
    const accessToken = request.jwt.sign(payload);

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

    return reply.code(201).send({
      message: "User logged in Succesfully!",
    });
  } catch (e) {
    reply.code(500).send({
      message: "Error Creating the User",
      error: e,
    });
  }
}

export { createUserHandler, loginUserHandler };
