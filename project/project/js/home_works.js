//GMAIL BLOCK---------------------------------------------------------------------------------
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//MOVE BLOCK 1----------------------------------------------------------------------------------
// const childBlock = document.querySelector('.child_block')
// const parentBlock = document.querySelector('.parent_block')
// let position = 0
//
// const movingBlock = () => {
//     if (position < 449){
//         position++
//         childBlock.style.left = `${position}px`
//         requestAnimationFrame(movingBlock)
//     }
// }
//
// movingBlock()


//MOVE BLOCK 2-----------------------------------------------------------------------------------
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')

let positionX = 0
let positionY = 0
const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight
const minOffsetWidth = parentBlock.offsetWidth - parentBlock.offsetWidth
const minOffsetHeight = parentBlock.offsetHeight - parentBlock.offsetHeight
const width = 449
const height = 449

const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY === minOffsetHeight){
       positionX++
       childBlock.style.left = `${positionX}px`
        // requestAnimationFrame(moveBlock)
        setTimeout(moveBlock, 1)
    }else if (positionX >= maxOffsetWidth && positionY < maxOffsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        // requestAnimationFrame(moveBlock)
        setTimeout(moveBlock, 1)
    }else if (positionX >= minOffsetWidth && positionY <= maxOffsetHeight) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX <= minOffsetWidth && positionY > minOffsetHeight) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()


//MOVE BLOCK----------------------------------------------------------------------------------
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')
let second = 0
let interval

const stopwatch =() => {
    second++
    seconds.innerHTML = `${second}`
}

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(stopwatch, 1000)
}
stopButton.onclick = () => {
    clearInterval(interval)
}
resetButton.onclick = () => {
    clearInterval(interval)
    second = 0
    seconds.innerHTML = '0'
}