let currentYear
let navElement
let nav
let burgerBtn

let xmarkBtn
let navLinks
let navRight
let contactBtn
let msgStatus
let input
let textArea
let form
let sections
let footer
let navHeight
const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    currentYear = document.querySelector('.current-year')
    navElement = document.querySelector('.nav')
    nav = document.querySelector('.nav-right')
    burgerBtn = document.querySelector('.fa-bars')

    xmarkBtn = document.querySelector('.fa-xmark')
    navLinks = document.querySelectorAll('.nav-link')
    navRight = document.querySelector('.nav-right')
    sections = document.querySelectorAll('.section')
    contactBtn = document.querySelector('.contact-btn')
    msgStatus = document.querySelector('.msg-status')
    input = document.querySelectorAll('input')
    form = document.querySelector('form')
    textArea = document.querySelector('textarea')
    footer = document.querySelector('.footer')
}

const prepareDOMEvents = () => {

    scrollSpy()
    burgerBtn.addEventListener('click', openNav)

    xmarkBtn.addEventListener('click', closeNav)
    window.addEventListener('scroll', scrollSpy)
    window.addEventListener('reload', scrollSpy)
    currentYear.innerHTML = new Date().getFullYear()
    navLinks.forEach(navLink => {

        navLink.addEventListener('click', closeNav)


    });
    window.addEventListener('resize', checkWindowWidth)

    form.addEventListener('submit', showMsgStatus)



}

const scrollSpy = () => {

    sections.forEach(section => {
        let top = window.scrollY + 92
        let offsetTop = section.offsetTop
        let height = section.offsetHeight
        let id = section.id

        if (top >= offsetTop && top < offsetTop + height) {

            navLinks.forEach(link => {
                let linkID = link.hash.slice(1)
                link.classList.remove('active')
                if(linkID == id){
                    link.classList.add('active')
                }
                

            })
       
    }})
}


const addActive = (link) => {

    window.innerWidth >= 992 ? link.classList.add('active') : false
}
const openNav = () => {

    nav.style.animation = 'nav-mobile-open .5s ease-in-out forwards'

    burgerBtn.style.animation = 'icon-disapear .5s forwards'
    xmarkBtn.style.display = 'block'
    xmarkBtn.style.animation = 'icon-apear 1s forwards'
}
const closeNav = () => {
    if (window.innerWidth < 992) {
        nav.style.animation = 'nav-mobile-close .5s ease-in-out forwards'
        burgerBtn.style.display = 'block'
        burgerBtn.style.animation = 'icon-apear 1s forwards'
        xmarkBtn.style.animation = 'icon-disapear .5s forwards'
    }
}


const checkWindowWidth = () => {
    window.innerWidth >= 992 ? navRight.style.animation = 'none' : false

}


const showMsgStatus = (e) => {
    e.preventDefault()
    msgStatus.classList.add('success')
    textArea.value = ''
    input.forEach(input => {
        input.value = ''
    })
    setTimeout(() => {
        msgStatus.classList.remove('success')
    }, 5000);
}



document.addEventListener('DOMContentLoaded', main)



