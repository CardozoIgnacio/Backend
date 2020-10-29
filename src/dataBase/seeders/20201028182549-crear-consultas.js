'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var consultas =[{
      "email": "iorehead0@reuters.com",
      "nombre": "Irv Orehead",
      "consulta": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
    }, {
      "email": "mwindibank1@nature.com",
      "nombre": "Megen Windibank",
      "consulta": "Vivamus vestibulum sagittis sapien."
    }, {
      "email": "dbabon2@issuu.com",
      "nombre": "Delmore Babon",
      "consulta": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
    }, {
      "email": "ehoyte3@wiley.com",
      "nombre": "Englebert Hoyte",
      "consulta": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    }, {
      "email": "hconford4@blinklist.com",
      "nombre": "Halette Conford",
      "consulta": "Donec ut dolor."
    }, {
      "email": "ekennedy5@ezinearticles.com",
      "nombre": "Eugenio Kennedy",
      "consulta": "Aliquam erat volutpat. In congue."
    }, {
      "email": "jkalinowsky6@jalbum.net",
      "nombre": "Josi Kalinowsky",
      "consulta": "Etiam faucibus cursus urna. Ut tellus."
    }, {
      "email": "bratnege7@vimeo.com",
      "nombre": "Boyd Ratnege",
      "consulta": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy."
    }, {
      "email": "mgermann8@liveinternet.ru",
      "nombre": "Margaux Germann",
      "consulta": "Aliquam sit amet diam in magna bibendum imperdiet."
    }, {
      "email": "ggrigson9@studiopress.com",
      "nombre": "Gilemette Grigson",
      "consulta": "In blandit ultrices enim."
    }]
      await queryInterface.bulkInsert('ConsultaFormulario',consultas,{} )
  },
  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('ConsultaFormulario', null, {});
  }
};
