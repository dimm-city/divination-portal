<script>
  import Page from "../components/Page.svelte";
  import Board from "./Board.svelte";
  import Lobby from "./Lobby.svelte";
  import { changeView } from "../stores/AppStore";
  import { settings } from "../stores/GameStore";
  let gameUri;
  let connectType = "Player";
  function joinGameSession() {
    $settings.mediaFeedUri =
      "https://www.youtube.com/embed/w1vHu_g-JAU?controls=0";
    changeView(Board);
  }
</script>

<style>
  .form-container div {
    margin-bottom: 1.5rem;
  }
  .floating-button {
    display: flex;
    align-items: center;
    height: var(--token-height);
    justify-content: center;
    position: absolute;
    background-color: whitesmoke;
    --aug-border-all: 1px;
    --aug-all-height: var(--token-height);
  }
</style>

<Page title="Join a current mission">
  <!-- <div class="floating-button" data-augmented-ui="all-hex border">
    <i class="bi bi-x-octagon-fill" on:click="{() => changeView(Lobby)}"></i>
  </div> -->
  <div class="form-container">
    <div>
      <label for="title">How would you like to connect?</label>
      <label>
        As a player
        <input type="radio" bind:group="{connectType}" value="Player" />
      </label>
      <label>
        As an observer
        <input type="radio" bind:group="{connectType}" value="Viewer" /></label>
    </div>
    <div>
      <label for="title">Mission Address:</label>
      <input
        type="text"
        bind:value="{gameUri}"
        placeholder="Enter the mission address" />
    </div>
  </div>
  <div class="button-container">
    <button on:click="{() => changeView(Lobby)}">Back to the lobby...</button>
    <button on:click="{joinGameSession}">Join the mission!</button>
  </div>
</Page>
