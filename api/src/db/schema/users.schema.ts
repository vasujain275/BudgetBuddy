import { sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { text, sqliteTable, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  username: text("username").unique(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email").unique(),
  password: text("password"),
  balance: real("balance").default(0),
  budget: real("budget").default(0),
  create_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});
