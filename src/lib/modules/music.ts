import Loading from "../Loading/Loading.svelte"
import { load_loading, remove_loading } from "./loading";



export function create_song(src: string, loop = true) {
    if (document.getElementById("bg-song") === null) {

        let song = document.createElement("audio")
        song.id = "bg-song"
        song.loop = loop
        song.src = src
        document.body.appendChild(song)
        const loading = new Loading({
            target: document.getElementById("app"),
        })
        song.load
        song.onloadeddata = () => {
            song.play()
            loading.$destroy();
            if (!loop) song.onended = () => song.remove()
        }
        return
    }
    return
}

export function change_song(src: string, number: number, loop = true) {
    if (document.getElementById("bg-song") == null) {
        create_song(src, loop)
        return
    }
    localStorage.setItem("bg-song", number.toString())
    let song = document.getElementById("bg-song") as HTMLAudioElement
    song.src = src
    song.loop = loop
    const loading = new Loading({
        target: document.getElementById("app"),
    })
    song.load
    song.onloadeddata = () => {
        song.play()
        loading.$destroy();
    }
    if (!loop) {
        song.onended = () => {
            song.remove()
        }
    }
}

export function remove_song() {
    try {
        document.getElementById("bg-song").remove()
    } catch (error) {
        console.log("There is no song to remove")
    }
}


export function remove_temp_audios() {
    let audios = document.querySelectorAll("#temp-audio")
    audios.forEach((audio) => {
        audio.remove()
    })
}