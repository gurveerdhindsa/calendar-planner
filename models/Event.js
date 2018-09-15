var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title: String,
  id: String,
  time: { type: Date },
  description: String
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
