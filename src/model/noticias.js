"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Noticias extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
      Noticias.belongsToMany(models.Foto, { through: "FotoNoticia" });
      Noticias.belongsToMany(models.Categoria, {through: "CategoriaNoticia"})
		}
	}
	Noticias.init(
		{
			idNoticia: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			tituloNoticia: DataTypes.STRING,
			cuerpoNoticia: DataTypes.TEXT,
			visibilidad: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Noticia",
			timestamps: false,
			freezeTableName: true,
		}
	);
	return Noticias;
};
