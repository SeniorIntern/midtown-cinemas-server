import express from 'express';
import validateId from '../middlewares/validateId';
import Movie from '../models/movie';

const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.status(200).send(movies);
});

router.get('/:id', validateId, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(400).send('No movie found!');
  res.status(200).send(movie);
});

router.post('/', async (req, res) => {
  const movie = new Movie({
    movieTitle: req.body.movieTitle,
    movieGenre: req.body.movieGenre,
    movieDescription: req.body.movieDescription,
    movieReleaseDate: req.body.movieReleaseDate,
    movieDuration: req.body.movieDuration,
    movieDirector: req.body.movieDirector,
    movieCast: req.body.movieCast,
    movieThumbImg: req.body.movieThumbImg,
    movieCoverImg: req.body.movieCoverImg,
  });
  await movie.save();
  res.status(200).send(movie);
});

router.put('/:id', validateId, async (req, res) => {
  // optimistic update
  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        movieTitle: req.body.movieTitle,
        movieGenre: req.body.movieGenre,
        movieDescription: req.body.movieDescription,
        movieReleaseDate: req.body.movieReleaseDate,
        movieDuration: req.body.movieDuration,
        movieDirector: req.body.movieDirector,
        movieCast: req.body.movieCast,
        movieThumbImg: req.body.movieThumbImg,
        movieCoverImg: req.body.movieCoverImg,
      },
    },
    { new: true }
  );
  res.status(200).send(movie);
});

router.delete('/:id', validateId, async (req, res) => {
  // optimistic update
  const movie = await Movie.findByIdAndDelete(req.params.id);
  res.status(200).send(movie);
});

export default router;
