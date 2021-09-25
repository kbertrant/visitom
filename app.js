const path = require('path');
var mysql = require('mysql');
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

var sessionStore = new MySQLStore({
  host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'visitom',
  schema: {
		tableName: 'sessions',
		columnNames: {
			session_id: 'session_id',
			expires: 'expires',
			data: 'data'
		}
	}
}
);

app.use(session({
	secret: 'my secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user.id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

sequelize
  .sync()
  //.sync({force:true})
  .then(result => {
    //console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });