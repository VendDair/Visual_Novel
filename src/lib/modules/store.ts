import { writable } from "svelte/store";

export const slide_id = writable(1)

export const increase = () => {
    slide_id.update(prev => prev + 1)
    const unsubscribe = slide_id.subscribe(value => {
        localStorage.setItem("slide_id", value.toString())
        console.log(value)

    })
    unsubscribe()
}
export const decrease = () => {
    slide_id.update(prev => prev - 1)
    const unsubscribe = slide_id.subscribe(value => {
        localStorage.setItem("slide_id", value.toString())
        console.log(value)

    })
    unsubscribe()
}
