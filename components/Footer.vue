<!-- components/Footer.vue -->
<template>
  <footer class="bg-zinc-900 py-6">
    <div class="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <NuxtLink :to="{ path: '/', hash: '#Home' }">
            <img
              src="../assets/images/logo/logo-hor-w.png"
              class="mb-3 h-14"
              alt="laju Logo"
            />
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2
              class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
            >
              Folg uns
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://www.instagram.com/lj_primisweiler/"
                  class="hover:underline"
                  >Instagram</a
                >
              </li>
              <li>
                <a
                  href="https://www.facebook.com/LJPrimisweiler/?locale=de_DE"
                  class="hover:underline"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
            >
              Rechtliches
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <NuxtLink to="/datenschutz" class="hover:underline">Datenschutz</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/impressum" class="hover:underline">Impressum</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <NuxtLink :to="{ path: '/', hash: '#Home' }">Landjugend Primisweiler</NuxtLink>.
          All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// Hier keine speziellen Scripts notwendig
</script>

<style scoped>
/* Optional: Fügt hier zusätzliche Styles für den Footer hinzu */
</style>
