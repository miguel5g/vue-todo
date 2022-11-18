import { Todo } from '@prisma/client';

import { Service } from '../entities/layers';
import { prisma } from '../libs/prisma';

class GetAllTodosService implements Service<Todo[]> {
  async handler() {
    return prisma.todo.findMany();
  }
}

export { GetAllTodosService };
