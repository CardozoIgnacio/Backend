"use strict";
const { Model } = require("sequelize");
var bycrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
	class Usuario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
		comparePasswords
	}
	Usuario.init(
		{
			usuario: DataTypes.STRING,
			nombre: DataTypes.STRING,
			apellido: DataTypes.STRING,
			password: DataTypes.STRING,
			rol: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Usuario",
			freezeTableName: true,
			timestamps: false,
			hooks: {
				beforeValidate: hashPassword,
			},
			
		}
	);

	return Usuario;
};
async function hashPassword(usuario) {
	try {
		usuario.password = await bycrypt.hash(
			usuario.password,
			bycrypt.genSaltSync(8)
		);
	} catch (err) {
		throw "/src/model/usuario.js -- No se pudo encryptar la contraseña" + err;
	}
}
async function comparePasswords(password,id,callback ) {
	try {
		var user = await this.findOne({where:{id:id}})
		if(user){
			var {dataValues}=user
			const esValido = await bycrypt.compare(password,dataValues.password)
			callback(esValido)
		}
	} catch (error) {
		callback(undefined,error)
	}
}