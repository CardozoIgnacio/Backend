//require("dotenv").config()
require('dotenv').config()
var Usuario = require("../../src/model/usuario")
describe("src/model/usuario.js",()=>{
    it("Crear un usuario dentro de la base de datos",async()=>{
        console.log(await Usuario.create({usuario:"German",password:"1231",rol:1}))
    })
})