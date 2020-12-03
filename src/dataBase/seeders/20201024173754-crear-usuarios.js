var bcrypt = require("bcrypt");
module.exports = {
	//Se ejecuta cuando realizamos la "siembra" de los datos
	up: async (queryInterface, Sequelize) => {
		let arryUsuarios = [
			{
				usuario: "SandraOvando",
				nombre: "Sandra",
				apellido: "Ovando",
				password: "1234",
				rol: "Administrador",
			},
			{
				usuario: "GeraS",
				nombre: "Gerardo",
				apellido: "Sardinez",
				password: "1234",
				rol: "Estudiante",
			},
			{
				usuario: "GinoRc",
				nombre: "Gino",
				apellido: "Rossi",
				password: "1234",
				rol: "Estudiante",
			},
			{
				usuario: "BenvenutoD",
				nombre: "Daniel",
				apellido: "Benvenuto",
				password: "1234",
				rol: "Profesor",
			},
			{
				usuario: "DiBella",
				nombre: "Alejandro",
				apellido: "Di Bella",
				password: "1234",
				rol: "Profesor",
			},
			{
				usuario: "MallemaciK",
				nombre: "Karina",
				apellido: "Mallemaci",
				password: "1234",
				rol: "Profesor",
			},
			{
				usuario: "Nachin",
				nombre: "José Ignacio",
				apellido: "Cardozo",
				password: "1234",
				rol: "Estudiante",
			},
			{
				usuario: "Tenayna",
				nombre: "Iñaki",
				apellido: "Tenayna",
				password: "1234",
				rol: "Estudiante",
			},
			{
				usuario: "Juani12",
				nombre: "Juan",
				apellido: "Castelli",
				password: "1234",
				rol: "Estudiante",
			},
			{
				usuario: "Igna",
				nombre: "Ignacio",
				apellido: "Larracoechea",
				password: "1234",
				rol: "Estudiante",
			},
		];
		var arryUsuariosEncry ;
		arryUsuariosEncry= arryUsuarios.map( function (user) {
      user.password =  bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
      return user
    })
    // console.log(arryUsuariosEncry)
		await queryInterface.bulkInsert("Usuario", arryUsuariosEncry, {});
  
	},
	// Se ejecuta la momento de "desacer" la siembra
	down: async (queryInterface, Sequelize) => {
		//Al proporcionarle null eliminara todos los usarios
		//Es posible realizar eliminaciones especificas, en vez de
		//solamente pasar el null, pasar un{ rol:10} de esta manera
		// solo elimina los usuarios con rol 10
		await queryInterface.bulkDelete("Usuario", null, {});
	},
};
 