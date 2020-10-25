'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tramite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tramite.init({
    idTramite:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    tipoTramite: DataTypes.STRING,
    fechaInicio: DataTypes.DATE,
    estado: DataTypes.BOOLEAN,
    fechaFinalizacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tramite',
    timestamps:false,
    freezeTableName:false
  });
  return Tramite;
};