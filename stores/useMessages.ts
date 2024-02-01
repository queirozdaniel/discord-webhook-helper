import { defineStore } from 'pinia'
import { type Message } from '~/types'

export const useMessagesStore = defineStore('messages', {
  state: () => {
    const messages = ref<Message[]>([])
    return { messages }
  },
  getters: { 
    getMessages: (state) => state.messages,
  },
  actions: {
    addMessage(message: Message) {
        this.messages = [
            ...this.messages,
            message
        ]
    },
    cleanMessage() {
        this.messages = []
    }
  },
  persist: {
    key: "messages",
  }
})