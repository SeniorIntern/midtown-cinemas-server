import mongoose from 'mongoose';

export default function () {
  const URI = process.env.URI;
  if (typeof URI != 'string') return;
  mongoose.connect(URI).then(() => console.log(`Connected to MongoDB...`));
}
