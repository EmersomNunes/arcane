import { Request, Response } from "express";
import { sqliteConnection } from "../database/sqlite";
import bcrypt from "bcrypt";

export class UserController {
  async create(request: Request, response: Response) {
    try {
      const { name, email, password, confirmPassword } = request.body;

      if (password !== confirmPassword) {
        throw new Error("As senhas não correspondem.");
    }

      const database = await sqliteConnection();

      const checkUserExist = await database.get("SELECT * FROM users WHERE email = ?", [email]);

      if (checkUserExist) {
        throw new Error("Este e-mail já está sendo usado");
      }

      const allPasswords = await database.all("SELECT password FROM users");
      for (const storedHash of allPasswords) {
        const isMatch = await bcrypt.compare(password, storedHash.password);

        if (isMatch) {
          throw new Error("Esta senha já está sendo usada");
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
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();

    const user = await database.get("SELECT * FROM users WHERE id = ?", [id]);

    if(!user) {
      throw new Error("Usuário não encontrado");
    };

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if(password &&  !old_password) {
      throw new Error("Você precisa informar a senha antiga para definir uma nova senha");
    };
  }
}