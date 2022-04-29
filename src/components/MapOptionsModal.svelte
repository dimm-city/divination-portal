<script>
  import { closeModal } from "svelte-modals";
  import Modal from "./Modal.svelte";
  import { selectedImageUrl, availableImages } from "../stores/GameStore";
  // provided by <Modals />
  export let isOpen;
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 901;
    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  .map-thumbnail {
    max-width: 10rem;
    max-height: 10rem;
    align-self: center;
    justify-self: center;
  }
  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }

  .available-maps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
</style>

<Modal title="Select Location">
  <input type="text" bind:value="{$selectedImageUrl}" />
  <div class="available-maps">
    {#each $availableImages as img}
      <img
        src="{img}"
        class="map-thumbnail"
        alt="map"
        on:click="{() => ($selectedImageUrl = img)}" />
    {/each}
  </div>
</Modal>
