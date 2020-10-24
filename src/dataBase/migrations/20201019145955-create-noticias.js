module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Noticias', {
      idNoticia :{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
      },
      tituloNoticia: Sequelize.STRING,
      cuerpoNoticia: Sequelize.STRING,
      visibilidad: Sequelize.BOOLEAN
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Noticias');
  }
};