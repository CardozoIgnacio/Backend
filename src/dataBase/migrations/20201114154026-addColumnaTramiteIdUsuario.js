'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.addColumn('Tramite',"idUsuario",{
        type:Sequelize.INTEGER,
        references:{
          model:"Usuario",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      });
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.removeColumn('Tramite',"idUsuario");
  }
};
