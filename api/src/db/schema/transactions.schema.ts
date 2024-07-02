import { sql } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2";
import { text, sqliteTable, real } from "drizzle-orm/sqlite-core";

export const transations = sqliteTable("transactions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name"),
  amount: real("amount").default(0),
  create_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});
