import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.mongoDB();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }
  private mongoDB(): void {
    mongoose.connect(`mongodb://localhost:27017/mongo-integration`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
