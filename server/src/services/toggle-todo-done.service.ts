import { prisma } from '../libs/prisma';
import { Service } from '../entities/layers';

class ToggleTodoDoneService implements Service<void> {
  async handler(id: number, isDone: boolean) {
    await prisma.todo.update({
      where: { id },
      data: { isDone },
    });
  }
}

export { ToggleTodoDoneService };
