<template>
  <div class="min-h-screen px-6 py-8 md:py-12 lg:py-16 bg-gray-50">
    <Header
      :todos="{ total: todos?.length || 0, done: todos?.filter((todo) => todo.isDone).length || 0 }"
    />

    <AddTodoForm :is-loading="isLoading" :on-add-todo="handleAddTodo" />

    <ul class="w-full max-w-xl mx-auto mt-16">
      <li v-for="todo in todos">
        <TodoCard :todo="todo" :on-remove-todo="handleRemoveTodo" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from './typings';
import AddTodoForm from './components/add-todo-form.vue';
import Header from './components/header.vue';
import TodoCard from './components/todo-card.vue';
import { createTodo, deleteTodo, getAllTodos } from './libs/todos';
import { onMounted, ref } from 'vue';

const todos = ref<Todo[] | null>(null);
const isLoading = ref(false);

function handleAddTodo(title: string) {
  isLoading.value = true;

  createTodo(title).then((todo) => {
    todos.value?.push(todo);
    isLoading.value = false;
  });
}

function handleRemoveTodo(id: number) {
  deleteTodo(id).then(() => {
    if (!todos.value) return;

    todos.value = todos.value?.filter((todo) => todo.id !== id);
  });
}

onMounted(async () => {
  todos.value = await getAllTodos();
});
</script>
