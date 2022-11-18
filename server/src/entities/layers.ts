import { Request, Response } from 'express';

export interface Service<T> {
  handler: (...args: any) => Promise<T>;
}

export interface Controller {
  handler: (request: Request, response: Response) => Promise<void>;
}
