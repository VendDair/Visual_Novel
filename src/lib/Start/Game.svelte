<script lang="ts">
    import { slide_id } from "../modules/store";
    import Bar from "./Bar.svelte";
    import Bg from "./Bg.svelte";
    import Choice from "./Choice.svelte";
    import Sound from "./Sound.svelte";
</script>

{#if $slide_id >= 1 && $slide_id < 4}
    <Bg src="vhs-glitch.gif" />
    {#if $slide_id >= 2 && $slide_id <= 3}
        <Sound src="song_2.opus" />
        {#if $slide_id === 1}
            <Bar name="Semen" tx="My name is Semen" />
            <Sound src="song_1.opus" />
        {:else if $slide_id === 2}
            <Bar name="Semen" tx="Whats yours?" />
        {:else if $slide_id === 3}
            <Bar name="Semen" tx="Ahh.. Hello" />
        {/if}
    {/if}
{:else if $slide_id === 4}
    <Bar name="Semen" tx="How are you?" />
    <Sound src="suction.opus" loop={false} />
    <Bg src="dark_forest.webp" />
{:else if $slide_id === 5}
    <Choice tx="Fuck with me?" options={["yes", "no"]} />
    <!-- {:else if $slide_id >= 6}
    {#if localStorage.getItem("fuck_with_me_yes") === "true"}
        {#await import("./Test.svelte") then Test}
            <svelte:component this={Test.default} />
        {/await}
    {/if} -->
{/if}
