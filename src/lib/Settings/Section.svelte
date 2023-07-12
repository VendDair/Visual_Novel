<script>
    export let name;
    export let buttons;
</script>

<section class="section">
    <h3>{name}</h3>
    <section class="buttons_container">
        {#each buttons as button}
            <button class="button" on:click={() => button.function()}
                >{button.label}</button
            >
        {/each}
    </section>
</section>

<style lang="sass">
    @import ../modules/styles
    section.section
        width: 50vw
        height: calc(7pc + 5vh)
        background-color: gray
        position: relative
        left: 50vw
        transform: translateX(-50%)
        display: flex
        flex-direction: column
        border-radius: calc(1vw + 0.3pc)
        h3
            position: absolute
            left: 50%
            transform: translateX(-50%)
            top: calc(2vmin + 0.3pc)
            color: white
            font-family: $chivo_mono
            font-size: calc(1vw + 0.35pc)
            text-shadow: 3px 3px red, -3px -3px blue, -10px 10px gray
    section.buttons_container
        position: absolute
        // background-color: rgb(100,100,100)
        width: 100%
        height: 25%
        display: flex
        justify-content: space-around
        top: 50%
        button
            font-size: 2vw
            padding: 0 calc(2vmin + .5pc) 0 calc(2vmin + .5pc)
            background: none
            border: none
            border-radius: calc(1vmin + 0.3pc)
            color: white
            transition: .3s all
            text-shadow: 3px 3px red, -3px -3px blue, -10px 10px gray
            &:hover
                font-size: 2.2vw
                cursor: pointer
                box-shadow: 3px 3px 10px red, -3px -3px 10px blue
                text-shadow: none
</style>
