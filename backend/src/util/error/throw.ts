import { StatusCode } from '../http-status';
import { ErrorCode } from './enum';

/**
 * Simples classe para representar todos os possíveis erros do sistema. Reestruturado para facilitar na integração do sentry.
 */
export class KnownError extends Error {
  statusCode: number;

  constructor(override readonly message: ErrorCode, readonly error?: Record<string, unknown> | string) {
    super(message);
    this.statusCode = StatusCode[ErrorCode[message] as keyof StatusCode];
  }
}
