'use strict';
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
    idNoticiaCarrucel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'noticiasCarrucel',
    freezeTableName:true,
    timestamps:false
  });
  return noticiasCarrucel;
};