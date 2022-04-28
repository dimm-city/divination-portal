<script>
  import { changeView} from "../stores/AppStore";
  import StartGame from "./StartGame.svelte";
</script>

<style>
  .lobby-container {
    display: flex;
    height: 100%;
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

<div class="lobby-container">
  <h1>Dimm City Divination Portal</h1>
  <div class="button-container">
    <button on:click="{() => changeView(StartGame)}">Start New Game</button>
    <button on:click="{() => changeView(StartGame)}">Join Existing Game</button>
    <button on:click="{() => changeView(StartGame)}">View Current Game</button>
  </div>
</div>
