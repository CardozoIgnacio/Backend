"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class tipoTramite extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	tipoTramite.init(
		{
			idTipoTramite: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			nombreTipoTramite: {
				type: DataTypes.STRING,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
		},
		{
			sequelize,
			freezeTableName:true,
			modelName: "tipoTramite",
		}
	);
	return tipoTramite;
};
