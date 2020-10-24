'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlumnoPendientes', {
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
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      numTelefono: {
        type: Sequelize.INTEGER
      },
      abcFormulario: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AlumnoPendientes');
  }
};