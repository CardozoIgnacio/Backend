"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Materia", {
			idMateria: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombreProfesor: {
				type: Sequelize.STRING,
			},
			cargaHoraria: {
				type: Sequelize.INTEGER,
			},
			contenido: {
				type: Sequelize.STRING,
			},
			dias: {
				type: Sequelize.STRING,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Materia");
	},
};
