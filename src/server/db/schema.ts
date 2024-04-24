import { sql } from "drizzle-orm";
import {
  boolean,
  pgTableCreator,
  serial,
  timestamp,
  varchar
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `kamaa_${name}`);

export const startups = createTable("startup", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  ownerId: varchar("ownerId", { length: 256 }),
  phone: varchar("phone", { length: 256 }),
  email: varchar("email", { length: 256 }),
  documentName: varchar("documentName", { length: 256 }),
  documentFile: varchar("documentFile", { length: 256 }),
  isVerified: boolean("isVerified").default(false)
});

export const investors = createTable("investor", {
  id: serial("id").primaryKey(),
  investorId: varchar("investorId", {length: 256}),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  phone: varchar("phone", { length: 256 }),
  email: varchar("email", { length: 256 }),
  documentName: varchar("documentName", { length: 256 }),
  documentFile: varchar("documentFile", { length: 256 }),
  isVerified: boolean("isVerified").default(false)
});
