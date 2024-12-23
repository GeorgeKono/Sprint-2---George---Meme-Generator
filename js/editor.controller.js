'use strict'

let gElCanvas
let gCtx

const meme = getMeme()

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    
    drawImg()
    
    gMeme.lines.forEach(line => {
        drawText(line.txt, line.x, line.y, line.size, line.color)
    })

    hideElement('.meme-gallery-page')
    showElement('.meme-editor-page')

    console.log('hi')  
}

function drawImg() {
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function drawText(txt = 'Add Text Here', x, y, size, color) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `bold ${size}px impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function onAddNewLine() {
    addNewLine()
    renderMeme()
}

function onClickAddNewLine(ev) {
    const { offsetX, offsetY } = ev
    addNewLine()
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onUpdateLineSize(direction) {
    const line = meme.lines[0]

    line.size += direction
    renderMeme()
}

function onSetFillStyle(pickedColor) {
    const line = meme.lines[0]

    line.color = pickedColor
    renderMeme()
}

function onDownloadMeme(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function hideElement(selector) {
    const el = document.querySelector(selector)
    el.classList.add('hidden')
}

function showElement(selector) {
    const el = document.querySelector(selector)
    el.classList.remove('hidden')
}