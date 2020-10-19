// var Usuario = require("../model/usuario");
var { Usuario }=require('../dataBase/dbController')

exports.listarUsuarios_get = function (req, res) {
	//TODO: Renderizado de listar Usuarios
	res.send({ msj: "Renderizar Pagina de filtrado de usuarios" });
};
exports.crearUsuario_get = function (req, res) {
	//TODO: Rederizado de crear Usuario
	//TODO: Buscar informacion de AlumnoPendiente
	res.send({ msj: "Renderizar pagina para crear un usuario" });
};
exports.actualizarUsuario_get = function (req, res) {
	//TODO: Renderizado de Actualizacion de usuarios
	res.send({ msj: "Renderizar pagina para actualizar usuario" });
};
exports.encontrarUsuarios_get = async function (req, res) {
	//TODO: Verificar permisos a la hora de buscar usuarios
	try {
		var id = req.params.id;
		await Usuario.findAll({ where: { id: id } });
		//TODO: Renderizar vbista del usuario encontrado
		res.send({ msj: "Usuario encontrado" });
	} catch (error) {
		//TODO :Mensaje de error ControllerUsuario
		console.log("El error es", error);
	}
};
exports.crearUsuario_post = async function (req, res) {
	//TODO: Actualizr atributos de Usuarios
	//TODO: Recuperarr datos del req
	try {
		//TODO: Verificar permisos a la hora de crear un Usuario
		await Usuario.create({
			usuario: "Genaro",
			nombre: "Genaro",
			apellido: "Paulucchi",
			password: "1234",
			rol: 1,
			nombreAbreviado: "GP",
		});
		res.send({ msj: "Usuario creado exitosamente" });
	} catch (error) {
		//TODO :Mensaje de error ControllerUsuario
		console.log("El error es", error);
	}
};
exports.actualizarUsuario_post = async function (req, res) {
	//TODO: Actualizar atributos de usuarios
	try {
		var id = req.params.id;
		//TODO: Verificar permisos a la hora de actualizar un usuario
		await Usuario.update(
			{
				usuario: "Gerardo",
				nombre: "Gerardo",
				apellido: "Sardinez",
				password: "1234",
				rol: 1,
				nombreAbreviado: "GS",
			},
			{ where: { id: id } }
		);
		res.send({ msj: "Usuario actualizado exitosamente" });
	} catch (error) {
		//TODO :Mensaje de error ControllerUsuario
		console.log("El error es", error);
	}
};
exports.destruirUsuario_post = async function (req, res) {
	var id = req.params.id;
	try {
		//TODO: Verificar permisos a la hora de destruir un usuario
		Usuario.destroy({ where: { id: id } });
		res.send({ msj: "Usuario destruido exitosamente " });
	} catch (error) {
		//TODO :Mensaje de error ControllerUsuario
		console.log("El error es", error);
	}
};
