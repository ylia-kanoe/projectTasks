
/* №1 Дан список ul и кнопка. По нажатию на кнопку перемешайте пункты списка в случайном порядке.*/

let mixList = document.getElementById('mixList')
let taskOneListItems = document.querySelector('.task-one-list-items')
let taskOneListItem = document.querySelectorAll('.task-one-list-items li')

function randomItem() {
    let massRandom = []
    for(let i = 0; i < taskOneListItem.length; i++){
        let random = Math.floor(Math.random() * taskOneListItem.length)
        if(massRandom.includes(random)){
            return randomItem() 
        }
        massRandom.push(random)
    }
    return massRandom
}

mixList.addEventListener('click', () => {
    let mass = randomItem()
    taskOneListItems.innerHTML = ''
    for(let i = 0; i < mass.length; i++){
        taskOneListItems.append(taskOneListItem[mass[i]])
    }

})

/* №2 Два числа делятся друг на друга, в результате получается периодическая дробь. Напишите код, который определит период этой дроби.*/

function periodFraction(numOne, numTwo){

    let period = +numOne / +numTwo
    let str = ''
    let strPer = ''
    let strFound = ''
    let count = 0
    for(let i = 0; i < String(period).length; i++){ 
        if(str.includes('.')){
            strPer += String(period)[i]
        } else {
            str += String(period)[i]
        }
    }
    for(let j = 0; j < String(strPer).length; j++){ 
        if(strFound.includes(String(strPer)[j])){    
            count++
            if(count > 3){
                return strFound
            }
        } else {
            strFound += String(strPer)[j]
        }
    }
    return strFound
}

createBlockNumTwo('№2 Два числа делятся друг на друга, в результате получается периодическая дробь. Напишите код, который определит период этой дроби', 5, 11, 'Определить период дроби', periodFraction)

/* №3 Дан инпут, абзац и кнопка. В инпут вводится целое число. По нажатию на кнопку выведите в абзац разложение этого числа на простые множители.<br><br>*/

let taskThreeInput = document.querySelector('.task-three-input')
let decompose = document.getElementById('decompose')
let taskThreeResult = document.querySelector('.task-three-result')

function decomposeNum(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            mass.push(i)
        }
    }
    return mass
}

function decomposeMass(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            mass.push(decomposeNum(i))
        }
    }
    return mass
}

decompose.addEventListener('click', () => {
    let mass = decomposeMass(taskThreeInput.value)
    let massResult = []
    for(let i = 0; i < mass.length; i++){
        if(mass[i].length == 2){
            massResult.push(mass[i][0])
        }
    }
    taskThreeResult.textContent = massResult.join(', ')

})

/* №4 Даны два инпута и кнопка. По клику на кнопку выведите список список ul всех простых чисел из промежутка, заданном значениями инпутов.*/

let taskFourInputOne = document.querySelector('.task-four-input-one')
let taskFourInputTwo = document.querySelector('.task-four-input-two')
let outputSimpleNumber = document.getElementById('outputSimpleNumber')
let taskFourResult = document.querySelector('.task-four-result')

function createMass(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 == 0){
            mass.push(i)
        }
    }
    return mass
}

outputSimpleNumber.addEventListener('click', () => {
    taskFourResult.innerHTML = ''
    let numMax = (+taskFourInputOne.value > +taskFourInputTwo.value) ? +taskFourInputOne.value : +taskFourInputTwo.value
    let numMin = (+taskFourInputOne.value > +taskFourInputTwo.value) ? +taskFourInputTwo.value : +taskFourInputOne.value
    let mass = []
    for(let i = numMax - 1; i > numMin; i--){
        mass = createMass(i)
        if(mass.length <= 2){
            let newItem = document.createElement('li')
            newItem.textContent = i
            taskFourResult.append(newItem)
        }  
    }
})

let massFunc = [`
function randomItem() {
    let massRandom = []
    for(let i = 0; i < taskOneListItem.length; i++){
        let random = Math.floor(Math.random() * taskOneListItem.length)
        if(massRandom.includes(random)){
            return randomItem() 
        }
        massRandom.push(random)
    }
    return massRandom
}

mixList.addEventListener('click', () => {
    let mass = randomItem()
    taskOneListItems.innerHTML = ''
    for(let i = 0; i < mass.length; i++){
        taskOneListItems.append(taskOneListItem[mass[i]])
    }

})
`,`function decomposeNum(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            mass.push(i)
        }
    }
    return mass
}

function decomposeMass(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            mass.push(decomposeNum(i))
        }
    }
    return mass
}

decompose.addEventListener('click', () => {
    let mass = decomposeMass(taskThreeInput.value)
    let massResult = []
    for(let i = 0; i < mass.length; i++){
        if(mass[i].length == 2){
            massResult.push(mass[i][0])
        }
    }
    taskThreeResult.textContent = massResult.join(', ')

})`,`function createMass(num){
    let mass = []
    for(let i = num; i > 0; i--){
        if((num / i) % 1 == 0){
            mass.push(i)
        }
    }
    return mass
}

outputSimpleNumber.addEventListener('click', () => {
    taskFourResult.innerHTML = ''
    let numMax = (+taskFourInputOne.value > +taskFourInputTwo.value) ? +taskFourInputOne.value : +taskFourInputTwo.value
    let numMin = (+taskFourInputOne.value > +taskFourInputTwo.value) ? +taskFourInputTwo.value : +taskFourInputOne.value
    let mass = []
    for(let i = numMax - 1; i > numMin; i--){
        mass = createMass(i)
        if(mass.length <= 2){
            let newItem = document.createElement('li')
            newItem.textContent = i
            taskFourResult.append(newItem)
        }  
    }
})`,`function periodFraction(numOne, numTwo){

let period = +numOne / +numTwo
let str = ''
let strPer = ''
let strFound = ''
let count = 0
for(let i = 0; i < String(period).length; i++){ 
    if(str.includes('.')){
        strPer += String(period)[i]
    } else {
        str += String(period)[i]
    }
}
for(let j = 0; j < String(strPer).length; j++){ 
    if(strFound.includes(String(strPer)[j])){    
        count++
        if(count > 3){
            return strFound
        }
    } else {
        strFound += String(strPer)[j]
    }
}
return strFound
}`]