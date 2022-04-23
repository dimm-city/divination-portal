<script>
  import { activeTokens } from "../stores/GameStore";
  import { players, isMyToken } from "../stores/PlayerStore";
  function togglePlayerToken(player) {
    if ($activeTokens.includes(player.token))
      $activeTokens = $activeTokens.filter((t) => t !== player.token);
    else {
      player.token.id = player.id;
      $activeTokens = [...$activeTokens, player.token];
    }
  }
</script>

<style>
  img {
    max-height: var(--token-height);
  }
  .players-list {
    list-style: none;
    padding: 0;
  }
  .player {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
</style>

<div class="players-list">
  {#each $players as player}
    <div class=player>
      <img src="{player.token.thumbnail_uri}" alt="token" />
      {#if isMyToken(player.token)}
        <i
          on:click="{() => togglePlayerToken(player)}"
          class="bi"
          class:bi-pin="{!$activeTokens.includes(player.token)}"
          class:bi-pin-angle="{$activeTokens.includes(player.token)}"></i>
      {/if}

      <div>{player.name}</div>
    </div>
  {/each}
</div>
