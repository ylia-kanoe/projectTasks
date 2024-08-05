
/* №1 Дана кнопка и список ul, заполненный числами. По клику на кнопку удалите пункт списка, содержащий самое максимальное число.*/

let deleteMaxNumb = document.getElementById('deleteMaxNumb')
let taskOneListItem = document.querySelectorAll('.task-one-list-items li')
let taskOneListItems = document.querySelector('.task-one-list-items')

deleteMaxNumb.addEventListener('click', () => {
    let maxItem = 0
    let position = 0
    for(let i = 0; i < taskOneListItem.length; i++){
        if(+taskOneListItem[i].textContent > maxItem){
            maxItem = +taskOneListItem[i].textContent
            position = i
        }
    }
    taskOneListItems.removeChild(taskOneListItem[position])
    taskOneListItem = document.querySelectorAll('.task-one-list-items li') 
})

/* №2 Дан абзац, содержащий текст со словами. Дана также кнопка. По клику на кнопку возьмите каждое слово в свой тег span.*/

let twoTaskPafagraf = document.querySelector(".task-two-pafagraf")
let createSpanTwo = document.getElementById("createSpanTwo")

createSpanTwo.addEventListener('click', () => {
    let mass = twoTaskPafagraf.textContent.split(' ')
    twoTaskPafagraf.textContent = ''
    for(let i = 0; i < mass.length; i++){
        let newElem = document.createElement('span')
        newElem.textContent = mass[i] + ' '
        twoTaskPafagraf.append(newElem)
    } 
})

/* №3 Дан абзац, содержащий текст со словами и с дробями вида 1/2. Дана также кнопка. По клику на кнопку возьмите каждую дробь в свой тег span.*/

let taskThreePafagraf = document.querySelector(".task-three-pafagraf")
let createSpanThree = document.getElementById("createSpanThree")

createSpanThree.addEventListener('click', () => {
    let mass = taskThreePafagraf.textContent.split(' ')
    taskThreePafagraf.textContent = ''
    for(let i = 0; i < mass.length; i++){
        if(mass[i].includes('/')){
            let newElem = document.createElement('span')
            newElem.textContent = mass[i] + ' '
            taskThreePafagraf.append(newElem)
        } else {
            taskThreePafagraf.append(mass[i] + ' ')
        }      
    }  
})

/* №4 Дана таблица и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в первой колонке все даты рождения юзера, а во второй колонке - соответствующие дни недели. */

let inputBirthDate = document.getElementById('inputBirthDate')
let twoFourResult = document.querySelector('.task-four-result')

inputBirthDate.addEventListener('blur', () => {
    let birthDate = new Date(inputBirthDate.value)
    let dateToday = new Date()
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    let tableDate = document.createElement('table')

    for(let i = birthDate.getFullYear(); i < dateToday.getFullYear(); i++){
        birthDate.setDate(birthDate.getDate())
        birthDate.setMonth(birthDate.getMonth())
        birthDate.setFullYear(i)

        let tableTR = document.createElement('tr')
        let tableTDOne = document.createElement('td')
        let tableTDTwo = document.createElement('td')

        tableTDOne.textContent = birthDate
        tableTDTwo.textContent = massDay[birthDate.getDay()]

        tableDate.append(tableTR)
        tableTR.append(tableTDOne)
        tableTR.append(tableTDTwo)
    }
    twoFourResult.append(tableDate) 
})

/* №5 Напишите программу, которая сформирует следующий массив: [[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],]*/

function massGenerator() {
    let massResult = []
    let massOne = []
    let massTwo = []
    let massThree = []
    for(let i = 0; i < 3; i ++){
        for(let i = 0; i < 3; i++){
            for(let i = 0; i < 3; i++){
                massThree.push(i+1)
            }
            massTwo.push(massThree)
            massThree = []
        }
        massOne.push(massTwo)
        massTwo = []
    }
    massResult.push(massOne)
    console.log(massResult)
    return massResult
}

createBlockNoData("№5 Напишите программу, которая сформирует следующий массив: [[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],]", 'Сформировать массив', massGenerator)


let massFunc = [`deleteMaxNumb.addEventListener('click', () => {
    let maxItem = 0
    let position = 0
    for(let i = 0; i < taskOneListItem.length; i++){
        if(+taskOneListItem[i].textContent > maxItem){
            maxItem = +taskOneListItem[i].textContent
            position = i
        }
    }
    taskOneListItems.removeChild(taskOneListItem[position])
    taskOneListItem = document.querySelectorAll('.task-one-list-items li') 
})`,`createSpanTwo.addEventListener('click', () => {
    let mass = twoTaskPafagraf.textContent.split(' ')
    twoTaskPafagraf.textContent = ''
    for(let i = 0; i < mass.length; i++){
        let newElem = document.createElement('span')
        newElem.textContent = mass[i] + ' '
        twoTaskPafagraf.append(newElem)
    } 
})`,`createSpanThree.addEventListener('click', () => {
    let mass = taskThreePafagraf.textContent.split(' ')
    taskThreePafagraf.textContent = ''
    for(let i = 0; i < mass.length; i++){
        if(mass[i].includes('/')){
            let newElem = document.createElement('span')
            newElem.textContent = mass[i] + ' '
            taskThreePafagraf.append(newElem)
        } else {
            taskThreePafagraf.append(mass[i] + ' ')
        }      
    }  
})`,`inputBirthDate.addEventListener('blur', () => {
    let birthDate = new Date(inputBirthDate.value)
    let dateToday = new Date()
    let massDay = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
    let tableDate = document.createElement('table')

    for(let i = birthDate.getFullYear(); i < dateToday.getFullYear(); i++){
        birthDate.setDate(birthDate.getDate())
        birthDate.setMonth(birthDate.getMonth())
        birthDate.setFullYear(i)

        let tableTR = document.createElement('tr')
        let tableTDOne = document.createElement('td')
        let tableTDTwo = document.createElement('td')

        tableTDOne.textContent = birthDate
        tableTDTwo.textContent = massDay[birthDate.getDay()]

        tableDate.append(tableTR)
        tableTR.append(tableTDOne)
        tableTR.append(tableTDTwo)
    }
    twoFourResult.append(tableDate) 
})`,`function massGenerator() {
    let massResult = []
    let massOne = []
    let massTwo = []
    let massThree = []
    for(let i = 0; i < 3; i ++){
        for(let i = 0; i < 3; i++){
            for(let i = 0; i < 3; i++){
                massThree.push(i+1)
            }
            massTwo.push(massThree)
            massThree = []
        }
        massOne.push(massTwo)
        massTwo = []
    }
    massResult.push(massOne)
    console.log(massResult)
    return massResult
}`]