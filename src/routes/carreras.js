var express = require('express');
var multer = require("multer");
var upload = multer({ dest: 'public/carreras/todas/ '});
var controladorCarrera = require('../controller/controladorCarrera')
var router = express.Router();

/* GET listado carreras. */
router.get('/', controladorCarrera.listarCarreras_get);
router.get('/crearCarrera', controladorCarrera.crearCarrera_get);
router.get('/:id/actualizar', controladorCarrera.actualizarCarrera_get);
router.get('/mostrar/:id', controladorCarrera.encontrarCarrera_get);

/* POST listado carreras */
router.post('/', upload.single('miniatura'), controladorCarrera.crearCarrera_post);
router.post('/:id/actualizar', controladorCarrera.actualizarCarrera_post);
router.post('/:id/destruir', controladorCarrera.destruirCarrera_post);
module.exports = router;
