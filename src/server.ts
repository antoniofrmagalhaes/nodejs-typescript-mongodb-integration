import 'reflect-metadata';
import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';

import app from './core/app';
import appConfig from './core/config';

import './container';
import AppError from './errors/AppError';

dotenv.config();

app.use((e: Error, request: Request, response: Response, _: NextFunction) => {
  if (e instanceof AppError) {
    return response.status(e.statusCode).json({
      status: 'error',
      message: e.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: e.message,
  });
});

app.listen(appConfig.port, () =>
  console.log('Api running on port %s.', appConfig.port),
);
