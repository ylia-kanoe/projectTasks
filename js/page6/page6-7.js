
/* №1 Выведите даты всех выходных дней текущего года в виде списка ul.*/
let taskOneBlock = document.querySelector('.task-one-block')

function outputDate(){
    let listItems = document.createElement('ul')
    taskOneBlock.append(listItems)
    let date = new Date()
    let dateDay
    for(let i = 1; i <= 12; i++){
        date.setMonth(i)
        date.setDate(0)
        dateDay = date.getDate()

        for(let j = 1; j <= dateDay; j++){
            date.setDate(j)
            if(date.getDay() == 0 || date.getDay() == 6 ){
            let item = document.createElement('li')
            item.textContent = date
            listItems.append(item)
            }
        }
    }
}
outputDate()

/* №2 Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца.*/

let taskTwoResult = document.querySelector('.task-two-result')
let outputNameDay = document.getElementById('outputNameDay')

outputNameDay.addEventListener('click', () => {
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    let date = new Date()
    date.setMonth(date.getMonth() + 1)
    date.setDate(0)
    console.log(date)
    taskTwoResult.textContent = massDay[date.getDay()]
})

/* №3 Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца.*/

let inputDays = document.getElementById("inputDays")
let taskThreeResult = document.querySelector(".task-three-result")

inputDays.addEventListener('click', () => {
    let select = document.createElement('select')
    taskThreeResult.append(select)
    let date = new Date()
    date.setMonth(date.getMonth() + 1)
    date.setDate(0)
    for(let i = 1; i <= date.getDate(); i++){
        let option = document.createElement('option')
        option.textContent = i
        select.append(option)
    }
})

/* №4 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых 
равно числу. Например, при вводе числа 5 у нас должна получится строка '00000'.*/

let taskFourInput = document.querySelector(".task-four-input")
let outputStr = document.getElementById("outputStr")
let taskFourResult = document.querySelector(".task-four-result")

outputStr.addEventListener('click', () => {
    let strZero = ''
    for(let i = 0; i < taskFourInput.value; i++){
        strZero += '0';
    }
    taskFourResult.textContent = strZero
})

let massFunc = [`function outputDate(){
    let listItems = document.createElement('ul')
    taskOneBlock.append(listItems)
    let date = new Date()
    let dateDay
    for(let i = 1; i <= 12; i++){
        date.setMonth(i)
        date.setDate(0)
        dateDay = date.getDate()

        for(let j = 1; j <= dateDay; j++){
            date.setDate(j)
            if(date.getDay() == 0 || date.getDay() == 6 ){
            let item = document.createElement('li')
            item.textContent = date
            listItems.append(item)
            }
        }
    }
}
outputDate()`,`outputNameDay.addEventListener('click', () => {
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    let date = new Date()
    date.setMonth(date.getMonth() + 1)
    date.setDate(0)
    console.log(date)
    taskTwoResult.textContent = massDay[date.getDay()]
})`,`inputDays.addEventListener('click', () => {
    let select = document.createElement('select')
    taskThreeResult.append(select)
    let date = new Date()
    date.setMonth(date.getMonth() + 1)
    date.setDate(0)
    for(let i = 1; i <= date.getDate(); i++){
        let option = document.createElement('option')
        option.textContent = i
        select.append(option)
    }
})`,`outputStr.addEventListener('click', () => {
    let strZero = ''
    for(let i = 0; i < taskFourInput.value; i++){
        strZero += '0';
    }
    taskFourResult.textContent = strZero
})`]