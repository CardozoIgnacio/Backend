const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config')
const db ={}
// Option 1: Passing a connection URI
db.connection = new Sequelize(config.database,config.username,config.password,{host:config.host,dialect:'postgres'}) //Example for postgres


//sequelize.sync({ force: true });
//const sequelize = new Sequelize(process.env.DB,process.env.DB_USER ,process.env.DB_PASS, {    host: 'localhost',    dialect: 'postgres',  
db.Usuario = require('../model/usuario')(db.connection,DataTypes)
db.Noticia = require('../model/noticias')(db.connection,DataTypes)
module.exports = db