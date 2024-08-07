/* №1 Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.*/

let word = document.querySelector('.task-one-paragraf')
let inputLetter = document.querySelector('.task-one-input')
let outputWord = document.getElementById('outputWord')
let taskOneResult = document.querySelector('.task-one-result')

outputWord.addEventListener('click', () => {
    let mass = word.textContent.split(' ')
    let str = inputLetter.value
    let mass2 = []
    for(let i = 0; i < mass.length; i++){
        if(mass[i][0] == str){
            mass2.push(mass[i])
        }
    }
    function randomWord(mass){
        return mass[Math.floor(Math.random() * mass.length)]
    }
    taskOneResult.textContent = randomWord(mass2)
})

/* №2 Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.*/

let taskTwoListItems = document.querySelector('.task-two-list-items')
let date = new Date('22.02.2017')

for(let k = 2000; k < 2100; k++){
    for(let j = 0; j < 12; j++){
        let dateDay = new Date()
        dateDay.setMonth(j)
        dateDay.setDate(0)
        dateDay.setFullYear(k)
        if(dateDay.getMonth() == 2 && dateDay.getDate() == 1){
            dateDay.setDate(0)
            dateDay.setMonth(1)
        }
        let i = 1
        while(i <= dateDay.getDate()){
            let newDate = i + '.' + +(dateDay.getMonth(0)+1) + '.' + dateDay.getFullYear()
            let count = 0
            for(let z = 0; z < newDate.length; z++){
                if(newDate[z] == 2){
                    count++
                }
            }
            if(count == 4){
                let newItem = document.createElement('li')
                newItem.textContent = newDate
                taskTwoListItems.append(newItem)
            }
            i++
        }
    }
}

/* №3 Дан массив с точками:[[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]] Отрисуйте эти точки на графике.*/

let mass =  [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32] ]
let taskThreeResult = document.querySelector('.task-three-result')

for(let i = 0; i < mass.length; i++){
    let item = document.createElement('div')
    item.style.top = mass[i][0] * 10 + 'px'
    item.style.left = mass[i][1] * 10 + 'px'
    item.classList.add('point')
    taskThreeResult.append(item)
}

let massFunc = [`outputWord.addEventListener('click', () => {
    let mass = word.textContent.split(' ')
    let str = inputLetter.value
    let mass2 = []
    for(let i = 0; i < mass.length; i++){
        if(mass[i][0] == str){
            mass2.push(mass[i])
        }
    }
    function randomWord(mass){
        return mass[Math.floor(Math.random() * mass.length)]
    }
    taskOneResult.textContent = randomWord(mass2)
})`,`let taskTwoListItems = document.querySelector('.task-two-list-items')
let date = new Date('22.02.2017')

for(let k = 2000; k < 2100; k++){
    for(let j = 0; j < 12; j++){
        let dateDay = new Date()
        dateDay.setMonth(j)
        dateDay.setDate(0)
        dateDay.setFullYear(k)
        if(dateDay.getMonth() == 2 && dateDay.getDate() == 1){
            dateDay.setDate(0)
            dateDay.setMonth(1)
        }
        let i = 1
        while(i <= dateDay.getDate()){
            let newDate = i + '.' + +(dateDay.getMonth(0)+1) + '.' + dateDay.getFullYear()
            let count = 0
            for(let z = 0; z < newDate.length; z++){
                if(newDate[z] == 2){
                    count++
                }
            }
            if(count == 4){
                let newItem = document.createElement('li')
                newItem.textContent = newDate
                taskTwoListItems.append(newItem)
            }
            i++
        }
    }
}`,`let mass =  [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32] ]
let taskThreeResult = document.querySelector('.task-three-result')

for(let i = 0; i < mass.length; i++){
    let item = document.createElement('div')
    item.style.top = mass[i][0] * 10 + 'px'
    item.style.left = mass[i][1] * 10 + 'px'
    item.classList.add('point')
    taskThreeResult.append(item)
}`]