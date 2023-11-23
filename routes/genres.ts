import express from 'express';
import Genre from '../models/genre';
import validateId from '../middlewares/validateId';

const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Genre.find();
  res.status(200).send(genres);
});

router.get('/:id', validateId, async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  if (!genre) return res.status(400).send('No genre found!');
  res.status(200).send(genre);
});

router.post('/', async (req, res) => {
  const genre = new Genre({
    genreTitle: req.body.genreTitle,
  });
  await genre.save();
  res.status(200).send(genre);
});

router.put('/:id', validateId, async (req, res) => {
  // optimistic update
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        genreTitle: req.body.genreTitle,
      },
    },
    { new: true }
  );
  res.status(200).send(genre);
});

router.delete('/:id', validateId, async (req, res) => {
  // optimistic update
  const genre = await Genre.findByIdAndDelete(req.params.id);
  res.status(200).send(genre);
});

export default router;
