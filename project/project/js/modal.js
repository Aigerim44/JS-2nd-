//MODAL-------------------------------------------------------------
const modal = document.querySelector('.modal')
const  modalTrigger = document.querySelector('#btn-get')
const modalCloseButton  = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}
modalTrigger.onclick = () => {
    openModal()
}
modalCloseButton.onclick = () => {
    closeModal()
}
modal.onclick = (event) => {
    if (event.target === modal)
    closeModal()
}

setTimeout(() => {
    openModal()
}, 10000)


//SCROLL MODAL WINDOW
const scrollModal = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        window.removeEventListener('scroll', scrollModal)
    }
}
window.onscroll = () => {
    scrollModal()
}

//POST DATA--------------------------------------------------------------

const formElement = document.querySelector('form')

const postData = (data) => {
    fetch('server.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })
}

const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(form)

        formData.forEach((item, index) => {
            console.log(item, index)
        })
    }
}
bindPostData(formElement)
