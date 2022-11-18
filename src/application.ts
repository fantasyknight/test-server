import helmet from 'helmet';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import express from 'express';
import compression from 'compression';
import morgan from 'morgan';

import  {database} from './infra/database';

import Routes from './routes';

import {
  BODY_PARSER_LIMIT,
  MORGAN_FORMAT,
} from './shared/constants/app.constants';

export class Application {
  public express: express.Application;

  constructor() {
    this.initialize()
      .then(() => process.stdout.write('Server started\n'))
      .catch((err) => {
        process.stderr.write(err.message);
        process.exit(1);
      });
  }

  protected async initialize(): Promise<void> {
    this.express = express();
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(compression());
    this.express.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.express.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.express.use(morgan(MORGAN_FORMAT));
    this.express.use(Routes);
    await database();
  }
}

export default new Application().express;
