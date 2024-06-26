import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./Routes";
import { migrationsRun } from "./database/sqlite/migrations";
import { AppError } from "./utils/AppError";
import cors from "cors";

migrationsRun();

const app = express();
app.use(cors());
app.use(express.json());

app.use((error: AppError, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

app.use(routes);

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));