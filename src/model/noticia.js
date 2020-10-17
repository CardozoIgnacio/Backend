var Sequelize = require("sequelize");
var db = require("../dataBase/dbController");

// 1: Esquema del modelo
var definicionModelo = {
	idNoticia: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
    },
    
	// fechaCreacion: {
	// 	type: Sequelize.DATE,
	// 	allowNull: false,
	// },
	// fechaUltimaActualizacion: {
	// 	type: Sequelize.DATE,
	// 	allowNull: false,
	// },
	tituloNoticia: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	cuerpoNoticia: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	visibilidad: {
		type: Sequelize.BOOLEAN,
		default: false,
	},
};

// 2:Opciones del Modelo
var opcionesModelo ={
    timestamps:true,
    modelName:'noticia',
    freezeTableName:true,
    camelCase:true
}
// 3: Definicion del modeelo noticias
var ModeloNoticias = db.define("notica",definicionModelo,opcionesModelo)

module.exports = ModeloNoticias