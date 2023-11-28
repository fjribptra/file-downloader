import { fetchData } from "./fetch.js"

const input = document.getElementById('input')
const downloadButton = document.getElementById('downloadButton')


downloadButton.addEventListener("click", function() {
    const inputUrl = input.value
    changeTextButton('Downloading File ...', true)
    fetchData(inputUrl)
})

export function changeTextButton(innerText, disable) {
    downloadButton.innerText = innerText
    downloadButton.disable = disable
}