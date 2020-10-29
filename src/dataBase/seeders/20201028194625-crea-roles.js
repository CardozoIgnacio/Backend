'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var rol=[{
      "nombreRol": "Directivo"
    }, {
      "nombreRol": "Administrativo"
    }, {
      "nombreRol": "UsuarioRegistrado"
    }, {
      "nombreRol": "AdministradorPagina"
    }]
      await queryInterface.bulkInsert('Rol',rol 
     , {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Rol', null, {});
  }
};
