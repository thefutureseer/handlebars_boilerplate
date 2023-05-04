//express server configuration
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//sequelize server configuration
// var sequelize = require('./config/connection');
var exphbs = require('express-handlebars');
// var helpers = require('./utils/helpers');


//handlebars configuration
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers'));
// app.use(express.static(__dirname + '/dist'));

app.listen(port);
console.log('Listening on port'+ port);