var mongoose = require('mongoose');
var IncidentSchema = new mongoose.Schema({
  description: String,
  type: String,
  date_and_time: String,
  location: String,
  image: String
});

module.exports = mongoose.model('incident', IncidentSchema);

//{"description":"robo de vehiculo","type":"robo","date_and_time":"25-08-2018 12:15","location":"Quito","image":""}
