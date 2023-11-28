import { changeTextButton } from "./app.js"

export function fetchData(inputUrl) {
    fetch(inputUrl).then(res => res.blob()).then(res => {
        const result = URL.createObjectURL(res)
        console.log(result)
        const a = document.createElement('a')
        a.href = result
        a.download = ''
        document.body.appendChild(a)
        a.click()
        a.remove()
        changeTextButton('Download', false)
    })
    .catch(err => {
        alert('Failed to download ...')
        changeTextButton('Download', false)
    }) 
}