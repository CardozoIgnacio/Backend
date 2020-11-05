"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class rolUsuario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	rolUsuario.init(
		{
			idRol: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
					model: sequelize.Rol,
					key: "idRol",
				},
			},
			idUsuario: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				references: {
					model: sequelize.Usuario,
					key: "id",
				},
			},
		},
		{
			sequelize,
			modelName: "RolUsuario",
		}
	);
	return rolUsuario;
};
