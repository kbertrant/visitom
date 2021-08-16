const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

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

var options = {
	host: 'localhost',
	port: 3306,
	user: 'session_test',
	password: 'password',
	database: 'session_test'
};

var sessionStore = new MySQLStore(options);

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

sequelize
  .sync()
  .then(result => {
    //console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });