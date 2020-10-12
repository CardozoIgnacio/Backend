var Usuario= require ("../model/usuario")

module.exports =async function findUsuario (){
    console.log(await Usuario.findAll({}))
}


