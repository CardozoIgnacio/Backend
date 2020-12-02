var express = require('express');
var router = express.Router();
var controllerUsuarios = require('../controller/controladorUsuarios');
var { Usuario } = require("../model/index");
var { AlumnoPendiente } = require("../model/index");

/* GET users listing. */
router.get('/',controllerUsuarios.listarUsuarios_get)
router.get('/crearUsuario',controllerUsuarios.crearUsuario_get)
router.get('/:id/actualizar',controllerUsuarios.actualizarUsuario_get)
router.get('/mostrar/:id',controllerUsuarios.encontrarUsuarios_get)

/* POST user listing */
router.post('/crearUsuario',controllerUsuarios.crearUsuario_post);
router.post('/:id/actualizar', controllerUsuarios.actualizarUsuario_post)
router.post('/:id/destruir',controllerUsuarios.destruirUsuario_post)

/* ACCIONES */
router.get('/constancia-alumno', function(req, res, next) { 
  res.render('tramites/alumnoregular', { usuario: req.user });
});

router.get('/obtener-listado', async function(req, res, next) {
  try { 
    await Usuario.findAll({})
      .then(usuarios => {
        res.render('administrativo/listadoAlumnos', { usuario: req.user, listado: usuarios }); 
      })
      .catch(error => console.log("Error al obtener usuarios para rendeizar en el listado administrativo: ", error));
  } catch(e) { 
    console.log("Error al obtener usuarios al renderizar en el listado administrativo: ", e);
    res.redirect("/");
  }
})

/* ACCIONES - Preinscripciones */

router.get('/consultar-preinscripciones', async function(req, res, next) { 
  try  { 
    await AlumnoPendiente.findAll({})
      .then(usuarios => {
        res.render('administrativo/listadoPreinscripciones', { usuario: req.user, listado: usuarios });
      })
      .catch(error => console.log("Error al obtener usuarios al renderizar en el listado administrativo de pre-inscripciones ", error));
  } catch (e) { 
    console.log("Error al obtener usuarios al renderizar en el listado administrativo de pre-inscripciones ", e);
    res.redirect("/");
  }
});

router.get('/preinscripcion', function(req, res, next) { 
  res.render('preinscripcion', { usuario: req.user, error: undefined });
});

router.post('/preinscripcion', async function(req, res, next) { 

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
        console.log("Ocurrió un error al realizar la preinscripción de un alumno: ", error)
        res.render('preinscripcion', { usuario: req.user, error: true });
      })
  } catch (e) { 
    console.log("Ocurrió un error al realizar la preinscripción de un alumno: ", error)
    res.render('preinscripcion', { usuario: req.user, error: true });
  }

});


module.exports = router;