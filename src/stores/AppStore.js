import { derived, writable } from "svelte/store";

let view = writable(null);
export const currentView = derived(view, ($view, set) => {
  set($view);
});
export const changeView = (value) => view.set(value);

