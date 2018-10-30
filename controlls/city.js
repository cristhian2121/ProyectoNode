var mongosee =  require('mongoose');
var City = mongosee.model('city');

// GET
exports.GetAll = function(req,res){
    City.find(function(err,cities){
        if(err) res.send(500, err.message);
            res.status(200).jsonp(cities);
    })
};

//POST
exports.PostAll = function(req, res) {
	var city = new City({
        nombre: req.body.nombre,
	});

	city.save(function(err, obj) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(obj);
	});
}