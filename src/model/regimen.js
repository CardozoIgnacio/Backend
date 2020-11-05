"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class regimen extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	regimen.init(
		{
			idRegimen: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			freezeTableName:true,
			modelName: "Regimen",
		}
	);
	return regimen;
};
