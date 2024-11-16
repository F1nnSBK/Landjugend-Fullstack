<template>
  <div class="flex min-h-screen w-full justify-center">
    <div class="my-12 w-5/6 md:w-4/6">
      <div class="my-4">
        <strong>Impressum</strong> <br />
        Landjugend Primisweiler<br />
        88239 Wangen i.A. <br />
        Email:
        <a href="mailto:info@landjugend-primisweiler.de" style="color: var(--dark)"
          >info@landjugend-primisweiler.de</a
        >
      </div>

      <div class="my-4">
        <strong>Vertreten durch:</strong><br />
        Vorstand<br />
        Nils Schlegel<br />
        <br />
        Website-Beauftragter<br />
        <NuxtLink to="/admin" style="color: var(--black); cursor: default"
          >Finn Hertsch</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Impressum',
});
</script>

<style scoped></style>
