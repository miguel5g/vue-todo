import { Todo } from '@prisma/client';

import { Service } from '../entities/layers';
import { prisma } from '../libs/prisma';

class CreateTodoService implements Service<Todo> {
  async handler(title: string) {
    return prisma.todo.create({
      data: {
        title,
      },
    });
  }
}

export { CreateTodoService };
