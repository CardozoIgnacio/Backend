'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var carrear=[{
      "nombre": "Analista de Sistemas",
      "nombreAbreviado": "A-F",
      "titulo": "Contrucciones navales",
      "resolucion": "lQJ/ii",
      "duracion": "346",
      "horas": "193",
      "tipo": "YHBP",
      "modalidad": "sl3",
      "valida": false
    }, {
      "nombre": "Administacion de PYMES",
      "nombreAbreviado": "J-H",
      "titulo": "Higiene y seguridad en el trabajo",
      "resolucion": "iuf/O8",
      "duracion": "300",
      "horas": "607",
      "tipo": "BGFG",
      "modalidad": "q7l",
      "valida": true
    }, {
      "nombre": "Higiene y seguridad en el trabajo",
      "nombreAbreviado": "G-B",
      "titulo": "Analista de Sistemas",
      "resolucion": "Ipe/wC",
      "duracion": "428",
      "horas": "982",
      "tipo": "EBNZ",
      "modalidad": "6h0",
      "valida": false
    }, {
      "nombre": "Automatizacion y control",
      "nombreAbreviado": "I-Q",
      "titulo": "Contrucciones navales",
      "resolucion": "ZgR/ea",
      "duracion": "184",
      "horas": "712",
      "tipo": "OUMW",
      "modalidad": "wz8",
      "valida": true
    }, {
      "nombre": "Contrucciones navales",
      "nombreAbreviado": "M-A",
      "titulo": "Analista de Sistemas",
      "resolucion": "Fqz/wE",
      "duracion": "048",
      "horas": "899",
      "tipo": "YLVF",
      "modalidad": "0wr",
      "valida": false
    }];

      await queryInterface.bulkInsert('Carrera',carrear  , {});
  },

  down: async (queryInterface, Sequelize) => {
     
      await queryInterface.bulkDelete('Carrera', null, {});
     
  }
};
