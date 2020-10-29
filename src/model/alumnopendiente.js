'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlumnoPendiente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AlumnoPendiente.init({
    nroPreinscripcion: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    fotoCarnet: DataTypes.BOOLEAN,
    certificadoSalud: DataTypes.BOOLEAN,
    fotocopiaDni: DataTypes.BOOLEAN,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNac: DataTypes.DATE,
    dni: DataTypes.BIGINT,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    numTelefono: DataTypes.BIGINT,
    abcFormulario: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AlumnoPendiente',
    freezeTableName:true,
    timestamps:false
  });
  return AlumnoPendiente;
};