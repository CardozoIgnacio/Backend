// var Usuario = require("../model/usuario");
var { Usuario } = require("../model/index");
var { AlumnoPendiente } = require("../model/index");

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
    //TODO: Renderizar vista del usuario encontrado
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
    var user = await Usuario.findOne({ where: { rol: 1 } });
    console.log(
      await user.comparePasswords("1234", (esValido, err) => {
        console.log(esValido);
      })
    );

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

exports.obtenerListado_get = async function(req, res) { 
  try {
    await Usuario.findAll({})
      .then(usuarios => {
        res.render('administrativo/listadoAlumnos', { usuario: req.user, listado: usuarios });
      })
      .catch(error => console.log("Error al obtener usuarios para renderizar en el listado administrativo: ", error));
  } catch(e) { 
    console.log("Error al obtener usuarios al renderizar en el listado administrativo: ", e);
    res.redirect("/");
  }
}

exports.consultarPreinscripciones_get = async function(req, res) {
  try {
    await AlumnoPendiente.findAll({})
      .then(usuarios => {
        res.render('administrativo/listadoPreinscripciones', { usuario: req.user, listado: usuarios });
      })
      .catch(error => console.log("Error al obtener usuarios al renderizar en el listado administrativo de pre-inscripciones", error));
    } catch (e) {
      console.log("Error al obtener usuarios al renderizar en el listado administrativo de pre-inscripciones ", e);
      res.redirect("/");
    }
  }

  exports.preinscripcion_post = async function(req, res) {
    let preinscripto = {}

    try {
      preinscripto.nombre = req.body.nombreInscripto;
      preinscripto.apellido = req.body.apellidoInscripto;
      preinscripto.dni = req.body.dniInscripto;
      preinscripto.email = req.body.emailInscripto;
      preinscripto.fechaNac = req.body.nacimientoInscripto;
      preinscripto.direccion = req.body.domicilioInscripto;
      preinscripto.numTelefono = req.body.telefonoInscripto;
      preinscripto.fotoCarnet = false;
      preinscripto.certificadoSalud = false;
      preinscripto.fotocopiaDni = false;
      preinscripto.abcFormulario = false;

      await AlumnoPendiente.create(preinscripto)
        .then(resultado => {
          res.render('preinscripcion', { usuario: req.user, error: false });
        })
        .catch(error => {
          console.log("Ocurrió un error al realizar la preinscripción de un alumno: ", error);
          res.render('preinscripcion', { usuario: req.user, error: true });
        })
    } catch (e) {
      console.log("Ocurriò un error al realizar la preinscripciòn de un alumno: ", error);
      res.render('preinscripcion', { usuario:req.user, error: true });
    }
  }
