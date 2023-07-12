<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { load_loading, remove_loading } from "../modules/loading";
    import { create_song, remove_song } from "../modules/music";

    export let loop = true;
    export let src;

    src = "src/assets/music/" + src;

    if (loop) {
        create_song(src, loop);
        onDestroy(() => {
            remove_song();
        });
    } else {
        let temp_audio = new Audio();
        temp_audio.src = src;
        temp_audio.loop = false;
        temp_audio.id = "temp-audio";
        temp_audio.load;
        onMount(() => {
            document.querySelector(".start-container").appendChild(temp_audio);
        });
        load_loading();
        temp_audio.onloadeddata = () => {
            temp_audio.play();
            remove_loading();
        };
        temp_audio.onended = () => {
            temp_audio.remove();
        };
    }

    // function play(song, loop = true) {
    //     song.src = src;
    //     song.loop = loop;
    //     load_loading();
    //     song.load;
    //     song.onloadeddata = () => {
    //         remove_loading();
    //         song.play();
    //     };
    // }

    // if (document.getElementById("sound-component") != null) {
    //     let old = document.getElementById(
    //         "sound-component"
    //     ) as HTMLAudioElement;
    //     let old_src = old.src.split("/")[old.src.split("/").length - 1];
    //     let new_src = src.split("/")[src.split("/").length - 1];
    //     if (old_src != new_src) {
    //         console.log(old_src);
    //         console.log(new_src);
    //         play(old);
    //     } else {
    //         console.log("same sounds");
    //     }
    // } else {
    //     let song = new Audio();
    //     song.id = "sound-component";
    //     song.src = src;
    //     song.loop = loop;
    //     play(song, loop);
    //     if (!loop) {
    //         song.onended = () => {
    //             song.remove();
    //             console.log("temp audio removed");
    //         };
    //     }
    // }
</script>
