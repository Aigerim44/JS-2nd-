//PHONE CHECKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//TAB SLIDER-----------------------------------------------------------------------------
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let index = 0

const hideTabContent = () => {
    tabContent.forEach((content) => {
        content.style.display = 'none'
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent(index)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                index = tabIndex
                showTabContent(index)
            }
        })
    }
}

const autoSlider = () => {
    hideTabContent()
    index = (index + 1) % tabs.length
    showTabContent(index)
}

setInterval(autoSlider, 3000)


//CONVERTER-----------------------------------------------------------------------------------------

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')
const rubInput = document.querySelector('#rub')

// somInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json' )
//     request.send()
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// })

const converter = (element, targetElement, secondElement, thirdElement, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json' )
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    secondElement.value = (element.value / data.eur).toFixed(2)
                    thirdElement.value = (element.value / data.rub).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    secondElement.value = (element.value * 0.91).toFixed(2)
                    thirdElement.value = (element.value * 92.29).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    secondElement.value = (element.value * 1.01).toFixed(2)
                    thirdElement.value = (element.value * 99.72).toFixed(2)
                    break
                case 'rub':
                    targetElement.value = (element.value * data.rub).toFixed(2)
                    secondElement.value = (element.value * 0.011).toFixed(2)
                    thirdElement.value = (element.value * 0.011).toFixed(2)
                    break
                default:
                    break
            }
            if (element.value === '') {
                targetElement.value = ''
                secondElement.value = ''
                thirdElement.value = ''
            }
        }
    }
}
converter(somInput, usdInput, eurInput, rubInput,'som')
converter(usdInput, somInput, eurInput, rubInput,'usd')
converter(eurInput, somInput, usdInput, rubInput, 'eur')
converter(rubInput, somInput, eurInput, usdInput, 'rub')

//CARD SWITCHER-------------------------------------------------------------------------
const cardBlock = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
//
// let count = 0
// const request = () => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(response => response.json())
//         .then(data => {
//             cardBlock.innerHTML = `
//             <p>${data.title}</p>
//             <p style="color: ${data.completed ? ' green' : 'red'}">${data.completed}</p>
//             <span>${data.id}</span>
//             `
//         })
// }

// btnNext.onclick = () => {
//     count++
//     if (count > 200){
//         count = 1
//     }
//     request()
// }
// btnPrev.onclick = () => {
//     count--
//     if (count < 1){
//         count = 200
//     }
//     request()
// }

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`
let limit = 1
let page = 1

const renderData = (data) => {
    cardBlock.innerHTML = ''
    data.forEach(item => {
        const newElement = document.createElement('div')
        newElement.innerHTML = `
           <p>${item.title}</p>               
           <p style="color: ${item.completed ? 'green' :'red'}">${item.completed}</p>              
            <span>${item.id}</span>
        `
        cardBlock.appendChild(newElement)
    })
}
const getData = () => {
    fetch(`${BASE_URL}?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
        .then(data => renderData(data))
}
getData()

btnNext.onclick = () => {
    page++
    if (page > 200){
        page = 1
    }
    getData()
}
btnPrev.onclick = () => {
    page--
    if (page < 1){
        page = 200
    }
    getData()
}
























