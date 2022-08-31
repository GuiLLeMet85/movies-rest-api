require('dotenv').config();
const mongoose = require('mongoose');
const Movies = require('../models/Movies');

const movies = [

  {
    title: "Superman",
    year: 1979,
    director: "Josep",
    duration: 122,
    synopsis: "blablabla pum",
    image: "https://es.web.img3.acsta.net/pictures/14/03/06/13/55/345785.jpg"
  },
  {
    title: "Spiderman",
    year: 1989,
    director: "Cristian",
    duration: 102,
    synopsis: "blablabla pimum",
    image: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg"
  },
  {
    title: "Batman",
    year: 1993,
    director: "Dani",
    duration: 112,
    synopsis: "blablabla pam",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
  },
  {
    title: "Torrente",
    year: 1997,
    director: "Marina",
    duration: 92,
    synopsis: "facha facha facha, obrero",
    image: "https://images-2.wuaki.tv/system/artworks/7308/original/torrente-4-lethal-crisis-crisis-letal-1611319727.jpeg"
  }
]

// Add the model and array you want to seed

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movies.create(movies)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })