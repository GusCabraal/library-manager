import { sayHello } from './arquivo'

describe('say hello', () => {
  describe('quando for passado o parametro "Cabral"', () => {
    it('deve retornar "Hello Cabral!"', () => {
      const result = sayHello('Cabral')
      expect(result).toBe('Hello Cabral')
    })
  })
})
