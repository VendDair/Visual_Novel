export async function load_loading(className: string = null) {
    let module = await import("../Loading/Loading.svelte")
    let Loading = module.default
    new Loading(
        {
            target: document.getElementById("app"),
            props: {
                className: className
            }
        }
    )
}
export function remove_loading(className: string = null) {
    if (className != null) {
        try {
            document.querySelector(`.${className}`).remove();
        } catch (error) {
            console.log("There is no loading screen to remove")
        }

    }
    try {
        document.querySelector(".loading_screen").remove();
    } catch (error) {
        console.log("There is no loading screen to remove")
    }
}

async function show(callback: any, src: string) {
    callback()
    load_loading()
    let module = await import(src)
    let Module = module.default
    new Module({
        target: document.getElementById("app")
    })
}

export async function show_about(callback) {
    await show(callback, "../About/About.svelte")
}

export async function show_menu(callback) {
    await show(callback, "../Menu/Menu.svelte")
}

export async function show_settings(callback) {
    await show(callback, "../Settings/Settings.svelte")
}

export async function show_start(callback) {
    await show(callback, "../Start/Start.svelte")
}