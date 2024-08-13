
iconPre = document.querySelectorAll('.icon-pre');

Array.from(iconPre).forEach((elem, i) => {
    if (massFunc) {
        elem.textContent = massFunc[i]
    }
})

icon = document.querySelectorAll('.icon')

Array.from(icon).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        iconPre[i].classList.toggle('open')
        if(iconPre[i].getBoundingClientRect().width > 500){
            iconPre[i].style.maxWidth = '500px'
            iconPre[i].style.overflow = 'auto'
        }
        console.log(iconPre[i].getBoundingClientRect().width)
        if(iconPre[i].getBoundingClientRect().height > 400){
            iconPre[i].style.maxHeight = '400px'
            iconPre[i].style.overflow = 'auto'
        }
    })
})

let searchClick = document.querySelector('.search-block img')
let searchInput = document.querySelector('.search-input')
let searchListItems = document.querySelector('.search-content-list-items')

let searchContent = document.querySelector('.search-content')

searchClick.addEventListener('mouseenter', () => {
    searchInput.classList.remove('hide')
    searchClick.classList.remove('inactive')
    searchClick.classList.add('active')

})

searchInput.addEventListener('mouseenter', () => {
    searchInput.classList.remove('hide')
    searchClick.classList.remove('inactive')
    searchClick.classList.add('active')
})

document.addEventListener('mouseout', () => {
    if (searchInput.value.length !== 0) {
        searchInput.classList.remove('hide')
        searchClick.classList.add('active')
    } else {
        searchInput.classList.add('hide')
        searchContent.style.display = 'none'
        searchClick.classList.remove('active')
        searchClick.classList.add('inactive')


    }
})

searchInput.addEventListener('keyup', () => {
    let itemsRefer = document.querySelectorAll('.search-reference')
    Array.from(itemsRefer).forEach(elem => {
        let textRefer = elem.textContent.toLowerCase().split(/["'.,!]/).join('')
        searchContent.style.display = 'block'
        if (searchInput.value.length === 0 || searchInput.value == ' ') {
            elem.parentNode.style.display = 'none'
        } else if (textRefer.includes(searchInput.value)) {

            elem.parentNode.style.display = 'block'
        } else {
            elem.parentNode.style.display = 'none'
        }
    })
})

function magic(s) {
    return s.substr(s.indexOf("-"))
}

for (key in objReference) {
    let itemList = document.createElement('li')
    searchListItems.append(itemList)
    let reference = document.createElement('a')
    let nameHref = ''
    for(let i = 0; i < String(objReference[key]).length; i++){
        if(objReference[key][i] == '-'){
            break
        }
        nameHref+= objReference[key][i]
    }

    if(location.href.includes('index.html')){
        reference.href = 'page/' + nameHref + '/'  + objReference[key]
    } else if(location.href.split('/').pop().replace(magic(location.href.split('/').pop()), '') == nameHref){

        reference.href = objReference[key]
    } else {
        reference.href = '../' + nameHref + '/'  + objReference[key]
    }

    reference.textContent = key
    reference.classList.add('search-reference')
    itemList.append(reference)
}
