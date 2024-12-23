'use strict'

let gElCanvas
let gCtx

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    
    drawImg()

    hideElement('.meme-gallery-page')
    showElement('.meme-editor-page')

    console.log('hi')  
}

function drawImg() {
    const elImg = new Image()
    elImg.src = `img/${gMeme.selectedImgId}.jpg`
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        
        gMeme.lines.forEach((line, idx) => {
            line.x = gElCanvas.width / 2,
            line.y = (idx + 1) * 100,
    
            drawText(line.txt, line.x, line.y, line.size, line.color)
        })
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
    updateEditorInputs()
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

function onSwitchLine() {
    switchLine()
    updateEditorInputs()    
    renderMeme()
}

function onUpdateLineSize(direction) {
    updateLineSize(direction)
    renderMeme()
}

function onSetFillStyle(pickedColor) {
    setFillStyle(pickedColor)
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

function updateEditorInputs() {
    const idx = gMeme.selectedLineIdx
    const selectedLine = gMeme.lines[idx]

    const elTextInput = document.querySelector('.meme-text-input')
    elTextInput.value = selectedLine.txt

    const elColorInput = document.querySelector('.fill-color-input')
    elColorInput.value = selectedLine.color
}