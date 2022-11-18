<template>
  <form
    class="flex w-full max-w-xl gap-2 mx-auto mt-8"
    @submit="
      (event) => {
        event.preventDefault();
        if (isLoading) return;
        if (onAddTodo) {
          onAddTodo(title);
          title = '';
        }
      }
    "
  >
    <input
      class="px-3 py-1.5 text-base font-light border rounded-lg border-stone-300 flex-1"
      type="text"
      placeholder="Fazer um bolo..."
      v-model="title"
    />
    <button
      type="submit"
      class="flex items-center relative justify-center px-3 py-1.5 bg-stone-500 text-white rounded-lg"
    >
      <span :class="{ 'opacity-0': isLoading }">Adicionar</span>
      <vue-feather v-if="isLoading" class="absolute" type="loader" animation="spin"></vue-feather>
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface AddTodoProps {
  isLoading: boolean;
  onAddTodo?: (title: string) => void;
}

defineProps<AddTodoProps>();

const title = ref('');
</script>
