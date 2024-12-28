'use strict'

var gImgs = [
    {id: 1, url: 'img/1.jpg', keywords: ['angry', 'political', 'trump']},
    {id: 2, url: 'img/2.jpg', keywords: ['lovely', 'puppies', 'dogs']},
    {id: 3, url: 'img/3.jpg', keywords: ['lovely', 'puppies', 'babies']},
    {id: 4, url: 'img/4.jpg', keywords: ['lovely', 'cat', 'dreaming']},
    {id: 5, url: 'img/5.jpg', keywords: ['strong', 'winner', 'babies']},
    {id: 6, url: 'img/6.jpg', keywords: ['thinking', 'history', 'man']},
    {id: 7, url: 'img/7.jpg', keywords: ['suprising', 'big eyes', 'babies']},
    {id: 8, url: 'img/8.jpg', keywords: ['smiling', 'clown', 'man']},
    {id: 9, url: 'img/9.jpg', keywords: ['smiling', '', 'babies']},
    {id: 10, url: 'img/10.jpg', keywords: ['smiling', 'political', 'obama']},
    {id: 11, url: 'img/11.jpg', keywords: ['kissing', 'boxing', 'fight']},
    {id: 12, url: 'img/12.jpg', keywords: ['thinking', 'busted', 'israeli']},
    {id: 13, url: 'img/13.jpg', keywords: ['smiling', 'move', 'dicaprio']},
    {id: 14, url: 'img/14.jpg', keywords: ['movie', 'matrix', 'glases']},
    {id: 15, url: 'img/15.jpg', keywords: ['movie', 'lord of the rings', 'thinkins']},
    {id: 16, url: 'img/16.jpg', keywords: ['movie', 'smiling', 'star trek']},
    {id: 17, url: 'img/17.jpg', keywords: ['thinking', 'political', 'putin']},
    {id: 18, url: 'img/18.jpg', keywords: ['movie', 'smiling', 'buzz']},
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

function switchLine() {
    let idx = +gMeme.selectedLineIdx
    idx++    
    
    if (idx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx = idx
    }
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