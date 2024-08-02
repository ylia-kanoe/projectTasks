/* №1 Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.*/

let taskOneResult = document.querySelector('.task-one-result')
let sumFound = document.getElementById('sumFound')
let taskOneItems = document.querySelectorAll('.task-one-item')

sumFound.addEventListener('click', () => {
    let sum = 0;
    Array.from(taskOneItems).forEach(elem => {
        sum += +elem.textContent
    })
    taskOneResult.value = sum
})

/* №2 Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.*/

let addNumber = document.getElementById('addNumber')
let taskTwoItems = document.querySelectorAll('.task-two-item')

addNumber.addEventListener('click', () => {
    Array.from(taskTwoItems).forEach(elem => {
        elem.textContent = +elem.textContent + 1
    })
})

/* №3 Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую. */

let taskThreeResult = document.querySelector('.task-three-result')
let foundDelitel = document.getElementById('foundDelitel')
let taskThreeInput = document.querySelector('.task-three-input')

foundDelitel.addEventListener('click', () => {
    let massDel = []
    for(let i = taskThreeInput.value; i > 0; i--){
        if((taskThreeInput.value / i) % 1 == 0){
            massDel.push(i)
        }
    }
    taskThreeResult.textContent = massDel.join(', ')
})

/* №4 Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.*/

let taskFourParagraf = document.querySelectorAll('.task-four-paragraf')

Array.from(taskFourParagraf).forEach(elem => {
    let mass = elem.textContent.split('')
    elem.addEventListener('click', () => {
        elem.textContent =  mass.reverse().join('')
    })
    
})

/*  №5 В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр */

let taskFiveResult = document.querySelector('.task-five-result')
let checkSum = document.getElementById('checkSum')
let taskFiveInput = document.querySelector('.task-five-input')

checkSum.addEventListener('click', () => {
    let sumOne = +taskFiveInput.value[0] +  +taskFiveInput.value[1] + +taskFiveInput.value[2] 
    let sumTwo = +taskFiveInput.value[3] +  +taskFiveInput.value[4] + +taskFiveInput.value[5] 
    if(sumOne === sumTwo){
        taskFiveResult.textContent = 'сумма первых трех цифр РАВНА сумме вторых трех цифр'
    } else {
        taskFiveResult.textContent = 'сумма первых трех цифр НЕ РАВНА сумме вторых трех цифр'
    }
})

let massFunc = [`sumFound.addEventListener('click', () => {
    let sum = 0;
    Array.from(taskOneItems).forEach(elem => {
        sum += +elem.textContent
    })
    taskOneResult.value = sum
})`,`addNumber.addEventListener('click', () => {
    Array.from(taskTwoItems).forEach(elem => {
        elem.textContent = +elem.textContent + 1
    })
})`,`foundDelitel.addEventListener('click', () => {
    let massDel = []
    for(let i = taskThreeInput.value; i > 0; i--){
        if((taskThreeInput.value / i) % 1 == 0){
            massDel.push(i)
        }
    }
    taskThreeResult.textContent = massDel
})`,`Array.from(taskFourParagraf).forEach(elem => {
    let mass = elem.textContent.split('')
    elem.addEventListener('click', () => {
        elem.textContent =  mass.reverse().join('')
    })
    
})`,`checkSum.addEventListener('click', () => {
    let sumOne = +taskFiveInput.value[0] +  +taskFiveInput.value[1] + +taskFiveInput.value[2] 
    let sumTwo = +taskFiveInput.value[3] +  +taskFiveInput.value[4] + +taskFiveInput.value[5] 
    if(sumOne === sumTwo){
        taskFiveResult.textContent = 'сумма первых трех цифр РАВНА сумме вторых трех цифр'
    } else {
        taskFiveResult.textContent = 'сумма первых трех цифр НЕ РАВНА сумме вторых трех цифр'
    }
})`]