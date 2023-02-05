import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        id: 1,
        name: "Dom Casmurro",
        author: "Machado de Assis",
        publishing: "Carambaia",
        releaseYear: 1899,
        numberOfPages: 210,
      },
      {
        id: 2,
        name: "Dom Quixote de la Mancha",
        author: "Miguel de Cervantes",
        publishing: "Francisco de Robles",
        releaseYear: 1605,
        numberOfPages: 1033,
      }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  },
};