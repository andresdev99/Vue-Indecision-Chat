<template>
  <div :class="['flex', { 'justify-end': itsMine }]">
    <div class="text-black p-2 rounded-lg max-w-xs" :class="bubbleClasses">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage">
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}

const {itsMine} = defineProps<Props>();

const bubbleClasses = itsMine ? "bg-green-300" : "bg-blue-200"

</script>
