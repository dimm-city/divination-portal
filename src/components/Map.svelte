<script>
  import Token from "./Token.svelte";
  import {
    selectedImageUrl,
    mapZoom,
    activeTokens,
    removeToken,
  } from "../stores/GameStore";
</script>

<style>
  :global(.map .token) {
    top: 30%;
    left: 50%;
  }
  .map {
    height: min-content;
    max-height: 100%;
    width: min-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-height: 90%;
    
  }
</style>

<div class="map"  data-augmented-ui="tl-scoop tr-scoop br-scoop bl-scoop both">
  {#each $activeTokens as token (token.id)}
    <Token token="{token}" on:contextmenu="{() => removeToken(token)}" />
  {/each}
  <img
    src="{$selectedImageUrl}"
    style="transform: scale3d({$mapZoom})"
    alt="Map" />
</div>
