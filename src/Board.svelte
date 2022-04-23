<script>
    import Token from "./Token.svelte";
    import { openModal } from "svelte-modals";
    import MapOptionsModal from "./MapOptionsModal.svelte";

    let selectedImageUrl = "https://i.pinimg.com/736x/50/aa/39/50aa393cdaf61707999725ee7e271712.jpg";
    let mapZoom = 2;

    let availableTokens = [
        {
            src: "bi bi-person",
            type: "icon",
        },
        {
            src: "bi bi-journal",
            type: "icon",
        },
        {
            src: "bi bi-truck",
            type: "icon",
        },
    ];
    let activeTokens = [];
    let players = [
        {
            id: "wallet-addres?",
            name: "itlackey",
            token: { src: "bi bi-stars", type: "icon" },
        },
    ];

    function openMapOptions() {
        openModal(MapOptionsModal, { title: "Alert", message: "This is an alert" });
    }

    function addToken(token) {
        token.id = new Date().getTime();
        activeTokens = [...activeTokens, token];
    }

    function removeToken(token) {
        activeTokens = activeTokens.filter((t) => t != token);
    }
    function togglePlayerToken(player) {
        if (activeTokens.includes(player.token)) activeTokens = activeTokens.filter((t) => t !== player.token);
        else {
            player.token.id = player.id;
            activeTokens = [...activeTokens, player.token];
        }
    }
</script>

<div class="top-menu-container">
    <input type="text" bind:value={selectedImageUrl} />
    <input type="text" bind:value={mapZoom} />
</div>

<div class="board-container">
    <div class="tools-container">
        <h4>Stats</h4>
        <ul>
            {#each players as player}
                <li>
                    {player.name}<i
                        on:click={() => togglePlayerToken(player)}
                        class="bi"
                        class:bi-pin={!activeTokens.includes(player.token)}
                        class:bi-pin-angle={activeTokens.includes(player.token)}
                    />
                </li>
            {/each}
        </ul>

        <button on:click={openMapOptions}>Open Modal</button>
    </div>
    <div class="map-container">
        {#each activeTokens as token (token.id)}
            <Token {token} on:contextmenu={() => removeToken(token)} />
        {/each}
        <img src={selectedImageUrl} style="transform: scale3d({mapZoom})" alt="Map" />
    </div>
    <div class="token-tray">
        {availableTokens.length}
        {#each availableTokens as token (token.src)}
            <div on:click={() => addToken(token)}><i class={token.src} /></div>
        {/each}
    </div>
</div>

<!-- <canvas /> -->
<style>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

    .board-container {
        display: grid;
        grid-template-columns: 0.2fr 0.6fr 0.2fr;
        width: 100%;
        height: 100vh;

        background-color: var(--background-color);
        justify-content: center;
        overflow: hidden;
    }
    .map-container {
        display: flex;
        align-items: center;
    }
    img {
        height: min-content;
        width: min-content;
        margin: auto;
        align-self: center;
    }
    .token-tray {
        justify-self: flex-end;
        min-width: 5rem;
        border-left: 1px var(--font-color) solid;
        padding-left: 1rem;
        font-size: 3rem;
        color: var(--font-color);
    }
</style>
