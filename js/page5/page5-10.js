/* №2 Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив. */


let randomMassPush = document.getElementById('randomMassPush')
let taskTwoParagraf = document.querySelector('.task-two-paragraf')
let mass = taskTwoParagraf.textContent.split(',')

randomMassPush.addEventListener('click', () => {
    mass.push(Math.floor(Math.random() * 100))
    taskTwoParagraf.textContent = mass
})

/* №3 Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.*/


let taskThreeParagraf = document.querySelectorAll('.task-three-paragraf')
let massColor = [ 'rgb(255, 0, 255)', 'rgb(128, 0, 128)', 'rgb(255, 0, 0)','rgb(128, 0, 0)','rgb(255, 255, 0)','rgb(128, 128, 0)','rgb(0, 255, 0)','rgb(0, 128, 0)','rgb(0, 255, 255)','rgb(0, 128, 128)','rgb(0, 0, 255)','rgb(0, 0, 128)']

Array.from(taskThreeParagraf).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = massColor[Math.floor(Math.random() * massColor.length)]
    })
})

/* №4 Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.*/

let massNum = [1,2,3,4,5,6,7,8,9]

let taskFourItem = document.querySelector('.task-four-input')
let printDelitel = document.getElementById('printDelitel')
let taskFourParagraf = document.querySelector('.task-four-paragraf')
taskFourParagraf.textContent = massNum

printDelitel.addEventListener('click', () => {
    let massResult = []
    for(let i = 0; i < massNum.length; i++){
        if(massNum[i] % 2 == 0){
            massResult.push(massNum[i])
        }
    }
    taskFourItem.value = massResult
})

/* №5 Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.*/

let taskFiveResult = document.querySelector('.task-five-result')
let foundNewYear = document.getElementById('foundNewYear')

foundNewYear.addEventListener("click", () => {
    let dateToday = new Date()
    let dateNewYear = new Date(dateToday)
    dateNewYear.setFullYear(dateNewYear.getFullYear()+1)
    dateNewYear.setMonth(0)
    dateNewYear.setDate(1)
    taskFiveResult.textContent = (dateNewYear - dateToday) / (60 * 60 * 24 * 1000)
})

/* №6 Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.*/

let createListYear = document.getElementById("createListYear")
let taskFiveListItems = document.querySelector(".task-five-list-items")

createListYear.addEventListener('click', () => {
    let date = new Date().getFullYear()
    for(let i = date - 100; i <= date + 100; i++){
        let item = document.createElement('li')
        taskFiveListItems.appendChild(item)
        item.textContent = i
    }
})

let massFunc = [`randomMassPush.addEventListener('click', () => {
    mass.push(Math.floor(Math.random() * 100))
    taskTwoParagraf.textContent = mass
})`,`Array.from(taskThreeParagraf).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = massColor[Math.floor(Math.random() * massColor.length)]
    })
})`,`printDelitel.addEventListener('click', () => {
    let massResult = []
    for(let i = 0; i < massNum.length; i++){
        if(massNum[i] % 2 == 0){
            massResult.push(massNum[i])
        }
    }
    taskFourItem.value = massResult
})`,`foundNewYear.addEventListener("click", () => {
    let dateToday = new Date()
    let dateNewYear = new Date(dateToday)
    dateNewYear.setFullYear(dateNewYear.getFullYear()+1)
    dateNewYear.setMonth(0)
    dateNewYear.setDate(1)
    taskFiveResult.textContent = (dateNewYear - dateToday) / (60 * 60 * 24 * 1000)
})`,`createListYear.addEventListener('click', () => {
    let date = new Date().getFullYear()
    for(let i = date - 100; i <= date + 100; i++){
        let item = document.createElement('li')
        taskFiveListItems.appendChild(item)
        item.textContent = i
    }
})`]