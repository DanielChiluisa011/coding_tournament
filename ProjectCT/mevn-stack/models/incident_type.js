var mongoose = require('mongoose');
var Incident_typeSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('incident_type', Incident_typeSchema);
