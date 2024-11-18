<template>
  <div class="flex flex-col w-full rounded-t-lg bg-slate-200 shadow-lg max-h-svh">
    <div class="border-b-2 border-zinc-700 p-4" v-for="item in data"  :key="item.timestamp">
      <div>
        {{ item.timestamp }}
      </div>
      <div>
        {{ item.name }}
      </div>
      <div class="flex justify-between items-center">
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
  timestamp: number;
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
      const dbData = doc.data()
      data.value.push({
        timestamp: dbData.createdAt ? dbData.createdAt.seconds * 1000 : 0,
        name: dbData.name,
        phone: dbData.phone,
      });
    });
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten: ', error);
    console.log(db)
  }
});
</script>

<style>

</style>