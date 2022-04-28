<script>
  import Token from "./Token.svelte";
  import {
    selectedImageUrl,
    activeTokens,
    removeToken,
  } from "../stores/GameStore";
  import { onMount } from "svelte";

  let mapImage;
  let panzoomer;
  onMount(() => {
    panzoomer = panzoom(mapImage);
  });

  function startMoveToken() {
    panzoomer.pause();
  }
  function endMoveToken() {
    panzoomer.resume();
  }
</script>

<style>
  :global(.map .token) {
    top: 30%;
    left: 50%;
    z-index: var(--token-index);
  }
  .map {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 1rem;
    z-index: var(--map-index);
  }

  img {
    max-height: 85vh;
    max-width: 100%;
  }
</style>

<div class="map" data-augmented-ui="tl-scoop tr-scoop br-scoop bl-scoop both">
  <img
    src="{$selectedImageUrl}"
    bind:this="{mapImage}"
    alt="Map" />
  {#each $activeTokens as token (token.id)}
    <Token token="{token}" on:mousedown={startMoveToken} on:mouseup={endMoveToken} on:contextmenu="{() => removeToken(token)}" />
  {/each}
</div>
