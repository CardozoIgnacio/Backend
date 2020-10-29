"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		var fotos = [
			{
				ruta: "http://dummyimage.com/113x246.png/cc0000/ffffff",
			},
			{
				ruta: "http://dummyimage.com/156x149.bmp/cc0000/ffffff",
			},
			{
				ruta: "http://dummyimage.com/136x178.jpg/5fa2dd/ffffff",
			},
			{
				ruta: "http://dummyimage.com/244x158.png/5fa2dd/ffffff",
			},
			{
				ruta: "http://dummyimage.com/162x105.jpg/dddddd/000000",
			},
			{
				ruta: "http://dummyimage.com/139x216.png/ff4444/ffffff",
			},
			{
				ruta: "http://dummyimage.com/107x108.jpg/cc0000/ffffff",
			},
			{
				ruta: "http://dummyimage.com/169x132.png/cc0000/ffffff",
			},
			{
				ruta: "http://dummyimage.com/171x142.bmp/5fa2dd/ffffff",
			},
			{
				ruta: "http://dummyimage.com/111x190.bmp/ff4444/ffffff",
			},
		];
		await queryInterface.bulkInsert("Foto", fotos, {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Foto", null, {});
	},
};
