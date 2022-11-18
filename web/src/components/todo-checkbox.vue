<template>
  <div
    class="flex items-center justify-center w-6 h-6 border rounded-full cursor-pointer"
    :class="{
      'border-dashed': !isChecked,
      'border-stone-600': !isChecked,
      'border-stone-900': isChecked,
      'bg-stone-200': isChecked,
    }"
    role="checkbox"
    @click="onClick && onClick()"
  >
    <vue-feather v-if="isChecked" type="check" size="1rem"></vue-feather>
  </div>
</template>

<script lang="ts" setup>
interface TodoCheckboxProps {
  isChecked?: boolean;
  onClick?: () => void;
}

defineProps<TodoCheckboxProps>();
</script>
