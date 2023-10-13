import envSchema from 'env-schema';
import S from 'fluent-json-schema';
import path from 'path';

export type Env = {
  LOG_LEVEL: string;
  VERSION: string;
  BASE_PATH: string;
  PORT: number;
  HOST: string;
  JWT_TOKEN_EXPIRES: number;
  JWT_REFRESH_EXPIRES: number;
  PUBLIC_PATH: string;
  BACKEND_ENV: string;
};

const schema = S.object<Env>()
  .prop('LOG_LEVEL', S.string().enum(['debug', 'info', 'warn', 'error', 'trace']).default('debug'))
  .prop('VERSION', S.string().default('latest'))
  .prop('BASE_PATH', S.string().default('/api'))
  .prop('HOST', S.string().default('0.0.0.0'))
  .prop('PORT', S.number().default(4000))
  .prop('JWT_TOKEN_EXPIRES', S.number().default(60 * 60 * 24 /* 1 day */))
  .prop('JWT_REFRESH_EXPIRES', S.number().default(60 * 60 * 24 * 7 /* 1 week */))
  .prop('PUBLIC_PATH', S.string().default(path.resolve(__dirname, '../../public')))
  .prop('BACKEND_ENV', S.string().default('local'))
  .valueOf();

export const Env = envSchema<Env>({
  dotenv: true,
  schema
});
