import { defineStore } from 'pinia'
import type { StorageType } from '~/types'

export const useConfigurationStore = defineStore('configs', {
  state: () => {
    const theme = ref("dark")
    const position = ref({ x: 980, y: 460 })
    const transparent = ref(false)
    const anonymous = ref(false)
    return { position, transparent, anonymous, theme }
  },
  getters: {
    getPosition: (state) => state.position,
    isTransparent: (state) => state.transparent,
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
    changeTransparency() {
      this.transparent = !this.transparent
    },
    updateTheme(newTheme: string) {
      this.theme = newTheme
    }
  },
  persist: {
    key: "discord-configs"
  }
})