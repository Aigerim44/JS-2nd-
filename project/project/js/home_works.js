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



const childBlock = document.querySelector('.child_block')
// const duration = 1000
// const distance = 400

let position = 0;
const increment = () => {
    position++
    if (position > 449) return;
    childBlock.style.left = position + 'px';
    animation()
}
const animation = () => {
    setTimeout(increment, 10)
}
animation()


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




