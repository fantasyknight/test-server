import { configService } from 'nest-shared';

export const PORT = configService.getPort() || 3000;
export const BODY_PARSER_LIMIT: string =
  configService.getValue('BODY_PARSER_LIMIT', false) || '15mb';

export const MORGAN_FORMAT: string =
  configService.getValue('MORGAN_FORMAT', false) ||
  ':date[iso] HTTP/:http-version :method :url :status :response-time ms';
