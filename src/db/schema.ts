import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  source: text("source").notNull().default("website"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
