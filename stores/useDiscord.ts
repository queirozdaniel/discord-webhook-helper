import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'
import { type Actor } from '~/types'

export const useDiscordStore = defineStore('discord', {
  state: () => {
    const selectedId = ref('')
    const webhook = ref('')
    const actors = ref<Actor[]>([])
    return { webhook, actors, selectedId }
  },
  getters: {
    selectedActor: (state) => state.actors.find(actor => actor.id === state.selectedId),
    getActors: (state) => state.actors,
    webhookUrl: (state) => state.webhook,
    canUse: (state) => state.webhook.length > 0
  },
  actions: {
    updateWebhookURL(url: string) {
      console.log("Atualizando Webhook URL ", url)
      this.webhook = url
    },
    createActor(actor: Actor) {
      this.actors.push({
        id: uuid.v4(),
        name: actor.name,
        avatarUrl: actor.avatarUrl
      })
    },
    removeActor(actor: Actor) {
      this.actors.splice(this.actors.indexOf(actor), 1)
    },
    selectAnActor(id: string) {
      this.selectedId = id
    }
  },
  persist: {
    key: "discord-memes",
  }
})