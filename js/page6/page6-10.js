
/* №1 Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот 
текст больше текста последнего тега li из списка.*/

let taskOneInput = document.querySelector(".task-one-input")
let taskOneListItems = document.querySelector(".task-one-list-items")
let addItemList = document.getElementById("addItemList")
let taskOneListItem = document.querySelectorAll('.task-one-list-items li')


addItemList.addEventListener('click', () => {
    taskOneListItem.forEach((elem, i) => {
        if(i+1 == taskOneListItem.length && taskOneInput.value.length > elem.textContent.length){
            let newItem = document.createElement('li')
            newItem.textContent = taskOneInput.value
            taskOneListItems.append(newItem) 
            taskOneListItem = document.querySelectorAll('.task-one-list-items li')
        }
    })
})

/* №2 Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный.*/

let printColor = document.getElementById("printColor") 
let itemTD = document.querySelectorAll(".block-table-two td")

printColor.addEventListener('click', () => {
    itemTD.forEach((elem, i) => {
        if( i % 2 == 0){
            elem.style.backgroundColor = "#ffffff"
        } else {
            elem.style.backgroundColor = "#000000"
        }
    })
})

/* №3 Напишите код, который выведет на экран таблицу умножения.*/

let blockTableTwo = document.querySelector('.block-table-three')

function tableMultuple(){
    let table = document.createElement('table')
    for(let i = 1; i <= 10; i++){
        let tableTR = document.createElement('tr')
        table.append(tableTR)
        for(let j = 2; j < 10; j++){
            let tableTD = document.createElement('td')
            tableTD.textContent = j + ' * ' + i + ' = ' + j*i
            tableTR.append(tableTD)
        }
    }
    blockTableTwo.append(table)
}
tableMultuple()


/* №4 Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте.*/


let taskFourInput = document.querySelector(".task-four-input-textarea")
let inputWord = document.querySelector(".task-four-input")
let fountWord = document.getElementById("fountWord")
let taskFourResult = document.querySelector(".task-four-result")

fountWord.addEventListener('click', () => {
    let mass = taskFourInput.value.split(' ')
    let count = 0
    for(let i = 0; i < mass.length; i++){
        if(inputWord.value == mass[i]){
            count += 1
        }
    }
    taskFourResult.textContent = count
})

let massFunc = [`addItemList.addEventListener('click', () => {
    taskOneListItem.forEach((elem, i) => {
        if(i+1 == item.length && taskOneInput.value.length > elem.textContent.length){
            let newItem = document.createElement('li')
            newItem.textContent = taskOneInput.value
            taskOneListItems.append(newItem) 
            item = document.querySelectorAll('li')
        }
    })
})`,`printColor.addEventListener('click', () => {
    itemTD.forEach((elem, i) => {
        if( i % 2 == 0){
            elem.style.backgroundColor = "#ffffff"
        } else {
            elem.style.backgroundColor = "#000000"
        }
    })
})`,`function tableMultuple(){
    let table = document.createElement('table')
    for(let i = 1; i <= 10; i++){
        let tableTR = document.createElement('tr')
        table.append(tableTR)
        for(let j = 2; j < 10; j++){
            let tableTD = document.createElement('td')
            tableTD.textContent = j + ' * ' + i + ' = ' + j*i
            tableTR.append(tableTD)
        }
    }
    blockTableTwo.append(table)
}
tableMultuple()`,`fountWord.addEventListener('click', () => {
    let mass = taskFourInput.value.split(' ')
    let count = 0
    for(let i = 0; i < mass.length; i++){
        if(inputWord.value == mass[i]){
            count += 1
        }
    }
    taskFourResult.textContent = count
})`]