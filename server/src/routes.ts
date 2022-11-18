import { Router } from 'express';

import { CreateTodoController } from './controllers/create-todo.controller';
import { DeleteTodoController } from './controllers/delete-todo.controller';
import { GetAllTodosController } from './controllers/get-all-todos.controller';
import { ToggleTodoDoneController } from './controllers/toggle-todo-done.controller';
import { CreateTodoService } from './services/create-todo.service';
import { DeleteTodoService } from './services/delete-todo.service';
import { GetAllTodosService } from './services/get-all-todos.service';
import { ToggleTodoDoneService } from './services/toggle-todo-done.service';

const routes = Router();
const createTodoController = new CreateTodoController(new CreateTodoService());
const deleteTodoController = new DeleteTodoController(new DeleteTodoService());
const getAllTodosController = new GetAllTodosController(new GetAllTodosService());
const toggleTodoDoneController = new ToggleTodoDoneController(new ToggleTodoDoneService());

routes.get('/', (_request, response) => {
  return response.status(204).json();
});

routes.post('/todos', createTodoController.handler);
routes.get('/todos', getAllTodosController.handler);
routes.delete('/todos/:id', deleteTodoController.handler);
routes.patch('/todos/:id', toggleTodoDoneController.handler);

export { routes };
