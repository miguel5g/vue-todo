import { Request, Response } from 'express';

import { ToggleTodoDoneService } from '../services/toggle-todo-done.service';
import { Controller } from '../entities/layers';

class ToggleTodoDoneController implements Controller {
  constructor(private service: ToggleTodoDoneService) {
    this.handler = this.handler.bind(this);
  }

  async handler(request: Request, response: Response) {
    const { id } = request.params;
    const { isDone } = request.body;

    if (typeof isDone !== 'boolean') {
      response.status(400).json({ message: 'Invalid request body' });
      return;
    }

    await this.service.handler(+id, isDone);

    response.json({ message: 'Todo successfully updated' });
  }
}

export { ToggleTodoDoneController };
