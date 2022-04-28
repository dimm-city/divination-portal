<script>
  import { closeModal } from "svelte-modals";
  // provided by <Modals />
  export let isOpen;
  export let title;
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

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>


  <div role="dialog" class="modal">
    <div class="contents">
      <div class="top-menu-container">
        <slot name="title"><h2>{title}</h2></slot>
        <slot />
      </div>
      <div class="actions">
        <button on:click="{closeModal}">OK</button>
      </div>
    </div>
  </div>
