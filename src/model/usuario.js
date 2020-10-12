var Sequelize = require("sequelize");
var db = require("../dataBase/dbController");

// 1: The model schema.
var modelDefinition = {
	usuario: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
   },
   rol: {
       type : Sequelize.NUMBER,
       allowNull: false
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
};

// 3: Define the User model.
var UsuarioModel = db.define("usuario", modelDefinition, modelOptions);

function comparePasswords(password, callback) {
	// TODO: Comparar password a nivel modelo requeire instalacion de bycrpt
}

function hashPassword(user) {
	// TODO: Encriptacion de password a nivel modelo requiere bycrypt
}

module.exports = UsuarioModel;
