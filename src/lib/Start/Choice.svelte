<script>
    import { increase } from "./../modules/store";
    export let tx;
    export let options = [];

    let text_concat = tx.replaceAll(" ", "_").replace("?", "").toLowerCase();
    // text_concat = text_concat.toLowerCase();
    let options_concat = [];
    options.forEach((option) => {
        options_concat.push(
            text_concat +
                "_" +
                option.toLowerCase().replaceAll(" ", "_").replace("?", "")
        );
    });

    function handle_click(index) {
        increase();
        options_concat.forEach((element) => {
            if (element == options_concat[index]) {
                localStorage.setItem(element, "true");
                return;
            }
            localStorage.setItem(element, "true");
            localStorage.setItem(element, "false");
            console.log(element);
        });
    }
</script>

<section class="choice-container">
    <h2>{tx}</h2>
    <section class="choice-select">
        {#each options as option, i}
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h4 on:click={() => handle_click(i)} class="choice-option">
                {option}
            </h4>
        {/each}
    </section>
</section>

<style lang="sass">
    @import ../modules/styles
    section.choice-container
        z-index: 998
        display: flex
        position: absolute
        top: 0
        left: 0
        justify-content: center
        align-items: center
        flex-direction: column
        width: 100%
        height: 100%
        background: linear-gradient(to right, rgba(30,30,30,0.5), rgba(20,20,20,0.9), rgba(30,30,30,0.5))
        h2
            color: rgb(200,200,200)
            font-family: $chivo_mono
            font-size: 7vw
        .choice-select
            .choice-option
                color: white
                font-size: min(50px, 13vmin)
                // font-size: 10vmin
                margin-top: 2vmin
                font-family: $chivo_mono
                text-shadow: 0 0 10px rgb(200,200,200)
                transition: all .3s
                text-align: center
                &:hover
                    cursor: pointer
                    text-shadow: 4px 4px 1px red
</style>
