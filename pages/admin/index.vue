<template>
  <div class="flex min-h-screen flex-col items-center">
    <div class="text-2xl font-mono m-12">
      Anfragen
    </div>
    <div class="p-5 w-full">
      <DatabaseEntries />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from '#vue-router';

const authStore = useAuthStore();
const router = useRouter();
onMounted(() => {
  authStore.initAuth();
});
watch(
  () => authStore.authStatus,
  (authStatus) => {
    if (authStatus == 'authenticated') {
      router.push('/admin');
    } else {
      console.info('Melden Sie sich an!');
      router.push('/admin/login')
    }
  },
);
</script>

<style scoped></style>
