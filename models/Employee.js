exports = module.exports = function (app, mongoose) {

    var SchemaCity = mongoose.Schema;
    var EmployeeSchema = new mongoose.Schema({
        nombres: { type: String },
        documentos: { type: String },
        fechaNacimiento: { type: String },
        cargo: { type: String },
        ciudad: {
            type: SchemaCity.ObjectId,
            ref: "city"
        },
        observaciones: [{ 
            NroNota: {type: Number},
            nota: {type: String}
         }]
    });

    mongoose.model('employee', EmployeeSchema);
};