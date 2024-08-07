
/* №1 Дана таблица. По нажатию на кнопку добавьте в эту таблицу новый ряд. */

let addTr = document.getElementById('addTr')
let oneTable = document.querySelector('.task-one-table')
let taskOneTbody = document.querySelector('.task-one-table tbody')
let taskOneTableTr = document.querySelectorAll('.task-one-table tr')
let taskOneTableTd = document.querySelectorAll('.task-one-table td')

addTr.addEventListener('click', () => {
    let newTr = document.createElement('tr')
    taskOneTbody.appendChild(newTr)
    for(let i = 0; i < taskOneTableTd.length / taskOneTableTr.length; i++){
        let newTd = document.createElement('td')
        newTr.append(newTd)
    }
})

/* №2 Дана таблица. По нажатию на кнопку добавьте в эту таблицу новую колонку.*/

let addTd = document.getElementById('addTd')
let twoTable = document.querySelector('.task-two-table')
let taskTwoTbody = document.querySelector('.task-two-table tbody')
let taskTwoTableTr = document.querySelectorAll('.task-two-table tr')
let taskTwoTableTd = document.querySelectorAll('.task-two-table td')

addTd.addEventListener('click', () => {
    Array.from(taskTwoTableTr).forEach((elem, i) => {
        Array.from(taskTwoTableTd).forEach((elem2, i) => {
            if(i == taskTwoTableTd.length / taskTwoTableTr.length){
                let newTd = document.createElement('td')
                elem.closest('tr').appendChild(newTd)
            }
        })
    })
})

/* №3 Дана таблица. По нажатию на кнопку добавьте в эту таблицу и новый ряд, и новую колонку.*/

let addTdTr = document.getElementById('addTdTr')
let threeTable = document.querySelector('.task-three-table')
let taskThreeTbody = document.querySelector('.task-three-table tbody')
let taskThreeTableTr = document.querySelectorAll('.task-three-table tr')
let taskThreeTableTd = document.querySelectorAll('.task-three-table td')

addTdTr.addEventListener('click', () => {
    Array.from(taskThreeTableTr).forEach((elem, i) => {
        Array.from(taskThreeTableTd).forEach((elem2, j) => {
            if( j == taskThreeTableTd.length-1){
                let newTd = document.createElement('td')
                elem.append(newTd)  
            }
        })
    })
    taskThreeTableTd = document.querySelectorAll('.task-three-table td')
    Array.from(taskThreeTableTr).forEach((elem, i) => {
       
        if( i == taskThreeTableTr.length-1){
            let newTr = document.createElement('tr')
            taskThreeTbody.append(newTr)
            for(let i = 0; i < (taskThreeTableTd.length / taskThreeTableTr.length); i++){
                let newTd = document.createElement('td')
                newTr.append(newTd)
            }
        }
    })
    taskThreeTableTr = document.querySelectorAll('.task-three-table tr')
})

/* №4 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования этой ячейки.*/

let fourTable = document.querySelector('.task-four-table')
let taskFourTbody = document.querySelector('.task-four-table tbody')
let taskFourTableTr = document.querySelectorAll('.task-four-table tr')
let taskFourTableTd = document.querySelectorAll('.task-four-table td')

Array.from(taskFourTableTd).forEach(elem => {
    elem.addEventListener('click', () => {
        if(!elem.contains(document.querySelector('input')) && !fourTable.contains(document.querySelector('input'))){
            let newInput = document.createElement('input')
            elem.append(newInput)
            newInput.focus()
        }
        let input = document.querySelector('.task-four-table input')
        elem.addEventListener('keydown', (e) => {
            if(e.code == 'Enter'){
                elem.textContent = input.value
            } 
        })
    })
})

/* №5 Дана таблица и кнопка. По нажатию на кнопку покрасьте в красный цвет случайную ячейку таблицы. Повторное нажатие на кнопку должно закрашивать новую незакрашенную ячейку, пока ячейки не закончатся.*/

let fiveTable = document.querySelector('.task-five-table')
let taskFiveTbody = document.querySelector('.task-five-table tbody')
let taskFiveTableTr = document.querySelectorAll('.task-five-table tr')
let taskFiveTableTd = document.querySelectorAll('.task-five-table td')
let colorCell = document.getElementById('colorCell')

function randomCell(){
    let mass = [] 
    for(let i = 0; i < taskFiveTableTd.length; i++){
        let random = Math.floor(Math.random() * taskFiveTableTd.length)
        if( mass.includes(random)){
            i--
        } else {
            mass.push(random)
        }
    }
    return mass
}

let count = 0
let mass = randomCell()

colorCell.addEventListener('click', () => {
    taskFiveTableTd[mass[count]].style.backgroundColor = 'red'
    count++
})

/* №6 Дана таблица и кнопка. Пусть каждое нажатие на кнопку красит в красный цвет следующую по порядку ячейку таблицы. */

let colorTd = document.getElementById('colorTd')
let sixTable = document.querySelector('.task-six-table')
let taskSixTableTr = document.querySelectorAll('.task-six-table tr')
let taskSixTableTd = document.querySelectorAll('.task-six-table td')
let countTr = 0
let countTd = 0
colorTd.addEventListener('click', () => {
    Array.from(taskSixTableTr).forEach((elem, i) => {
        Array.from(taskSixTableTd).forEach((elem2, j) => {
            if(countTr == i && countTd == j){
                elem2.style.backgroundColor = 'red'
            }
        })
    })

    countTr++
    countTd++

    if(countTr >= taskSixTableTr.length){
        countTr = 0
    }
    if(countTd >= taskSixTableTd.length){
        countTd = 0
    }
})

/* №7 Выведите на экран 6 случайных картинок игральных карт.*/

let cardAdd = document.querySelector('.task-seven-card-add')
let massMast = ['../../img/9/8336951.png','../../img/9/w256h2561372351008Gameclubs256.png','../../img/9/w256h2561372351008Gamediamond256.png','../../img/9/w256h2561372351008Gamehearts256.png']
let massItem = ['A','K','D','B','10','9','8','7','6']
let playCard = document.querySelectorAll('.task-seven-card-add .play-card')

function random(num){
    return Math.floor(Math.random() * num)
}

function massCreate(){
    let mass = [] 
    let mass2 = []
    for(let i = 0; i < 6; i++){
        let item = massMast[random(massMast.length)]
        let item2 = massItem[random(massItem.length)]
        for(let j = 0; j < mass.length; j++){
            if(mass[j].includes(item) && mass[j].includes(item2)){
                i--
            }
        }
        mass2.push(item)
        mass2.push(item2)
        if(mass2.length >= 2){
            mass.push(mass2)
            mass2 = []
        }
    }
    if(mass.length > 6){
        mass.length = 6
    }
    return mass
}

let massRez = []
massRez = massCreate()

function itemCard(){
    for(let i = 0; i < massRez.length; i++){
        let newCard = document.createElement('div')
        newCard.classList.add('play-card')
        let newMinIcon = document.createElement('div')
        newMinIcon.classList.add('min-icon')
        let newMinIconReverse = document.createElement('div')
        newMinIconReverse.classList.add('min-icon')
        newMinIconReverse.classList.add('reverce')
        let newCardIcon = document.createElement('div')
        newCardIcon.classList.add('card-icon')

        newMinIcon.textContent = massRez[i][1]
        newMinIconReverse.textContent = massRez[i][1]

        let imgMinIcon = document.createElement('img') 
        let imgMinIconReverce = document.createElement('img') 
        let imgCardIcon= document.createElement('img') 

        imgMinIcon.src =  massRez[i][0]
        imgMinIconReverce.src =  massRez[i][0]
        imgCardIcon.src =  massRez[i][0]
              
        newCard.append(newMinIcon)
        newCard.append(newMinIconReverse)
        newCard.append(newCardIcon)
        newCardIcon.append(imgMinIcon)
        newMinIcon.append(imgCardIcon)
        newMinIconReverse.append(imgMinIconReverce)
                
        cardAdd.append(newCard)
    }
}

itemCard()

let massFunc = [`let addTr = document.getElementById('addTr')
let oneTable = document.querySelector('.task-one-table')
let taskOneTbody = document.querySelector('.task-one-table tbody')
let taskOneTableTr = document.querySelectorAll('.task-one-table tr')
let taskOneTableTd = document.querySelectorAll('.task-one-table td')

addTr.addEventListener('click', () => {
    let newTr = document.createElement('tr')
    taskOneTbody.appendChild(newTr)
    for(let i = 0; i < taskOneTableTd.length / taskOneTableTr.length; i++){
        let newTd = document.createElement('td')
        newTr.append(newTd)
    }
})`,`let addTd = document.getElementById('addTd')
let twoTable = document.querySelector('.task-two-table')
let taskTwoTbody = document.querySelector('.task-two-table tbody')
let taskTwoTableTr = document.querySelectorAll('.task-two-table tr')
let taskTwoTableTd = document.querySelectorAll('.task-two-table td')

addTd.addEventListener('click', () => {
    Array.from(taskTwoTableTr).forEach((elem, i) => {
        Array.from(taskTwoTableTd).forEach((elem2, i) => {
            if(i == taskTwoTableTd.length / taskTwoTableTr.length){
                let newTd = document.createElement('td')
                elem.closest('tr').appendChild(newTd)
            }
        })
    })
})`,`let addTdTr = document.getElementById('addTdTr')
let threeTable = document.querySelector('.task-three-table')
let taskThreeTbody = document.querySelector('.task-three-table tbody')
let taskThreeTableTr = document.querySelectorAll('.task-three-table tr')
let taskThreeTableTd = document.querySelectorAll('.task-three-table td')

addTdTr.addEventListener('click', () => {
    Array.from(taskThreeTableTr).forEach((elem, i) => {
        Array.from(taskThreeTableTd).forEach((elem2, j) => {
            if( j == taskThreeTableTd.length-1){
                let newTd = document.createElement('td')
                elem.append(newTd)  
            }
        })
    })
    taskThreeTableTd = document.querySelectorAll('.task-three-table td')
    Array.from(taskThreeTableTr).forEach((elem, i) => {
       
        if( i == taskThreeTableTr.length-1){
            let newTr = document.createElement('tr')
            taskThreeTbody.append(newTr)
            for(let i = 0; i < (taskThreeTableTd.length / taskThreeTableTr.length); i++){
                let newTd = document.createElement('td')
                newTr.append(newTd)
            }
        }
    })
    taskThreeTableTr = document.querySelectorAll('.task-three-table tr')
})`,`let fourTable = document.querySelector('.task-four-table')
let taskFourTbody = document.querySelector('.task-four-table tbody')
let taskFourTableTr = document.querySelectorAll('.task-four-table tr')
let taskFourTableTd = document.querySelectorAll('.task-four-table td')

Array.from(taskFourTableTd).forEach(elem => {
    elem.addEventListener('click', () => {
        if(!elem.contains(document.querySelector('input')) && !fourTable.contains(document.querySelector('input'))){
            let newInput = document.createElement('input')
            elem.append(newInput)
            newInput.focus()
        }
        let input = document.querySelector('.task-four-table input')
        elem.addEventListener('keydown', (e) => {
            if(e.code == 'Enter'){
                elem.textContent = input.value
            } 
        })
    })
})`,`let fiveTable = document.querySelector('.task-five-table')
let taskFiveTbody = document.querySelector('.task-five-table tbody')
let taskFiveTableTr = document.querySelectorAll('.task-five-table tr')
let taskFiveTableTd = document.querySelectorAll('.task-five-table td')
let colorCell = document.getElementById('colorCell')

function randomCell(){
    let mass = [] 
    for(let i = 0; i < taskFiveTableTd.length; i++){
        let random = Math.floor(Math.random() * taskFiveTableTd.length)
        if( mass.includes(random)){
            i--
        } else {
            mass.push(random)
        }
    }
    return mass
}

let count = 0
let mass = randomCell()

colorCell.addEventListener('click', () => {
    taskFiveTableTd[mass[count]].style.backgroundColor = 'red'
    count++
})`,`let colorTd = document.getElementById('colorTd')
let sixTable = document.querySelector('.task-six-table')
let taskSixTableTr = document.querySelectorAll('.task-six-table tr')
let taskSixTableTd = document.querySelectorAll('.task-six-table td')
let countTr = 0
let countTd = 0
colorTd.addEventListener('click', () => {
    Array.from(taskSixTableTr).forEach((elem, i) => {
        Array.from(taskSixTableTd).forEach((elem2, j) => {
            if(countTr == i && countTd == j){
                elem2.style.backgroundColor = 'red'
            }
        })
    })

    countTr++
    countTd++

    if(countTr >= taskSixTableTr.length){
        countTr = 0
    }
    if(countTd >= taskSixTableTd.length){
        countTd = 0
    }
})`,`let cardAdd = document.querySelector('.task-seven-card-add')
let massMast = ['../../img/9/8336951.png','../../img/9/w256h2561372351008Gameclubs256.png','../../img/9/w256h2561372351008Gamediamond256.png','../../img/9/w256h2561372351008Gamehearts256.png']
let massItem = ['A','K','D','B','10','9','8','7','6']
let playCard = document.querySelectorAll('.task-seven-card-add .play-card')

function random(num){
    return Math.floor(Math.random() * num)
}

function massCreate(){
    let mass = [] 
    let mass2 = []
    for(let i = 0; i < 6; i++){
        let item = massMast[random(massMast.length)]
        let item2 = massItem[random(massItem.length)]
        for(let j = 0; j < mass.length; j++){
            if(mass[j].includes(item) && mass[j].includes(item2)){
                i--
            }
        }
        mass2.push(item)
        mass2.push(item2)
        if(mass2.length >= 2){
            mass.push(mass2)
            mass2 = []
        }
    }
    if(mass.length > 6){
        mass.length = 6
    }
    return mass
}

let massRez = []
massRez = massCreate()

function itemCard(){
    for(let i = 0; i < massRez.length; i++){
        let newCard = document.createElement('div')
        newCard.classList.add('play-card')
        let newMinIcon = document.createElement('div')
        newMinIcon.classList.add('min-icon')
        let newMinIconReverse = document.createElement('div')
        newMinIconReverse.classList.add('min-icon')
        newMinIconReverse.classList.add('reverce')
        let newCardIcon = document.createElement('div')
        newCardIcon.classList.add('card-icon')

        newMinIcon.textContent = massRez[i][1]
        newMinIconReverse.textContent = massRez[i][1]

        let imgMinIcon = document.createElement('img') 
        let imgMinIconReverce = document.createElement('img') 
        let imgCardIcon= document.createElement('img') 

        imgMinIcon.src =  massRez[i][0]
        imgMinIconReverce.src =  massRez[i][0]
        imgCardIcon.src =  massRez[i][0]
              
        newCard.append(newMinIcon)
        newCard.append(newMinIconReverse)
        newCard.append(newCardIcon)
        newCardIcon.append(imgMinIcon)
        newMinIcon.append(imgCardIcon)
        newMinIconReverse.append(imgMinIconReverce)
                
        cardAdd.append(newCard)
    }
}

itemCard()`]