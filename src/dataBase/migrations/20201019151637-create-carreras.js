'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carrera', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nombre: {
        type: Sequelize.STRING
      },
      nombreAbreviado: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      resolucion: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      horas: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      modalidad: {
        type: Sequelize.STRING
      },
      valida: {
        type: Sequelize.BOOLEAN
      }
  
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carrera');
  }
};