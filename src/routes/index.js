var express = require("express");
var router = express.Router();
var passport = require("passport");
var controladorIndex = require("../controller/controladorIndex");

/* GET home page. */
router.get("/", controladorIndex.homePage_get);

router.get("/contacto", controladorIndex.contacto_get);

router.get("/sobre-nosotros", controladorIndex.sobreNosotros_get);

router.get("/preguntas-frecuentes", controladorIndex.preguntasFrecuentes_get);

router.get("/login", controladorIndex.login_get);

router.get("/logout", controladorIndex.logout_get);

router.get("/perfil",controladorIndex.perfil_get );

/* POST login */

router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login?valido=no",
	})
);

module.exports = router;
