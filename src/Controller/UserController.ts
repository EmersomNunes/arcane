import { Request, Response } from "express";
import { sqliteConnection } from "../database/sqlite";
import bcrypt from "bcrypt";
import { AppError } from "../utils/AppError";

export class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password, confirmPassword } = request.body;

      if (password !== confirmPassword) {
        throw new AppError("As senhas não correspondem.", 400);
      }

      const database = await sqliteConnection();

      const checkUserExist = await database.get("SELECT * FROM users WHERE email = ?", [email]);

      if (checkUserExist) {
        throw new AppError("Este e-mail já está sendo usado", 400);
      }

      const allPasswords = await database.all("SELECT password FROM users");
      for (const storedHash of allPasswords) {
        const isMatch = await bcrypt.compare(password, storedHash.password);

        if (isMatch) {
          throw new AppError("Esta senha já está sendo usada", 400);
        };
      }

      const hashPassword = await bcrypt.hash(password, 8);

      await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashPassword]
      );

      response.status(201).send({ message: "Usuário criado com sucesso" });

    } catch (e) {
      response.status(400).send(console.log(e));
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name, email, password, old_password } = request.body;
      const { id } = request.params;

      const database = await sqliteConnection();

      const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

      if (!user) {
        throw new AppError("Usuário não encontrado", 404);
      };

      user.name = name ?? user.name;
      user.email = email ?? user.email;

      if (password && !old_password) {
        throw new AppError("Você precisa informar a senha antiga para definir uma nova senha", 404);
      }

      if (password && old_password) {
        const comparePassword = await bcrypt.compare(old_password, user.password);

        if (!comparePassword) {
          throw new AppError("A senha antiga está incorreta", 400);
        };

        user.password = await bcrypt.hash(password, 8);
      }

      await database.run(`
        UPDATE users SET 
        name = ?, 
        email = ?, 
        password = ?, 
        updated_at = DATETIME('now')
        WHERE id = ?`,
        [user.name, user.email, user.password, id]
      );

      return response.json("Usuário Atualizado com sucesso!");

    } catch (e) {
      if (e instanceof AppError) {
        return response.status(e.statusCode).json({ status: 'error', message: e.message });
      };
    };
  }
}