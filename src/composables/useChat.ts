import {ref} from "vue";
import type {ChatMessage} from "@/interfaces/chat-message-interface.ts";
import type {YesNoResponse} from "@/interfaces/yes-no-response.ts";

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);
  const onMessage = async (text: string) => {
    messages.value.push(
      {
        id: Math.random(),
        message: text,
        itsMine: true,
      }
    )

    if (text.includes("?")) {
      const {answer, image} = await getBotResponse()

      // Delay for 1 second before pushing bot response
      await new Promise(resolve => setTimeout(resolve, 1500));

      messages.value.push(
        {
          id: Math.random(),
          message: answer,
          itsMine: false,
          image: image
        }
      )
    }
  }

  const getBotResponse = async () => {
    const response = await fetch('https://yesno.wtf/api')
    return await (response.json()) as YesNoResponse
  }

  return {
    messages,
    onMessage
  }
}
