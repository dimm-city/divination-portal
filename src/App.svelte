<script>
  import Board from "./Board.svelte";
  import { Modals, closeModal } from "svelte-modals";
  import Viewer from "./Viewer.svelte";
  let view = Board;

  function startGame() {
    view = Board;
  }
  function watchGame() {
    view = Viewer;
  }
</script>

<style global>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.692);
    z-index: 900;
  }
  :root {
    --token-height: 2rem;

    --font-color: rgb(253, 28, 242);
    --background-color: rgb(0, 34, 63);
    --disabled-color: rgba(133, 19, 127, 0.9);

    --board-border: 1px var(--font-color) solid;
    --map-zoom: 1;
    --map-pan: 0px;

    --token-index: 5;
    --map-index: 3;
    --modal-backdrop-index: 900;
    --modal-index: 901;
  }
  :global(html, body) {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: var(--font-color);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
</style>

<Modals>
  <div slot="backdrop" class="backdrop" on:click="{closeModal}"></div>
</Modals>

{#if view == null}
  <div>
    <button>Start Game</button>
  </div>
{:else}
  <svelte:component this="{view}" />
{/if}
