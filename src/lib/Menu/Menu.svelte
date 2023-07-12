<script lang="ts">
    import { get_current_component } from "svelte/internal";
    import { create_song, remove_song } from "../modules/music";
    import {
        remove_loading,
        show_about,
        show_settings,
        show_start,
    } from "../modules/loading.js";
    import { onMount } from "svelte";
    import { create_background } from "../modules/background.js";
    import { slide_id } from "../modules/store";

    let main = get_current_component();

    onMount(() => {
        if (localStorage.getItem("bg-song") == null) {
            localStorage.setItem("bg-song", "1");
        }
        if (localStorage.getItem("slide_id") == null) {
            localStorage.setItem("slide_id", "1");
        }
        if (localStorage.getItem("slide_id") != null) {
            slide_id.set(parseInt(localStorage.getItem("slide_id")));
        }
        remove_loading();
        create_song(
            `src/assets/music/song_${localStorage.getItem("bg-song")}.opus`
        );
        create_background(
            "src/assets/background/vhs-glitch.gif",
            document.querySelector(".menu")
        );
    });
</script>

<section class="menu">
    <section id="buttons">
        <button id="button" on:click={() => show_start(() => main.$destroy())}
            >Start</button
        >
        <button
            id="button"
            on:click={() => show_settings(() => main.$destroy())}
            >Settings</button
        >
        <button id="button" on:click={() => show_about(() => main.$destroy())}
            >About</button
        >
    </section>
</section>

<style lang="sass">
    @import ../modules/styles
    #buttons
        display: flex
        flex-direction: column
        width: 30%
        height: 100vh
        align-items: center
        justify-content: space-around
        background-color: rgba(0, 0, 0, 0.5)
        border-radius: 20px
        box-shadow: 0 0 20px
        #button
            background-color: none
            border: none
            background: none
            color: white
            font-weight: bold
            // font-family: "Inter", sans-serif
            font-family: $chivo_mono
            font-size: 2vw
            padding: 1vmin
            transition: .3s all
            text-shadow: 3px 3px red, -3px -3px blue, -10px 10px gray
            &:hover
                cursor: pointer
                font-size: 2.2vw
                box-shadow: 3px 3px 10px red, -3px -3px 10px blue
                text-shadow: none
</style>
