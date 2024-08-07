/*№1 Дан селект и радио кнопочки, количество радио равно количеству пунктов в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически становилась отмеченной соответствующая радио кнопочка.*/

let radioInput = document.querySelectorAll('.task-one-input')
let radioOption = document.querySelectorAll('.task-one-select option')
let radioSelect = document.querySelector('.task-one-select')

radioSelect.addEventListener('change', (e) => {
    for(let i = 0; i < radioInput.length; i++){
        if(e.target.value == radioInput[i].name){
            radioInput[i].checked = true
        }
    }   
})
    
/* №2 Дана таблица. По нажатию на кнопку выделите в таблице красным цветом N случайных ячеек.*/

let twoTable = document.querySelector('.task-two-table')
let taskTwoTbody = document.querySelector('.task-two-table tbody')
let taskTwoTableTr = document.querySelectorAll('.task-two-table tr')
let taskTwoTableTd = document.querySelectorAll('.task-two-table td')
let colorCell = document.getElementById('colorCell')

function randomCell(){
    let mass = [] 
    for(let i = 0; i < Math.floor(Math.random() * taskTwoTableTd.length); i++){
        let random = Math.floor(Math.random() * taskTwoTableTd.length)
        if( mass.includes(random)){
            i--
        } else {
            mass.push(random)
        }
    }
    return mass
}

colorCell.addEventListener('click', () => {
    Array.from(taskTwoTableTd).forEach(elem => {
        elem.style.backgroundColor = 'white'
    })
    let mass = randomCell()
    for(let i = 0; i < mass.length; i++){
        taskTwoTableTd[mass[i]].style.backgroundColor = 'red'
    }
})

/* №3 Дан массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку создайте таблицу, заполненную данными из этого массива, содержащую столько колонок, сколько указано в инпуте.*/

let numTr = document.getElementById('numTr')
let addTable = document.getElementById('addTable')
let massThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let taskThreeResult = document.querySelector('.task-three-block')

addTable.addEventListener('click', () => {
    taskThreeResult.innerHTML = ''
    let newTable = document.createElement('table')
    let num = massThree.length / numTr.value
    let count = 0
    for(let i = 0; i < num; i++){
        let newTr = document.createElement('tr')
        for(let j = 0; j < numTr.value; j++){
            let newTd = document.createElement('td')
            if(count < massThree.length){
                newTd.textContent = massThree[count]
                count++
            } else {
                count = 0
            }
            newTr.append(newTd)
        }
        newTable.append(newTr)
    }
    taskThreeResult.append(newTable)
})

/* №4 Сделайте функцию, которая будет устанавливать правильную форму существительного после числа. Вот как должна работать эта функция:

func(1, 'яблоко', 'яблока', 'яблок'); // выведет '1 яблоко'
func(2, 'яблоко', 'яблока', 'яблок'); // выведет '2 яблока'
func(3, 'яблоко', 'яблока', 'яблок'); // выведет '3 яблока'
func(4, 'яблоко', 'яблока', 'яблок'); // выведет '4 яблока'
func(5, 'яблоко', 'яблока', 'яблок'); // выведет '5 яблок'
Вот пример для двухзначных чисел:

func(11, 'яблоко', 'яблока', 'яблок'); // выведет '11 яблок'
func(12, 'яблоко', 'яблока', 'яблок'); // выведет '12 яблок'
func(21, 'яблоко', 'яблока', 'яблок'); // выведет '21 яблоко'
func(23, 'яблоко', 'яблока', 'яблок'); // выведет '23 яблока'
Наша функция должна работать для чисел любой длины:

func(1223421, 'яблоко', 'яблока', 'яблок'); // выведет '1223421 яблоко'*/

function endWord(num, strOne, strtwo, strMore){
    if(num == 11 || num == 12 ||num == 13 ||num == 14){
        return num + ' ' + strMore
    } else if(String(num).slice(-1) == 1){
        return num + ' ' + strOne
    } else if(String(num).slice(-1) == 2 || String(num).slice(-1) == 3 || String(num).slice(-1) == 4){
        return num + ' ' + strtwo
    } else if((String(num).slice(-1) >= 5 && String(num).slice(-1) <= 9 ) || String(num).slice(-1) == 0){
        return num + ' ' + strMore
    } 
}

createBlockNumFour("№4 Сделайте функцию, которая будет устанавливать правильную форму существительного после числа. Вот как должна работать эта функция: func(1, 'яблоко', 'яблока', 'яблок'); // выведет '1 яблоко' Вот пример для для двухзначных чисел: func(11, 'яблоко', 'яблока', 'яблок'); // выведет '11 яблок' Наша функция должна работать для чисел любой длины: func(1223421, 'яблоко', 'яблока', 'яблок'); // выведет '1223421 яблоко'", 1, 'яблоко', 'яблока', 'яблок', 'Вывести правильную форму существительного', endWord)

let massFunc = [`radioSelect.addEventListener('change', (e) => {
    for(let i = 0; i < radioInput.length; i++){
        if(e.target.value == radioInput[i].name){
            radioInput[i].checked = true
        }
    }   
})`,`function randomCell(){
    let mass = [] 
    for(let i = 0; i < Math.floor(Math.random() * taskTwoTableTd.length); i++){
        let random = Math.floor(Math.random() * taskTwoTableTd.length)
        if( mass.includes(random)){
            i--
        } else {
            mass.push(random)
        }
    }
    return mass
}

colorCell.addEventListener('click', () => {
    Array.from(taskTwoTableTd).forEach(elem => {
        elem.style.backgroundColor = 'white'
    })
    let mass = randomCell()
    for(let i = 0; i < mass.length; i++){
        taskTwoTableTd[mass[i]].style.backgroundColor = 'red'
    }
})`,`let massThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

addTable.addEventListener('click', () => {
    taskThreeResult.innerHTML = ''
    let newTable = document.createElement('table')
    let num = massThree.length / numTr.value
    let count = 0
    for(let i = 0; i < num; i++){
        let newTr = document.createElement('tr')
        for(let j = 0; j < numTr.value; j++){
            let newTd = document.createElement('td')
            if(count < massThree.length){
                newTd.textContent = massThree[count]
                count++
            } else {
                count = 0
            }
            newTr.append(newTd)
        }
        newTable.append(newTr)
    }
    taskThreeResult.append(newTable)
})`,`function endWord(num, strOne, strtwo, strMore){
    if(num == 11 || num == 12 ||num == 13 ||num == 14){
        return num + ' ' + strMore
    } else if(String(num).slice(-1) == 1){
        return num + ' ' + strOne
    } else if(String(num).slice(-1) == 2 || String(num).slice(-1) == 3 || String(num).slice(-1) == 4){
        return num + ' ' + strtwo
    } else if((String(num).slice(-1) >= 5 && String(num).slice(-1) <= 9 ) || String(num).slice(-1) == 0){
        return num + ' ' + strMore
    } 
}`]