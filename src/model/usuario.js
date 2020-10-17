var Usuario= require("../model/usuario")

async function findUsuario (req,res){
    console.log(await Usuario.findAll({}))
    res.send({"hola":"hola"})
}
var user = {} 
user.findUsuario = findUsuario

module.exports= user
