const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.DATABASE_URL) // Example for postgres
sequelize.authenticate()

