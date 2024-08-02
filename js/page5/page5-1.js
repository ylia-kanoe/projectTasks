/* №1 Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел. */

let taskOneButton = document.querySelector('.sum-number');
let taskOneInOne = document.querySelector('.task-one-input-one');
let taskOneInTwo = document.querySelector('.task-one-input-two');
let taskOneResult = document.querySelector('.task-one-result');

taskOneButton.addEventListener( "click" , () => 
    taskOneResult.textContent = +taskOneInOne.value + +taskOneInTwo.value
)

/* №2 Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.*/

let clickSquare = document.querySelector('.click-square');
let taskTwoParagraf = document.querySelector('.task-two-paragraf');

clickSquare.addEventListener('click', () => {
    taskTwoParagraf.textContent = taskTwoParagraf.textContent * taskTwoParagraf.textContent
    }
)

/* №3 Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.*/

let taskThreeParagrafOne = document.querySelector('.task-three-paragraf-one')
let taskThreeParagrafTwo = document.querySelector('.task-three-paragraf-two')
let taskThreeResult = document.querySelector('.task-three-result')
let sumParagraf = document.querySelector('.sum-paragraf')

sumParagraf.addEventListener('click', () => {
    taskThreeResult.textContent = +taskThreeParagrafOne.textContent + +taskThreeParagrafTwo.textContent
})

/* №4 Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.*/


let taskFourParagraf = document.querySelectorAll('.task-four-paragraf')

Array.from(taskFourParagraf).forEach(elem =>{
    elem.addEventListener('click', () => {
        elem.textContent = elem.textContent * elem.textContent
    })

})

/* №5 Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.*/


let taskFiveInput = document.querySelectorAll('.task-five-input')

Array.from(taskFiveInput).forEach(elem => {
    elem.addEventListener('blur', () => {
        elem.value = elem.value * elem.value
    })
})



let massFunc = [`taskOneButton.addEventListener( "click" , () => 
    taskOneResult.textContent = +taskOneInOne.value + +taskOneInTwo.value
)`,`clickSquare.addEventListener('click', () => {
    taskTwoParagraf.textContent = taskTwoParagraf.textContent * taskTwoParagraf.textContent
    }
)`,`sumParagraf.addEventListener('click', () => {
    taskThreeResult.textContent += +taskThreeParagrafOne.textContent + +taskThreeParagrafTwo.textContent
})`, `Array.from(taskFourParagraf).forEach(elem =>{
    elem.addEventListener('click', () => {
        elem.textContent = elem.textContent * elem.textContent
    })

})`,`Array.from(inputSquare).forEach(elem => {
    elem.addEventListener('blur', () => {
        elem.value = elem.value * elem.value
    })
})`]