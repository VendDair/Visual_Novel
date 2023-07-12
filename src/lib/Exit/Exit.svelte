<script>
    export let callback;
    export let name = "";
</script>

<section class="exit-container">
    <button on:click={() => callback()}
        >&lt;- Exit <p>{name}</p></button
    >
</section>

<style lang="sass">
    section.exit-container
        z-index: 999
        button
            position: absolute
            top: 2vmin
            left: 2vmin
            color: white
            background: none
            border: none
            font-weight: bold
            font-family: "Inter", sans-serif
            font-size: calc(1vw + 0.5pc)
            cursor: default
            display: flex
            p
                padding-left: 2vmin
            &:hover
                cursor: pointer
</style>
