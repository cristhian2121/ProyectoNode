exports = module.exports = function (app, mongoose) {

    var CitySchema = new mongoose.Schema({
        nombre: { type: String }
    });
    mongoose.model('city', CitySchema);
};