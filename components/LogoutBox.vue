<template>
  <div class="mx-w-80 rounded-md border border-gray-400 p-4 shadow-lg">
    <div class="flex w-full justify-center">
      <p class="font-sans text-2xl tracking-widest">Logout</p>
    </div>

    <div class="submit-field my-2 mt-6 flex w-full justify-center p-2">
      <button
        class="custom-gradient p-auto mt-1 w-3/5 cursor-pointer rounded border-transparent px-3 py-2 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-slate-50 focus:bg-slate-400 focus:outline-none"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
  </div>
  <Toast />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { useToast } from 'primevue';
import { useRouter } from '#vue-router';

const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();

// Logout-Logik
async function handleLogout() {
  try {
    await authStore.logoutUser(); // Aufrufen der Logout-Action aus dem Store
    toast.add({
      severity: 'success',
      summary: 'Erfolgreich!',
      detail: 'Du bist jetzt ausgeloggt!',
      life: 3000,
    });
    router.push('/'); // Weiterleitung zur Startseite oder Login-Seite nach dem Logout
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Fehler beim Ausloggen!',
      life: 3000,
    });
  }
}
</script>

<style>
.custom-gradient {
  background-image: linear-gradient(to right, #feea0e 2%, #ec4899 120%);
}

.custom-gradient:focus {
  background-image: none; /* Entfernt das Gradient-Image */
}
</style>
