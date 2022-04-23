<script>
  import { openModal } from "svelte-modals";
  import MapOptionsModal from "./components/MapOptionsModal.svelte";
  import Map from "./components/Map.svelte";
  import PlayerList from "./components/PlayerList.svelte";
  import TokenTray from "./components/TokenTray.svelte";

  function openMapOptions() {
    openModal(MapOptionsModal, { title: "Alert", message: "This is an alert" });
  }
</script>

<!-- <canvas /> -->
<style>
  .board-container {
    display: grid;
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
    grid-template-rows: 4vh 94vh 2vh;
    width: 100%;
    height: 100vh;
    background-color: var(--background-color);
    justify-content: center;
    overflow: hidden;
  }

  .title-bar {
    display: flex;
    justify-content: end;
    width: 100%;
    grid-column: 1 / 4;
    border-bottom: var(--board-border);
  }
  .map-container {
    height: minmax(100%, 95vh);
    background: black;
  }

  .tools-container {
    border-right: var(--board-border);
  }
  .token-tray {
    min-width: 5rem;
    border-left: var(--board-border);
    padding-left: 1rem;
    font-size: 3rem;
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
    <div class="toolbar">
      <i class="bi bi-gear" on:click="{openMapOptions}"></i>
      <i class="bi bi-person"></i>
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
