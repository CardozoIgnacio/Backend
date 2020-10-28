"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let materias =[{
			"nombreProfesor": "Zane Anten",
			"cargaHoraria": 400,
			"contenido": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
			"dias": "lunes"
		  }, {
			"nombreProfesor": "Zarla Humber",
			"cargaHoraria": 500,
			"contenido": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
			"dias": "martes"
		  }, {
			"nombreProfesor": "Serene Trimble",
			"cargaHoraria": 500,
			"contenido": "Vestibulum ac est lacinia nisi venenatis tristique.",
			"dias": "viernes"
		  }, {
			"nombreProfesor": "Cosmo Bignall",
			"cargaHoraria": 300,
			"contenido": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
			"dias": "lunes"
		  }, {
			"nombreProfesor": "Jena Elman",
			"cargaHoraria": 500,
			"contenido": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
			"dias": "lunes"
		  }, {
			"nombreProfesor": "Paulie Celle",
			"cargaHoraria": 500,
			"contenido": "Proin risus. Praesent lectus.",
			"dias": "martes"
		  }, {
			"nombreProfesor": "Alic Warcup",
			"cargaHoraria": 500,
			"contenido": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
			"dias": "jueves"
		  }, {
			"nombreProfesor": "Domenic Raccio",
			"cargaHoraria": 300,
			"contenido": "Ut at dolor quis odio consequat varius.",
			"dias": "viernes"
		  }, {
			"nombreProfesor": "Hartwell Helgass",
			"cargaHoraria": 500,
			"contenido": "Duis aliquam convallis nunc.",
			"dias": "miercoles"
		  }, {
			"nombreProfesor": "Berky Glaister",
			"cargaHoraria": 300,
			"contenido": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
			"dias": "lunes"
		  }]
		await queryInterface.bulkInsert("Materia", materias, {});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 */
		await queryInterface.bulkDelete("Materia", null, {});
	},
};
