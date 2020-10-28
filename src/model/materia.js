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
    //TODO:Falata el nombre de la materia, realizar refacto y migracion correspondiente
    nombreProfesor: DataTypes.STRING,
    cargaHoraria: DataTypes.INTEGER,
    //TODO:Revisar el largo del contenido 255 quedaria corto?
    contenido: DataTypes.STRING,
    //TODO: Las materia se dicatan mas de un dia
    dias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};