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
      console.log("Executing schema:", schema);
      await db.exec(schema);
      console.log("Schema executed successfully.");
    }
  } catch (error) {
    console.error("Error executing schemas:", error);
  }
}
