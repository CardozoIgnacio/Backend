var express = require("express");
var multer = require("multer");
var upload = multer({ dest: 'public/uploads/' });
var controladorNoticia = require("../controller/controladorNoticia");
var router = express.Router();

// GET NOTICIAS
router.get("/", controladorNoticia.listarNoticias_get);
router.get("/crearNoticia", controladorNoticia.crearNoticia_get);
router.get("/:idNoticia/actualizar", controladorNoticia.actualizarNoticia_get);
router.get("/mostrar/:idNoticia", controladorNoticia.encontrarNoticia_get);
// POST NOTICIAS
router.post("/crearNoticia", upload.array('fotos', 5), controladorNoticia.crearNoticia_post);
router.post("/:idNoticia/actualizar", controladorNoticia.actualizarNoticia_post);
router.post("/:idNoticia/destruir", controladorNoticia.destruirNoticia_post);
module.exports = router;
