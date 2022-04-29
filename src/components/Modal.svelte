<script>
  import { draggable } from "@neodrag/svelte";
  import { closeModal } from "svelte-modals";
  import Container from "./Container.svelte";
  // provided by <Modals />
  export let isOpen;
  export let title;
  let options;

  options = {
    axis: "both",
    bounds: "body",
  };
</script>

<style>
   :global(.modal [data-augmented-ui]) {
    --aug-inlay-bg: #000000f5;
  }
  .modal {
    position: absolute;
    top: 3rem;
    right: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 901;
  }

  .contents {
    min-width: 240px;
    /* border-radius: 6px;
    background: white; */
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>

<div role="dialog" class="modal" use:draggable="{options}">
  <Container>
    <div class="contents">
      <div class="top-menu-container">
        <slot name="title"><h2>{title}</h2></slot>
        <slot />
      </div>
      <div class="actions">
        <button on:click="{closeModal}">OK</button>
      </div>
    </div>
  </Container>
</div>
