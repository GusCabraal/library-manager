// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";
import * as sinon from 'sinon';
import { Model } from 'sequelize';
import Book from '../../src/database/models/Book';

import { app } from "../../src/app";
import { book, books, invalidUpdate, newBookDB, newBookInput, validBookUpdate } from "./mocks/books.mock";

describe("Books", () => {
  describe("Adicionando um livro no banco de dados", () => {
    afterEach(() => sinon.restore())
    
    describe("Quando registra um livro com sucesso", () => {
      it("Deve retornar um status 201 e o id do novo livro", async () => {
        sinon.stub(Model, 'findOne').resolves(null)
        sinon.stub(Model, 'create').resolves(newBookDB as Book)
        const response = await supertest(app)
          .post("/books")
          .send(newBookInput);

        expect(response.status).toEqual(201);
        expect(response.body).toEqual(newBookDB);
      });
    });

    describe("Quando tento cadastrar um livro ja existendo no DB", () => {
      it("Deve retornar um status 409 e uma mensagem de erro", async () => {
        sinon.stub(Model, 'findOne').resolves(newBookDB as Book)
        const response = await supertest(app)
          .post("/books")
          .send(newBookInput);

        expect(response.status).toEqual(409);
        expect(response.body).toEqual({ message: "Book already exists" });
      });
    });
    
    describe("Quando passa um parâmetro inválido", () => {
      it("Deve retornar um status 400 e uma mensagem de erro", async () => {
        const { name, ...bookWithoutName } = newBookInput;

        const response = await supertest(app)
          .post("/books")
          .send(bookWithoutName);

        expect(response.status).toEqual(400);
        expect(response.body).toEqual({ message: '"name" is required' });
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

    describe("Quando busca pelo id de um livro existente no banco de dados", () => {
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

  describe("Editando um livro no banco de dados", () => {
    afterEach(() => sinon.restore())

    describe("Quando edita um livro com sucesso", () => {
      it("Deve retornar status 204", async () => {
        sinon.stub(Model, 'update').resolves([1])

        const response = await supertest(app)
          .put("/books/1")
          .send(validBookUpdate)

        expect(response.status).toEqual(204);
      });
    });
    
    describe("Quando tenta editar um livro com dados invalidos", () => {
      it("Deve retornar um status 400 e uma mensagem de erro", async () => {
        sinon.stub(Model, 'update').resolves([0])
        
        const response = await supertest(app)
        .put(`/books/1`)
        .send(invalidUpdate)
        
        expect(response.status).toEqual(400);
        expect(response.body).toEqual({ message: "\"releaseYear\" must be a number" });
      });
    });

    describe("Quando tenta editar um livro inexistente no banco de dados", () => {
      it("Deve retornar um status 404 e uma mensagem de erro", async () => {
        const NOT_FOUND_ID = 1000
        sinon.stub(Model, 'update').resolves([0])
        
        const response = await supertest(app)
          .put(`/books/${NOT_FOUND_ID}`)
          .send(validBookUpdate)

        expect(response.status).toEqual(404);
        expect(response.body).toEqual({ message: 'Book not found' });
      });
    });
  });

  describe("Removendo um livro do banco de dados", () => {
    afterEach(() => sinon.restore())

    describe("Quando remove um livro com sucesso", () => {
      it("Deve retornar status 204", async () => {
        sinon.stub(Model, 'destroy').resolves(1)

        const response = await supertest(app)
          .delete("/books/1")

        expect(response.status).toEqual(204);
      });
    });

    describe("Quando tenta remover um livro inexistente no banco de dados", () => {
      it("Deve retornar um status 404 e uma mensagem de erro", async () => {
        const NOT_FOUND_ID = 1000
        sinon.stub(Model, 'destroy').resolves(0)
        
        const response = await supertest(app)
          .delete(`/books/${NOT_FOUND_ID}`)

        expect(response.status).toEqual(404);
        expect(response.body).toEqual({ message: 'Book not found' });
      });
    });
  });
});
