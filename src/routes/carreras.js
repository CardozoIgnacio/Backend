var express = require('express');
var controladorCarrera = require('../controller/controladorCarrera')
var router = express.Router();

/* GET listado carreras. */
router.get('/', controladorCarrera.listarCarreras_get);
router.get('/crearCarrera', controladorCarrera.crearCarrera_get);
router.get('/:id/actualizar', controladorCarrera.actualizarCarrera_get);
router.get('/mostrar/:id', controladorCarrera.encontrarCarrera_get);

/* POST listado carreras */
router.post('/', controladorCarrera.crearCarrera_post);
router.post('/:id/actualizar', controladorCarrera.actualizarCarrera_post);
router.post('/:id/destruir', controladorCarrera.destruirCarrera_post);
module.exports = router;
