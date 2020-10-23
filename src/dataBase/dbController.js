const { Sequelize } = require('sequelize');
const config = require('../../config/config')
// Option 1: Passing a connection URI
const sequelize = new Sequelize(config.database,config.username,config.password,{host:config.host,dialect:'postgres'}) //Example for postgres

//sequelize.sync({ force: true });
//const sequelize = new Sequelize(process.env.DB,process.env.DB_USER ,process.env.DB_PASS, {    host: 'localhost',    dialect: 'postgres',  });

module.exports = sequelize