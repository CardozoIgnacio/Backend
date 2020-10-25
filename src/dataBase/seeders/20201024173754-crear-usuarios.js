"use strict";

module.exports = {
	//Se ejecuta cuando realizamos la "siembra" de los datos
	up: async (queryInterface, Sequelize) => {
		let arryUsuarios = [{
      "usuario": "ndimmne0",
      "nombre": "Nappie",
      "apellido": "Dimmne",
      "password": "p3qIVYLTWBiB",
      "rol": 1
    }, {
      "usuario": "cteager1",
      "nombre": "Chrotoem",
      "apellido": "Teager",
      "password": "15WhCtQ1x6v",
      "rol": 2
    }, {
      "usuario": "hpattenden2",
      "nombre": "Hector",
      "apellido": "Pattenden",
      "password": "4w5apJLM",
      "rol": 3
    }, {
      "usuario": "apettyfar3",
      "nombre": "Angelita",
      "apellido": "Pettyfar",
      "password": "SSReWDATSs",
      "rol": 4
    }, {
      "usuario": "sdownie4",
      "nombre": "Selig",
      "apellido": "Downie",
      "password": "dyfeYjH",
      "rol": 5
    }, {
      "usuario": "plouthe5",
      "nombre": "Paolo",
      "apellido": "Louthe",
      "password": "ShaWU2",
      "rol": 6
    }, {
      "usuario": "ibrakewell6",
      "nombre": "Iona",
      "apellido": "Brakewell",
      "password": "z8502RJU",
      "rol": 7
    }, {
      "usuario": "cstump7",
      "nombre": "Clementia",
      "apellido": "Stump",
      "password": "AtZS3Vei",
      "rol": 8
    }, {
      "usuario": "lbaldam8",
      "nombre": "Louie",
      "apellido": "Baldam",
      "password": "f6pWub",
      "rol": 9
    }, {
      "usuario": "pruf9",
      "nombre": "Pru",
      "apellido": "Ruf",
      "password": "WJgCtrOTcwKZ",
      "rol": 10
    }];
		await queryInterface.bulkInsert("Usuario", arryUsuarios, {});
	},
	// Se ejecuta la momento de "desacer" la siembra
	down: async (queryInterface, Sequelize) => {
    //Al proporcionarle null eliminara todos los usarios
    //Es posible realizar eliminaciones especificas, en vez de 
    //solamente pasar el null, pasar un{ rol:10} de esta manera
    // solo elimina los usuarios con rol 10
		  await queryInterface.bulkDelete("Usuario", null, {});
		
	},
};