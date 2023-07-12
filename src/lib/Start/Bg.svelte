<script>
    export let src = "";

    src = "./src/assets/background/" + src;
</script>

<!-- <script lang="ts">
    import { onMount } from "svelte";
    import { create_background } from "../modules/background";

    export let src: string;
    src = "src/assets/background/" + src;

    onMount(() => {
        let parrent = document.querySelector(".start-container") as HTMLElement;
        create_background(src, parrent);
    });
</script> -->
<img {src} alt="background" class="background" />

<style lang="sass">
    .background
        position: absolute
        z-index: -1
        width: 100%
        height: 100%
        // aspect-ratio: 16/9
        object-fit: cover
        object-position: center
</style>
