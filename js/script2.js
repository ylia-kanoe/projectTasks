
iconPre = document.querySelectorAll('.icon-pre');

Array.from(iconPre).forEach((elem, i) => {
    if (massFunc) {
        elem.textContent = massFunc[i]
    }
})

icon = document.querySelectorAll('.icon')

Array.from(icon).forEach((elem, i) => {
    let bodyHeigth = document.body.getBoundingClientRect().height
    elem.addEventListener('mouseenter', () => {
        iconPre[i].classList.add('open')
        if (iconPre[i].getBoundingClientRect().x + iconPre[i].getBoundingClientRect().width > document.body.getBoundingClientRect().width) {
            iconPre[i].style.right = '0'
        }
    })
    elem.addEventListener('mouseleave', () => {
        iconPre[i].classList.remove('open')
    })
})