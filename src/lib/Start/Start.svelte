<script lang="ts">
    import { get_current_component } from "svelte/internal";
    import { remove_loading, show_menu } from "../modules/loading";
    import { remove_song } from "../modules/music";
    import Exit from "../Exit/Exit.svelte";
    import Game from "./Game.svelte";
    import { onDestroy, onMount } from "svelte";
    import { decrease, increase, slide_id } from "../modules/store";

    let main = get_current_component();

    remove_loading();
    remove_song();

    onDestroy(() => {
        document.removeEventListener("keydown", handle_key_down);
    });

    function handle_key_down(event) {
        switch (event.code) {
            case "Space":
                increase();
                break;
            case "Enter":
                increase();
                break;
            case "ArrowLeft":
                decrease();
                break;
            case "ArrowRight":
                increase();
                break;
            default:
                break;
        }
    }
    onMount(() => {
        let right = document.querySelector(
            "section.start-right"
        ) as HTMLElement;
        let left = document.querySelector("section.start-left") as HTMLElement;
        right.onclick = () => {
            increase();
        };
        left.onclick = () => {
            decrease();
        };

        document.addEventListener("keydown", handle_key_down);
    });
</script>

<section class="start-container">
    <p style="color: white; font-size: 2vmin;">{$slide_id}</p>
    <Exit callback={() => show_menu(() => main.$destroy())} />
    <Game />
    <section class="start-right" />
    <section class="start-left" />
</section>

<style lang="sass">
    section.start-container
        section.start-right
            height: 100vh
            width: 65%
            position: absolute
            background-color: green
            right: 0
            opacity: 0
        section.start-left
            height: 95vh
            width: 35%
            position: absolute
            background-color: yellow
            left: 0
            opacity: 0
            bottom: 0
            z-index: 1000
</style>
