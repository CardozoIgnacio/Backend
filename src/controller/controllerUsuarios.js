var Usuario = require("../model/usuario");


exports.encontrarUsuario =async function (req, res) {
	console.log(await Usuario.findAll({}));
	res.send({ hola: "hola" });
}

exports.crearUsuario = async function (req, res) {
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
exports.actualizarUsuario= async function (req, res) {
	//TODO: Actualizar atributos de usuariosa
	//TODO: Recuperar datos del body
	
	
	try {
		await Usuario.update({usuario:"GenaPauli"},{where:{id:1}});
	} catch (error) {}
}


