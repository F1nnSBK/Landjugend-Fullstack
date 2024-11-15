<template>
  <LandingPage />
  <div class="snap-proximity" v-if="!showLandingPage">
    <div class="flex w-full flex-col bg-white">
      <div
        class="backgorund-pattern m-5 h-1/3 snap-start grid-rows-1 rounded-xl px-5 py-10 hover:opacity-10 sm:hidden"
      >
        <span
          class="berg-schnee flex justify-center bg-cover bg-clip-text bg-center bg-no-repeat text-7xl font-bold leading-tight text-transparent"
          >UNSERE NEWS</span
        >
      </div>
      <div class="flex w-full justify-center lg:mt-20">
        <div
          class="mx-5 my-6 flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-in-out hover:scale-105 sm:max-w-2xl"
        >
          <img
            src="/assets/images/beitrag.png"
            alt="beitrag"
            class="img-fluid sm:max-w-screen-sm"
          />
        </div>
      </div>
    </div>
    <div
      class="grey-waves bg-zinc-900 bg-top bg-no-repeat pt-56 sm:bg-cover md:flex md:justify-evenly md:justify-items-center md:p-20 md:pt-96"
    >
      <section
        id="Das-sind-wir"
        class="flex scroll-mt-28 justify-center scroll-smooth md:w-1/2"
      >
        <div
          class="mb-20 w-11/12 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl transition-all duration-700 ease-in-out hover:scale-105 md:mb-32"
        >
          <div class="snap-center">
            <div class="border-b-4 border-b-zinc-700 px-8 py-4 text-2xl text-white">
              Über uns
            </div>
            <div class="p-8 pt-6 text-base font-extralight tracking-wider text-white">
              Wir, die Landjugend Primisweiler, sind eine aufgeschlossene Gruppe junger
              Leute im charmanten Dorf Primisweiler. <br />
              <br />
              Gemeinsam fördern wir Gemeinschaft und Traditionen. Durch Projekte,
              kulturelle Events und Umweltschutzinitiativen bereichern wir das Dorfleben.
              Unsere Offenheit für Neues und die Bereitschaft zur Verantwortungsübernahme
              prägen unsere Dynamik. Als Bindeglied zwischen den Generationen streben wir
              nach positiven Veränderungen in unserer Gemeinschaft.
            </div>
          </div>
        </div>
      </section>
      <section
        id="Kontakt"
        class="flex snap-center scroll-mt-28 justify-center scroll-smooth md:w-1/2"
      >
        <div
          class="mb-32 w-11/12 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl transition-all duration-700 ease-in-out hover:scale-105"
        >
          <div class="snap-center text-white">
            <div class="border-b-4 border-b-zinc-700 px-8 py-4 text-2xl">Kontakt</div>
            <div class="p-8 pt-6 font-extralight tracking-wider">
              <div class="font-normal">Schreiben Sie Uns</div>
              <a
                href="mailto:vorstandschaft@landjugend-primisweiler.de"
                class="duration-150 hover:text-lj-accent"
                >vorstandschaft@landjugend-primisweiler.de</a
              >
              <br />
              <br />
              <div class="font-normal">Besuchen Sie Uns</div>
              Landjungendkeller Primisweiler<br />
              Kellereingang Gemeindehaus <br />
              Tettnanger Straße 34/2<br />
              88239 Wangen im Allgäu <br /><br />
              Jeden Mittwoch ab 20:00 im Landjugendkeller in Primisweiler
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="flex flex-col items-center justify-center bg-zinc-900 pb-24">
      <button
        class="custom-gradient p-auto mt-1 w-72 cursor-pointer rounded border-transparent px-3 py-2 text-white shadow-lg transition-transform duration-300 hover:scale-105"
        @click="revealLandingPage"
      >
        Mitglied werden
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLandingStore } from '~/stores/landing';

const store = useLandingStore();
const { showLandingPage } = storeToRefs(store);

function revealLandingPage() {
  showLandingPage.value = true;
  store.debugInfo();
  useHead({
    bodyAttrs: {
      class: 'overflow-auto',
    },
  });
}

definePageMeta({
  layouts: 'default',
});
</script>

<style scoped>
.content-viewport-height {
  height: 83dvh;
}

.background-mobile {
  background-image: url('../assets/images/logo/background-mobile.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.berg-schnee {
  background-image: url('../assets/images/berg-schnee.jpg');
}

@media screen and (min-width: 792px) {
  .berg-schnee {
    background-position-y: -0rem;
  }
}

.backgorund-pattern {
  background-color: #18181b;
  opacity: 1;
  background-image: linear-gradient(#27272a 1.1px, transparent 1.1px),
    linear-gradient(to right, #27272a 1.1px, #18181b 1.1px);
  background-size: 22px 22px;
}

.grey-waves {
  background-image: url('../assets/images/grey-waves.svg');
  background-position-x: -2.5rem;
  background-position-y: -2rem;
}

@media screen and (min-width: 640px) {
  .grey-waves {
    background-image: url('../assets/images/grey-waves-dekstop.svg');
    background-size: cover;
    background-position: top;
  }
}

.custom-gradient {
  background-image: linear-gradient(to right, #feea0e 2%, #ec4899 120%);
}

.custom-gradient:focus {
  background-image: none;
}
</style>
