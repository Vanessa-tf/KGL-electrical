import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Read directly (not via env()) so `prisma generate` works at build time
    // before DATABASE_URL is set; commands that hit the DB still need it.
    url: process.env.DATABASE_URL ?? "",
  },
});
