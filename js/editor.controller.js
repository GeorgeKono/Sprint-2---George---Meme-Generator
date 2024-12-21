'use strict'

let gElCanvas
let gCtx

const meme = getMeme()

renderMeme()

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    
    drawImg()

    console.log('hi')  
}

function drawImg() {
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        onAddTextLine( 
            { offsetX: gElCanvas.width / 2, offsetY: gElCanvas.height / 5 },
            meme.lines[0].txt,
            meme.lines[0].size,
            meme.lines[0].color
         )
    }
}

function onAddTextLine (ev, txt = 'Add Text Here', size, color) {
    const { offsetX, offsetY } = ev
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `bold ${size}px impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, offsetX, offsetY)
    gCtx.strokeText(txt, offsetX, offsetY)
}

function onSetLineTxt (txt) {
    setLineTxt(txt)
    renderMeme()
}