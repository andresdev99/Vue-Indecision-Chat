<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4 bg-blue-50">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble v-for="message in messages"
                  :key="message.id"
                  v-bind="message"
      />

    </div>
  </div>
</template>
<script setup lang="ts">
import ChatBubble from "@/components/chat/ChatBubble.vue";
import type {ChatMessage} from "@/interfaces/chat-message-interface.ts";
import {ref, watch} from "vue";

interface Props {
  messages: ChatMessage[]
}

const props = defineProps<Props>()

const chatRef = ref<HTMLDivElement>();

watch(props.messages, async() => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value?.scrollHeight,
      behavior: 'smooth'
    })
  }, 100)
})

</script>
