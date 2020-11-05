'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var modalidad=[{
      nombre:"Presencial"
    },{
      nombre:"Semi-Presencial"
    },
    {
      nombre:"Distancia"
    }
  ]
      await queryInterface.bulkInsert('Modalidad', modalidad
      , {});
    
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Modalidad', null, {});
    
  }
};
