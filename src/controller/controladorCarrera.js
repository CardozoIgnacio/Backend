var ModeloCarrera = require("../model/carrera")
var carrera = {}

async function findCarrera (req,res){
    console.log(await ModeloCarrera.findAll({}))
    res.send({"hola":"hola"})
}

carrera.findCarrera = findCarrera
module.exports = carrera


