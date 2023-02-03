import supertest from 'supertest'
import { app } from '../../src/app'

describe('Books', () => {
  describe('adicionando um livro no banco de dados', () => {
    describe('quando a rota não existe', () => {
      it('deve retornar um status 404', async () => {
        const response = await supertest(app)
          .post('/books')

        expect(response.status).toEqual(404)
      })
    })
  })
})
