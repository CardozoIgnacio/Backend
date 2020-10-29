'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var tramites=[{
      "tipoTramite": "ConsultaVarias",
      "fechaInicio": "06/02/2020",
      "estado": true,
      "fechaFinalizacion": "21/07/2020",
      "token": "0318104466"
    }, {
      "tipoTramite": "HistorialAcademico",
      "fechaInicio": "29/10/2019",
      "estado": true,
      "fechaFinalizacion": "06/08/2020",
      "token": "6312465969"
    }, {
      "tipoTramite": "ConsultaVarias",
      "fechaInicio": "08/07/2020",
      "estado": true,
      "fechaFinalizacion": "13/05/2020",
      "token": "9866961761"
    }, {
      "tipoTramite": "ConstanciaAlumnoRegular",
      "fechaInicio": "21/06/2020",
      "estado": false,
      "fechaFinalizacion": "10/12/2019",
      "token": "5773286068"
    }, {
      "tipoTramite": "InscripcionMateria",
      "fechaInicio": "21/08/2020",
      "estado": false,
      "fechaFinalizacion": "17/09/2020",
      "token": "6597434161"
    }, {
      "tipoTramite": "ConstanciaAlumnoRegular",
      "fechaInicio": "09/02/2020",
      "estado": false,
      "fechaFinalizacion": "18/10/2020",
      "token": "7213505750"
    }, {
      "tipoTramite": "InscripcionMateria",
      "fechaInicio": "16/06/2020",
      "estado": true,
      "fechaFinalizacion": "19/07/2020",
      "token": "1957941367"
    }, {
      "tipoTramite": "ConsultaVarias",
      "fechaInicio": "26/08/2020",
      "estado": false,
      "fechaFinalizacion": "27/03/2020",
      "token": "9932050776"
    }, {
      "tipoTramite": "ConstanciaAlumnoRegular",
      "fechaInicio": "05/05/2020",
      "estado": true,
      "fechaFinalizacion": "29/10/2019",
      "token": "7407177996"
    }, {
      "tipoTramite": "ConstanciaAlumnoRegular",
      "fechaInicio": "12/07/2020",
      "estado": true,
      "fechaFinalizacion": "02/07/2020",
      "token": "5377181549"
    }]
      await queryInterface.bulkInsert('Tramite',tramites, 
      {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Tramite', null, {});
     
  }
};
