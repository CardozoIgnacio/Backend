var express = require('express');
var controladorCarrera = require('../controller/controladorCarrera')
var router = express.Router();

/* GET users listing. */
router.get('/', controladorCarrera.findCarrera);

module.exports = router;
