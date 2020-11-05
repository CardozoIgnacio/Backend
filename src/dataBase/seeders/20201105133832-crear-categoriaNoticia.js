'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   var catNot=[{
     idNoticia:1,
     idCategoria:2
   }]
     await queryInterface.bulkInsert('CategoriaNoticia',catNot , {});
  }, 

  down: async (queryInterface, Sequelize) => {
     
      await queryInterface.bulkDelete('CategoriaNoticia', null, {});
  }
};
