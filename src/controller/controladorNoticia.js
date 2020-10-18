var Noticia = require("../model/noticia");

exports.listarNoticias_get = async function (req, res) {
	//TODO: Agregar filtro de noticias
	var noticias = await Noticia.findAll({});
	//TODO:Renderizar vista correpondiente al listado de noticiasa
	res.send({ msj: "Las noticias fueron traidas exitosamente" });
};
exports.crearNoticia_get = async function (req, res) {
	//TODO: Renderizar crear Noticia
	res.send({ msj: "Renderizar pagina para crear una noticia" });
};
exports.crearNoticia_post = async function (req, res) {
	//TODO: Verificar permisos a la hora de crear una noticia
	//TODO: Recuperar informacion del body respecto a los usuarios
	var nuevaNoticia = await Noticia.create({
		tituloNoticia: "Titulo1",
		cuerpoNoticia: "Este es el cuerpo de la noticia numero1",
		visibilidad: true,
	});

	res.send({ msj: "La noticia fue creada exitosamente" });
};

exports.actualizarNoticia_get = async function (req, res) {
	//TODO: Renderizar vista de actualizacion de noticias
	var idNoticia = req.params.idNoticia;
	//TODO:Renderizar infor de la noticia
	res.send({ msj: "Renderizar pagina para actualizar una noticia" + idNoticia });
};
exports.actualizarNoticia_post = async function (req, res) {
	try {
		var idNoticia = req.params.idNoticia;
		//TODO: Verificar permisos para actualizar el estado de la noticia
		await Noticia.update(
			{
				tituloNoticia: "TituloNuevo1",
				cuerpoNoticia: "Este es el NUEVO cuerpo de la noticia numero1",
				visibilidad: true,
			},
			{ where: { idNoticia: idNoticia } }
		);
		res.send({msj:"Noticia actualizada exitosamente"})
	} catch (error) {
		//TODO:Mensae de error Controlador Noticia
		console.log("El error es",error)
	}
};
