
/* №1 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красился ряд с этой ячейкой.*/

let taskOneItemTd = document.querySelectorAll('.task-one-table td')

Array.from(taskOneItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
       elem.closest('tr').style.backgroundColor = 'red'
    })
})

/* №2 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красилась колонка с этой ячейкой. */

let taskTwoItemTr = document.querySelectorAll('.task-two-table tr')
let taskTwoItemTd = document.querySelectorAll('.task-two-table td')

Array.from(taskTwoItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
        let item = taskTwoItemTd.length / taskTwoItemTr.length
        
        let j = i
        while( j < taskTwoItemTd.length){
            taskTwoItemTd[j].style.backgroundColor = 'red'
            j = j + item
        }
        j = i
        while(j >= 0){
            taskTwoItemTd[j].style.backgroundColor = 'red'
            j = j - item
        }   
    })
})

/* №3 Дана таблица. Сделайте так, чтобы по клику на любую ячейку удалялся ряд с этой ячейкой. */

let taskThreeItemTd = document.querySelectorAll('.task-three-table td')

Array.from(taskThreeItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
       elem.closest('tr').remove()
    })
})

/* №4 Дана таблица. Сделайте так, чтобы по клику на любую удалялась колонка с этой ячейкой. */

let taskFourItemTr = document.querySelectorAll('.task-four-table tr')
let taskFourItemTd = document.querySelectorAll('.task-four-table td')

Array.from(taskFourItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
        let item = taskFourItemTd.length / taskFourItemTr.length
        let j = i
        while( j < taskFourItemTd.length){
            taskFourItemTd[j].remove()
            j = j + item
        }
        j = i
        while( j >= 0){
            taskFourItemTd[j].remove()
            j = j - item
        }
    })
})

/* №5 Дана таблица и кнопка. По клику на кнопку покрасьте в красный цвет ячейки, расположенные на диагонали таблицы.*/

let taskFiveItemTr = document.querySelectorAll('.task-five-table tr')
let taskFiveItemTd = document.querySelectorAll('.task-five-table td')
let colorMid = document.getElementById('colorMid')

colorMid.addEventListener('click', () => {
    let item = taskFiveItemTd.length / taskFiveItemTr.length
    for(let i = 0; i < taskFiveItemTd.length; i++){
        if((i % (item + 1)) == 0){
            taskFiveItemTd[i].style.backgroundColor = 'red'
        }
    } 
})

let massFunc = [`Array.from(taskOneItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
       elem.closest('tr').style.backgroundColor = 'red'
    })
})`,`Array.from(taskTwoItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
        let item = taskTwoItemTd.length / taskTwoItemTr.length
        
        let j = i
        while( j < taskTwoItemTd.length){
            taskTwoItemTd[j].style.backgroundColor = 'red'
            j = j + item
        }
        j = i
        while(j >= 0){
            taskTwoItemTd[j].style.backgroundColor = 'red'
            j = j - item
        }   
    })
})`,`Array.from(taskThreeItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
       elem.closest('tr').remove()
    })
})`,`Array.from(taskFourItemTd).forEach((elem , i) => {
    elem.addEventListener('click', () => {
        let item = taskFourItemTd.length / taskFourItemTr.length
        let j = i
        while( j < taskFourItemTd.length){
            taskFourItemTd[j].remove()
            j = j + item
        }
        j = i
        while( j >= 0){
            taskFourItemTd[j].remove()
            j = j - item
        }
    })
})`,`colorMid.addEventListener('click', () => {
    let item = taskFiveItemTd.length / taskFiveItemTr.length
    for(let i = 0; i < taskFiveItemTd.length; i++){
        if((i % (item + 1)) == 0){
            taskFiveItemTd[i].style.backgroundColor = 'red'
        }
    } 
})`]