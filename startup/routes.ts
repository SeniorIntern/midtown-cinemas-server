import express from 'express';
import { Application } from 'express';
import genres from '../routes/genres';
import movies from '../routes/movies';

export default function (app: Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/genres', genres);
  app.use('/api/movies', movies);
}
