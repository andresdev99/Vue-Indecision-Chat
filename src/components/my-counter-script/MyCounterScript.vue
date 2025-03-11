<template>
  <section>
    <div>
      <h1>{{ text }}</h1>
      <h2>Counter:{{ counter }}</h2>
      <h3>Squared:{{ squaredCounter }}</h3>
      <button @click="counter++">Increase</button>
      <button @click="counter--">Decrease</button>
    </div>
  </section>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';

export default defineComponent({
  props: {
    text: String,
    value: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup({value}) {
    const counter = ref(value)
    const squaredCounter = computed(() => counter.value * counter.value)
    return {
      counter,
      squaredCounter,
    }
  }
})
// import {computed, ref} from "vue";
//
// interface Props {
//   text?: string
//   value: number
// }
//
// const {value, text} = defineProps<Props>()
// const {value} = defineProps({
//   value: Number,
// })
</script>
