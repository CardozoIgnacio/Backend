var express = require('express');
var router = express.Router();
var passport = require('passport');
var { Noticia } = require("../model/index");
var { Carrera } = require("../model/index");

/* GET home page. */
router.get('/', async function(req, res, next) {

  let obj_carreras = {};
  let obj_noticias = {}

  try { 
    await Carrera.findAll({})
      .then(carreras => {
        obj_carreras = carreras; 
      })
      .catch(error => {
        console.log("Error al renderizar las carreras en la página principal: ", error);
      })
  } catch(error) {
    console.log("Error al obtener las carreras para la página principal: ", error);
  }

  try { 
    await Noticia.findAll({})
      .then(noticias => {
        obj_noticias = noticias;
      })
      .catch(error => {
        console.log("Error al renderizar las noticias en la página principal: ", error);
      })
  } catch(error) {
    console.log("Error al obtener las carreras para la página principal: ", error);  
  } 

  res.render('index', { carreras: obj_carreras, noticias: obj_noticias, usuario: req.user });
});

router.get('/login', function(req, res, next) {
  res.render('login', { usuario: req.user });
});

router.get('/logout', function(req, res, next) { 
  req.logout();
  res.redirect('/');
});

router.get('/perfil', function(req, res, next) {
  res.render('perfil', { usuario: req.user });
});

/* POST login */

 router.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login?result=failure"
}));

module.exports = router;
