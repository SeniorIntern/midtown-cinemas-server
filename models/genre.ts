import mongoose, { InferSchemaType } from 'mongoose';

const GenreSchema = new mongoose.Schema({
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  genreTitle: {
    type: String,
    required: true,
    maxlength: 120,
  },
});

type GenreType = InferSchemaType<typeof GenreSchema>;

const Genre = mongoose.model<GenreType>('genres', GenreSchema);

export { GenreSchema, GenreType };
export default Genre;
