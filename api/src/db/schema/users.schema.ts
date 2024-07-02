import { text, sqliteTable } from "drizzle-orm/sqlite-core";

const users = sqliteTable("users", {
  id: text("id"),
});
