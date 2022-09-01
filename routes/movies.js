const Movies = require('../models/Movies');
const router = require('express').Router();
const ErrorResponse = require('../utils/error');

// @desc    Get all movies
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {
  // Run 'npm install' and 'npm run dev' and check on Postman if a GET request 
  // to http://localhost:8000/api/v1/movies returns the following response.
  // If it does, you are ready to work!

  try {
    const movies = await Movies.find ({});
    if (!movies) {
      next(new ErrorResponse('No movies found', 404));
    } res.status(200).json({ data: movies })
  } catch (error) {
    next(error);
  }
});

// @desc    Get single movie
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    const movie = await Movies.findById(id);
    if (!movie) {
      next (new ErrorResponse (`Movie not found by id: ${id}`, 404));
    } 
    res.status(200).json({ data: movie })
  } catch (error) {
    next (error);
  }
});

// @desc    Create a movie
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {
  const {title, year, director, duration, synopsis, image} = req.body;
  try {
    const newMovie = await Movies.create({title, year, director, duration, synopsis, image});
      res.status(201).json({ data: newMovie });
  } catch (error) {
    next (error);
  }
});

// @desc    Edit a movie
// @route   PUT /:id
// @access  Public
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const {title, year, director, duration, synopsis, image} = req.body;
  try {
      const movie = await Movies.findById(id);
      if (!movie) {
        next (new ErrorResponse(`Movie not found by id: ${id}`,404));
      } else {
      const updatedMovie = await Movies.findByIdAndUpdate(id, {title, year, director, duration, synopsis, image}, {new:true});
      res.status(202).json({data:updatedMovie})
    }
  } catch(error) {
    next(error);
  }

});

// @desc    Delete a movie
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const deletedMovie = await Movies.findByIdAndDelete(id)
    res.status(202).json({data: deletedMovie})
  } catch (error) {
    next(error)
  }

});

module.exports = router;
