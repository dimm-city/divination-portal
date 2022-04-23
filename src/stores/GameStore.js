import { writable, get } from "svelte/store";

export const mapZoom = writable(2);

export const availableTokens = writable([
  {
    src: "bi bi-person",
    type: "icon",
  },
  {
    src: "bi bi-house",
    type: "icon",
  },
  {
    src: "bi bi-truck",
    type: "icon",
  },
]);

export const availableImages = writable([
  "https://i.pinimg.com/736x/01/0d/b0/010db0cf6d40919797eaee4793d5ae93.jpg",
  "https://i.pinimg.com/736x/50/aa/39/50aa393cdaf61707999725ee7e271712.jpg",
]);

export const activeTokens = writable([]);

export const selectedImageUrl = writable(
  "https://i.pinimg.com/736x/50/aa/39/50aa393cdaf61707999725ee7e271712.jpg"
);

export function removeToken(token) {
  activeTokens.set(get(activeTokens).filter((t) => t != token));
}
