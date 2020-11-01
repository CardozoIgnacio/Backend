const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Usuario } = require('../src/model/index');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'pass',
}, async (username, password, done) => {

  // Confirmar si existe el usuario
  const user = await Usuario.findOne({ where: { usuario: username } });
  if (!user) { 
    return done(null, false);
  } else { 
    // Comprobar contraseña
    user.comparePasswords(password, (esValido, err) => {
      if(esValido) {
        return done(null, user);
      } else { 
        return done(null, false);
      }
    });
  }
}));

passport.serializeUser((user, done) => { 
  done(null, user.id);
});

passport.deserializeUser((id, done) => { 
  Usuario.findByPk(id).then(user => { 
    done(null, user);
  }) 
});
// no estoy completamente seguro si es la forma correcta de deserializar un usuario
// ya que no estoy pasando ningun error y fue hecha con 'maña', sin buscar documentación porque no encontré algo certero.
// Código original de deserializeUser: (FindById está deprecado por sequelize)
// passport.deserializeUser(function(id, done) {
//   Usuario.findById(id, function(err, user) {
//     done(err, user);
//   });
// });