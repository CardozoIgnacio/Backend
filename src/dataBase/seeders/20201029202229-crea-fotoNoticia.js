'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      var fotoNoticia=[{
        idFotos:1,
        idNoticia:1
      }]
      await queryInterface.bulkInsert('fotoNoticia',fotoNoticia , {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('fotoNoticia', null, {});
  }
};
