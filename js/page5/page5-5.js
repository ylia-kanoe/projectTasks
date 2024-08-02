/* №1 Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день. */

let dateToday = document.querySelector('.task-one-input-one')
let clickDateCut = document.getElementById('clickDateCut')
let massMonth = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']

clickDateCut.addEventListener('click', () => {
    dateToday = new Date(dateToday.value)
    document.getElementById('yearFound').textContent = dateToday.getFullYear()
    document.getElementById('monthFound').textContent = massMonth[dateToday.getMonth()]
    document.getElementById('dateFound').textContent = dateToday.getDate()
})

/* №2 Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.*/

let taskOneInputOne = document.querySelector('.task-two-input-one')
let taskOneInputTwo = document.querySelector('.task-two-input-two')
let taskTwoResult = document.querySelector('.task-two-result')
let massFull = document.getElementById('massFull')

massFull.addEventListener('click', () => {
    let mass = []
    for(let i = taskOneInputOne.value; i <= taskOneInputTwo.value; i++){
        mass.push(i)
    }
    taskTwoResult.textContent = '[ ' + mass.join(', ') + ' ]'
})

/* №3 Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.*/

let taskThreeStr = document.querySelector('.task-three-input')
let taskThreeResult = document.querySelector('.task-three-result')
let foundSymbol = document.getElementById('foundSymbol')

foundSymbol.addEventListener('click', () => {
    taskThreeResult.textContent = (taskThreeStr.value)[taskThreeStr.value.length - 1]

})

/* №4 Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.*/

let taskFourParagraf = document.querySelector('.task-four-paragraf')
let addNumber = document.getElementById('addNumber')

addNumber.addEventListener('click', () => {
    taskFourParagraf.textContent = +taskFourParagraf.textContent + 1
})


/* №5 Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.*/


let taskFiveStr = document.querySelector('.task-five-input')
let taskFiveResult = document.querySelector('.task-five-result')

taskFiveStr.addEventListener('blur', () => {
    let mass = taskFiveStr.value.split(' ')
    taskFiveResult.textContent = mass.length
})



let massFunc = [`clickDateCut.addEventListener('click', () => {
    dateToday = new Date(dateToday.value)
    document.getElementById('yearFound').textContent = dateToday.getFullYear()
    document.getElementById('monthFound').textContent = massMonth[dateToday.getMonth()]
    document.getElementById('dateFound').textContent = dateToday.getDate()
})
    
`,`massFull.addEventListener('click', () => {
    let mass = []
    for(let i = taskOneInputOne.value; i <= taskOneInputTwo.value; i++){
        mass.push(i)
    }
    taskTwoResult.textContent = '[ ' + mass.join(', ') + ' ]'
})`,

`foundSymbol.addEventListener('click', () => {
    taskThreeResult.textContent = (taskThreeStr.value)[taskThreeStr.value.length - 1]

})`, `addNumber.addEventListener('click', () => {
    taskFourParagraf.textContent = +taskFourParagraf.textContent + 1
})`
,`taskFiveStr.addEventListener('blur', () => {
    let mass = taskFiveStr.value.split(' ')
    taskFiveResult.textContent = mass.length
})`]