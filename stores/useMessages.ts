import { defineStore } from 'pinia'
import { type Message } from '~/types'

export const useMessagesStore = defineStore('messages', {
  state: () => {
    const position = ref(0)
    const messages = ref<{ position: number, message: Message }[]>([])
    return { messages, position }
  },
  getters: { 
    getPosition: (state) => state.position,
    getMessages: (state) => state.messages.map(item => item.message),
    getMessagesToSend: (state) => state.messages,
  },
  actions: {
    addMessage(message: Message) {
        this.messages = [
          ...this.messages,
          { position: this.position,  message }
        ]
        this.position += 1
    },
    cleanMessage() {
        this.messages = []
    }
  },
  persist: {
    key: "messages",
  }
})