/* №1 Дана таблица и кнопка. По клику на кнопку поменяйте местами первый и второй ряд таблицы.*/

let taskOneItemTr = document.querySelectorAll('.task-one-table tr')
let taskOneItemTd = document.querySelectorAll('.task-one-table d')
let redTr = document.getElementById('redTr')

redTr.addEventListener('click', () => {
    for(let i = 0; i < taskOneItemTr.length; i++){
        if(i == 0){
            let temp = taskOneItemTr[i].innerHTML
            taskOneItemTr[i].innerHTML = taskOneItemTr[i+1].innerHTML
            taskOneItemTr[i+1].innerHTML = temp
        }
    }
})

/* №2 Дана таблица и кнопка. По клику на кнопку поменяйте местами первую и вторую колонки таблицы.*/

let taskTwoItemTr = document.querySelectorAll('.task-two-table tr')
let taskTwoItemTd = document.querySelectorAll('.task-two-table td')
let redTd = document.getElementById('redTd')

redTd.addEventListener('click', () => {
    let item = taskTwoItemTd.length / taskTwoItemTr.length
    for(let i = 0; i < taskTwoItemTd.length; i++){
        if(i % item == 0 ){
            let temp = taskTwoItemTd[i].innerHTML
            taskTwoItemTd[i].innerHTML = taskTwoItemTd[i+1].innerHTML
            taskTwoItemTd[i+1].innerHTML = temp
        }
    }
})

/* №3 Дана таблица. По клику на заголовок любой колонки отсортируйте таблицу по значениям ячеек этой колонки.*/

let taskThreeItemTr = document.querySelectorAll('.task-three-table tr')
let taskThreeItemTd = document.querySelectorAll('.task-three-table td')
let taskThreeItemTh = document.querySelectorAll('.task-three-table th')

Array.from(taskThreeItemTh).forEach((elem, i) => {
    elem.addEventListener('click', () => {
    })
})

/* №4 Дана таблица. Сделайте так, чтобы при кликах на любую яейку таблицы в нее по очереди вставлялись числа 1, 2 и 3.*/

let taskFourItemTr = document.querySelectorAll('.task-four-table tr')
let taskFourItemTd = document.querySelectorAll('.task-four-table td')

Array.from(taskFourItemTd).forEach(elem => {
    elem.addEventListener('click', () => {
        let i = 0
        setInterval(() => {
            elem.textContent = i + 1
            i++
        }, 500)
        
    })
})

let massFunc = [`redTr.addEventListener('click', () => {
    for(let i = 0; i < taskOneItemTr.length; i++){
        if(i == 0){
            let temp = taskOneItemTr[i].innerHTML
            taskOneItemTr[i].innerHTML = taskOneItemTr[i+1].innerHTML
            taskOneItemTr[i+1].innerHTML = temp
        }
    }
})`,`redTd.addEventListener('click', () => {
    let item = taskTwoItemTd.length / taskTwoItemTr.length
    for(let i = 0; i < taskTwoItemTd.length; i++){
        if(i % item == 0 ){
            let temp = taskTwoItemTd[i].innerHTML
            taskTwoItemTd[i].innerHTML = taskTwoItemTd[i+1].innerHTML
            taskTwoItemTd[i+1].innerHTML = temp
        }
    }
})`,``, `Array.from(taskFourItemTd).forEach(elem => {
    elem.addEventListener('click', () => {
        let i = 0
        setInterval(() => {
            elem.textContent = i + 1
            i++
        }, 500)
        
    })
})`]