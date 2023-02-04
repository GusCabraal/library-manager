// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";
import * as sinon from 'sinon';
import { Model } from 'sequelize';
import Book from '../../src/database/models/Book';

import { app } from "../../src/app";
import { book, books, newBookDB, newBookInput } from "./mocks/books.mock";

describe("Books", () => {
  describe("Adicionando um livro no banco de dados", () => {
    afterEach(() => sinon.restore())

    describe("Quando passa um parametro invalido", () => {
      it("Deve retornar um status 400 e uma mensagem de erro", async () => {
        const { name, ...bookWithoutName } = newBookInput;

        const response = await supertest(app)
          .post("/books")
          .send(bookWithoutName);

        expect(response.status).toEqual(400);
        expect(response.body).toEqual({ message: '"name" is required' });
      });
    });

    describe("Quando registra um livro com sucesso", () => {
      it("Deve retornar um status 201 e o id do novo livro", async () => {
        sinon.stub(Model, 'create').resolves(newBookDB as Book)
        const response = await supertest(app)
          .post("/books")
          .send(newBookInput);

        expect(response.status).toEqual(201);
        expect(response.body).toEqual(newBookDB);
      });
    });
  });

  describe("Fazendo uma busca no banco de dados", () => {
    afterEach(() => sinon.restore())

    describe("Quando busca todos os livros", () => {
      it("Deve retornar um status 200 e uma lista de livros", async () => {
        sinon.stub(Model, 'findAll').resolves(books as Book[])

        const response = await supertest(app)
          .get("/books")

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(books);
      });
    });

    describe("Quando busca pelo id um livro existente no banco de dados", () => {
      it("Deve retornar um status 200 e o livro solicitado", async () => {
        sinon.stub(Model, 'findByPk').resolves(book as Book)
        const response = await supertest(app)
          .get("/books/2")

        expect(response.status).toEqual(200);
        expect(response.body).toEqual(book);
      });
    });

    describe("Quando busca pelo id um livro inexistente no banco de dados", () => {
      it("Deve retornar um status 404 e uma mensagem de erro", async () => {
        sinon.stub(Model, 'findByPk').resolves(null)
        const NOT_FOUND_ID = 1000
        const response = await supertest(app)
          .get(`/books/${NOT_FOUND_ID}`)

        expect(response.status).toEqual(404);
        expect(response.body).toEqual({ message: 'Book not found' });
      });
    });
  });
});
