import 'reflect-metadata';
import dotenv from 'dotenv';

import app from './core/app';
import appConfig from './core/config';

import './container';

dotenv.config();

app.listen(appConfig.port, () =>
  console.log('Api running on port %s.', appConfig.port),
);
