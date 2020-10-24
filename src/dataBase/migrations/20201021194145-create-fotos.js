'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Foto', {   
      ruta: {
        type: Sequelize.STRING,
        allowNull:false

      },
      idFotos: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Foto');
  }
};