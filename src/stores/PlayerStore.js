import { writable } from "svelte/store";
export const players = writable([
  {
    id: "wallet-address?",
    name: "itlackey",
    token: {
      id: 1,
      thumbnail_uri:
        "https://data.dimm.city/api/thumbnails/sporos/dcs1r1/34.png",
      src: "bi bi-stars",
      type: "image",
    },
  },
  {
    id: "wallet-address?",
    name: "matt",
    token: {
      id: 2,
      thumbnail_uri:
        "https://data.dimm.city/api/thumbnails/sporos/dcs1r1/2.png",
      src: "bi bi-stars",
      type: "image",
    },
  },
]);

export const isMyToken = (token) => {
  return token.id == 1;
};
