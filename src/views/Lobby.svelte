<script>
  import { changeView } from "../stores/AppStore";
  import JoinGame from "./JoinGame.svelte";
  import StartGame from "./StartGame.svelte";
  import Page from "../components/Page.svelte";

</script>

<style>


</style>

<Page title="Dimm City Divination Portal">

  <div class="button-container">
    <button on:click="{() => changeView(StartGame)}">Start a new mission</button>
    <button on:click="{() => changeView(JoinGame)}"
      >Join a current mission</button>
  </div>
</Page>
