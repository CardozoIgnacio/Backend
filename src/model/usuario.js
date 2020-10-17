var Sequelize = require("sequelize");
var db = require("../dataBase/dbController");
var bycrypt = require("bcrypt");
// 1: The model schema.
var modelDefinition = {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	usuario: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	nombre :{
		type:Sequelize.STRING,
		allowNull:false
	},
	apellido :{
		type:Sequelize.STRING,
		allowNull:false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	rol: {
		type: Sequelize.BIGINT,
		allowNull: false,
	},
	nombreAbreviado:{
		type:Sequelize.STRING,
		allowNull:true
	}
};

// 2: The model options.
var modelOptions = {
	instanceMethods: {
		comparePasswords: comparePasswords,
	},
	hooks: {
		beforeValidate: hashPassword,
	},
	timestamps: false,
	modelName: "usuario",
	freezeTableName: true,
	underscore:true
};

// 3: Define the User model.
var UsuarioModel = db.define("usuario", modelDefinition, modelOptions);

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

module.exports = UsuarioModel;
