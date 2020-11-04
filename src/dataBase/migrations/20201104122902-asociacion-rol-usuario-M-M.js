"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("rolUsuario", {
			idRol: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "Rol",
					key: "idRol",
				},
			},
			idUsuario: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: "Usuario",
					key: "id",
				},
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("rolUsuario");
	},
};
