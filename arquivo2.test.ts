import { sayGoodBye } from './arquivo2'

describe('say good bye', () => {
  describe('quando for passado o parametro "Cabral"', () => {
    it('deve retornar "Good bye Cabral"', () => {
      const result = sayGoodBye('Cabral')
      expect(result).toBe('Good bye Cabral')
    })
  })
})
