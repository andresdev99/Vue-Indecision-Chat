<template>
  <h1>{{text}}</h1>
  <h2>Counter:{{ counter }}</h2>
  <h3>Squared:{{ squared }}</h3>
  <button @click="counter++">Increase</button>
  <button @click="counter--">Decrease</button>

</template>

<script setup lang="ts">
import {computed, ref} from "vue";

interface Props {
  text?: string
  value: number
}

const {value, text} = defineProps<Props>()
const counter = ref(value)
const squared = computed(() => counter.value * counter.value)
// const {value} = defineProps({
//   value: Number,
// })
</script>
