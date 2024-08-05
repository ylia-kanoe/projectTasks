
/* №1 Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру.*/

let inputBirthDate = document.querySelector('.task-one-input')
let taskOneResult = document.querySelector('.task-one-result')

inputBirthDate.addEventListener('blur', () => {
    let birthDate = new Date(inputBirthDate.value)
    let dateToday = new Date()
    taskOneResult.textContent = Math.floor((dateToday - birthDate) / ( 60 * 60 * 24 * 1000 * 365.25) )
})

/* №2 Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел.*/

let inputNumber = document.querySelector('.task-two-input')
let taskTwoResult = document.querySelector('.task-two-result')

inputNumber.addEventListener('keyup', (e) => {
    let mass = inputNumber.value.split(',')
    if(e.keyCode == 188){
        taskTwoResult.textContent = +taskTwoResult.textContent + +mass[mass.length - 2]
    }
})

/* №3 Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел.*/

let inputAdd = document.getElementById('inputAdd')
let taskThreeResult = document.querySelector('.task-three-result')
let taskThreeInput = document.querySelectorAll('.task-three-block input')

inputAdd.addEventListener('click', () => {
    let inputNew = document.createElement('input')
    document.querySelector('.task-three-block').append(inputNew)
    inputNew.addEventListener('blur', () => { 
        taskThreeResult.textContent = +taskThreeResult.textContent + +inputNew.value
    })
})

/* №4 Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки.*/

let inputSum = document.getElementById("inputSum")
let taskFourInput = document.querySelectorAll(".task-four-input")

inputSum.addEventListener('click', () => {
    let sum = 0
    Array.from(taskFourInput).forEach(elem => {
        sum += +elem.value
    })
    inputSum.textContent += + sum
})

/* №5 Даны два инпута, абзац и кнопка. В инпуты через запятую вводятся числа. По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах.*/

let taskFiveInputOne = document.querySelector(".task-five-input-one")
let taskFiveInputTwo = document.querySelector(".task-five-input-two")
let taskFiveResult = document.querySelector('.task-five-result')
let foundGeneral = document.getElementById("foundGeneral")

foundGeneral.addEventListener('click', () => {
    let massResult = []
    let massOne = taskFiveInputOne.value.split(',')
    let massTwo = taskFiveInputTwo.value.split(',')
    for(let i = 0; i < massOne.length; i++){
       if(massTwo.includes(massOne[i])){
        massResult.push(massOne[i])
       }
    }
    taskFiveResult.textContent = massResult
})

let massFunc = [`inputBirthDate.addEventListener('blur', () => {
    let birthDate = new Date(inputBirthDate.value)
    let dateToday = new Date()
    taskOneResult.textContent = Math.floor((dateToday - birthDate) / ( 60 * 60 * 24 * 1000 * 365.25) )
})`,`inputNumber.addEventListener('keyup', (e) => {
    let mass = inputNumber.value.split(',')
    if(e.keyCode == 188){
        taskTwoResult.textContent = +taskTwoResult.textContent + +mass[mass.length - 2]
    }
})`,`inputAdd.addEventListener('click', () => {
    let inputNew = document.createElement('input')
    document.getElementById('inputBlock').after(inputNew)
    inputNew.addEventListener('blur', () => { 
        taskThreeResult.textContent = +taskThreeResult.textContent + +taskThreeResult.value
    })
})`,`inputSum.addEventListener('click', () => {
    let sum = 0
    Array.from(taskFourInput).forEach(elem => {
        sum += +elem.value
    })
    inputSum.textContent += + sum
})`,`foundGeneral.addEventListener('click', () => {
    let massResult = []
    let massOne = taskFiveInputOne.value.split(',')
    let massTwo = taskFiveInputTwo.value.split(',')
    for(let i = 0; i < massOne.length; i++){
       if(massTwo.includes(massOne[i])){
        massResult.push(massOne[i])
       }
    }
    taskFiveResult.textContent = massResult
})`]