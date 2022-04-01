// connect to mongodb via mongoose
import mongoose from 'mongoose';
import config from '../config/config';
import { ConnectOptions } from 'mongoose';

class MongoDB {
  constructor() {
    mongoose.connect(config.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    } as ConnectOptions);
  }
}

export {MongoDB};

export default new MongoDB();
