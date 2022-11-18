import { Todo } from '../typings';

async function $(path: string, init?: RequestInit | undefined): Promise<any> {
  return fetch(`http://localhost:4000${path}`, init).then((response) => response.json());
}

async function createTodo(title: string): Promise<Todo> {
  return $('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
}

async function deleteTodo(id: number): Promise<void> {
  await $(`/todos/${id}`, { method: 'DELETE' });
}

async function getAllTodos(): Promise<Todo[]> {
  return $('/todos');
}

async function toggleTodoDone(id: number, isDone: boolean): Promise<void> {
  $(`/todos/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ isDone }),
  });
}

export { createTodo, deleteTodo, getAllTodos, toggleTodoDone };
