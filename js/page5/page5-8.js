
/* №1 Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.*/

let inputSquare = document.querySelectorAll('.task-one-input')

Array.from(inputSquare).forEach(elem => {
    elem.addEventListener('blur', () => {
        elem.value = +elem.value * +elem.value

    })
})

/* №2 Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.*/

let taskTwoResult = document.querySelector('.task-two-result')
let clickRandomItem = document.getElementById('clickRandomItem')
let taskTwoParagraf = document.querySelector('.task-two-paragraf')
let mass = taskTwoParagraf.textContent.split(',')

clickRandomItem.addEventListener('click', () => {
    console.log()
    taskTwoResult.value = mass[Math.floor(Math.random() * (mass.length))]
})

/* №3 Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.*/

let taskThreeResult = document.querySelector('.task-three-result')
let taskThreeInput = document.querySelector('.task-three-input')


taskThreeInput.addEventListener('blur', () => {
    let mass = taskThreeInput.value.split(',')
    let sum = 0
    for(let i = 0; i < mass.length; i++){
        sum += +mass[i]
    }
    console.log()
    taskThreeResult.textContent = sum
})

/* №4 Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.*/

let taskFourInputOne = document.querySelector('.task-four-input-one')
let taskFourInputTwo = document.querySelector('.task-four-input-two')
let overollDelitel = document.getElementById('overollDelitel')
let taskFourResult = document.querySelector('.task-four-result')


function foundDelitel(num){
    let mass = []
    for(let i = num.value; i > 0; i--){
        if((num.value / i) % 1 == 0){
            mass.push(i)
        }
    }
    return mass
}

function overOllDelitelFound(massOne, massTwo){
    let massOverall = [] 
    let massLength = (massOne.length >= massTwo.length) ? +massOne.length : massTwo.length 
    for(let i = 0; i < massLength; i++){
        if((massOne.length > massTwo.length)? +massOne.includes(+massTwo[i]) : +massTwo.includes(+massOne[i])){
            massOverall.push((massOne.length > massTwo.length)? +massTwo[i] : +massOne[i])
        }
    }

    return massOverall
} 

overollDelitel.addEventListener('click', () => {
    taskFourResult.textContent = overOllDelitelFound(foundDelitel(taskFourInputOne), foundDelitel(taskFourInputTwo))
    
})

/* №5 Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.*/

let taskFiveInput = document.querySelector('.task-five-input')
let foundNumber = document.getElementById('foundNumber')
let taskFiveResult = document.querySelector('.task-five-result')

foundNumber.addEventListener('click', () => {
    let mass = taskFiveInput.value.split(',')
    if(mass.includes('13')){
        taskFiveResult.textContent = "Номер 13 ЕСТЬ"
    } else {
        taskFiveResult.textContent = "Номера 13 НЕТ"
    }
})

let massFunc = [`Array.from(inputSquare).forEach(elem => {
    elem.addEventListener('blur', () => {
        elem.value = +elem.value * +elem.value

    })
})`,`clickRandomItem.addEventListener('click', () => {
    taskTwoResult.value = mass[Math.floor(Math.random() * (mass.length))]
})`,`taskThreeInput.addEventListener('blur', () => {
    let mass = taskThreeInput.value.split(',')
    let sum = 0
    for(let i = 0; i < mass.length; i++){
        sum += +mass[i]
    }
    taskThreeResult.textContent = sum
})`,`function foundDelitel(num){
    let mass = []
    for(let i = num.value; i > 0; i--){
        if((num.value / i) % 1 == 0){
            mass.push(i)
        }
    }
    return mass
}

function overOllDelitelFound(massOne, massTwo){
    let massOverall = [] 
    let massLength = (massOne.length >= massTwo.length) ? +massOne.length : massTwo.length 
    for(let i = 0; i < massLength; i++){
        if((massOne.length > massTwo.length)? +massOne.includes(+massTwo[i]) : +massTwo.includes(+massOne[i])){
            massOverall.push((massOne.length > massTwo.length)? +massTwo[i] : +massOne[i])
        }
    }

    return massOverall
} 

overollDelitel.addEventListener('click', () => {
    taskFourResult.textContent = overOllDelitelFound(foundDelitel(taskFourInputOne), foundDelitel(taskFourInputTwo))
    
})`,`foundNumber.addEventListener('click', () => {
    let mass = taskFiveInput.value.split(',')
    if(mass.includes('13')){
        taskFiveResult.textContent = "Номер 13 ЕСТЬ"
    } else {
        taskFiveResult.textContent = "Номера 13 НЕТ"
    }
})`]