<script>
    import { get_current_component } from "svelte/internal";
    import Exit from "../Exit/Exit.svelte";
    import { remove_loading, show_menu } from "../modules/loading";
    import { onMount } from "svelte";
    import Section from "./Section.svelte";
    import { create_background } from "../modules/background";
    import { change_song } from "../modules/music";

    let main = get_current_component();

    const change_background_sound = [
        {
            label: "1",
            function: () => change_song("src/assets/music/song_1.opus", 1),
        },
        {
            label: "2",
            function: () => change_song("src/assets/music/sirius.mp3", 2),
        },
        { label: "3", function: () => console.log("3") },
    ];

    const change_select_sound = [
        { label: "1", function: () => console.log("1") },
        { label: "2", function: () => console.log("2") },
        { label: "3", function: () => console.log("3") },
    ];

    onMount(() => {
        remove_loading();
        create_background(
            "src/assets/background/dark_forest.webp",
            document.querySelector(".settings-container"),
            0.25
        );
    });
</script>

<section class="settings-container">
    <Exit callback={() => show_menu(() => main.$destroy())} name="Settings" />
    <section class="section-container">
        <Section
            name="Change background sound"
            buttons={change_background_sound}
        />
        <Section name="Change select sound" buttons={change_select_sound} />
    </section>
</section>

<style lang="sass">
    section.section-container
        height: 100vh
        display: flex
        flex-direction: column
        justify-content: space-around
</style>
