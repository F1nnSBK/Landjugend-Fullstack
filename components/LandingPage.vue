<template>
  <div
    class="landing-bg fixed top-0 h-dvh w-full bg-white bg-cover bg-center bg-no-repeat"
    v-if="showLandingPage"
  >
    <div class="flex h-5/6 items-center justify-center">
      <NewMember @navigateToWebsite="revealWebsite" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NewMember from '@/components/NewMember.vue';
import { useLandingStore } from '~/stores/landing';

const store = useLandingStore();
const { showLandingPage } = storeToRefs(store);

function revealWebsite() {
  showLandingPage.value = false;
  store.debugInfo();
  useHead({
    bodyAttrs: {
      class: '!overflow-auto',
    },
  });
}

onMounted(() => {
  useHead({
    bodyAttrs: {
      class: 'overflow-hidden w-full min-h-dvh',
    },
  });
});
</script>

<style scoped>
.landing-bg {
  background-image: url('/assets/images/waves-desktop.svg');
}
</style>
