var fs = require("fs");
var mkdirp = require("mkdirp");
var path = require("path");
var { Noticia } = require("../model/index");

exports.listarNoticias_get = async function (req, res) {
  //TODO: Agregar filtro de noticias
	try { 
		await Noticia.findAll({})
			.then(noticias => {
				res.render('noticias/listar', { noticias: noticias });
			})
			.catch(error => console.log(error));
	}
	catch(error) {
		console.log("No se lograron listar las noticias: ", error);
	}
}

exports.crearNoticia_get = async function (req, res) {
  res.render('noticias/crear');
};

exports.crearNoticia_post = async function (req, res) {
  //TODO: Verificar permisos a la hora de crear una noticia
  //TODO: Recuperar informacion del body respecto a los usuarios
  let noticia = {}
  try {
    await mkdirp(`public/uploads/${req.body.tituloNoticia}`).then(resultado => console.log("Carpeta creada: ", resultado));
    req.files.forEach(function (foto) {
      //TODO: una vez copiado el archivo se deberia borrar el original (foto.path) por razones de optimización.
      fs.copyFile(foto.path, path.join('public', 'uploads', req.body.tituloNoticia, `${foto['filename']}.${foto['mimetype'].split('/')[1]}`), (err) => {
        if(err) { 
          console.log("Error al copiar archivo: ", err);
        }      
      }
    )});

    noticia.tituloNoticia = req.body.tituloNoticia;
    noticia.cuerpoNoticia = req.body.cuerpoNoticia; 
    noticia.visibilidad = true;

  await Noticia.create(noticia)
    .then(resultado => { 
      console.log(resultado);
      res.redirect('/noticias/');
    })
    .catch(error => { 
      //TODO: renderizar vista de error
      res.send("Ocurrió un error");
      console.log(error);
    });
  }
  catch(error) { 
    throw("Ocurrió un error: " + error);
  }
}

exports.actualizarNoticia_get = async function (req, res) { 
  //TODO: Definir como manejar la actualización de imágenes.
  //TODO: Agregar validación en el formulario HTML (deshabilitar) y opción para ver noticias deshabilitadas.
  try { 
      let idNoticia = req.params.idNoticia; 
      await Noticia.findAll({ where: { idNoticia } })
          .then(respuesta => { 
              res.render('noticias/actualizar', { noticia: respuesta[0] }); 
          })
          .catch(error => {
              //TODO: Renderizar una vista de error 
              res.send("Ocurrió un error al intentar actualizar una noticia.");
              console.log(error);
          });
  }
  catch (error) { 
      //TODO: Renderizar una vista de error acá también 
      res.send("Ocurrió un error al intentar actualizar una noticia.");
      console.log("Ocurrió un error al intentar actualizar una noticia: " + error);
  }
};

exports.actualizarNoticia_post = async function (req, res) {
  try {
    let idNoticia = req.params.idNoticia;
    console.log("titulo nuevo : ", req.body);
    //TODO: Verificar permisos para actualizar el estado de la noticia
    await Noticia.update(
      {
        tituloNoticia: req.body.tituloNoticia,
        cuerpoNoticia: req.body.cuerpoNoticia,
        visibilidad: true,
      },
      { where: { idNoticia: idNoticia } }
    );
    res.redirect('/noticias/')
  } catch (error) {
    //TODO:Mensaje de error Controlador Noticia
    console.log("Ocurrió un error al intentar hacer el post de actualización de noticia: ", error);
  }
}

exports.encontrarNoticia_get = async function (req, res) {
  try { 
      let idNoticia = req.params.idNoticia; 
      await Noticia.findAll({ where: { idNoticia } })
          .then(respuesta => {
              // obtener archivos
              //TODO: garantizar que sean imagenes
              //TODO: optar por usar base de datos fotos?
              fs.readdir(path.join('public', 'uploads', respuesta[0].tituloNoticia), (err, fotos) => {
                res.render('noticias/noticia', { noticia: respuesta[0], fotos: fotos });

                if(err) { 
                  res.render('noticias/noticia', { noticia: respuesta[0] });
                }
              })
          })
          .catch(error => console.log(error));
  }
  catch (error) { 
      //TODO: Mensaje de error Controlador Noticias
      throw("Ocurrió un error: " + error); 
  }
};
exports.destruirNoticia_post = async function (req, res) {
  try {
    //TODO: Verificar que el usuario tenga permisos para destruir la noticia
    var idNoticia = req.params.idNoticia;
    await Noticia.destroy({ where: { idNoticia: idNoticia } });
    //TODO: REnderizar vista de destruccion exitoso o redirigir a la vista adecuada
    res.redirect('/noticias/')
  } catch (error) {
    //TODO: Manejo de errores del controlador
    console.log("Ocurrió un error al intentar borrar una noticia. Error: " + error);
  }
};
