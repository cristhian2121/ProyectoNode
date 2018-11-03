var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/pruebanode', function (err, res) {
  if (err) console.log("error");
  console.log('Cristhian, Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import model and controllers
var EmployeeModel = require('./models/Employee')(app, mongoose);
var CityModel = require('./models/City')(app, mongoose);

var EmployeeControll = require('./controlls/employee');
var CityControll = require('./controlls/city');

// API routes
var Path = express.Router();
// var CityRouter = express.Router();

Path.route('/employee')
  .get(EmployeeControll.Getall)
  .post(EmployeeControll.PostAll);

Path.route('/employee/find/:_id')
  .get(EmployeeControll.GetByIdCity)
  .delete(EmployeeControll.DeleteEmployee);
  


// Path.route('/employee/:city')
//   .get(EmployeeControll.GetByIdCity)
//   .put(TVShowCtrl.updateTVShow)
//   .delete(TVShowCtrl.deleteTVShow);

Path.route('/city')
  .get(CityControll.GetAll)
  .post(CityControll.PostAll)

app.use('/api', Path);
// app.use('/api', CityRouter);

// Start server
app.listen(3000, function () {
  console.log("Cristhian Node server running on http://localhost:3000");
});