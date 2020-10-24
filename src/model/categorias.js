'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Categorias.init({
    idCategoria:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    }, 
    nombreCategoria:{
      type:DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categorias;
};