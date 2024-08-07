/* №1 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в этой ячейке появлялся порядковый номер клика. */

let taskOneItemTr = document.querySelectorAll('.task-one-table tr')
let taskOneItemTd = document.querySelectorAll('.task-one-table td')
let count = 0

Array.from(taskOneItemTd).forEach(elem => {
    elem.addEventListener('click', () => {
        count++
        elem.textContent = count
    })
})
    
/* №2 Дана таблица, заполненная числами по порядку и кнопка. По нажатию на кнопку перемешайте числа в таблице. */

let taskTwoItemTr = document.querySelectorAll('.task-two-table tr')
let taskTwoItemTd = document.querySelectorAll('.task-two-table td')
let smashCell = document.getElementById('smashCell')

function ramdomCell(arr){
    let mass = []
    for(let i = 0; i < arr.length; i++){
        let random = Math.floor(Math.random() * arr.length)
        if(!mass.includes(arr[random].textContent)){
            mass.push(arr[random].textContent)
        } else {
            i--
        }
    }
    return mass
}

smashCell.addEventListener('click', () => {
    let massRandom = ramdomCell(taskTwoItemTd)
    Array.from(taskTwoItemTd).forEach((elem, i) => {
        elem.textContent = massRandom[i]
    })

})

/* №3 Дан текстареа. В него вводится текст. По потери фокуса найдите самый часто используемый символ этого текста и выведите его в абзац. */

let inputText = document.querySelector('.task-three-input-textarea')
let result = document.querySelector('.task-three-result')

inputText.addEventListener('blur', () => {
    let mass = inputText.value.split('')
    let obj = {}
    for(let i = 0; i < mass.length; i++){
        let count = 0
        for(let j = 0; j < mass.length; j++){
            if(mass[i] == mass[j] && mass[i] != ' '){
                count++
                obj[mass[i]] = count
            }  
        }
    }
    let max = 0
    for(let item of Object.values(obj)){
        if(item > max){
            max = item
        }
    }
    for(let item of Object.entries(obj)){
        if(+item[1] == max){
            result.textContent += item[0]
        }
    }
})

/* №4 Даны инпуты. Поставьте первому инпуту в value число 1, через секунду второму число 2, еще через секунду третьему число 3 и так далее пока инпуты не закончатся. Когда инпуты закончатся продолжите нумерацию с первого инпута.*/


let inputTimer = document.querySelectorAll('.task-four-block input')
let i = 0
let j = 0
function mass(i,j){
    if(i > inputTimer.length - 1){
        i = i % inputTimer.length
    } 
    inputTimer[i].value = j
}
  
setInterval(() => {
    mass(i,j)
    i++
    j++
       
}, 1000)


/* №5 Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999.*/

function numberString(num) {
    let mass = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    let massSot = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'всемьсот', 'девятьсот']
    let mass2 = []
    for (let i = String(num).length - 1; i >= 0; i--) {
        /* сотни */
        if (i == String(num).length - 3) {
            mass2.push(massSot[String(num)[i] - 1])
        }

        /* десятки */
        if (i == String(num).length - 2) {

            if (String(num)[i] == 1) {
                if (String(num)[String(num).length - 1] == 4 || String(num)[String(num).length - 1] == 5 || String(num)[String(num).length - 1] == 6 || String(num)[String(num).length - 1] == 9) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "нaдцать")

                } else if (String(num)[String(num).length - 1] == 2) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "енадцать")

                } else if (String(num)[String(num).length - 1] == 1 || String(num)[String(num).length - 1] == 3 || String(num)[String(num).length - 1] == 7 || String(num)[String(num).length - 1] == 8) {
                    mass2.push(mass[String(num)[String(num).length - 1]] + "aдцать")

                } else if (String(num)[String(num).length - 1] == 0) {
                    mass2.push("десять")
                }

                /* удаление последнего элемента массива, если десятки начинаются с 1*/
                if (String(num).length == 3) {
                    mass2.splice(i - 1, 1)
                } else if (String(num).length == 2) {
                    mass2.splice(i, 1)
                } else if (String(num).length == 4) {
                    mass2.splice(i - 2, 1)
                }

            } else if ([String(num)[i]] == 2 || [String(num)[i]] == 3) {
                mass2.push(mass[String(num)[i]] + "дцать")
            } else if ([String(num)[i]] == 4) {
                mass2.push("сорок")
            } else if ([String(num)[i]] == 5 || [String(num)[i]] == 6 || [String(num)[i]] == 7 || [String(num)[i]] == 8) {
                mass2.push(mass[String(num)[i]] + "десят")
            } else if ([String(num)[i]] == 9) {
                mass2.push("девяносто")
            }
        }

        if (i == String(num).length - 1) {
            mass2.push(mass[String(num)[i]])
        }
    }

    /* Проверка на последний 0 */
    if (mass2[0] == 'ноль' && mass2.length > 1) {
        mass2.splice(0, 1)
    }

    return mass2.reverse().join(' ')
}

createBlockNum('№5 Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999.', 999, 'Вывести число словами', numberString)

let massFunc = [`Array.from(taskOneItemTd).forEach(elem => {
    elem.addEventListener('click', () => {
        count++
        elem.textContent = count
    })
})`,`function ramdomCell(arr){
    let mass = []
    for(let i = 0; i < arr.length; i++){
        let random = Math.floor(Math.random() * arr.length)
        if(!mass.includes(arr[random].textContent)){
            mass.push(arr[random].textContent)
        } else {
            i--
        }
    }
    return mass
}

smashCell.addEventListener('click', () => {
    let massRandom = ramdomCell(taskTwoItemTd)
    Array.from(taskTwoItemTd).forEach((elem, i) => {
        elem.textContent = massRandom[i]
    })

})`,`inputText.addEventListener('blur', () => {
    let mass = inputText.value.split('')
    let obj = {}
    for(let i = 0; i < mass.length; i++){
        let count = 0
        for(let j = 0; j < mass.length; j++){
            if(mass[i] == mass[j] && mass[i] != ' '){
                count++
                obj[mass[i]] = count
            }  
        }
    }
    let max = 0
    for(let item of Object.values(obj)){
        if(item > max){
            max = item
        }
    }
    for(let item of Object.entries(obj)){
        if(+item[1] == max){
            result.textContent += item[0]
        }
    }
})`,`function mass(i,j){
    if(i > inputTimer.length - 1){
        i = i % inputTimer.length
    } 
    inputTimer[i].value = j
}
  
setInterval(() => {
    mass(i,j)
    i++
    j++
       
}, 1000)`,`function numberString(num) {
    let mass = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    let massSot = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'всемьсот', 'девятьсот']
    let mass2 = []
    for (let i = String(num).length - 1; i >= 0; i--) {
        /* сотни */
        if (i == String(num).length - 3) {
            mass2.push(massSot[String(num)[i] - 1])
        }

        /* десятки */
        if (i == String(num).length - 2) {

            if (String(num)[i] == 1) {
                if (String(num)[String(num).length - 1] == 4 || String(num)[String(num).length - 1] == 5 || String(num)[String(num).length - 1] == 6 || String(num)[String(num).length - 1] == 9) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "нaдцать")

                } else if (String(num)[String(num).length - 1] == 2) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "енадцать")

                } else if (String(num)[String(num).length - 1] == 1 || String(num)[String(num).length - 1] == 3 || String(num)[String(num).length - 1] == 7 || String(num)[String(num).length - 1] == 8) {
                    mass2.push(mass[String(num)[String(num).length - 1]] + "aдцать")

                } else if (String(num)[String(num).length - 1] == 0) {
                    mass2.push("десять")
                }

                /* удаление последнего элемента массива, если десятки начинаются с 1*/
                if (String(num).length == 3) {
                    mass2.splice(i - 1, 1)
                } else if (String(num).length == 2) {
                    mass2.splice(i, 1)
                } else if (String(num).length == 4) {
                    mass2.splice(i - 2, 1)
                }

            } else if ([String(num)[i]] == 2 || [String(num)[i]] == 3) {
                mass2.push(mass[String(num)[i]] + "дцать")
            } else if ([String(num)[i]] == 4) {
                mass2.push("сорок")
            } else if ([String(num)[i]] == 5 || [String(num)[i]] == 6 || [String(num)[i]] == 7 || [String(num)[i]] == 8) {
                mass2.push(mass[String(num)[i]] + "десят")
            } else if ([String(num)[i]] == 9) {
                mass2.push("девяносто")
            }
        }

        if (i == String(num).length - 1) {
            mass2.push(mass[String(num)[i]])
        }
    }

    /* Проверка на последний 0 */
    if (mass2[0] == 'ноль' && mass2.length > 1) {
        mass2.splice(0, 1)
    }

    return mass2.reverse().join(' ')
}`]