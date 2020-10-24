'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categorias', {
      idCategoria: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreCategoria: {
        type: Sequelize.STRING
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categorias');
  }
};