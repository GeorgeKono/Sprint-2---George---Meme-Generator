'use strict'

var gImgs = [
    {id: 1, url: 'img/1.jpg', keywords: ['angry', 'political', 'trump']},
    {id: 2, url: 'img/2.jpg', keywords: ['lovely', 'puppies', 'dogs']},
]

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add Text Here',
            x: 0,
            y: 0,
            size: 50,
            color: 'white',
        }
    ]
}

var gKeywordSearchCountMap = {'funny': 12, 'cat': 16, 'baby': 2,}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = txt 
}

function updateLineSize(direction) {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]

    line.size += direction
}

function setFillStyle(pickedColor) {
    const idx = gMeme.selectedLineIdx
    const line = gMeme.lines[idx]

    line.color = pickedColor
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function addNewLine() {
    const newLine = {
        txt: 'Add Text Here',
        x: 0,
        y: 0,
        size: 50,
        color: 'white',
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}