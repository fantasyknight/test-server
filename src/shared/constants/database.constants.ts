import { configService } from 'nest-shared';

export const MONGODB_HOST = configService.getValue('MONGODB_HOST');
export const MONGODB_USER = configService.getValue('MONGODB_USER');
export const MONGODB_PASS = configService.getValue('MONGODB_PASS');
export const MONGODB_DATABASE = configService.getValue('MONGODB_DATABASE');
export const DEFAULT_MONGO_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:27017/admin`;
