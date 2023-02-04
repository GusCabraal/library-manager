// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";
import * as sinon from 'sinon';
import { Model } from 'sequelize';
import Book from '../../src/database/models/Book';

import { app } from "../../src/app";
import { newBookDB, newBookInput } from "./mocks/books.mock";

describe("Books", () => {
  describe("adicionando um livro no banco de dados", () => {
    afterEach(() => sinon.restore())

    describe("quando passa um parametro invalido", () => {
      it("deve retornar um status 400 e uma mensagem de erro", async () => {
        const { name, ...bookWithoutName } = newBookInput;

        const response = await supertest(app)
          .post("/books")
          .send(bookWithoutName);

        expect(response.status).toEqual(400);
        expect(response.body).toEqual({ message: '"name" is required' });
      });
    });
    
    describe("quando registra um livro com sucesso", () => {
      it("deve retornar um status 201 e o id do novo livro", async () => {
        sinon.stub(Model, 'create').resolves(newBookDB as Book)
        const response = await supertest(app).post("/books").send(newBookInput);

        expect(response.status).toEqual(201);
        expect(response.body).toEqual(newBookDB);
      });
    });
  });
});
