'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('FotoNoticia',
       { 
         idFotos:{
           type:Sequelize.INTEGER,
           primaryKey:true,
           references:{
            model:'Foto',
            key:'idFotos'
          } 
         },
         idNoticia :{
          type:Sequelize.INTEGER,
          primaryKey:true,
          references:{
            model:'Noticia',
            key:'idNoticia'
          } 
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('FotoNoticia');
  }
};
