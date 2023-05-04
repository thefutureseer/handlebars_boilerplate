const express = require('express');
// const exphbs = require('express-handlebars');
const {engine} = require('express-handlebars');

const path = require('path');


// initialize the express app
const app = express();

// set the port for the server to listen on
const port = process.env.PORT || 3000;

// configure handlebars as the view engine
app.engine('handlebars', engine());
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//LONG VERSION:
// app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({
//   extname: 'handlebars',
//   defaultLayout: 'main',
//   layoutsDir: path.join(app.get('views'), 'layouts'),
//   partialsDir: path.join(app.get('views'), 'partials')
// }));

// parse request bodies as JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files from the public directory
// app.use(express.static(path.join(__dirname, 'public')));

// uncomment the following lines to add controllers and sequelize configuration
// const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');
// app.use(require('./controllers'));
// app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.render('home'); 
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});