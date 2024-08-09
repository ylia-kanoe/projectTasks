/* №1 Дана кнопка и список ul. По клику на кнопку добавьте в конец каждой li ссылку, по нажатию на которую текст li будет перечеркиваться (но не текст ссылки).*/

let taskOneListItem = document.querySelectorAll('.task-one-list-items li')
let addReference = document.getElementById('addReference')
let refers = document.querySelectorAll('a')

addReference.addEventListener('click', () => {
    Array.from(taskOneListItem).forEach(elem => {

        let spanNew = document.createElement('span')
        spanNew.textContent = elem.textContent
        elem.textContent = ''
        elem.append(spanNew)

        let refer = document.createElement('a')
        refer.textContent = 'Любой текст ссылки'
        refer.href = 'Любаяссылка'

        refer.addEventListener('click', (event) => {
            event.preventDefault();
            spanNew.style.textDecoration = 'line-through'
        })
        elem.append(refer)
    })
    refers = document.querySelectorAll('.task-one-list-items a')
})

/* №2 Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово меняло порядок своих букв на 
обратный.*/

let colorTextPar = document.querySelector('.task-two-result')
let colorText = colorTextPar.textContent.split(' ')

function textContentToSpans(){
    colorTextPar.innerHTML = ''
    for(let i = 0; i < colorText.length; i++){
        let span = document.createElement('span')
        span.textContent = colorText[i]
        colorTextPar.append(span)
        colorTextPar.append(' ')
    }
}
textContentToSpans()

let colorTextParSpan = document.querySelectorAll('.task-two-result span')

Array.from(colorTextParSpan).forEach(elem => {
    elem.addEventListener('click', () => {
        let str = ''
        for(let i = elem.textContent.length - 1; i >= 0; i--){
            str += elem.textContent[i]
        }
        elem.textContent  =  str
    })
})

/* №3 Дан следующий массив: let users = [{id: 1, name: 'user1', surn: 'surn1', age: 30},{id: 2, name: 'user2', surn: 'surn2', age: 31},{id: 3, name: 'user3', surn: 'surn3', age: 32},]; Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.*/

let users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
];
function newTable(users){
    let tableResult = document.querySelector('.task-three-table')
    let tableTR = document.createElement('tr')
    for(let item of Object.keys(users[0])){
        let tableTD = document.createElement('td')
        tableTD.textContent = item
        tableTR.append(tableTD)
        tableResult.append(tableTR)
    }     
    for(let i = 0; i < users.length; i++){ 
        let tableTR2 = document.createElement('tr')
        for(let item2 of Object.values(users[i])){
            let tableTD2 = document.createElement('td')
            tableTD2.textContent = item2
            tableTR2.append(tableTD2) 
        }
        tableResult.append(tableTR2)
    }
}

newTable(users)

/* №4 Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345','1234','123','12','1',]*/

function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += i + 1
        mass.push(str)
    }
    for(let j = 5; j > 1; j--){
        str = str.slice(0, str.length-1)
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}
createBlockNoData("№4 Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345','1234','123','12','1',]", 'Сгенерировать массив', massGenerator)

let massFunc = [`addReference.addEventListener('click', () => {
    Array.from(taskOneListItem).forEach(elem => {

        let spanNew = document.createElement('span')
        spanNew.textContent = elem.textContent
        elem.textContent = ''
        elem.append(spanNew)

        let refer = document.createElement('a')
        refer.textContent = 'Любой текст ссылки'
        refer.href = 'Любаяссылка'

        refer.addEventListener('click', (event) => {
            event.preventDefault();
            spanNew.style.textDecoration = 'line-through'
        })
        elem.append(refer)
    })
    refers = document.querySelectorAll('.task-one-list-items a')
})`,`let colorTextPar = document.querySelector('.task-two-result')
let colorText = colorTextPar.textContent.split(' ')

function textContentToSpans(){
    colorTextPar.innerHTML = ''
    for(let i = 0; i < colorText.length; i++){
        let span = document.createElement('span')
        span.textContent = colorText[i]
        colorTextPar.append(span)
        colorTextPar.append(' ')
    }
}
textContentToSpans()

let colorTextParSpan = document.querySelectorAll('.task-two-result span')

Array.from(colorTextParSpan).forEach(elem => {
    elem.addEventListener('click', () => {
        let str = ''
        for(let i = elem.textContent.length - 1; i >= 0; i--){
            str += elem.textContent[i]
        }
        elem.textContent  =  str
    })
})`,`function newTable(users){
    let tableResult = document.querySelector('.task-three-table')
    let tableTR = document.createElement('tr')
    for(let item of Object.keys(users[0])){
        let tableTD = document.createElement('td')
        tableTD.textContent = item
        tableTR.append(tableTD)
        tableResult.append(tableTR)
    }     
    for(let i = 0; i < users.length; i++){ 
        let tableTR2 = document.createElement('tr')
        for(let item2 of Object.values(users[i])){
            let tableTD2 = document.createElement('td')
            tableTD2.textContent = item2
            tableTR2.append(tableTD2) 
        }
        tableResult.append(tableTR2)
    }
}`,`function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += i + 1
        mass.push(str)
    }
    for(let j = 5; j > 1; j--){
        str = str.slice(0, str.length-1)
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`]