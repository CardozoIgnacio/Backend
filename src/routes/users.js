var express = require('express');
var controllerUsuarios = require('../controller/controllerUsuarios')
var router = express.Router();

/* GET users listing. */
router.get('/',controllerUsuarios.findUsuario);

module.exports = router;