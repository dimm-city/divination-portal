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
    margin-bottom: 1rem;
  }
  .thumbnail-wrapper {
    height: 4rem;
    width: min-content;
  }
  .thumbnail-wrapper.active {
    color: grey;
  }
  .player-name {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .me .player-name {
    font-weight: bold;
  }
</style>

<div class="players-list">
  {#each $players as player}
    <div class="player" class:me="{isMyToken(player.token)}">
      <div
        on:click="{() => togglePlayerToken(player)}"
        class="thumbnail-wrapper fade-in"
        class:active="{$activeTokens.includes(player.token)}"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip both">
        <img src="{player.token.thumbnail_uri}" alt="token" class="fade-in" />
      </div>

      <div class="player-name">{player.name}</div>
    </div>
  {/each}
</div>
