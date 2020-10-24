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
		async  comparePasswords(password,id,callback ) {
			try {
					const esValido = await bycrypt.compare(password,this.password)
					callback(esValido)
			} catch (error) {
				callback("ES undefined",error)
			}
		}	
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
