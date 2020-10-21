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
      // define association here
    }
  };
  Fotos.init({
    ruta: DataTypes.STRING,
    idFotos:{
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Fotos',
    timestamps:false,
    freezeTableName:true
  });
  return Fotos;
};