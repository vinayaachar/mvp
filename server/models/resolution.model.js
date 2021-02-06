const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resolutionSchema = new Schema({
  username: { type: String, required: true },
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, required: true},
  },
 {
  timestamps: true,
});

//API routes CRUD operation

const Resolution = mongoose.model('Resolution', resolutionSchema);

module.exports = Resolution;