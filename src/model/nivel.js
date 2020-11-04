'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nivel.init({
    
    idNivel:{
    type:  DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
      
    },
    nombre:{
      type:DataTypes.STRING,
      allowNull:false

    } 
  }, {
    sequelize,
    modelName: 'Nivel',
  });
  return Nivel;
};