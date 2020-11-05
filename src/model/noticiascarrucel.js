'use strict';
//TODO: DEBATIR: deberia existir noticias carrucel... seria mas sencillo tener un valor en la noticia que indique q noticia va a ir al carrucel

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class noticiasCarrucel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  noticiasCarrucel.init({
    idNoticiaCarrucel:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'NoticiasCarrucel',
    freezeTableName:true,
    timestamps:false
  });
  return noticiasCarrucel;
};