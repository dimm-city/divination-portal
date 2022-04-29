<script>
  import Page from "../components/Page.svelte";
  import { changeView } from "../stores/AppStore";
  import { Settings } from "../stores/Settings";
  import { settings, selectedImageUrl } from "../stores/GameStore";
  import Board from "./Board.svelte";
  import Lobby from "./Lobby.svelte";
  let initialSettings = new Settings();
  initialSettings.title = "Dimm City RPG - Portal Jumping";
  initialSettings.access = "Public";
  let initalImageUrl = $selectedImageUrl;

  function beginGameSession() {
    initialSettings.gameUri = "https://divination.dimm.city/?gid=1234";
    $settings = initialSettings;
    $selectedImageUrl = initalImageUrl;
    changeView(Board);
  }

  function connectToVideoFeed() {
    initialSettings.mediaFeedUri =
      "https://www.youtube.com/embed/w1vHu_g-JAU?controls=0";
  }
</script>

<style>
 


  .form-container div {
    margin-bottom: 1.5rem;
  }

</style>

<Page title="Configure your mission">
  <div class="form-container">
    <div>
      <label for="title">Name:</label>
      <input
        type="text"
        bind:value="{initialSettings.title}"
        placeholder="Choose a title for your game session" />
    </div>
    <div>
      <label for="title">Initial location address:</label>
      <input
        type="text"
        placeholder="Initial location address"
        bind:value="{initalImageUrl}" />
    </div>
    <div>
      <label for="title">Access:</label>
      <label
        >Public<input
          type="radio"
          bind:group="{initialSettings.access}"
          value="Public" /></label>
      <label
        >Private<input
          type="radio"
          bind:group="{initialSettings.access}"
          value="Private" /></label>
    </div>
    <div>
      {#if initialSettings.mediaFeedUri}
        <p>You have connected to Vrumble, feed initiated</p>
      {:else}
        <p>Please connect to your Vrumble account and select the game feed</p>
        <a href="#!" on:click="{connectToVideoFeed}">Connect</a>
      {/if}
    </div>
  </div>
  <div class="button-container">
    <button on:click="{() => changeView(Lobby)}">Back to the lobby...</button>
    <button on:click="{beginGameSession}">Start the mission!</button>
  </div>
</Page>
