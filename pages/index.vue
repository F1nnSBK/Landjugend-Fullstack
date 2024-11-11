<template>
  <LandingPage />
  <Swiper />
  <section
    id="Das-sind-wir"
    class="flex snap-center scroll-mt-6 justify-center scroll-smooth"
  >
    <div
      class="my-20 w-11/12 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-xl"
    >
      <div class="">
        <div class="border-b-4 border-b-zinc-700 px-8 py-4 text-2xl text-white">
          Über uns
        </div>
        <div class="p-8 pt-6 text-base font-extralight tracking-wider text-white">
          Wir, die Landjugend Primisweiler, sind eine aufgeschlossene Gruppe junger Leute
          im charmanten Dorf Primisweiler. <br />
          <br />
          Gemeinsam fördern wir Gemeinschaft und Traditionen. Durch Projekte, kulturelle
          Events und Umweltschutzinitiativen bereichern wir das Dorfleben. Unsere
          Offenheit für Neues und die Bereitschaft zur Verantwortungsübernahme prägen
          unsere Dynamik. Als Bindeglied zwischen den Generationen streben wir nach
          positiven Veränderungen in unserer Gemeinschaft.
        </div>
      </div>
    </div>
  </section>
  <section
    id="Kontakt"
    class="flex snap-center scroll-mt-28 justify-center scroll-smooth"
  >
    <div
      class="mb-32 w-11/12 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-200 shadow-xl"
    >
      <div class="">
        <div class="border-b-4 border-b-zinc-300 px-8 py-4 text-2xl">Kontakt</div>
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
</template>

<script lang="ts" setup>
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
</style>
