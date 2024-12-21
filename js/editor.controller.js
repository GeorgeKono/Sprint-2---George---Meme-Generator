'use strict'

let gElCanvas
let gCtx

renderMeme()

function renderMeme() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    
    drawImg()

    console.log('hi')  
}

function drawImg() {
    const elImg = new Image()
    elImg.src = 'img/1.jpg'
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        onAddTextLine( { offsetX: gElCanvas.width / 2, offsetY: gElCanvas.height / 5 } )
    }
}

function onAddTextLine (ev) {
    const { offsetX, offsetY } = ev
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = 'bold 70px impact'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText('Add Text Here', offsetX, offsetY)
    gCtx.strokeText('Add Text Here', offsetX, offsetY)
}