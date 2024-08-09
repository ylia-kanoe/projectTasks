
/* №1 Дана таблица. При клике на ячейку она активируется каким-нибудь цветом. Сделайте так, чтобы ячейки вокруг активированной не активировались. */

let taskOneItemTr = document.querySelectorAll('.task-one-table tr')
let taskOneItemTd = document.querySelectorAll('.task-one-table td')

Array.from(taskOneItemTd).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if (elem.previousElementSibling?.style.backgroundColor != 'red' && elem?.nextElementSibling?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length]?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length - 1]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length + 1]?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length + 1]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length - 1]?.style.backgroundColor != 'red'
        ) {
            elem.style.backgroundColor = 'red'
        }
    })
})

/* №2 Дана таблица. Сделайте так, чтобы каждую секунду активировалась случайная ячейка таблицы. Одна ячейка не может быть активной два раза подряд. */

let taskTwoItemTr = document.querySelectorAll('.task-two-table tr')
let taskTwoItemTd = document.querySelectorAll('.task-two-table td')

function randomCell(num) {
    let mass = []
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * num)
        if (!mass.includes(random)) {
            mass.push(random)
        } else {
            i--
        }
    }
    return mass
}

let mass = randomCell(taskTwoItemTd.length)

let i = 0
let time = setInterval(() => {
    taskTwoItemTd[mass[i]].style.backgroundColor = 'red'
    i++
    if (i == mass.length) {
        clearInterval(time)
    }
}, 1000)

/* №3 Дан текстареа. Как известно, его размер можно менять, потянув за уголок. Сделайте так, чтобы можно было изменить размер этого текстареа, а затем обновить страницу - и изменения не должны пропасть.*/

let textSize = document.getElementById('textSize')

document.addEventListener('mouseup', () => {
    localStorage.setItem('height', textSize.getBoundingClientRect().height);
    localStorage.setItem('width', textSize.getBoundingClientRect().width)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('textSize').style.width = localStorage.getItem('width') + 'px'
    document.getElementById('textSize').style.height = localStorage.getItem('height') + 'px'
})

/* №4 Дан инпут и кнопка. По клику на кнопку выведите список ul всех избыточных чисел из промежутка, от 0 до заданного значения инпута.*/

let taskFourListItems = document.querySelector('.task-four-list-items')
let taskFourInput = document.querySelector('.task-four-input') 
let printRedundant = document.getElementById('printRedundant')

printRedundant.addEventListener('click', () => {
    taskFourListItems.innerHTML = ''
    let num = +taskFourInput.value
    let sum = 0
    for(let i = num; i > 0; i--){
        for(let j = num - 1 ; j > 0; j--){
            if((i / j) % 1 == 0){
                sum += j
            }     
        }
        if( (sum - i) > i ){
            let listItem = document.createElement('li')
            listItem.textContent = i
            taskFourListItems.append(listItem)
        }
        sum = 0
    }
})

/* №5 Дана квадратная HTML таблица произвольного размера. По нажатию на кнопку заполните половину таблицу следующим образом:*/

let tableFill = document.getElementById('tableFill')
let taskFiveTableTd = document.querySelectorAll('.task-five-table td')
let taskFiveTableTr = document.querySelectorAll('.task-five-table tr')

tableFill.addEventListener('click', () => {
    let num = 0
    let num2 = taskFiveTableTr.length

    for (let i = 0; i < taskFiveTableTd.length; i++) {
        if (i % taskFiveTableTr.length == 0 && i > 1) {
            num2 = num2 - 1
            num = 0
        }
        if (num2 > num) {
            taskFiveTableTd[i].textContent = '+'
            num++
        }
    }
})

let massFunc = [`Array.from(taskOneItemTd).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if (elem.previousElementSibling?.style.backgroundColor != 'red' && elem?.nextElementSibling?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length]?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length - 1]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length + 1]?.style.backgroundColor != 'red' &&
            taskOneItemTd[i - taskOneItemTr.length + 1]?.style.backgroundColor != 'red' && taskOneItemTd[i + taskOneItemTr.length - 1]?.style.backgroundColor != 'red'
        ) {
            elem.style.backgroundColor = 'red'
        }
    })
})`,`function randomCell(num) {
    let mass = []
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * num)
        if (!mass.includes(random)) {
            mass.push(random)
        } else {
            i--
        }
    }
    return mass
}

let mass = randomCell(taskTwoItemTd.length)

let i = 0
let time = setInterval(() => {
    taskTwoItemTd[mass[i]].style.backgroundColor = 'red'
    i++
    if (i == mass.length) {
        clearInterval(time)
    }
}, 1000)`,`document.addEventListener('mouseup', () => {
    localStorage.setItem('height', textSize.getBoundingClientRect().height);
    localStorage.setItem('width', textSize.getBoundingClientRect().width)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('textSize').style.width = localStorage.getItem('width') + 'px'
    document.getElementById('textSize').style.height = localStorage.getItem('height') + 'px'
})`,``,`tableFill.addEventListener('click', () => {
    let num = 0
    let num2 = taskFiveTableTr.length

    for (let i = 0; i < taskFiveTableTd.length; i++) {
        if (i % taskFiveTableTr.length == 0 && i > 1) {
            num2 = num2 - 1
            num = 0
        }
        if (num2 > num) {
            taskFiveTableTd[i].textContent = '+'
            num++
        }
    }
})`]