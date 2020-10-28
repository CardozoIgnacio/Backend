'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tramite', {
      idTramite: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipoTramite: {
        type: Sequelize.STRING
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      fechaFinalizacion: {
        type: Sequelize.DATE
      },
      token:{
        type: Sequelize.STRING
      }
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tramite');
  }
};