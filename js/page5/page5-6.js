
/* №1 Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.*/

let taskOneResult = document.querySelector('.task-one-result')
let taskOneInput = document.querySelector('.task-one-input')
let dateFound = document.getElementById('dateFound')

dateFound.addEventListener('click', () => {
    let date = new Date(taskOneInput.value)
    date.setDate(29)
    date.setMonth(1)
    if (date.getMonth() === 2){
        taskOneResult.textContent = 'Введен НЕ високосный год'
    } else {
        taskOneResult.textContent = 'Введен високосный год'
    }
})

/* №2 Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.*/

let taskTwoInput = document.querySelector('.task-two-input')
let clickRandom = document.getElementById('clickRandom')

clickRandom.addEventListener('click', () => {
    taskTwoInput.value = Math.floor(Math.random() * (100 - 1) + 1)
})

/* №3 Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.*/

let taskThreeInput = document.querySelector('.task-three-input')
let dataDayFound = document.getElementById('dataDayFound')
let taskThreeResult = document.querySelector('.task-three-result')

dataDayFound.addEventListener('click', () => {
    let data = new Date(taskThreeInput.value)
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    taskThreeResult.textContent = massDay[data.getDay()]
})

/* №4 Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.*/

let taskFourBlock = document.querySelector('.task-four-block')
let transformBlock = document.getElementById('transformBlock')

transformBlock.addEventListener('click', () => {
    taskFourBlock.style.width = taskFourBlock.style.width.slice(0, -2) * 2 + 'px'
    taskFourBlock.style.height = taskFourBlock.style.height.slice(0, -2) * 2 + 'px'

})

/* №5 Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.*/

let taskFiveReference = document.querySelectorAll('.task-five-reference')
let textReference = document.createElement('div')
textReference.classList.add('reference-block')

Array.from(taskFiveReference).forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.appendChild(textReference)
        elem.title = elem.href
        textReference.textContent = elem.href
    })
    elem.addEventListener('mouseout', () => {
        elem.removeChild(textReference)
    })
})

let massFunc = [`dateFound.addEventListener('click', () => {
    let date = new Date(taskOneInput.value)
    date.setDate(29)
    date.setMonth(1)
    if (date.getMonth() === 2){
        taskOneResult.textContent = 'Введен НЕ високосный год'
    } else {
        taskOneResult.textContent = 'Введен високосный год'
    }
})`,`clickRandom.addEventListener('click', () => {
    taskTwoInput.value = Math.floor(Math.random() * (100 - 1) + 1)
})`
,

`dataDayFound.addEventListener('click', () => {
    let data = new Date(taskThreeInput.value)
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    taskThreeResult.textContent = massDay[data.getDay()]
})`, `transformBlock.addEventListener('click', () => {
    taskFourBlock.style.width = taskFourBlock.style.width.slice(0, -2) * 2 + 'px'
    taskFourBlock.style.height = taskFourBlock.style.height.slice(0, -2) * 2 + 'px'

})`
,`Array.from(taskFiveReference).forEach(elem => {
    elem.addEventListener('mouseover', () => {
        elem.appendChild(textReference)
        elem.title = elem.href
        textReference.textContent = elem.href
    })
    elem.addEventListener('mouseout', () => {
        elem.removeChild(textReference)
    })
})`]