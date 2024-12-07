<template>
  <div class="flex min-h-screen flex-col items-center">
    <div class="m-12 font-mono text-2xl">Anfragen</div>
    <div class="w-full p-5">
      <DatabaseEntries />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from '#vue-router';

const authStore = useAuthStore();
const router = useRouter();
onMounted(() => {
  authStore.initAuth();
});

onBeforeMount(() => {
  if (authStore.authStatus) {
    if (authStore.authStatus == 'authenticated') {
      router.push('/admin');
    } else {
      console.info('Melden Sie sich an!');
      router.push('/admin/login');
    }
  }
});

watch(
  () => authStore.authStatus,
  (authStatus) => {
    if (authStatus == 'authenticated') {
      router.push('/admin');
    } else {
      console.info('Melden Sie sich an!');
      router.push('/admin/login');
    }
  },
);
</script>

<style scoped></style>
