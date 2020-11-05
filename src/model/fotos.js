'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association herea
      Fotos.belongsToMany(models.Noticia,{through:'FotoNoticia'})
    }
  };
  Fotos.init({
    ruta:{
      type:DataTypes.STRING,
      allowNull:false
    },
    idFotos:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Foto',
    timestamps:false,
    freezeTableName:true
  });
  return Fotos;
};