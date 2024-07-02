import { createId } from "@paralleldrive/cuid2";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").unique(),
});
