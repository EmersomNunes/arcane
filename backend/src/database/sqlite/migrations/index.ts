import { sqliteConnection } from "..";
import { createUsers } from "./createUsers";
import { createProducts } from "./createProducts";

export async function migrationsRun() {
  const schemas = [
    createUsers,
    createProducts
  ];

  try {
    const db = await sqliteConnection();
    for (const schema of schemas) {
      await db.exec(schema);
    }
  } catch (error) {
    console.error("Error executing schemas:", error);
  }
}
