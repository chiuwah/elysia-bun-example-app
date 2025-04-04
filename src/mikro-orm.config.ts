import { defineConfig } from "@mikro-orm/libsql";

export default defineConfig({
	dbName: "db/db.sqlite",
	entities: ["src/entities"],
});
