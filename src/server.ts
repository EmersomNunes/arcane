import express from "express";
import { routes } from "./Routes";
import { migrationsRun } from "./database/sqlite/migrations";

migrationsRun();

const app = express();
app.use(express.json());

app.use(routes);

const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));