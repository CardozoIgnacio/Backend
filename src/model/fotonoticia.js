'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fotoNoticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fotoNoticia.init({
    idFoto:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
     references:{
       model:sequelize.Foto,
       key:'idFotos'
     } 
      
    },
    idNoticia:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      references:{
        model:sequelize.Noticia,
        key:'idNoticia'
      } 
      
    }
  }, {
    sequelize,
    modelName: 'fotoNoticia',
  });
  return fotoNoticia;
};