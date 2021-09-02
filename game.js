let playerTime = 'x'
let currentPlayer = ''
let countMove = 0
let countWin = 0
let gameFinished = false 
const createSpanAndButton = () => {
    let button = document.createElement('button')
    let span = document.createElement('span')
    let div = document.getElementById('content')
    
    button.id = 'refreshButton'
    span.id = 'result'

    button.style.display = 'none'

    div.appendChild(span)
    div.appendChild(button)
}
createSpanAndButton()
document.querySelectorAll('.space').forEach(element => {
    element.addEventListener('click', () => {
       if(!gameFinished){
        let spaceText = document.getElementById(`${element.id}`)    
        choosePlayer(spaceText)
        checkWinpossibilities()
       }
    })
})
const choosePlayer = (spaceText) => {
    if(spaceText.innerText == ''){   
        changePlayer(spaceText)
    }
}
const changePlayer = (spaceText) => {

    if(playerTime == 'x'){
        spaceText.innerText = playerTime
        currentPlayer = 'X'
        playerTime = 'o'
    }else{
        spaceText.innerText = playerTime
        currentPlayer = 'O'
        playerTime = 'x'
    }
}
const checkWinpossibilities = () => {
    validateRows()
    validateColumns()
}
const validateRows = () => {
    
    for(let id = 0; id < 9; id = id + 3){
    
        let positionOne = document.getElementById(`${id}`)
        let positionTwo = document.getElementById(`${id + 1}`)
        let positionThree = document.getElementById(`${id + 2}`)

        validateWin(positionOne, positionTwo, positionThree)
    }
    validateMainDiagonal()
}
const validateColumns = () => {

    for(let id = 0; id < 3; id++){
        
        let positionOne = document.getElementById(`${id}`)
        let positionTwo = document.getElementById(`${id + 3}`)
        let positionThree = document.getElementById(`${id + 6}`)

        validateWin(positionOne, positionTwo, positionThree)
    }
    validateSecondaryDiagonal()
}
const validateMainDiagonal = () => {
    
    let positionOne = document.getElementById('0')
    let positionTwo = document.getElementById('4')
    let positionThree = document.getElementById('8')

    validateWin(positionOne, positionTwo, positionThree)
}
const validateSecondaryDiagonal = () => {
    
    let positionOne = document.getElementById('2')
    let positionTwo = document.getElementById('4')
    let positionThree = document.getElementById('6')

    validateWin(positionOne, positionTwo, positionThree)
}
const validateWin = (positionOne, positionTwo, positionThree) => {

    if(positionOne.innerText == positionTwo.innerText && positionOne.innerText == positionThree.innerText && positionOne.innerText != ''){ 
        createButton()
        countWin++
        gameFinished = true 
    }else if(countMove == 71 && countWin == 0){
        validateLose()
    }
    countMove++
}
const createButton = (countMove) => {
    let span = document.getElementById('result')
    let button = document.getElementById('refreshButton')
    
    span.id = 'result'
    button.id = 'refreshButton'
    
    span.innerText = `Vitória do ${currentPlayer}!`
    button.innerText = 'Recomeçar'

    button.style.display = 'block'
    
    button.addEventListener('click', () => {
        location.reload()
    })
}
const validateLose = () => {
    let span = document.getElementById('result')
    let button = document.getElementById('refreshButton')

    span.innerText = `Deu Velha!`
    button.innerText = 'Recomeçar'

    button.style.display = 'block'
    
    button.addEventListener('click', () => {
        location.reload()
    })    
}