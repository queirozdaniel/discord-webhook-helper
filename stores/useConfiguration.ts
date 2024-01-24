import { defineStore } from 'pinia'
import type { StorageType } from '~/types'

export const useConfigurationStore = defineStore('configs', {
  state: () => {
    const theme = ref("dark")
    const position = ref({ x: 980, y: 460 })
    const storageType = ref<StorageType>("localStorage")
    const anonymous = ref(false)
    return { position, storageType, anonymous, theme }
  },
  getters: {
    getPosition: (state) => state.position,
    getStorageType: (state) => state.storageType,
    isAnonymous: (state) => state.anonymous,
    getTheme: (state) => state.theme
  },
  actions: {
    updatePosition(newPosition: { x: number, y: number }) {
        this.position = {
          ...this.position,
          ...newPosition
        }
    },
    changeAnonymous() {
        this.anonymous = !this.anonymous
    },
    changeStorageType() {
        if(this.storageType === "localStorage") {
            this.storageType = "sessionStorage"
        } else {
            this.storageType = "localStorage"
        }
        useStorageChange(this.storageType)
    },
    updateTheme(newTheme: string) {
      this.theme = newTheme
    }
  },
  persist: {
    key: "discord-configs"
  }
})