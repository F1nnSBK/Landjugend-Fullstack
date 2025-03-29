<template>
  <nav class="sticky top-0 z-10 border-b-2 border-gray-100 bg-white">
    <div class="mx-6 flex items-center justify-between p-4">
      <div class="fle basis-28 items-center">
        <NuxtLink :to="{ path: '/', hash: '#Home' }" @click.prevent="revealWebsite">
          <img src="assets/images/logo/logo-hor.png" alt="laju-logo" />
        </NuxtLink>
      </div>
      <div class="flex basis-1/2 items-center justify-end sm:hidden">
        <div
          class="mr-6 cursor-pointer"
          @click.prevent="
            burgerAnimation(hideDropdownMenu);
            toggle();
          "
        >
          <span
            class="nav-button-rect1 block h-1.5 w-10 rounded-lg bg-black"
            ref="rect1"
          ></span>
          <span class="mt-1 block h-1.5 w-10 rounded-lg bg-black" ref="rect2"></span>
          <span
            class="nav-button-rect3 mt-1 block h-1.5 w-10 rounded-lg bg-black"
            ref="rect3"
          >
          </span>
        </div>
      </div>
      <div class="hidden sm:flex">
        <div>
          <NuxtLink
            :to="{ path: '/', hash: '#Home' }"
            class="m-2 p-1 duration-200 hover:text-lj-accent"
            @click.prevent="revealWebsite"
            >Home</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#Das-sind-wir' }"
            class="m-2 p-1 duration-200 hover:text-lj-accent"
            @click.prevent="revealWebsite"
            >Über Uns</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/', hash: '#Kontakt' }"
            class="m-2 p-1 duration-200 hover:text-lj-accent"
            @click.prevent="revealWebsite"
            >Kontakt</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/admin/login' }"
            class="min-w-72 rounded-md bg-lj-accent p-1.5 px-3 text-center duration-300 hover:bg-slate-700 hover:text-white focus:bg-slate-700"
            @click.prevent="revealWebsite"
            >Für Mitglieder</NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="absolute max-h-full min-h-80 w-full bg-white py-6 shadow-lg"
      v-if="!hideDropdownMenu"
    >
      <div
        class="flex w-full flex-col items-center justify-center"
        @click.prevent="
          burgerAnimation(hideDropdownMenu);
          toggle();
        "
      >
        <NuxtLink
          :to="{ path: '/', hash: '#Home' }"
          class="nav-link min-w-72 border-b-2 py-2 text-center"
          @click.prevent="revealWebsite"
          >Home</NuxtLink
        >
        <NuxtLink
          :to="{ path: '/', hash: '#Das-sind-wir' }"
          class="nav-link mt-4 min-w-72 border-b-2 py-2 text-center"
          @click.prevent="revealWebsite"
          >Über Uns</NuxtLink
        >
        <NuxtLink
          :to="{ path: '/', hash: '#Kontakt' }"
          class="nav-link mt-4 min-w-72 border-b-2 py-2 text-center"
          @click.prevent="revealWebsite"
          >Kontakt</NuxtLink
        >
        <NuxtLink
          :to="{ path: '/admin/login' }"
          class="mt-6 min-w-72 rounded-lg border-2 border-lj-accent py-2 text-center duration-300 hover:bg-lj-accent focus:border-slate-600 focus:bg-slate-600"
          @click.prevent="revealWebsite"
          >Für Mitglieder</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToggle } from '@/composables/toggle';
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

const { state: hideDropdownMenu, toggle } = useToggle(true);

// Burgir animation
const rect1 = ref<HTMLElement | null>(null);
const rect2 = ref<HTMLElement | null>(null);
const rect3 = ref<HTMLElement | null>(null);

function burgerAnimation(hideDropdownMenu: Boolean) {
  const rect1Animate = rect1.value!;
  const rect2Animate = rect2.value!;
  const rect3Animate = rect3.value!;

  if (hideDropdownMenu) {
    // Forward animation
    rect1Animate.style.transition = 'transform 0.5s';
    rect3Animate.style.transition = 'transform 0.5s';
    rect1Animate.style.transform = 'translateY(9px)';
    rect3Animate.style.transform = 'translateY(-9px)';

    setTimeout(() => {
      rect2Animate.style.backgroundColor = 'transparent';
    }, 500);

    setTimeout(() => {
      rect1Animate.style.transition = 'transform 0.5s';
      rect3Animate.style.transition = 'transform 0.5s';
      rect1Animate.style.transform = 'rotate(45deg)';
      rect3Animate.style.transform = 'rotate(-45deg)';
    }, 500);
  } else {
    // Reverse animation
    rect1Animate.style.transition = 'transform 0.5s';
    rect3Animate.style.transition = 'transform 0.5s';
    rect1Animate.style.transform = 'rotate(0deg)';
    rect3Animate.style.transform = 'rotate(0deg)';
    rect1Animate.style.transform = 'translateY(9px)';
    rect3Animate.style.transform = 'translateY(-9px)';

    setTimeout(() => {
      rect2Animate.style.backgroundColor = '';
    }, 500);

    setTimeout(() => {
      rect1Animate.style.transform = 'translateY(-1%)';
      rect3Animate.style.transform = 'translateY(1%)';
    }, 500);
  }
}
</script>

<style>
.material-icons {
  font-size: 3.2rem !important;
  border-radius: 20px;
}

.nav-button-rect1,
.nav-button-rect3 {
  transform-origin: 5.6px;
}

/* Fügt eine gelbe animierte Linie für den unteren Rand hinzu */
.nav-link {
  position: relative;
  display: inline-block;
}

.nav-link::before {
  content: '';
  position: absolute;
  z-index: 10;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #feea0e;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
