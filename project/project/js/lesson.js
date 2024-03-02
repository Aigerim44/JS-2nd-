// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = 'red'
    }
})

//TAB SLIDER

const tabContentItems = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabItemsParent = document.querySelector('.tab_content_items')
let index = 0

const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentItems[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent(index)

tabItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem){
                hideTabContent()
                index = tabIndex
                showTabContent(index)
            }
        })
    }
}
const autoSlider = () => {
    hideTabContent()
    index = (index + 1) % tabItems.length
    showTabContent(index)
}

setInterval(autoSlider, 3000)



//CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

// somInput.addEventListener('input', (event) => {
//     console.log(event.target.value)
// })
//-------------the same as:

//DRY нарушен:
// somInput.oninput =() => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     }
// }
//
// usdInput.oninput =() => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// }

const converter = (element, targetElement, additionalElement, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/convertor.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
        const data = JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    additionalElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value= (element.value * data.usd).toFixed(2)
                    additionalElement.value = (element.value * 0.91).toFixed(2)
                    break
                case 'eur':
                    targetElement.value= (element.value * data.eur).toFixed(2)
                    additionalElement.value= (element.value * 1.01).toFixed(2)
                    break
                default:
                    break
            }
            // if (element.value === ''){
            //     targetElement.value = ''

            // element.value === '' && (targetElement.value = '')
        }
    }
}

converter(somInput, usdInput, eurInput,"som")
converter(usdInput, somInput, eurInput, "usd")
converter(eurInput, somInput, usdInput, 'eur')


//CARD SWITCHER

const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
const cardBlock = document.querySelector('.card')

let count = 0

btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p style="color : ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
    `
        })
}

//WEATHER

const cityInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    cityInput.oninput = (event) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                city.innerHTML = data.name || 'Город не найден'
                temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'
            })
    }
}

citySearch()


//OPTIONAL CHAINING - ?.
//query params - настройки (параметры) запроса









