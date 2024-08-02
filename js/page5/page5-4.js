/* №1 Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.*/

let taskOneParagraf = document.querySelectorAll('.task-one-paragraf')

Array.from(taskOneParagraf).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.textContent = '!'
    })
})

/* №2 Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.*/

let buttonHref = document.querySelector('.button-href')
let taskTworeference = document.querySelectorAll('.task-two-reference')
let taskTwoResult = document.querySelector('.task-two-result')

buttonHref.addEventListener('click', () => {
    let mass = []
    Array.from(taskTworeference).forEach(elem => {
        mass.push(elem.href)
    })
    taskTwoResult.textContent = mass
})

/* №3 Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.*/

let clickResult = document.querySelector('.click-result')
let taskThreeResult = document.querySelector('.task-three-result')   

clickResult.addEventListener('click', () => {
    let str = ''
    for(let i = 1; i < 10; i++){
        str += i
    }
    taskThreeResult.textContent = str
})

/* №4 Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.*/

let massMonth = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']

document.getElementById('yearToday').textContent = new Date().getFullYear()
document.getElementById('monthToday').textContent = massMonth[new Date().getMonth()]
document.getElementById('dateToday').textContent = new Date().getDate()

/* №5 Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.*/

let taskFireReference = document.querySelector('.task-five-reference')
let taskFiveResult = document.querySelector('.task-five-result')
let clickReference = document.querySelector('.click-reference')

clickReference.addEventListener('click', () => {
    taskFiveResult.textContent = taskFireReference.href
})

let massFunc = [`Array.from(taskOneParagraf).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.textContent = '!'
    })
})`,`buttonHref.addEventListener('click', () => {
    let mass = []
    Array.from(taskTworeference).forEach(elem => {
        mass.push(elem.href)
    })
    taskTwoResult.textContent = mass
})`,

`clickResult.addEventListener('click', () => {
    let str = ''
    for(let i = 1; i < 10; i++){
        str += i
    }
    taskThreeResult.textContent = str
})`, `document.getElementById('yearToday').textContent = new Date().getFullYear()
document.getElementById('monthToday').textContent = massMonth[new Date().getMonth()]
document.getElementById('dateToday').textContent = new Date().getDate()`
,`clickReference.addEventListener('click', () => {
    taskFiveResult.textContent = taskFireReference.href
})`]