<template>
  <div class="flex gap-2 py-3 font-light group">
    <TodoCheckbox :is-checked="todo.isDone" :on-click="() => handleToggleDone(todo)" />
    <span class="flex-1">{{ todo.title }}</span>
    <button
      type="button"
      class="flex items-center justify-center px-1 py-1 transition-opacity border rounded opacity-0 border-stone-500 group-hover:opacity-100"
      @click="onRemoveTodo(todo.id)"
    >
      <vue-feather class="stroke-stone-600" stroke="inherit" type="trash" size="1rem"></vue-feather>
    </button>
  </div>
</template>

<script lang="ts" setup>
import TodoCheckbox from './todo-checkbox.vue';
import type { Todo } from '../typings';
import { toggleTodoDone } from '../libs/todos';

interface TodoCardProps {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
}

defineProps<TodoCardProps>();

function handleToggleDone(todo: Todo) {
  toggleTodoDone(todo.id, !todo.isDone).then(() => (todo.isDone = !todo.isDone));
}
</script>
