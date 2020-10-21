'use strict';
const {
  Model
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
    nombreCategoria: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};