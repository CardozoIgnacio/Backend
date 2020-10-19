// var ModeloCarrera = require("../model/carrera")
var {Carrera}=require('../dataBase/dbController')

exports.listarCarreras_get = function(req, res) { 
    //TODO: Renderizado de listar carreras
    res.send({ msj: "Renderizar página de filtrado de carreras"});
}

exports.crearCarrera_get = function(req, res) { 
    //TODO: Renderizado de crear Carrera
    res.send({msj: "Renderizar página para crear una carrera"});
}

exports.actualizarCarrera_get = function(req, res) { 
    //TODO: Renderizado de actualizar Carrera
    res.send({msj: "Renderizar página para actualizar Carrera"});
}

exports.encontrarCarrera_get = async function(req, res) {
    try { 
        let idCarrera = req.params.id; 
        await Carrera.findAll({ where: {id: idCarrera} }); 
        //TODO: Renderizar vista de la carrera encontrada
        res.send({ msj: "Carrera encontrada" });
    }
    catch (error) { 
        //TODO: Mensaje de error Controlador Carreras
        throw("Ocurrió un error: " + error); 
    }
}

exports.crearCarrera_post = async function(req, res) {
    let carrera = {}
    //TODO: verificar autenticación y rol correspondiente
    //TODO: descomentar recuperación de datos del req
    try { 
        // carrera.nombre = req.body.nombre; 
        // carrera.nombreAbreviado = req.body.nombreAbreviado;
        // carrera.titulo = req.body.titulo;
        // carrera.resolucion = req.body.resolucion;
        // carrera.duracion = req.body.duracion;
        // carrera.horas = req.body.horas;
        // carrera.tipo = req.body.tipo;
        // carrera.modalidad = req.body.modalidad;
        // carrera.validada = req.body.validada;

        // await ModeloCarrera.create(carrera)
        //     .then(resultado => {
        //         console.log("Carrera creada exitosamente");
        //         console.log(resultado);
        //     });
        // }

        await Carrera.create({
            nombre: "Técnicatura Superior en Seguridad e Higiene",
            nombreAbreviado: "Seguridad e Higiene",
            titulo: "Técnico en Seguridad e Higiene",
            resolucion: "5555/55",
            duracion: 3,
            horas: 1600,
            tipo: "Carrera Vigente",
            modalidad: "Presencial",
            validada: true 
        }).then(resultado => { 
            console.log("Se ha creado la carrera con éxito");
        })
    }
    catch(error) {
        //TODO: perfeccionar mensaje de error controladorCarrera
        throw("Ocurrió un error: " + error);
    }
}

exports.actualizarCarrera_post = async function(req, res) { 
    try { 
        let idCarrera = req.params.id; // se toma el ID de la URL 
        let carrera = await Carrera.findByPk(idCarrera);

        if(!carrera) { 
             throw("No se encontró la carrera");
        } else { 
            //TODO: completar datos recibidos de 'req' 
             let carreraActualizada = { 
                 nombre: "Tecnicatura Superior en Seguridad e Higiene "
            }

            let resultado = await Carrera.update(carreraActualizada, { where: {id : idCarrera} });
            
            if(resultado) { 
                res.send("Carrera actualizada con éxito");
            } else {
                throw("No se pudo actualizar la carrera");
            }   
        }

    }
    catch(error) {
        throw("Error al intentar actualizar la carrera: " + error);
    }
}

exports.destruirCarrera_post = async function(req, res) {
    try { 
        let idCarrera = req.params.id;
        let carrera = await Carrera.findByPk(idCarrera);

        if(!carrera) { 
            throw("No existe la carrera");
        } else { 
            await carrera.destroy();
            console.log("La carrera fue eliminada con éxito");
        }
    }
    catch(error) {
        throw("Ocurrió un error y no pudo eliminarse la carrera: " + error);
    }
}