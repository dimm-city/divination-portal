<script>
    import { draggable } from "@neodrag/svelte";

    export let token;

    let options;

    options = {
        axis: "both",
        bounds: ".map-container",
        grid: [10, 10],
    };
</script>

<div class="token" use:draggable={options} on:contextmenu|preventDefault on:click>
    {#if token.type === "icon"}
        <i class={token.src} />
    {:else}
        <button  on:contextmenu|preventDefault on:click>{token.name}</button>
    {/if}
</div>

<style>
    .hide {
        display: none;
    }
    .token i {
        font-size: 3rem;
        color: rgb(253, 28, 242);
    }
    .token {
        cursor: pointer;
        font-size: 3rem;
        position: absolute;
    }
</style>
