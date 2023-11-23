import mongoose, { InferSchemaType } from 'mongoose';

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  movieTitle: {
    type: String,
    trim: true,
    required: true,
    maxlength: 120,
  },
  movieGenre: {
    type: [String],
    trim: true,
    required: true,
    maxlength: 120,
  },
  movieDescription: {
    type: String,
    trim: true,
    required: true,
    maxlength: 240,
  },
  movieReleaseDate: {
    type: String,
    required: true,
  },
  movieDuration: {
    type: String,
    trim: true,
    required: true,
    maxlength: 120,
  },
  movieDirector: {
    type: String,
    trim: true,
    required: true,
    maxlength: 60,
  },
  movieCast: {
    type: [String],
    required: true,
  },
});

type MovieType = InferSchemaType<typeof MovieSchema>;

const Movie = mongoose.model<MovieType>('movies', MovieSchema);

export { MovieSchema, MovieType };
export default Movie;
