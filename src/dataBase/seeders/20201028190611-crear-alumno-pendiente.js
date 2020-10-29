'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var alumnoPendiente=[{
      "fotoCarnet": false,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Blaine",
      "apellido": "Woodus",
      "fechaNac": "27/9/2010",
      "dni": "9999864627",
      "email": "bwoodus0@angelfire.com",
      "direccion": "6387 Walton Junction",
      "numTelefono": "4626620458",
      "abcFormulario": true
    }, {
      "fotoCarnet": true,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Alley",
      "apellido": "Vanyutin",
      "fechaNac": "3/6/1996",
      "dni": "2045547000",
      "email": "avanyutin1@symantec.com",
      "direccion": "25007 Susan Junction",
      "numTelefono": "8734470093",
      "abcFormulario": true
    }, {
      "fotoCarnet": true,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Ellery",
      "apellido": "Hewins",
      "fechaNac": "5/4/2013",
      "dni": "0611199548",
      "email": "ehewins2@ovh.net",
      "direccion": "4828 Cambridge Avenue",
      "numTelefono": "2849000736",
      "abcFormulario": false
    }, {
      "fotoCarnet": false,
      "certificadoSalud": false,
      "fotocopiaDni": true,
      "nombre": "Lesya",
      "apellido": "Haddleton",
      "fechaNac": "30/4/2012",
      "dni": "2987561806",
      "email": "lhaddleton3@google.de",
      "direccion": "34 Bay Alley",
      "numTelefono": "7959362206",
      "abcFormulario": false
    }, {
      "fotoCarnet": true,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Nelli",
      "apellido": "Zute",
      "fechaNac": "10/11/2002",
      "dni": "6532379956",
      "email": "nzute4@lycos.com",
      "direccion": "8859 Rowland Trail",
      "numTelefono": "4349132657",
      "abcFormulario": true
    }, {
      "fotoCarnet": false,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Margaret",
      "apellido": "Stallworth",
      "fechaNac": "7/5/2000",
      "dni": "3932743938",
      "email": "mstallworth5@reference.com",
      "direccion": "024 Rusk Parkway",
      "numTelefono": "8402821595",
      "abcFormulario": true
    }, {
      "fotoCarnet": false,
      "certificadoSalud": false,
      "fotocopiaDni": false,
      "nombre": "Nathalia",
      "apellido": "Taffrey",
      "fechaNac": "27/11/2012",
      "dni": "6082109597",
      "email": "ntaffrey6@nationalgeographic.com",
      "direccion": "8593 Monterey Park",
      "numTelefono": "2633125745",
      "abcFormulario": true
    }, {
      "fotoCarnet": false,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Helli",
      "apellido": "Maypole",
      "fechaNac": "17/2/1994",
      "dni": "3723517188",
      "email": "hmaypole7@mashable.com",
      "direccion": "0 Sommers Parkway",
      "numTelefono": "5613122801",
      "abcFormulario": false
    }, {
      "fotoCarnet": true,
      "certificadoSalud": true,
      "fotocopiaDni": true,
      "nombre": "Gwenore",
      "apellido": "La Croce",
      "fechaNac": "15/9/2000",
      "dni": "0618979344",
      "email": "glacroce8@stumbleupon.com",
      "direccion": "71 Bartelt Crossing",
      "numTelefono": "9918847333",
      "abcFormulario": false
    }, {
      "fotoCarnet": false,
      "certificadoSalud": true,
      "fotocopiaDni": false,
      "nombre": "Arron",
      "apellido": "Gealy",
      "fechaNac": "3/11/2009",
      "dni": "6912090729",
      "email": "agealy9@patch.com",
      "direccion": "90 Messerschmidt Avenue",
      "numTelefono": "1107147944",
      "abcFormulario": true
    }]
      await queryInterface.bulkInsert('AlumnoPendiente',alumnoPendiente, {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('AlumnoPendiente', null, {});
  }
};
