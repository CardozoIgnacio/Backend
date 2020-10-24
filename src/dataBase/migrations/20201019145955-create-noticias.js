module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Noticia', {
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
    await queryInterface.dropTable('Noticia');
  }
};