'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carreras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  carreras.init({
    id:{
      type:  DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    }, 
    nombre: DataTypes.STRING,
    nombreAbreviado: DataTypes.STRING,
    titulo: DataTypes.STRING,
    resolucion: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    horas: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    modalidad: DataTypes.STRING,
    valida: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Carrera',
    timestamps:false,
    freezeTableName:true
  });
  return carreras;
};