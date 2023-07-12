<script>
    import { get_current_component } from "svelte/internal";
    import { onMount } from "svelte";
    import { remove_loading, show_menu } from "../modules/loading";
    import Exit from "../Exit/Exit.svelte";
    import { create_background } from "../modules/background";

    let main = get_current_component();

    onMount(() => {
        remove_loading();
        create_background(
            "src/assets/background/dark_forest.webp",
            document.querySelector(".about-container"),
            0.25
        );
    });
</script>

<section class="about-container">
    <Exit callback={() => show_menu(() => main.$destroy())} name="About" />
    <p>Hello</p>
</section>

<style lang="sass">
    @import ../modules/styles
    section.about-container
        width: 100vw
        height: 100vh
        position: absolute
        display: flex
        justify-content: center
        align-items: center
        // background-color: rgb(30,30,30)
        p
            color: white
            font-size: 3vw
            font-family: $chivo_mono
            font-weight: bold
</style>
