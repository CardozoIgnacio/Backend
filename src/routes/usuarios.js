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
router.post('/crearUsuario', controllerUsuarios.crearUsuario_post);
router.post('/:id/actualizar', controllerUsuarios.actualizarUsuario_post);
router.post('/:id/destruir', controllerUsuarios.destruirUsuario_post);

/* ACCIONES */
router.get('/constancia-alumno', function(req, res, next) { 
  res.render('tramites/alumnoregular', { usuario: req.user });
});

router.get('/obtener-listado', controllerUsuarios.obtenerListado_get);

/* ACCIONES - Preinscripciones */

router.get('/consultar-preinscripciones', controllerUsuarios.consultarPreinscripciones_get);

router.get('/preinscripcion', function(req, res, next) { 
  res.render('preinscripcion', { usuario: req.user, error: undefined });
});

router.post('/preinscripcion', controllerUsuarios.preinscripcion_post);


module.exports = router;