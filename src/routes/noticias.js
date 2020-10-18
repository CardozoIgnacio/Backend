var express = require('express')
var controladorNoticia= require('../controller/controladorNoticia');
var router= express.Router();

// GET NOTICIAS
router.get('/',controladorNoticia.listarNoticias_get)
router.get('/crearNoticia',controladorNoticia.crearNoticia_get)

// POST NOTICIAS
router.post('/crearNoticia',controladorNoticia.crearNoticia_post)

module.exports =router