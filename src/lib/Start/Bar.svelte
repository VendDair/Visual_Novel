<script lang="ts">
    import { onMount } from "svelte";

    export let name = "";
    export let name_color = "white";
    export let tx = "";

    onMount(() => {
        let name = document.querySelector(".bar-name") as HTMLElement;
        name.setAttribute(
            "style",
            `
                color: ${name_color};
            `
        );
    });

    // text animation
    $: output = "";
    let chars = tx.split("");
    let char_id = 0;

    function text_anim() {
        if (char_id < chars.length) {
            setTimeout(() => {
                output += chars[char_id];
                char_id++;
                requestAnimationFrame(text_anim);
            }, 10);
        }
    }
    window.requestAnimationFrame(text_anim);
</script>

<section class="bar-container">
    <section class="bar-name">{name}</section>
    <section class="bar-footer">
        <span>{output}</span>
    </section>
</section>

<style lang="sass">
    @import ../modules/styles
    section.bar-container
        position: absolute
        bottom: 2pc
        height: 20vh
        width: 80vw
        max-width: 80vw
        display: flex
        flex-direction: column
        left: 50%
        transform: translateX(-50%)
        border-radius: 3vmin
        background-color: rgba(80,80,80, .7)
        z-index: 999
        section.bar-name
            height: 20%
            display: flex
            justify-content: center
            align-items: center
            font-weight: bold
            font-family: $chivo_mono
            font-size: calc(1pc + 1vmin)
        section.bar-footer
            
            height: 80%
            border-radius: 0 0 3vmin 3vmin
            span
                color: white
                font-weight: bold
                font-family: $chivo_mono
                font-size: calc(1vw + .3pc)
                padding: 2vmin
                word-wrap: pre-wrap
                max-width: 78vw
                display: inline-block
    // @media (max-width: 1279px)
    //     section.bar-container
    //         width: 100vw
    //         height: 25vh
    //         bottom: 0
    //         border-radius: 0
    //         section.bar-name
    //             height: 30%
    //             border-radius: 0 0 0 0
</style>
