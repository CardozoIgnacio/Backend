var express = require('express');
var controllerUsuarios = require('../controller/controllerUsuarios')
var router = express.Router();

/* GET users listing. */
router.get('/',controllerUsuarios.listarUsuarios_get)
router.get('/crearUsuario',controllerUsuarios.crearUsuario_get)
router.get('/:id/actualizar',controllerUsuarios.actualizarUsuario_get)
router.get('/mostrar/:id',controllerUsuarios.encontrarUsuarios_get)

/* POST user listing */
router.post('/crearUsuario',controllerUsuarios.crearUsuario_post);
router.post('/:id/actualizar', controllerUsuarios.actualizarUsuario_post)
router.post('/:id/destruir',controllerUsuarios.destruirUsuario_post)

module.exports = router;