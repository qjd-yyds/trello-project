export interface IerrorHandler {
  statusCode: number;
  error: string;
  message: string;
  errorDetails?: string;
}
