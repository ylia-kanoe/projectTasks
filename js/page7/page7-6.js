
/*№1 На странице через абсолютное позиционирование расположены два дива. По клику на кнопку проверьте, накладываются ли эти дивы друга на друга или нет.*/

let taskOneBlocks = document.querySelectorAll('.task-one-block div')
let checkPosition = document.getElementById('checkPosition')
let taskOneResult = document.querySelector('.task-one-result')

checkPosition.addEventListener('click', () => {
    let mass = []
    let mass2 = []
    taskOneBlocks.forEach(elem => {
        mass2.push(elem.getBoundingClientRect().x)
        mass2.push(elem.getBoundingClientRect().y)
        mass2.push(elem.getBoundingClientRect().width)
        mass2.push(elem.getBoundingClientRect().height)
        mass.push(mass2)
        mass2 = []
    })
    let count = 0
    for(let i = 1; i < mass.length; i++){
        for(let j = 0; j < mass[i].length; j++){
            if(mass[i][j] == mass[i-1][j]){
                count++
            }
        }
    }
    if(count == 4){
        taskOneResult.textContent = 'Элементы накладываются друг на друга'
    } else {
        taskOneResult.textContent = 'Элементы НЕ накладываются друг на друга'
    } 
})

/* №2 Дана кнопка и ul. По клику на кнопку выведите список всех возможных счастливых билетов. Билет представляет собой строку из шести цифр, 
может быть с нулями спереди. Билет считается счастливым, если сумма сумма первых трех цифр равна сумме вторых трех цифр.*/


let taskTwoListItems = document.querySelector('.task-two-list-items')
let generatorHappyTick = document.getElementById('generatorHappyTick')
let numberStr = '000000'

generatorHappyTick.addEventListener('click', () => {
    for(let i = 0; i < 1000000; i++){
    let num = '000000'
    num += i
        if(String(num).length > 5){
            num = String(num).slice(String(i).length)
            let num1 = 0
            let num2 = 0
            for(let k = 0; k < String(num).length / 2; k++){
                num1 += +String(num)[k]
            }
            for(let l = String(num).length - 1; l >= String(num).length / 2; l--){
                num2 += +String(num)[l]
            }         
            if(num1 == num2){
                let item = document.createElement('li')
                item.textContent = num
                taskTwoListItems.append(item)
            } 
        } 
    }
})

/* №3 Напишите программу, которая сформирует следующий массив: ['x','xx','xxx','xxxx','xxxxx',]*/
    
function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += 'x'
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}

createBlockNoData("№3 Напишите программу, которая сформирует следующий массив: ['x','xx','xxx','xxxx','xxxxx',]", 'Сгенерировать массив', massGenerator)

/* №4 Дан такой объект: let data = {2018: {11: {29: [1, 2, 3],30: [4, 5],},12: {30: [6, 7],31: [8, 9],},},2019: {12: {29: [10, 11],30: [12, 13],31: [14, 15],}},} Запишите все элементы этого объекта в какой-нибудь массив, вот так:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]*/

function massGeneratorTwo(){
    let data = {
        2018: {
            11: {
                29: [1, 2, 3],
                30: [4, 5],
            },
            12: {
                30: [6, 7],
                31: [8, 9],
            },
        },
        2019: {
            12: {
                29: [10, 11],
                30: [12, 13],
                31: [14, 15],
            }
        },
    }
    let mass = []
    for (let item of Object.values(data)) {
        for (let item2 of Object.values(item)) {
            for (let item3 of Object.values(item2)){
                for(let i = 0; i < item3.length; i++){
                    mass.push(item3[i])
                }
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}
createBlockNoData("№4 Дан такой объект: let data = {2018: {11: {29: [1, 2, 3],30: [4, 5],},12: {30: [6, 7],31: [8, 9],},},2019: {12: {29: [10, 11],30: [12, 13],31: [14, 15],}},} Запишите все элементы этого объекта в какой-нибудь массив, вот так:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]", 'Сгенерировать массив', massGeneratorTwo)

let massFunc = [`checkPosition.addEventListener('click', () => {
    let mass = []
    let mass2 = []
    taskOneBlocks.forEach(elem => {
        mass2.push(elem.getBoundingClientRect().x)
        mass2.push(elem.getBoundingClientRect().y)
        mass2.push(elem.getBoundingClientRect().width)
        mass2.push(elem.getBoundingClientRect().height)
        mass.push(mass2)
        mass2 = []
    })
    let count = 0
    for(let i = 1; i < mass.length; i++){
        for(let j = 0; j < mass[i].length; j++){
            if(mass[i][j] == mass[i-1][j]){
                count++
            }
        }
    }
    if(count == 4){
        taskOneResult.textContent = 'Элементы накладываются друг на друга'
    } else {
        taskOneResult.textContent = 'Элементы НЕ накладываются друг на друга'
    } 
})`,`generatorHappyTick.addEventListener('click', () => {
    for(let i = 0; i < 1000000; i++){
    let num = '000000'
    num += i
        if(String(num).length > 5){
            num = String(num).slice(String(i).length)
            let num1 = 0
            let num2 = 0
            for(let k = 0; k < String(num).length / 2; k++){
                num1 += +String(num)[k]
            }
            for(let l = String(num).length - 1; l >= String(num).length / 2; l--){
                num2 += +String(num)[l]
            }         
            if(num1 == num2){
                let item = document.createElement('li')
                item.textContent = num
                taskTwoListItems.append(item)
            } 
        } 
    }
})`,`function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += 'x'
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`,`function massGeneratorTwo(){
    let data = {
        2018: {
            11: {
                29: [1, 2, 3],
                30: [4, 5],
            },
            12: {
                30: [6, 7],
                31: [8, 9],
            },
        },
        2019: {
            12: {
                29: [10, 11],
                30: [12, 13],
                31: [14, 15],
            }
        },
    }
    let mass = []
    for (let item of Object.values(data)) {
        for (let item2 of Object.values(item)) {
            for (let item3 of Object.values(item2)){
                for(let i = 0; i < item3.length; i++){
                    mass.push(item3[i])
                }
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`]
