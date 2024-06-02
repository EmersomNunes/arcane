import { Request, Response } from "express";
import { sqliteConnection } from "../database/sqlite";
import { AppError } from "../utils/AppError";

export class ProductController {
  async create(request: Request, response: Response) {
    const { name, price, quantity, image } = request.body;

    const database = await sqliteConnection();

    const productExists = await database.get(`
    SELECT * FROM products WHERE name = ?`,
      [name]
    );

    if (productExists) {
      throw new AppError("Este produto já está cadastrado", 400);
    };

    await database.run(`INSERT INTO products
     (name, price, quantity, image)
      VALUES (?, ?, ?, ?)`,
      [name, price, quantity, image]
    );

    return response.json("Produto cadastrado com sucesso");
  }

  async index(request: Request, response: Response) {
    try {
      const database = await sqliteConnection();

      const products = await database.all("SELECT name, price, id, image FROM products");

      response.json(products);
    } catch (e) {
      if (e instanceof AppError) {
        response.status(e.statusCode).json(e.message);
      }
    };
  }

  async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const database = await sqliteConnection();

      const product = await database.get("SELECT name, price, quantity FROM products WHERE id = ?", [id]);

      response.json(product);
    } catch (e) {
      if (e instanceof AppError) {
        response.status(e.statusCode).json(e.message);
      }
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { quantity, price } = request.body;
      const { id } = request.params;

      const database = await sqliteConnection();

      const product = await database.get("SELECT quantity, price FROM products WHERE id = ?", [id]);

      if (!product) {
        throw new AppError("Produto não encontrado", 404);
      }

      product.price = price ?? product.price;
      product.quantity = quantity ?? product.quantity;

      await database.run(`
      UPDATE products SET
      quantity = ?,
      price = ?,
      updated_at = DATETIME("now", "-03:00")
      WHERE id = ?`,
        [product.quantity, product.price, id]
      );

      return response.json("Produto atualizado com sucesso.");
    } catch (e) {
      if (e instanceof AppError) {
        response.status(e.statusCode).json(e.message);
      }
    };
  }
}