var express = require('express');
var router = express.Router();
var passport = require('passport');
var { Noticia } = require("../model/index");

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    await Noticia.findAll({})
      .then(noticias => {
        res.render('index', { noticias: noticias });
      })
      .catch(error => {
        console.log("Error al renderizar las noticias. Se renderizará index sin mostrarlas.");
        res.render('index');
      });
  } catch {
    console.log("Error al renderizar las noticias. Se renderizará index sin mostrarlas.");
    res.render('index');
  }
});

router.get('/login', function(req, res, next) {
  res.render('login');
})

/* POST login */

 router.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login?result=failure"
}));

module.exports = router;
