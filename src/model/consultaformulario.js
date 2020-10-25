"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ConsultaFormulario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	ConsultaFormulario.init(
		{
			idConsulta: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
        autoIncrement: true,
			},
			email: DataTypes.STRING,
			nombre: DataTypes.STRING,
			consulta: DataTypes.STRING,
		},
		{
			sequelize,
      modelName: "ConsultaFormulario",
      timestamps:false,
      freezeTableName:true
		}
	);
	return ConsultaFormulario;
};
