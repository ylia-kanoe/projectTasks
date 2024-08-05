
/* №1 Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу.*/

let massColorOne = [ '#FF00FF', '#800080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080']
let pafagrafColor = document.querySelector(".task-one-pagaraf")
let nextColor = document.getElementById("nextColor")
let count = 0

nextColor.addEventListener('click', () => {
    pafagrafColor.style.backgroundColor = massColorOne[count]
    count++
    if(count == massColorOne.length-1){
        count = 0
    }
})

/* №2 Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами.*/

let taskTwoResult = document.querySelector(".task-two-result")
let dateOne = document.querySelector(".task-two-input-one")
let dateTwo = document.querySelector(".task-two-input-two")
let taskTwoInput = document.querySelectorAll('.task-two-input')

Array.from(taskTwoInput).forEach(elem => {
    elem.addEventListener('blur', () => {
        if(dateOne.value !='' && dateTwo.value != ''){
            let dateOneNum = new Date(dateOne.value)
            let dateTwoNum = new Date(dateTwo.value)
            let resultDate = (dateOneNum > dateTwoNum) ? (dateOneNum - dateTwoNum) : dateTwoNum - dateOneNum
            resultDate = resultDate / (60 * 60 * 24 * 1000)
            taskTwoResult.textContent = resultDate
        }
    })
})

/* №3 Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li.*/

let taskThreeListItem = document.querySelectorAll('.task-three-list-items li')
let massCount = [] 

Array.from(taskThreeListItem).forEach((elem, i)  => {
    let itemText = elem.textContent
    massCount.push(0)
    elem.addEventListener('click', () => { 
        massCount[i] = Number(massCount[i] + 1)
        elem.textContent = itemText + ' ' + massCount[i]
    })
})

/* №4 Дана кнопка и список ul, заполненный пунктами с числами. По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка.*/

let addItem = document.getElementById("addItem")
let taskFourListItem = document.querySelectorAll('.task-four-list-items li')
let taskFourListItems = document.querySelector('.task-four-list-items')

addItem.addEventListener('click', () => {
    let newItem = document.createElement('li')
    taskFourListItem.forEach(elem => {
        newItem.textContent = +elem.textContent + 1
    })
    taskFourListItems.append(newItem)
    taskFourListItem = document.querySelectorAll('.task-four-list-items li')
})

let massFunc = [`nextColor.addEventListener('click', () => {
    pafagrafColor.style.backgroundColor = massColorOne[count]
    count++
    if(count == massColorOne.length-1){
        count = 0
    }
})`,`Array.from(input).forEach(elem => {
    elem.addEventListener('blur', () => {
        if(dateOne.value !='' && dateTwo.value != ''){
            let dateOneNum = new Date(dateOne.value)
            let dateTwoNum = new Date(dateTwo.value)
            let resultDate = (dateOneNum > dateTwoNum) ? (dateOneNum - dateTwoNum) : dateTwoNum - dateOneNum
            resultDate = resultDate / (60 * 60 * 24 * 1000)
            taskTwoResult.textContent = resultDate
        }
    })
})`,`Array.from(taskThreeListItem).forEach((elem, i)  => {
    let itemText = elem.textContent
    massCount.push(0)
    elem.addEventListener('click', () => { 
        massCount[i] = Number(massCount[i] + 1)
        elem.textContent = itemText + ' ' + massCount[i]
    })
})`,`addItem.addEventListener('click', () => {
    let newItem = document.createElement('li')
    item.forEach(elem => {
        newItem.textContent = +elem.textContent + 1
    })
    taskFourListItems.append(newItem)
    taskFourListItem = document.querySelectorAll('.task-four-list-items li')
})`]