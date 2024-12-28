'use strict'

var filteredImgs

function onInit() {
    renderGallery()

    const elGallery = document.querySelector('.meme-gallery-page')
    hideElement('.meme-editor-page')
    showElement('.meme-gallery-page')
}

function renderGallery(imgs = gImgs) {
    const elMemesGallery = document.querySelector('.memes-grid-container')

    const strHtmls = imgs.map(img => 
        `<img src="${img.url}" data-id="${img.id}" onclick=onImgSelect(this)></img>`
    )

    elMemesGallery.innerHTML = strHtmls.join('')
}

function onImgSelect(img) {
    const imgId = +img.dataset.id
    setImg(imgId)
    renderMeme()
}

function onSearchMeme(searchTerm) {
    filteredImgs = searchMeme(searchTerm)
    renderGallery(filteredImgs)
}