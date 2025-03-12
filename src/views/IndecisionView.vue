<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div
      class="bg-green-500 p-4 text-white flex justify-between rounded-tr-lg rounded-tl-lg items-center">
      <span>Tatiana</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <MessageBox @send-message="onMessage($event)"/>
  </div>
</template>
<script setup lang="ts">
import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import {useChat} from "@/composables/useChat.ts";

const {messages, onMessage} = useChat()
</script>
