import { Request, Response } from 'express';
import { Controller } from 'src/entities/layers';
import { CreateTodoService } from 'src/services/create-todo.service';

class CreateTodoController implements Controller {
  constructor(private service: CreateTodoService) {
    this.handler = this.handler.bind(this);
  }

  async handler(request: Request, response: Response) {
    const { title } = request.body;

    const todo = await this.service.handler(title);

    response.status(201).json(todo);
  }
}

export { CreateTodoController };
