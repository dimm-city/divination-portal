<script>
  import { draggable } from "@neodrag/svelte";

  export let token;

  let options;

  options = {
    axis: "both",
    bounds: ".map-container",
    grid: [10, 10],
  };
</script>

<style>
  .hide {
    display: none;
  }
  .token i {
    font-size: calc(var(--token-height) - 1rem);
    color: rgb(253, 28, 242);
  }
  .token {
    display: flex;
    align-items: center;
    height: var(--token-height);
    justify-content: center;
    position: absolute;
    background-color: whitesmoke;
    --aug-border-all: 1px;
    --aug-all-height: var(--token-height);
  }
  .token img {
    max-height: var(--token-height);
    margin: 1rem;
  }
  .token .controlable {
    cursor: pointer;
  }
</style>

<div
  class="token"
  data-augmented-ui="all-hex border"
  use:draggable="{options}"
  on:contextmenu|preventDefault
  on:click>
  {#if token.type === "icon"}
    <i class="{token.src}"></i>
  {:else if token.type === "image"}
    <img src="{token.thumbnail_uri}" alt="token" />
  {:else}
    <button on:contextmenu|preventDefault on:click>{token.name}</button>
  {/if}
</div>
