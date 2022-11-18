import { Request, Response } from 'express';
import { Controller } from 'src/entities/layers';
import { DeleteTodoService } from 'src/services/delete-todo.service';

class DeleteTodoController implements Controller {
  constructor(private service: DeleteTodoService) {
    this.handler = this.handler.bind(this);
  }

  async handler(request: Request, response: Response) {
    const { id } = request.params;

    await this.service.handler(+id);

    response.json({ message: 'Todo successfully deleted' });
  }
}

export { DeleteTodoController };
