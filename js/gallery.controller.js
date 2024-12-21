'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    const elMemesGallery = document.querySelector('.memes-grid-container')

    const strHtmls = gImgs.map(gImgs => 
        `<img src="${gImgs.url}" onclick=onMemePicked(this)></img>`
    )

    elMemesGallery.innerHTML = strHtmls.join('')
}