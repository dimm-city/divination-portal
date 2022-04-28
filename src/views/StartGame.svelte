<script>
  import { changeView } from "../stores/AppStore";
  import Board from "./Board.svelte";
  let settings = {};
  function beginGameSession() {
    settings.gameUri = "https://divination.dimm.city/?gid=1234";
    changeView(Board);
  }
</script>

<style>
  .lobby-container {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .button-container {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="lobby-container fade-in">
  <h1>Setup Your Game</h1>
  <div>
    <label for="title">Title:</label>
    <input type="text" placeholder="Choose a title for your game session" />
  </div>
  <div>
    <label for="title">Map:</label>
    <input type="text" placeholder="Initial Map" />
  </div>
  <div>
    <label for="title">Access:</label>
    <label
      >Public<input
        type="radio"
        bind:group="{settings.access}"
        value="Public" /></label>
    <label
      >Private<input
        type="radio"
        bind:group="{settings.access}"
        value="Private" /></label>
  </div>
  <div>
    <p>Please connect to your Vrumble account and select the game feed</p>
    <a href="#!">Connect</a>
  </div>
  <div class="button-container">
    <button on:click="{beginGameSession}">Start the Game</button>
  </div>
</div>
