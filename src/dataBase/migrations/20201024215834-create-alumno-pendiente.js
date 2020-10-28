'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlumnoPendiente', {
      nroPreinscripcion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fotoCarnet: {
        type: Sequelize.BOOLEAN
      },
      certificadoSalud: {
        type: Sequelize.BOOLEAN
      },
      fotocopiaDni: {
        type: Sequelize.BOOLEAN
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      fechaNac: {
        type: Sequelize.DATE
      },
      dni: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      numTelefono: {
        type: Sequelize.BIGINT
      },
      abcFormulario: {
        type: Sequelize.BOOLEAN
      },
 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AlumnoPendiente');
  }
};