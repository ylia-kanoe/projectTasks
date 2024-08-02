/* №1 Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.*/

let taskOneNum = document.querySelector('.task-one-input-one')
let factorial = document.querySelector('.factorial')
let taskOneResult = document.querySelector('.task-one-result')

function factor(number){
    let factor = 1
    for(let i = 2; i <= number; i++){
        factor *= i
    }
    return factor
}

factorial.addEventListener('click', () =>{
    taskOneResult.textContent = factor(taskOneNum.value)
})

/* №2 Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.*/

let taskTwoNumOne = document.querySelector('.task-two-input-one')
let taskTwoNumTwo = document.querySelector('.task-two-input-two')
let taskTwoResult = document.querySelector('.task-two-result')
let maxInput = document.querySelector('.max-input')

maxInput.addEventListener('click', () => {
    taskTwoResult.textContent = (+taskTwoNumOne.value > +taskTwoNumTwo.value) ? taskTwoNumOne.value : taskTwoNumTwo.value
})

/* №3 Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.*/


let taskThreeNum = document.querySelector('.task-three-input')
let sumInput = document.querySelector('.sum-input')
let taskThreeResult = document.querySelector('.task-three-result')

function foundSumNumber(number){
    let sum = 0;
    for(let i = 0; i < String(number).length; i++){
        sum += +(String(number)[i])
    }
    return sum
}

sumInput.addEventListener('click', () => {
    taskThreeResult.textContent = foundSumNumber(taskThreeNum.value)
})

/* №4 Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.*/


let taskFourStr = document.querySelector('.task-four-input')
let reverseStr = document.querySelector('.reverse-input')
let taskFourResult = document.querySelector('.task-four-result')

reverseStr.addEventListener('click', () => {
    let mass = taskFourStr.value.split('')
    taskFourResult.textContent = mass.reverse().join('')
})

/* №5 Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.*/

let fullParagraf = document.querySelector('.full-paragraf')
let taskFiveParagraf = document.querySelectorAll('.task-five-pafagraf')

fullParagraf.addEventListener('click', () => {
    Array.from(taskFiveParagraf).forEach((elem, i) => {
        elem.textContent = i+1
    })
})

let massFunc = [`function factor(number){
    let factor = 1
    for(let i = 2; i <= number; i++){
        factor *= i
    }
    return factor
}

factorial.addEventListener('click', () =>{
    taskOneResult.textContent = factor(taskOneNum.value)
})`,`maxInput.addEventListener('click', () => {
    taskTwoResult.textContent = (+taskTwoNumOne.value > +taskTwoNumTwo.value) ? taskTwoNumOne.value : taskTwoNumTwo.value
})`,`function foundSumNumber(number){
    let sum = 0;
    for(let i = 0; i < String(number).length; i++){
        sum += +(String(number)[i])
    }
    return sum
}

sumInput.addEventListener('click', () => {
    taskThreeResult.textContent = foundSumNumber(taskThreeNum.value)
})`, `reverseStr.addEventListener('click', () => {
    let mass = taskFourStr.value.split('')
    taskFourResult.textContent = mass.reverse().join('')
})`,`fullParagraf.addEventListener('click', () => {
    Array.from(taskFiveParagraf).forEach((elem, i) => {
        elem.textContent = i+1
    })
})`]