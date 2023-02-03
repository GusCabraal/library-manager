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
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  },
};