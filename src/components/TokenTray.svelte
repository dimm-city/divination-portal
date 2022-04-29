<script>
  import { availableTokens, activeTokens } from "../stores/GameStore";
  function addToken(token) {
    const newToken = JSON.parse(JSON.stringify(token));
    if (newToken.id == null) newToken.id = new Date().getTime();
    $activeTokens = [...$activeTokens, newToken];
  }
</script>

<style>
  .available-token {
    font-size: 3rem;
  }
</style>

<div> 
  {#each $availableTokens as token (token.src)}
    <div class="available-token" on:click="{() => addToken(token)}">
      <i class="{token.src}"></i>
    </div>
  {/each}
</div>
