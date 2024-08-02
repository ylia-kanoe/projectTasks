
/* №1 По клику на кнопку создайте HTML таблицу с заданной шириной и высотой.*/


let createTable = document.getElementById("createTable")
let taskOneSizeTable = document.querySelector(".task-one-paragraf")
let taskOneBlockTable = document.querySelector(".task-one-block-table")

createTable.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < taskOneSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskOneSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTR.appendChild(itemTableTD)
        }
    }
    taskOneBlockTable.append(table)
})

/* №2 По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли их порядковые номера.*/

let createTableTwo = document.getElementById("createTableTwo")
let taskTwoSizeTable = document.querySelector(".task-two-paragraf")
let taskTwoBlockTable = document.querySelector(".task-two-block-table")

createTableTwo.addEventListener('click', () => {
    let table = document.createElement('table')
    let count = 1
    for(let i = 0; i < taskTwoSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskTwoSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTD.textContent = count
            itemTableTR.appendChild(itemTableTD)
            count++
        }
    }
    taskTwoBlockTable.append(table)
})

/* №3 По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли номера их рядов и колонок.*/

let createTableThree = document.getElementById("createTableThree")
let taskThreeSizeTable = document.querySelector(".task-three-paragraf")
let taskThreeBlockTable = document.querySelector(".task-three-block-table")

createTableThree.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < taskThreeSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskThreeSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTD.textContent = 'ряд ' + Number(i + 1)  + ' колонка ' + Number(j + 1)
            itemTableTR.appendChild(itemTableTD)
        }
    }
    taskThreeBlockTable.append(table)
})

/* №4 Дан массив: [[1, 2, 3],[4, 5, 6],	[7, 8, 9],] По нажатию на кнопку создайте таблицу, заполненную данными из этого массива.*/

let createTableFour = document.getElementById("createTableFour")
let taskFourBlockTable = document.querySelector(".task-four-block-table")

let mass = [[1, 2, 3],	[4, 5, 6],	[7, 8, 9],] 

createTableFour.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < mass.length; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < mass[i].length; j++){
            let itemTableTD = document.createElement('td')
            itemTableTR.appendChild(itemTableTD)
            itemTableTD.textContent = mass[i][j]
        }
    }
    taskFourBlockTable.append(table)
})

let massFunc = [`createTable.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < taskOneSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskOneSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTR.appendChild(itemTableTD)
        }
    }
    taskOneBlockTable.append(table)
})`,`createTableTwo.addEventListener('click', () => {
    let table = document.createElement('table')
    let count = 1
    for(let i = 0; i < taskTwoSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskTwoSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTD.textContent = count
            itemTableTR.appendChild(itemTableTD)
            count++
        }
    }
    taskTwoBlockTable.append(table)
})`,`createTableThree.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < taskThreeSizeTable.textContent[0]; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < taskThreeSizeTable.textContent[2]; j++){
            let itemTableTD = document.createElement('td')
            itemTableTD.textContent = 'ряд ' + Number(i + 1)  + ' колонка ' + Number(j + 1)
            itemTableTR.appendChild(itemTableTD)
        }
    }
    taskThreeBlockTable.append(table)
})`,`createTableFour.addEventListener('click', () => {
    let table = document.createElement('table')
    for(let i = 0; i < mass.length; i++){
        let itemTableTR = document.createElement('tr')
        table.appendChild(itemTableTR)
        for(let j = 0; j < mass[i].length; j++){
            let itemTableTD = document.createElement('td')
            itemTableTR.appendChild(itemTableTD)
            itemTableTD.textContent = mass[i][j]
        }
    }
    taskFourBlockTable.append(table)
})`]