/* №1 Дан список ul с числами, инпут и кнопка. В инпут вводится число. По клику на кнопку покрасьте в красный цвет li, содержащее введенное число.*/

let taskOneInput = document.querySelector('.task-one-input')
let colorItem = document.getElementById('colorItem')
let taskOneListItem = document.querySelectorAll('.task-one-list-items li')

colorItem.addEventListener('click', () => {
    taskOneListItem.forEach(elem => {
        if(elem.textContent == taskOneInput.value){
           elem.style.backgroundColor = 'red' 
        }
    })
})

/* №3 Даны чекбоксы, с помощью которых у юзера спрашиваются языки, которые он знает. Дан также абзац. По мере выбора чекбоксов юзером выводите в абзац выбранные языки через запятую.*/

let taskThreeCheckbox = document.querySelectorAll('.task-three-input-checkbox') 
let taskThreeResult = document.querySelector('.task-three-result')
let mass = []

taskThreeCheckbox.forEach(elem => {
    elem.addEventListener('click', () => {
        if(elem.checked){
            mass.push(elem.value)
        }
        if(!elem.checked ) {
            for(let i = 0; i < mass.length; i++){
                if(mass.includes(elem.value) && mass[i] == elem.value){
                    mass.splice(i, 1)
                    i--
                }
            }
        }
        taskThreeResult.textContent = mass.join(' ')
    })
})

/* №4 Напишите программу, которая сформирует следующий массив:[['x'],['x', 'x'],['x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x', 'x', 'x'],]*/

let taskFourResult = document.querySelector('.task-four-result')

function massGenerator(){
    let massResult = []
    let massOne = []
    let massTwo = []

    for(let i = 1; i < 6; i++){
        for(let j = 0; j < 5; j++){
            if(i == j){
              break  
            }
            massTwo.push('x')
        }
        massOne.push(massTwo)
        massTwo = []
    }

    massResult.push(massOne)
    console.log(massResult)
    return massResult
}
massGenerator()
taskFourResult.textContent = 'Результат в консоли'

/* №5 Дан следующая верстка: <p>111</p><p>222</p><p>333</p><p>444</p><p>555</p> Получите содержимое текстов абзацев в виде массива:['111','222','333','444','555',]*/

let taskFivePafagraf = document.querySelectorAll('.task-five-block p')
let taskFiveResult = document.querySelector('.task-five-result')

let massResult = []

taskFivePafagraf.forEach(elem => {  
    massResult.push(elem.textContent)  
    taskFiveResult.textContent = massResult.join(', ')
}); 
   
console.log(massResult)

let massFunc = [`colorItem.addEventListener('click', () => {
    taskOneListItem.forEach(elem => {
        if(elem.textContent == taskOneInput.value){
           elem.style.backgroundColor = 'red' 
        }
    })
})`,`taskThreeCheckbox.forEach(elem => {
    elem.addEventListener('click', () => {
        if(elem.checked){
            mass.push(elem.value)
        }
        if(!elem.checked ) {
            for(let i = 0; i < mass.length; i++){
                if(mass.includes(elem.value) && mass[i] == elem.value){
                    mass.splice(i, 1)
                    i--
                }
            }
        }
        taskThreeResult.textContent = mass.join(' ')
    })
})
`,`function massGenerator(){
    let massResult = []
    let massOne = []
    let massTwo = []

    for(let i = 1; i < 6; i++){
        for(let j = 0; j < 5; j++){
            if(i == j){
              break  
            }
            massTwo.push('x')
        }
        massOne.push(massTwo)
        massTwo = []
    }

    massResult.push(massOne)
    console.log(massResult)
    return massResult.join(', ')
}`,`taskFivePafagraf.forEach(elem => {  
    massResult.push(elem.textContent)     
    console.log(massResult)
    taskFiveResult.textContent = massResult.join(', ')
}); `]