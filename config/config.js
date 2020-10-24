// {
//   "development": {
//     "username": "UsuarioServicio",
//     "password": "1234",
//     "database": "isftbd",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
require("dotenv").config();
module.exports = {
  //Configuracion de la base de datos
  //TODO: Configuracion automatica para reconcocer local de server
  username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB,
	host: process.env.DB_HOST,
	dialect: "postgres",
	define: {
		timestamps: false,
  },
  // Configuracion de seed
  seederStorage:"json",
  seederStoragePath:"./src/dataBase/seeders/seederRealizate/sequelizeSeed.json",
  // Configuracion de las migraciones
  migrationStorage:"sequelize",
  migrationStorageTableName:"migrations",

};
