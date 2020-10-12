//require("dotenv").config()
require('dotenv').config()
var Usuario = require("../../src/model/usuario")
describe("src/model/usuario.js",()=>{
    it("Buscar todos los usuarios dentro de la base de datos",async()=>{
        console.log(await Usuario.findAll({}))
    })
})