<template>
  <header class="w-full max-w-xl mx-auto">
    <h1 class="text-3xl font-light text-stone-900">Olá, {{ greetings() }}!</h1>
    <span class="text-base font-light text-stone-600">
      {{ todos.done }} tarefas feitas de {{ todos.total }}
    </span>
  </header>
</template>

<script lang="ts" setup>
import { greetings } from '../libs/greetings';

interface HeaderProps {
  todos: {
    total: number;
    done: number;
  };
}

defineProps<HeaderProps>();
</script>
