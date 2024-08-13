/* №1 Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в одном ряду таблицы можно было активировать не более 5-ти ячеек. */

let taskOneTableTd = document.querySelectorAll('.task-one-table td')
let taskOneTableTr = document.querySelectorAll('.task-one-table tr')
let mass = []
let mass2 = []

for(let i = 0; i < taskOneTableTd.length; i++){
    mass2.push(0)
    if(mass2.length > taskOneTableTr.length){
        mass.push(mass2)
        mass2 = []
    }
}

Array.from(taskOneTableTd).forEach((elem, i )=> {
    
    elem.addEventListener('click', (e) =>{
        let leng = taskOneTableTd.length / taskOneTableTr.length
        let pos = Math.floor(i / leng)
        let posTwo = ((i) % leng)
        while(posTwo > leng){
            posTwo = ((i) % leng)
        }
        let count = 0
        for(let i = 0; i < mass[pos].length; i++){
            if(mass[pos][i] == 1){
                count++ 
            }  
        }
        if(count < 5){
            elem.style.backgroundColor = 'red'
        }
        mass[pos][posTwo] = 1 
    })
})


/* №2 Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в одной колонке таблицы можно было активировать не более 5-ти ячеек.*/

let taskTwoTableTd = document.querySelectorAll('.task-two-table td')
let taskTwoTableTr = document.querySelectorAll('.task-two-table tr')
let massTwo = []
let massTwo2 = []

for(let i = 0; i < taskOneTableTd.length; i++){
    massTwo2.push(0)
    if(massTwo2.length > taskOneTableTr.length){
        massTwo.push(massTwo2)
        massTwo2 = []
    }
}

Array.from(taskTwoTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', () =>{
        let leng = taskOneTableTd.length / taskOneTableTr.length
        let pos = Math.floor(i / leng)
        let posTwo = ((i) % leng)
        while(posTwo > leng){
            posTwo = ((i) % leng)
        }
        let count = 0
        massTwo[pos][posTwo] = 1 
        for(let i = 0; i < massTwo.length; i++){
            for(let j = 0; j < massTwo[i].length; j++){
                if(massTwo[i][posTwo] == 1 ){
                    count++ 
                }  
            }
        }
        if(count <= 40){
            elem.style.backgroundColor = 'red'
        }
    })
})

/* №3 Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы для активированной ячейки нельзя было активировать ее соседей слева и справа.*/

let taskThreeTableTd = document.querySelectorAll('.task-three-table td')
let taskThreeTableTr = document.querySelectorAll('.task-three-table tr')

Array.from(taskThreeTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', (e) =>{
        if(taskThreeTableTd[i + 1]?.style.backgroundColor != 'red' && taskThreeTableTd[i - 1]?.style.backgroundColor != 'red'){
            elem.style.backgroundColor = 'red'
        }
    })
})

/* №4 Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей сверху и снизу. */

let taskFourTableTd = document.querySelectorAll('.task-four-table td')
let taskFourTableTr = document.querySelectorAll('.task-four-table tr')

Array.from(taskFourTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', (e) =>{
        let posUp = i + (taskFourTableTr.length + 1)
        let posDown = i - (taskFourTableTr.length + 1)

        if(taskFourTableTd[posUp]?.style.backgroundColor != 'red' && taskFourTableTd[posDown]?.style.backgroundColor != 'red'){
            elem.style.backgroundColor = 'red'
        }
    })
})

/* №5 Дана инпут. В него вводится длинное слово. Выведите список слов, которые можно составить из букв введенного в инпут слова.

№6 Дан текстареа. В нем записан текст. Юзер выделяет несколько строк текста и нажимает клавишу Alt + Tab. Сделайте так, чтобы из начала каждой выделенной строки удалилась табуляция.

№7 Дана строка, содержащая две дроби и математическую операцию между ними: '2/3 + 3/4' Напишите код, который вычислит результат записанной математической операции.
*/
function countFract(str){
    let rez = []
    for(let i = 0; i < str.length; i++){
        if(str[i] != '/'){
            rez.push(str[i])
        } 
    }
    return rez[0] / rez[1]
}

function countFractions(str){
    let num = str.slice(0,3)
    let num2 = str.slice(6,9)
    let rez = 0
    if(str.slice(4,5) == '/'){
        rez = +countFract(num) / +countFract(num2)
    } else if(str.slice(4,5) == '*'){
        rez = +countFract(num) * +countFract(num2)
    } else if(str.slice(4,5) == '-'){
        rez = +countFract(num) - +countFract(num2)
    }else if(str.slice(4,5) == '+'){
        rez = +countFract(num) + +countFract(num2)
    }
    return rez
    
}

createBlockStr("№7 Дана строка, содержащая две дроби и математическую операцию между ними: '2/3 + 3/4' Напишите код, который вычислит результат записанной математической операции.", '2/3 + 3/4',"Посчитать строку" , countFractions)

let massFunc = [`let taskOneTableTd = document.querySelectorAll('.task-one-table td')
let taskOneTableTr = document.querySelectorAll('.task-one-table tr')
let mass = []
let mass2 = []

for(let i = 0; i < taskOneTableTd.length; i++){
    mass2.push(0)
    if(mass2.length > taskOneTableTr.length){
        mass.push(mass2)
        mass2 = []
    }
}

Array.from(taskOneTableTd).forEach((elem, i )=> {
    
    elem.addEventListener('click', (e) =>{
        let leng = taskOneTableTd.length / taskOneTableTr.length
        let pos = Math.floor(i / leng)
        let posTwo = ((i) % leng)
        while(posTwo > leng){
            posTwo = ((i) % leng)
        }
        let count = 0
        for(let i = 0; i < mass[pos].length; i++){
            if(mass[pos][i] == 1){
                count++ 
            }  
        }
        if(count < 5){
            elem.style.backgroundColor = 'red'
        }
        mass[pos][posTwo] = 1 
    })
})
`, `let taskTwoTableTd = document.querySelectorAll('.task-two-table td')
let taskTwoTableTr = document.querySelectorAll('.task-two-table tr')
let massTwo = []
let massTwo2 = []

for(let i = 0; i < taskOneTableTd.length; i++){
    massTwo2.push(0)
    if(massTwo2.length > taskOneTableTr.length){
        massTwo.push(massTwo2)
        massTwo2 = []
    }
}

Array.from(taskTwoTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', () =>{
        let leng = taskOneTableTd.length / taskOneTableTr.length
        let pos = Math.floor(i / leng)
        let posTwo = ((i) % leng)
        while(posTwo > leng){
            posTwo = ((i) % leng)
        }
        let count = 0
        massTwo[pos][posTwo] = 1 
        for(let i = 0; i < massTwo.length; i++){
            for(let j = 0; j < massTwo[i].length; j++){
                if(massTwo[i][posTwo] == 1 ){
                    count++ 
                }  
            }
        }
        if(count <= 40){
            elem.style.backgroundColor = 'red'
        }
    })
})`,`let taskThreeTableTd = document.querySelectorAll('.task-three-table td')
let taskThreeTableTr = document.querySelectorAll('.task-three-table tr')

Array.from(taskThreeTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', (e) =>{
        if(taskThreeTableTd[i + 1]?.style.backgroundColor != 'red' && taskThreeTableTd[i - 1]?.style.backgroundColor != 'red'){
            elem.style.backgroundColor = 'red'
        }
    })
})`,`let taskFourTableTd = document.querySelectorAll('.task-four-table td')
let taskFourTableTr = document.querySelectorAll('.task-four-table tr')

Array.from(taskFourTableTd).forEach((elem, i )=> {
    elem.addEventListener('click', (e) =>{
        let posUp = i + (taskFourTableTr.length + 1)
        let posDown = i - (taskFourTableTr.length + 1)

        if(taskFourTableTd[posUp]?.style.backgroundColor != 'red' && taskFourTableTd[posDown]?.style.backgroundColor != 'red'){
            elem.style.backgroundColor = 'red'
        }
    })
})
`,``,``,``]