'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   var noticias=[{
    "tituloNoticia": "Ghosts of Mars",
    "cuerpoNoticia": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    "visibilidad": true
  }, {
    "tituloNoticia": "Girl He Left Behind, The",
    "cuerpoNoticia": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    "visibilidad": false
  }, {
    "tituloNoticia": "Revolution OS",
    "cuerpoNoticia": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "visibilidad": false
  }, {
    "tituloNoticia": "Virus X",
    "cuerpoNoticia": "Quisque id justo sit amet sapien dignissim vestibulum.",
    "visibilidad": true
  }, {
    "tituloNoticia": "Fathers' Day",
    "cuerpoNoticia": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    "visibilidad": true
  }, {
    "tituloNoticia": "Looney Tunes: Back in Action",
    "cuerpoNoticia": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "visibilidad": true
  }, {
    "tituloNoticia": "East is East",
    "cuerpoNoticia": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    "visibilidad": false
  }, {
    "tituloNoticia": "Me Without You",
    "cuerpoNoticia": "Nam tristique tortor eu pede.",
    "visibilidad": true
  }, {
    "tituloNoticia": "Stay Hungry",
    "cuerpoNoticia": "Suspendisse ornare consequat lectus.",
    "visibilidad": true
  }, {
    "tituloNoticia": "Others, The",
    "cuerpoNoticia": "Integer ac neque. Duis bibendum.",
    "visibilidad": false
  }] 
      await queryInterface.bulkInsert('Noticia',noticias 
     , {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Noticia', null, {});
     
  }
};
