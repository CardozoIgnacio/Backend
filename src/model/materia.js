'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Materia.init({
    idMateria: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    nombreProfesor: DataTypes.STRING,
    cargaHoraria: DataTypes.INTEGER,
    contenido: DataTypes.STRING,
    dias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};