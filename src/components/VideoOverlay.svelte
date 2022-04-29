<script>
  import { draggable } from "@neodrag/svelte";
  import { closeModal } from "svelte-modals";
  import { settings } from "../stores/GameStore";
  let options;

  options = {
    axis: "both",
    bounds: "body",
  };

  // provided by <Modals />
  export let isOpen;
  export let title;
</script>

<style>
  .modal {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9901;
  }

  :global(.backdrop) {
    display: none;
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
  .top-menu-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  h3 {
    margin: 0;
  }
  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>

<div
  role="dialog"
  class="modal"
  use:draggable="{options}"
  data-augmented-ui="tl-clip tr-clip br-clip bl-clip both">
  <div class="contents">
    <div class="top-menu-container">
      <h3>Vrumble Stream</h3>
      <i class="bi bi-x-octagon-fill" on:click="{closeModal}"></i>
    </div>
    <iframe
      width="240"
      src="{$settings.mediaFeedUri}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="actions"></div>
  </div>
</div>
