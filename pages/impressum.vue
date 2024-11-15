<template>
  <div class="flex min-h-screen w-full justify-center">
    <div class="my-16 w-5/6 md:w-4/6">
      <h1>Impressum</h1>

      <p>
        Landjugend Primisweiler<br />
        88239 Wangen i.A. <br />
        Email:
        <a href="mailto:info@landjugend-primisweiler.de" style="color: var(--dark)"
          >info@landjugend-primisweiler.de</a
        >
      </p>

      <p>
        <strong>Vertreten durch:</strong><br />
        Vorstand<br />
        Nils Schlegel<br />
        <br />
        Website-Beauftragter<br />
        <NuxtLink to="/admin/neue-mitglieder" style="color: var(--black); cursor: default"
          >Finn Hertsch</NuxtLink
        >
      </p>
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
