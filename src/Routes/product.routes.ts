import { Router } from "express";
import { ProductController } from "../Controller/ProductController";

export const productRouter = Router();
const productController = new ProductController();

productRouter.post("/:id", productController.create);

