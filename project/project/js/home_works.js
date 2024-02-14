// G-MAIL //
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/
gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
})


//MOVE BLOCK
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const mainWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const mainHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0
let positionXNew = positionY + mainWidth
let positionYNew
const moveBlock = () => {
    if (positionX < mainWidth){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX >= mainWidth && positionY < mainHeight){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX > 0 && positionY === mainHeight - 50) {
        // Двигаем блок влево
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        // Двигаем блок вверх
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
}
moveBlock()




// const startAnimation = (duration, callback) => {
//     let startAnimation = null
//
//     requestAnimFrame(function measure(time) {
//         if (!startAnimation){
//             startAnimation = time.getTime()
//         }
//
//         const progress = (50 +(time - startAnimation) / duration )
//         const translate = progress * distance
//
//         childBlock.style.transform = `translateX(${translate}px`
//
//         if (progress < 1){
//             requestAnimFrame(measure)
//         }
//     })
// }
// startAnimation()

const zero = document.getElementById('seconds')
const stopButton = document.getElementById('stop')
const resetButton = document.getElementById('reset')
const startButton = document.getElementById('start')
const timeBlock = document.getElementsByClassName( 'time_block')
let count = 0
let interval

const stopwatch = () => {
    count++
    zero.innerHTML = count
}

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(stopwatch, 1000)

})
stopButton.addEventListener('click', () => {
    clearInterval(interval)
})
resetButton.addEventListener('click', () => {
    clearInterval(interval)
    count = 0
    zero.innerHTML = '0'
})



