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

//MOVE BLOCK----------------------------------------------------------------------------------
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
let position = 0

const movingBlock = () => {
    if (position < 449){
        position++
        childBlock.style.left = `${position}px`
        requestAnimationFrame(movingBlock)
    }
}

movingBlock()
