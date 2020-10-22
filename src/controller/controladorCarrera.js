var ModeloCarrera = require("../model/carrera")

exports.listarCarreras_get = async function(req, res) { 
    try { 
        await ModeloCarrera.findAll({})
            .then(carreras => {
                res.render('carreras/listarCarreras', { carreras: carreras });
            })
            .catch(error => console.log(error));
    }
    catch(error) { 
        console.log("No se lograron listar las carreras: ", error)
    }
}

exports.crearCarrera_get = function(req, res) { 
    res.render('carreras/crear');
}

exports.actualizarCarrera_get = async function(req, res) { 
    try { 
        let idCarrera = req.params.id; 
        await ModeloCarrera.findAll({ where: {id: idCarrera} })
            .then(respuesta => { 
                res.render('carreras/actualizar', { datos: respuesta[0] }); 
            })
            .catch(error => {
                //TODO: Renderizar una vista de error 
                res.send("Ocurrió un error");
                console.log(error);
            });
    }
    catch (error) { 
        //TODO: Renderizar una vista de error acá también 
        res.send("Ocurrió un error");
        console.log("Ocurrió un error: " + error);
    }
}

exports.encontrarCarrera_get = async function(req, res) {
    try { 
        let idCarrera = req.params.id; 
        await ModeloCarrera.findAll({ where: {id: idCarrera} })
            .then(respuesta => {
                res.render('carreras/carrera', { datos: respuesta[0] });
            })
            .catch(error => console.log(error));
    }
    catch (error) { 
        //TODO: Mensaje de error Controlador Carreras
        throw("Ocurrió un error: " + error); 
    }
}

exports.crearCarrera_post = async function(req, res) {
    let carrera = {}
    //TODO: verificar autenticación y rol correspondiente
    try { 
        carrera.nombre = req.body.nombre; 
        carrera.nombreAbreviado = req.body.nombreAbreviado;
        carrera.titulo = req.body.titulo;
        carrera.resolucion = req.body.resolucion;
        carrera.duracion = req.body.duracion;
        carrera.horas = req.body.horas;
        carrera.tipo = req.body.tipo;
        carrera.modalidad = req.body.modalidad;
        carrera.validada = true;

        await ModeloCarrera.create(carrera)
             .then(resultado => {
                 res.redirect('/carreras/');
             })
             .catch(error => { 
                //res.send("Ocurrió un error")
                res.render('carreras/actualizar', { datos: carrera,errors:{nombre:"Nombre incorrecto"} }); 
                console.log(error);
            });
    }
    catch(error) {
        //TODO: perfeccionar mensaje de error controladorCarrera
        throw("Ocurrió un error: " + error);
    }
}

exports.actualizarCarrera_post = async function(req, res) { 
    try { 
        let idCarrera = req.params.id; // se toma el ID de la URL 
        let carrera = await ModeloCarrera.findByPk(idCarrera);

        if(!carrera) { 
            //TODO: Crear plantilla para cuando sucede un error.
             res.send("No se encontró la carrera");
             console.log("No se encontró una carrera buscada");
        } else { 
             let carreraActualizada = {  
                nombre: req.body.nombre, 
                nombreAbreviado: req.body.nombreAbreviado,
                titulo: req.body.titulo,
                resolucion: req.body.resolucion,
                duracion: req.body.duracion,
                horas: req.body.horas,
                tipo: req.body.tipo,
                modalidad: req.body.modalidad,
                validada: true
            }

            let resultado = await ModeloCarrera.update(carreraActualizada, { where: {id : idCarrera} });
            
            if(resultado) {
                //TODO: Se debe agregar un mensaje para que el admin. sepa que se modificó con éxito 
                res.redirect('/carreras');
            } else {
                res.send("No se pudo actualizar la carrera");
                console.log("Ocurrió un error al actualizar una carrera");
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
        let carrera = await ModeloCarrera.findByPk(idCarrera);

        if(!carrera) { 
            res.send("Ocurrió un error");
            console.log("Se intentó borrar una carrera que no existe");
        } else { 
            await carrera.destroy();
            res.redirect('/carreras/');
        }
    }
    catch(error) {
        res.send("Ocurrió un error y no pudo eliminarse la carrera");
        console.log(error);
    }
}