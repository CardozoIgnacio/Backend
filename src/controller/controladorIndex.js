var { Noticia } = require("../model/index");
var { Carrera } = require("../model/index");

exports.homePage_get = async function (req, res, next) {
	let obj_carreras = {};
	let obj_noticias = {};

	try {
		await Carrera.findAll({})
			.then((carreras) => {
				obj_carreras = carreras;
			})
			.catch((error) => {
				console.log(
					"Error al renderizar las carreras en la página principal: ",
					error
				);
			});
	} catch (error) {
		console.log(
			"Error al obtener las carreras para la página principal: ",
			error
		);
	}

	try {
		await Noticia.findAll({})
			.then((noticias) => {
				obj_noticias = noticias;
			})
			.catch((error) => {
				console.log(
					"Error al renderizar las noticias en la página principal: ",
					error
				);
			});
	} catch (error) {
		console.log(
			"Error al obtener las carreras para la página principal: ",
			error
		);
	}

	res.render("index", {
		carreras: obj_carreras,
		noticias: obj_noticias,
		usuario: req.user,
	});
};
exports.contacto_get = function (req, res, next) {
	res.render("contacto", { usuario: req.user });
};
exports.sobreNosotros_get = function (req, res, next) {
	res.render("sobre-nosotros", { usuario: req.user });
};

exports.preguntasFrecuentes_get = function (req, res, next) {
	res.render("preguntas-frecuentes", { usuario: req.user });
};

exports.login_get=  function (req, res, next) {
	res.render("login", { usuario: req.user });}

exports.logout_get=function (req, res, next) {
	req.logout();
	res.redirect("/");
}

exports.perfil_get=function (req, res, next) {
	res.render("perfil", { usuario: req.user });
}

