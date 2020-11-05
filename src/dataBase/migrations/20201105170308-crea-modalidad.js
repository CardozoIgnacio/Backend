'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Modalidad', 
      { 
        idModalidad: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Modalidad');
  }
};
