var express = require('express')
var controladorNoticia= require('../controller/controladorNoticia');
var router= express.Router();

// GET NOTICIAS
router.get('/',controladorNoticia.listarNoticias_get)
router.get('/crearNoticia',controladorNoticia.crearNoticia_get)
router.get('/:idNoticia/actualizar',controladorNoticia.actualizarNoticia_get)
router.get('/mostrar/:idNoticia',controladorNoticia.encontrarNoticia_get)
// POST NOTICIAS
router.post('/crearNoticia',controladorNoticia.crearNoticia_post)
router.post('/:idNoticia/actualizar',controladorNoticia.actualizarNoticia_post)
module.exports =router