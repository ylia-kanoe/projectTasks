/* №1 Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.*/

let taskOneResult = document.querySelector('.task-one-result')
let sumNumber = document.querySelector('.sum-number')

sumNumber.addEventListener('click', () =>{
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
    }
    taskOneResult.textContent = sum
})

/* №2 Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел */

let sumInput = document.querySelector('.sum-input');
let taskTwoInOne = document.querySelector('.task-two-input-one');
let taskTwoInTwo = document.querySelector('.task-two-input-two');
let taskTwoResult = document.querySelector('.task-two-result');

sumInput.addEventListener( "click" , () => 
    taskTwoResult.textContent = +taskTwoInOne.value + +taskTwoInTwo.value
)


/*№3 Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.*/

let taskThreeParagraf = document.querySelectorAll('.task-three-paragraf')
let taskThreeResult = document.querySelector('.task-three-result')
let clickSum = document.querySelector('.sum-paragraf')

clickSum.addEventListener('click', () => {
    taskThreeResult.textContent = taskThreeParagraf.length
})

/* №4 Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.*/

let str = document.querySelector('.task-four-input')
let sumSimbol = document.querySelector('.length-input')
let taskFourResult = document.querySelector('.task-four-result')
    
sumSimbol.addEventListener('click', () => {
    taskFourResult.textContent = (str.value).length
})

let massFunc = [`sumNumber.addEventListener('click', () =>{
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
    }
    taskOneResult.textContent = sum
})`,`sumInput.addEventListener( "click" , () => 
    taskTwoResult.textContent = +taskTwoInOne.value + +taskTwoInTwo.value
)`,`clickSum.addEventListener('click', () => {
    taskThreeResult.textContent = taskThreeParagraf.length
})`, `sumSimbol.addEventListener('click', () => {
    taskFourResult.textContent = (str.value).length
})`]