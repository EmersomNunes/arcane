import { Router } from "express";
import { userRouter } from "./user.routes";
import { productRouter } from "./product.routes";

export const routes = Router();

routes.use("/api/users", userRouter);
routes.use("/api/products", productRouter);