import { defineStore } from 'pinia'
import { useToggle } from '#build/imports';

export const useLandingStore = defineStore({
  id: 'useLandingStore',
  state: () => ({ showLandingPage: true as boolean}),
  actions: {
    debugInfo() {
      console.info(`Reveal website triggered!\nState: ${this.showLandingPage}`);
    }
  }
})
