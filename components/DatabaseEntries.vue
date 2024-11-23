<template>
  <div class="flex max-h-svh w-full flex-col rounded-t-lg bg-slate-200 shadow-lg">
    <div
      class="border-b-2 border-zinc-700 p-4"
      v-for="item in data"
      :key="item.timestamp"
    >
      <div>
        {{ item.timestamp }}
      </div>
      <div>
        {{ item.name }}
      </div>
      <div class="flex items-center justify-between">
        <div>
          {{ item.phone }}
        </div>
        <div>
          <Icon
            v-on:click.prevent=""
            name="carbon:trash-can"
            color="red"
            class="cursor-pointer text-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { collection, getDocs, Firestore, doc } from 'firebase/firestore';
import { useNuxtApp } from '#app';
import { onMounted } from 'vue';

interface FormData {
  timestamp: string;
  name: string;
  phone: string;
}

const data = ref<FormData[]>([]);

onMounted(async () => {
  const { $db } = useNuxtApp();
  const db = $db as Firestore;

  try {
    const querySnapshot = await getDocs(collection(db, 'Landjugend'));
    querySnapshot.forEach((doc) => {
      const dbData = doc.data();
      data.value.push({
        timestamp: convertTimestamp(dbData.createdAt.seconds),
        name: dbData.name,
        phone: dbData.phone,
      });
    });
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten: ', error);
    console.log(db);
  }
});

function convertTimestamp(unix_timestamp: number): string {
  const date = new Date(unix_timestamp * 1000);
  return date.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
</script>

<style></style>
