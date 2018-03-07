var mongoose = require('mongoose');
// create the schema

var PandaSchema = new mongoose.Schema({
    name: { type: String },
    weight: { type: Number }
});
var Panda = mongoose.model('Panda', PandaSchema);