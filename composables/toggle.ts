// toggle.ts
import { ref } from 'vue';

export function useToggle(initialValue: boolean = false) {
  const state = ref(initialValue);

  function toggle() {
    let preToggleState = state.value;
    state.value = !state.value;
    console.info(`Toggled ${preToggleState} to ${state.value} `)
  }

  return { state, toggle };
}