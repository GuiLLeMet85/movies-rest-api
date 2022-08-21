const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema (
{
      title: String,
      year: Number,
      director: String,
      duration: Number,
      synopsis: String,
      image: String
});

const apiMovie = mongoose.model('Movies', movieSchema);

module.exports = apiMovie;