"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("CategoriaNoticia", {
			idNoticia: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: "Noticia",
					key: "idNoticia",
        }
      },
				idCategoria: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					references: {
						model: "Categoria",
						key: "idCategoria",
					},
				},
			
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("CategoriaNoticia");
	},
};
