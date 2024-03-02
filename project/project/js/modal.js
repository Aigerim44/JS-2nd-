//MODAL

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')


const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    clearInterval(setTimerModal)
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}

const setTimerModal = setTimeout(openModal, 10000)

const ScrollToBottom = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}
const scrollHandler = () => {
    if (ScrollToBottom()) {
        openModal()
    }
}
window.addEventListener('scroll', scrollHandler);


// removeEventListener()


