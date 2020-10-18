var Noticia = require("../model/noticia");

exports.listarNoticias_get = async function (req, res) {
	//TODO: Agregar filtro de noticias
	var noticias = await Noticia.findAll({});
    //TODO:Renderizar vista correpondiente al listado de noticiasa
	res.send({ msj: "Las noticias fueron traidas exitosamente" });
};

exports.crearNoticia_post = async function (req, res) {
    //TODO: Verificar permisos a la hora de crear una noticia
    //TODO: Recuperar informacion del body respecto a los usuarios
	var nuevaNoticia=await Noticia.create({
		tituloNoticia: "Titulo1",
		cuerpoNoticia: "Este es el cuerpo de la noticia numero1",
		visibilidad: true,
    });
    
    res.send({msj:"La noticia fue creada exitosamente"})
};
