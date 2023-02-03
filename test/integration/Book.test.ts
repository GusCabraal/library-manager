// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";

import { app } from "../../src/app";
import { newBook } from "./mocks/books.mock";

describe("Books", () => {
  describe("adicionando um livro no banco de dados", () => {
    describe("quando passa um parametro invalido", () => {
      it("deve retornar um status 400 e uma mensagem de erro", async () => {
        const { name, ...bookWithoutName } = newBook;

        const response = await supertest(app)
          .post("/books")
          .send(bookWithoutName);

        expect(response.status).toEqual(400);
        expect(response.body).toEqual({ message: '"name" is required' });
      });
    });
  });
});
