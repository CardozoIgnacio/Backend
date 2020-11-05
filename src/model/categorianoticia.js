"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CategoriaNoticia extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	CategoriaNoticia.init(
		{
			idNoticia: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				references: {
          model: sequelize.Noticia,
          key:"idNoticia"
				},
			},
      idCategoria:{
       type: DataTypes.INTEGER,
       allowNull:false,
       primaryKey:true,
       references:{
         model:sequelize.Categoria,
         key:"idCategoria"
       }
      }
		},
		{
			sequelize,
			modelName: "CategoriaNoticia",
		}
	);
	return CategoriaNoticia;
};
