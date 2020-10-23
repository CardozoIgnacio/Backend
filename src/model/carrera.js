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
		allowNull: false,
		unique: {
			args: true,
			msg: "Ya existe una carrera con ese nombre.",
			error:"Ya existe una carrera con ese nombre"
		},
		validate: {
			soloLetras(value) { 
				if( !(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test( value ) )) { // no utilice isalpha porque prohibe espacios.
					throw new Error("El campo nombre no permite símbolos ni números." );
				}
			},
			notEmpty: {
				msg: "El campo nombre no puede estar vacío."
			}
		}
	},
	nombreAbreviado: { 
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: "Ya existe una carrera con ese nombre."
		},
		allowNull: false,
		validate: {
			soloLetras(value) { 
				if( !(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test( value ) )) { // no utilice isalpha porque prohibe espacios.
					throw new Error("El campo nombre abreviado no permite símbolos ni números." );
				}
			},
			notEmpty: {
				msg: "El campo nombre abreviado no puede estar vacío."
			}
		}
	},
	titulo: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: "Ya existe una carrera con ese nombre."
		},
		allowNull: false,
		validate: {
			soloLetras(value) { 
				if( !(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g.test( value ) )) { // no utilice isalpha porque prohibe espacios.
					throw new Error("El campo título no permite símbolos ni números." );
				}
			},
			notEmpty: {
				msg: "El campo título no puede estar vacío."
			}
		}
	},
	resolucion: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: "Ya existe una carrera con ese nombre."
		}, 
		allowNull: false,
		validate: { 
			notNull: { 
				msg: "El campo resolución no puede estar vacío." 
			}
		}
	},
	duracion: { 
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { 
			isInt: { 
				msg: "Sólo se permiten números enteros en el campo duración."
			},
			len: { 
				msg: "Sólo se permiten dos números en la duración de una carrera."
				// en realidad, se debe limitar que sea 1-6 años. 
			}
		}
	},
	horas: { 
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: { 
			isInt: {
				msg: "Sólo se permiten números enteros en el campo de horas."
			}, 
			isMin(value) { 
				if (value < 300) { 
					throw new Error("La carrera debe tener una duración mayor a 300 horas.");
				}
			}
		}
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
