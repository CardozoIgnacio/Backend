'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    var categorias=[{
      "nombreCategoria": "Puertas Abiertas"
    }, {
      "nombreCategoria": "Eventos"
    }, {
      "nombreCategoria": "Informativo"
    }, {
      "nombreCategoria": "Informativo"
    }, {
      "nombreCategoria": "Analisis de sistema"
    }]; 
     await queryInterface.bulkInsert('Categoria',categorias
      ,{});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Categoria', null, {});
  }
};
