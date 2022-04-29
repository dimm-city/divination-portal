import { writable, get } from "svelte/store";
import { changeView } from "./AppStore";
import { Settings } from "./Settings";
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
  {
    src: "bi bi-compass",
    type: "icon",
  },
  {
    src: "bi bi-tree-fill",
    type: "icon",
  },
  {
    src: "bi bi-building",
    type: "icon",
  },
  {
    src: "bi bi-heart-pulse",
    type: "icon",
  },
  {
    src: "bi bi-hospital",
    type: "icon",
  },
  {
    src: "bi bi-hurricane",
    type: "icon",
  },
]);

export const availableImages = writable([
  "https://inkarnate-api-as-production.s3.amazonaws.com/WTyAtZ4bcAcRM8hNwX71WF",
  "https://inkarnate-api-as-production.s3.amazonaws.com/Q6TTMVLkornUx6j65yp2aS",
  "https://inkarnate-api-as-production.s3.amazonaws.com/7T4Av9pgSXA3kkWvaLw3w8",
  "https://i.pinimg.com/736x/01/0d/b0/010db0cf6d40919797eaee4793d5ae93.jpg",
  "https://i.pinimg.com/736x/50/aa/39/50aa393cdaf61707999725ee7e271712.jpg",
]);

export const settings = writable(new Settings());

export const activeTokens = writable([]);

export const selectedImageUrl = writable(
  "https://i.pinimg.com/736x/50/aa/39/50aa393cdaf61707999725ee7e271712.jpg"
);

export function removeToken(token) {
  activeTokens.set(get(activeTokens).filter((t) => t != token));
}

export function endGameSession() {
  activeTokens.set([]);
  changeView("Lobby");
}

