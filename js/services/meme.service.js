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
            txt: 'I sometimes eat Falafel',
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
    gMeme.lines[0].txt = txt 
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}