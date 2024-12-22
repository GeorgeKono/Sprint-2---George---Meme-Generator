'use strict'

function onInit() {
    renderGallery()

    const elGallery = document.querySelector('.meme-gallery-page')
    hideElement('.meme-editor-page')
    showElement('.meme-gallery-page')
}

function renderGallery() {
    const elMemesGallery = document.querySelector('.memes-grid-container')

    const strHtmls = gImgs.map(img => 
        `<img src="${img.url}" data-id="${img.id}" onclick=onImgSelect(this)></img>`
    )

    elMemesGallery.innerHTML = strHtmls.join('')
}

function onImgSelect(img) {
    const imgId = +img.dataset.id
    setImg(imgId)
    renderMeme()
}