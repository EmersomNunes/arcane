import { Request, Response } from "express";
import { sqliteConnection } from "../database/sqlite";
import { AppError } from "../utils/AppError";

export class ProductController {
  async create(request: Request, response: Response) {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();

    const productExists = await database.get(`
    SELECT * FROM products WHERE name = ? AND user_id = ?`,
      [name, id]
    );

    if (productExists) {
      throw new AppError("Este produto já está cadastrado", 400);
    };

    await database.run(`INSERT INTO products
     (name, price, quantity, user_id)
      VALUES (?, ?, ?, ?)`,
      [name, price, quantity, id]
    );

    return response.json("Produto cadastrado com sucesso")
  }
}