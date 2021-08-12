const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const User = require('./models/user');
const Site = require('./models/site');
const Groupe = require('./models/groupe');
const Visite = require('./models/visite');
const Visiteur = require('./models/visiteur');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use( adminRoutes);

app.use(errorController.get404);

Visite.belongsTo(Visiteur,{constraints: true, onDelete:'CASCADE'});
Visiteur.hasMany(Visite);

Visite.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
User.hasMany(Visite);

sequelize
  .sync()
  .then(result => {
    //console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });