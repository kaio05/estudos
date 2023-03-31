const menuHamburger = document.getElementById('burger')
const menu = document.getElementById('menu')

menuHamburger.addEventListener('click', () => {
    menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block'
})