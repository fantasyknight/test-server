import mongoose from 'mongoose';
import {
  DEFAULT_MONGO_URL,
  MONGODB_DATABASE,
  MONGODB_HOST,
  MONGODB_PASS,
  MONGODB_USER,
} from '../../shared/constants/database.constants';

let MONGO_URL: string;

switch (String(process.env.NODE_ENV)) {
  case 'development':
    MONGO_URL = DEFAULT_MONGO_URL;
    break;
  case 'production':
    MONGO_URL = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DATABASE}`;
    break;
  default:
    MONGO_URL = DEFAULT_MONGO_URL;
    break;
}

export const database = () => mongoose
  .connect(MONGO_URL)
  .then(() => process.stdout.write('MongoDB Connected!\n'))
  .catch((err) => {
    process.stdout.write(JSON.stringify(err));
    process.exit(1);
  });

export default database;
