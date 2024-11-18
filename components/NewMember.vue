<template>
  <div
    :class="{
      'mx-2 flex w-80 flex-col justify-start rounded-md border border-transparent bg-white p-4': true,
      'mt-44 opacity-100 transition duration-700 md:mb-20': !collapsed, // Unterschiedliche Margin bei collapsed=false
      'mt-0': collapsed, // Unterschiedliche Margin bei collapsed=true
    }"
  >
    <Icon
      v-if="!collapsed"
      v-on:click.prevent="toggle"
      name="line-md:arrow-small-left"
      color="black"
      class="cursor-pointer text-3xl"
    />
    <div class="flex w-full items-center justify-center">
      <img src="/assets/images/logo/sonne.png" alt="laju-logo" class="mr-5 w-1/2" />
    </div>

    <form @submit.prevent="submitForm" v-if="!collapsed">
      <div class="input-field m-y2 mt-5 w-full p-2">
        <h4 ref="typeText" for="name" class="h-12 font-mono">&nbsp;</h4>
        <input
          class="mt-3 w-full rounded-md border bg-slate-100 p-2 text-black shadow-inner"
          type="text"
          v-model="data.name"
          placeholder="Wie sollen wir dich nennen?"
          required
        />
      </div>
      <div class="input-field my-2 w-full p-2">
        <input
          class="mt-1 w-full rounded-md border bg-slate-100 p-2 text-black shadow-inner"
          type="number"
          v-model="data.phone"
          placeholder="Telefonnummer"
          required
        />
      </div>
      <div class="submit-field my-2 mt-6 flex w-full justify-center p-2">
        <button
          class="custom-gradient p-auto mt-1 w-3/5 cursor-pointer rounded border-transparent px-3 py-2 text-black shadow-lg transition-transform duration-300 after:cursor-default hover:scale-105 hover:bg-slate-800 focus:bg-slate-800 focus:text-white focus:outline-none"
          type="submit"
        >
          Senden
        </button>
      </div>
    </form>
    <div v-if="collapsed" class="mt-4 flex flex-col items-center justify-center">
      <button
        class="custom-gradient p-auto mt-1 w-4/5 cursor-pointer rounded border-transparent px-3 py-2 text-black shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-slate-50 focus:bg-slate-400 focus:outline-none"
        v-on:click.prevent="handleClick"
      >
        Mitglied werden
      </button>
    </div>
    <div class="my-4 flex w-full items-center justify-center">
      <button
        v-on:click.prevent="navigateToWebsite"
        class="p-auto mt-1 w-4/5 cursor-pointer rounded bg-slate-800 px-3 py-2 text-center text-white shadow-lg transition-transform duration-300 focus:bg-slate-400 focus:outline-none"
      >
        Weiter zur Website
      </button>
    </div>
  </div>
  <Toast />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useToast } from 'primevue';
import { doc, setDoc, Firestore, serverTimestamp } from 'firebase/firestore';
import { useToggle } from '@/composables/toggle';

const toast = useToast();
const typeText = ref<HTMLElement | null>(null);
const form = ref<HTMLElement | null>(null);

const { state: collapsed, toggle } = useToggle(true);

const emit = defineEmits(['navigateToWebsite']);

function navigateToWebsite() {
  emit('navigateToWebsite');
}

interface FormData {
  name: string;
  phone: string;
}

const data = ref<FormData>({
  name: '',
  phone: '',
});

const submitForm = async () => {
  const { name, phone } = data.value;
  const { $db } = useNuxtApp();
  const db = $db as Firestore;

  // Generating document id and randint for firestore document
  const randomId = Math.random().toString(36).slice(2);
  let documentId = `newMember_${name.toLowerCase().replace(/\s+/g, '')}_${randomId}`;

  try {
    await setDoc(doc(db, 'Landjugend', documentId), {
      name: data.value['name'],
      phone: data.value['phone'],
      createdAt: serverTimestamp(),
    });

    data.value = { name: '', phone: '' };
    console.info('Erfolgreich verarbeitet!');
    toast.add({
      severity: 'success',
      summary: 'Erfolgreich!',
      detail: 'Daten erfolgreich verarbeitet!',
      life: 3000,
    });
    setTimeout(() => navigateToWebsite(), 1500);
  } catch (error) {
    console.error('Fehler beim Senden der Daten: ', error);
    toast.add({
      severity: 'error',
      summary: 'Fehlgeschlagen!',
      detail: 'Daten konnten nicht gesendet werden! Melde dich bitte per Email.',
      life: 5000,
    });
  }
};

function handleClick() {
  toggle();
  nextTick(() => {
    type();
  });
}

// Typing animation
const words = [
  'Du willst der Landjugend beitreten?',
  'Komm gerne bei uns in Primisweiler vorbei.',
  'Lass deine Nummer da und wir schreiben dir!',
];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  if (!typeText.value) return;

  currentWord = words[i];

  if (isDeleting) {
    typeText.value.textContent = currentWord.substring(0, j - 1);
    j--;

    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(type, 800);
      return;
    }
  } else {
    typeText.value.textContent = currentWord.substring(0, j + 1);
    j++;

    if (j == currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  }
  // Kürzere Intervalle während des Schreibens und Löschens
  setTimeout(type, isDeleting ? 50 : 100);
}
</script>

<style scoped>
.custom-gradient {
  background-image: linear-gradient(to right, #fddd0e 1%, #fddd0e 120%);
}

.custom-gradient:focus {
  background-image: none;
}
</style>
