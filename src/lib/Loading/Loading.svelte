<script>
    export let className = null;
</script>

<section class="loading_screen {className}">
    <p>Loading...</p>
</section>

<style lang="sass">
    @import ../modules/styles
    .loading_screen
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        display: flex
        justify-content: center
        align-items: center
        background-color: black
        z-index: 2
        p
            color: white
            font-family: $chivo_mono
            font-weight: bold
            font-size: 2vw
</style>
