'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipoTramites', {
      id_tipo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      nombreTramite: {
        type: Sequelize.STRING,
        allowNull:false
      },
 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tipoTramites');
  }
};