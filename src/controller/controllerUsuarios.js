var Usuario = require("../model/usuario");
var user = {};

async function findUsuario(req, res) {
	console.log(await Usuario.findAll({}));
	res.send({ hola: "hola" });
}

async function crearUsuario(req, res) {
	//TODO: Actualizr atributos de Usuarios
	//TODO: Recuperarr datos del req
	try {
		await Usuario.create({
			usuario: "Genaro",
			nombre: "Genaro",
			apellido: "Paulucchi",
			password: "1234",
			rol: 1,
			nombreAbreviado: "GP",
		});
	} catch (error) {
		//TODO :Mensaje de error ControllerUsuario
		console.log("El error es", error);
	}
}



user.findUsuario = findUsuario;
user.crearUsuario = crearUsuario;
module.exports = user;
