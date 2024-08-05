
/* №1 Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.*/

let taskOnelistItem = document.querySelectorAll('.task-one-list-items li')

Array.from(taskOnelistItem).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        elem.remove()
    }) 
})

/* №2 Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.*/

let listItemAdd = document.querySelector('.task-two-input')
let taskTwolistItem = document.querySelectorAll('.task-two-list-items li')
let taskTwolistItems = document.querySelector('.task-two-list-items')

listItemAdd.addEventListener('blur', () => {
    let newListItem = document.createElement('li')
    newListItem.textContent = listItemAdd.value
    taskTwolistItems.append(newListItem)
    listItemAdd.value = ''
})

/* №3 Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.*/

let addInfoTable = document.getElementById('addInfoTable')
let taskThreeInput = document.querySelectorAll('.task-three-input')
let taskThreeTable = document.querySelector('.task-three-table')

addInfoTable.addEventListener('click', () => {
    let tableListTR = document.createElement('tr')
    Array.from(taskThreeInput).forEach(elem => {
        let tableListTD = document.createElement('td')
        tableListTD.textContent = elem.value
        tableListTR.append(tableListTD)
        elem.value = ''
    })
    
    taskThreeTable.append(tableListTR)

})

/* №4 Дан инпут и ul. В инпут вводится год. Выведите в список даты всех пятниц 13-е в заданном году.*/

let taskFourInput = document.querySelector('.task-four-input')
let taskFourResult = document.querySelector('.task-four-result')

taskFourInput.addEventListener('blur', () => {
    taskFourResult.innerHTML = ''
    let date = new Date(taskFourInput.value)
    
    for(let i = 0; i < 12; i++){
        date.setMonth(i)
        date.setDate(13)
        if(date.getDay() == 5){
            let itemList = document.createElement('li')
            itemList.textContent = date
            taskFourResult.append(itemList)
        }
    }
})

let massFunc = [`Array.from(taskOnelistItem).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        elem.remove()
    }) 
})`,`listItemAdd.addEventListener('blur', () => {
    let taskTwolistItem = document.createElement('.task-two-list-items li')
    newListItem.textContent = listItemAdd.value
    taskTwolistItems.append(newListItem)
    listItemAdd.value = ''
})`,`addInfoTable.addEventListener('click', () => {
    let tableListTR = document.createElement('tr')
    Array.from(taskThreeInput).forEach(elem => {
        let tableListTD = document.createElement('td')
        tableListTD.textContent = elem.value
        tableListTR.append(tableListTD)
        elem.value = ''
    })
    
    taskThreeTable.append(tableListTR)

})`,`taskFourInput.addEventListener('blur', () => {
    let date = new Date(taskFourInput.value)
    
    for(let i = 0; i < 12; i++){
        date.setMonth(i)
        date.setDate(13)
        if(date.getDay() == 5){
            let itemList = document.createElement('li')
            itemList.textContent = date
            taskFourResult.append(itemList)
           
        }
    }
})`]