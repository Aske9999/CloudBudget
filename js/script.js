const button = document.getElementById('burger-button-pic')
const menu = document.getElementById('header-ul')
const links = document.querySelectorAll('.nav-link')

button.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu')
})
links.forEach((elem) =>{
    elem.addEventListener('click', () =>{
        menu.classList.remove('mobile-menu')
    })
})