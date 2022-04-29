<script>
  import { openModal, closeAllModals } from "svelte-modals";
  import MapOptionsModal from "../components/MapOptionsModal.svelte";
  import Map from "../components/Map.svelte";
  import PlayerList from "../components/PlayerList.svelte";
  import TokenTray from "../components/TokenTray.svelte";
  import VrumbleConnectionModal from "../components/VrumbleConnectionModal.svelte";
  import VideoOverlay from "../components/VideoOverlay.svelte";
  import { changeView } from "../stores/AppStore";
  import { settings } from "../stores/GameStore";

  import Lobby from "./Lobby.svelte";
  function openMapOptions() {
    openModal(MapOptionsModal, {});
  }
  function openVrumbleConnection() {
    openModal(VrumbleConnectionModal, {});
  }
  function openVideoOverlay() {
    openModal(VideoOverlay, {});
  }

  function endGameSession() {
    closeAllModals();
    changeView(Lobby);
  }
  if ($settings.mediaFeedUri) openVideoOverlay();
</script>

<!-- <canvas /> -->
<style>
  :root{
    --board-border: none;
  }
  .board-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 4vh 94vh 2vh;
    width: 100%;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
  }

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    grid-column: 1 / 4;
    border-bottom: var(--board-border);
    font-size: 1.5rem;    
  }
  .toolbar i.bi {
    margin-right: 0.5rem;
    cursor: pointer;
  }
  .map-container {
    height: min(95vh, 100%);
    background: rgba(0, 0, 0, 0.123);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tools-container {
    border-right: var(--board-border);
    padding-inline: 0.5rem;
  }
  .token-tray {
    min-width: min-content;
    border-left: var(--board-border);
    padding-inline: 0.5rem;
    color: var(--font-color);
  }

  .status-bar {
    display: flex;
    justify-content: end;
    width: 100%;
    grid-column: 1 / 4;
    border-top: var(--board-border);
  }
  .status-bar .toolbar {
    padding: 0 0.25rem 1rem 0.25rem;
  }
</style>

<div class="board-container">
  <div class="title-bar">
    <div><h3>Sporo Rodeo</h3></div>
    <small>{$settings.title} </small>
    <div class="toolbar">
      <i class="bi bi-share" on:click="{() => alert('should copy link')}"></i>
      <i class="bi bi-film" on:click="{openVideoOverlay}"></i>
      <!-- <i class="bi bi-webcam" on:click="{openVrumbleConnection}"></i> -->
      <i class="bi bi-map" on:click="{openMapOptions}"></i>
      <i class="bi bi-person"></i>
      <i class="bi bi-x-octagon-fill" on:click="{endGameSession}"></i>
    </div>
  </div>
  <div class="tools-container">
    <h4>Stats</h4>
    <PlayerList />
  </div>
  <div class="map-container">
    <Map />
  </div>
  <div class="token-tray">
    <TokenTray />
  </div>
  <div class="status-bar">
    <div class="toolbar">
      <i class="bi bi-gear" on:click="{openMapOptions}"></i>
      <i class="bi bi-person"></i>
    </div>
  </div>
</div>
