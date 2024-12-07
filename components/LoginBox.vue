<template>
  <div class="w-80 rounded-md border border-gray-400 p-4 shadow-lg">
    <div class="flex w-full justify-center">
      <p class="font-sans text-2xl tracking-widest">Login</p>
    </div>
    <form @submit.prevent="handleLogin">
      <div class="input-field m-y2 mt-5 w-full p-2">
        <label for="Email" class="ml-1.5 font-mono">Email</label>
        <input
          class="mt-1 w-full rounded-md border bg-slate-100 p-2 text-black shadow-inner"
          type="email"
          v-model="creds.email"
        />
      </div>
      <div class="input-field my-2 w-full p-2">
        <label for="Email" class="ml-1.5 font-mono">Password</label>
        <input
          class="mt-1 w-full rounded-md border bg-slate-100 p-2 text-black shadow-inner"
          type="password"
          v-model="creds.password"
        />
      </div>
      <div class="submit-field my-2 mt-6 flex w-full justify-center p-2">
        <button
          class="custom-gradient p-auto mt-1 w-3/5 cursor-pointer rounded border-transparent px-3 py-2 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-slate-50 focus:bg-slate-400 focus:outline-none"
          type="submit"
        >
          Senden
        </button>
      </div>
    </form>
  </div>
  <Toast />
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useToast } from 'primevue';
import { useRouter } from '#vue-router';
const { loginUser } = useFirebaseAuth(); //Custom composable
const toast = useToast();
const creds = reactive({
  email: '',
  password: '',
});
const authStore = useAuthStore();
const router = useRouter();
onMounted(() => {
  authStore.initAuth();
});
watch(
  () => authStore.currentUser,
  (currentUser) => {
    if (currentUser) {
      router.push('/admin');
    } else {
      console.info('Melden Sie sich an!');
    }
  },
);
async function handleLogin() {
  const authStatus = await loginUser(creds.email, creds.password);
  if (authStatus) {
    toast.add({
      severity: 'success',
      summary: 'Erfolgreich!',
      detail: 'Login erfolgreich!',
      life: 30000,
    });
    router.push('/admin');
  } else {
    toast.add({
      severity: 'error',
      summary: 'Fehler',
      detail: 'Login fehlgeschlagen!',
      life: 30000,
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
