var Sequelize = require("sequelize");
var db = require("../dataBase/dbController");

// 1: Esquema del modelo.
var definicionModelo = {
	id: {
		type:Sequelize.INTEGER,
		autoIncrement:true,
		primaryKey:true,
		allowNull:false
	},
	nombre: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: { 
			notNull: {
				msg: "El campo nombre no puede estar vacío."
			},
			isAlpha: {
				msg: "El nombre de la carrera no puede estar vacío ni contener números/símbolos."
			}
		}
	},
	nombreAbreviado: { 
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: { 
			notNull: { 
				msg: "El campo nombre abreviado no puede estar vacío."
			},
			isAlpha: {
				msg: "El nombre abreviado de la carrera no puede estar vacío ni contener números/símbolos."
			}
		}
	},
	titulo: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false,
	},
	resolucion: {
		type: Sequelize.STRING,
		unique: true, 
		allowNull: false,
	},
	duracion: { 
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	horas: { 
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	tipo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	modalidad: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	validada: { 
		type: Sequelize.BOOLEAN,
		allowNull: false,
	}
};

// 2: Opciones del modelo.
var opcionesModelo = {
	timestamps: false,
	modelName: 'carrera',
	freezeTableName: true,
	camelCase: true
};

// 3: Definimos el modelo 'Carrera'
var ModeloCarrera = db.define("carrera", definicionModelo, opcionesModelo);

module.exports = ModeloCarrera;
