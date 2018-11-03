var mongoose = require('mongoose');
var Employee  = mongoose.model('employee');

//GET - Return all employees in the DB
exports.Getall = function(req, res) {
	Employee.find(function(err, employee) {
	if(err) res.send(500, err.message);
	console.log('GET /employee');
		res.status(200).jsonp(employee);
	});
};

// GET - By Id
exports.GetByIdCity = function(req,res){
	console.log("GET BY ID");
	Employee.findOne(res.params._id).exec(function (err,employee){
		if(err) res.send(500, err.message);
			res.status(200).jsonp(employee)
	});
};

//POST
exports.PostAll = function(req, res) {
	console.log('POST');
	var employee = new Employee({
        nombres: req.body.nombres,
        documentos: req.body.documentos,
		fechaNacimiento: req.body.fechaNacimiento,
		ciudad: req.body.ciudad,
        cargo: req.body.cargo,
        observaciones: req.body.observaciones
	});

	employee.save(function(err, employee) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(employee);
	});
};

// Delete
exports.DeleteEmployee = function(req, res) {
	console.log("DELETE");
	Employee.findById(req.params.id, function(err, employee) {
		employee.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};

