import { sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { text, sqliteTable, real, integer } from "drizzle-orm/sqlite-core";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "..";

export const usersTable = sqliteTable("users", {
  id: text("id").primaryKey(),
  username: text("username").unique(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email").unique(),
  password_hash: text("password"),
  balance: real("balance").default(0),
  budget: real("budget").default(0),
  refreshToken: text("refreshToken"),
  created_at: text("timestamp").default(sql`(current_timestamp)`)
});

export const sessionTable = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  expiresAt: integer("expires_at").notNull()
});

export const adapter = new DrizzleSQLiteAdapter(db, sessionTable, usersTable);
