import { Service } from '../entities/layers';
import { prisma } from '../libs/prisma';

class DeleteTodoService implements Service<void> {
  async handler(id: number) {
    await prisma.todo.delete({ where: { id } });
  }
}

export { DeleteTodoService };
