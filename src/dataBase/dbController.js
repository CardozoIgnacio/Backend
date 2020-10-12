const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
 const sequelize = new Sequelize(process.env.DATABASE_URL,{sync:{force:true}}) //Example for postgres

//const sequelize = new Sequelize(process.env.DB,process.env.DB_USER ,process.env.DB_PASS, {    host: 'localhost',    dialect: 'postgres',  });


module.exports = sequelize