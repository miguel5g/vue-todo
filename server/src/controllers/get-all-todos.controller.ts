import { Request, Response } from 'express';

import { Controller } from '../entities/layers';
import { GetAllTodosService } from '../services/get-all-todos.service';

class GetAllTodosController implements Controller {
  constructor(private service: GetAllTodosService) {
    this.handler = this.handler.bind(this);
  }

  async handler(request: Request, response: Response) {
    const todos = await this.service.handler();

    response.json(todos);
  }
}

export { GetAllTodosController };
