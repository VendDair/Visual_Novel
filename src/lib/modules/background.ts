import { load_loading, remove_loading } from "./loading"

export async function create_background(src: string, parrent: HTMLElement, opacity: number = 1) {
    if (document.getElementById("bg-img") != null) {
        let img = document.getElementById("bg-img") as HTMLImageElement
        img.remove()
    }
    let img = new Image()
    img.src = src
    img.alt = "nigger"
    img.loading
    img.id = "bg-img"
    img.onloadstart = () => {
        load_loading("loading_img")
    }
    // load_loading("loading_img")
    img.onload = () => {
        remove_loading("loading_img")
    }
    img.setAttribute("style", `
        position: absolute;
        width: 100vw;
        height: 100vh;
        aspect-ratio: 16/9;
        z-index: -1;
        top: 0;
        left: 0;
        opacity: ${opacity};
    `)
    parrent.appendChild(img)

}

export async function remove_background() {

}