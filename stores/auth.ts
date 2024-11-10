import { defineStore } from 'pinia';
import useFirebaseAuth from '@/composables/useFirebaseAuth'; 
import { onAuthStateChanged, type User } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authStatus: '',
    currentUser: null as User | null,
  }),
  actions: {
    async initAuth() {
      const { $auth } = useNuxtApp();
      onAuthStateChanged($auth, (user) => {
        if (user) {
          this.currentUser = user;
          this.authStatus = 'authenticated';
        } else {
          this.currentUser = null;
          this.authStatus = 'unauthenticated';
        }
      });
    },

    async registerUser(email: string, password: string) {
      try {
        const { registerUser } = useFirebaseAuth();
        await registerUser(email, password);
        this.authStatus = 'success';
      } catch (error) {
        this.authStatus = 'error';
        throw error;
      }
    },

    async loginUser(email: string, password: string) {
      try {
        const { loginUser } = useFirebaseAuth();
        await loginUser(email, password);
        this.authStatus = 'success';
      } catch (error) {
        this.authStatus = 'error';
        throw error;
      }
    },

    async logoutUser() {
      const { $auth } = useNuxtApp();
      await $auth.signOut();
      this.authStatus = 'unauthenticated';
      this.currentUser = null;
    },
  },
});