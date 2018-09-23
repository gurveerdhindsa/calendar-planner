var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  day: String,
  title: String,
  time: String,
  description: String
});

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
