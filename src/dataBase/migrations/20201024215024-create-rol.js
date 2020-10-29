'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rol', {
   
      idRol: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allownull:false,
        autoIncrement:true,
      },
      nombreRol: {
        type: Sequelize.STRING
      }
      //TODO:Guardar premisos???
   
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rol');
  }
};