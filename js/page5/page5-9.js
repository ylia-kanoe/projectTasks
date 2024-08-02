
/* №1 Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.*/

let taskOneParagraf = document.querySelector('.task-one-paragraf')
let giveMass = document.getElementById('giveMass')
let taskOneInput = document.querySelector('.task-one-input')
let mass = taskOneParagraf.textContent.split(',')

giveMass.addEventListener('click', () => {
    taskOneInput.value = mass
})

/* №2 Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.*/

let taskTwoParagraf = document.querySelectorAll('.task-two-paragraf')

Array.from(taskTwoParagraf).forEach(elem => {
    elem.addEventListener("click", () => {
        elem.style.backgroundColor  = 'red'
    })
})

/* №3 Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.*/

let colorInput = document.querySelector('.task-three-input')

colorInput.addEventListener('keyup', () => {
    if(colorInput.value % 2 == 0){
        colorInput.style.borderColor = 'green'
        colorInput.style.backgroundColor = 'green'
    } else {
         colorInput.style.borderColor = 'red'
        colorInput.style.backgroundColor = 'red'
    }
})

/* №4 В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025.*/

let dataFormat = document.querySelector('.task-four-input')

dataFormat.addEventListener('blur', () => {
    let date = new Date(dataFormat.value)
    dataFormat.value = date.getDate() + '.' + (+date.getMonth()+1) + '.' + date.getFullYear() 
})

/* №5 Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li.*/

let taskFivelistItems = document.querySelector('.task-five-list-items')
let taskFiveInput = document.querySelector('.task-five-input')

taskFiveInput.addEventListener('blur', () => {
    let mass = taskFiveInput.value.split(/[.?!;:]/)
    for(let i = 0; i < mass.length; i++){
        let item = document.createElement('li')
        taskFivelistItems.appendChild(item)
        item.textContent = mass[i]
    }
})

let massFunc =[`giveMass.addEventListener('click', () => {
    taskOneInput.value = mass
})`,`Array.from(taskTwoParagraf).forEach(elem => {
    elem.addEventListener("click", () => {
        elem.style.backgroundColor  = 'red'
    })
})`,`colorInput.addEventListener('keyup', () => {
    if(colorInput.value % 2 == 0){
        colorInput.style.borderColor = 'green'
        colorInput.style.backgroundColor = 'green'
    } else {
         colorInput.style.borderColor = 'red'
        colorInput.style.backgroundColor = 'red'
    }
})`,`dataFormat.addEventListener('blur', () => {
    let date = new Date(dataFormat.value)
    dataFormat.value = date.getDate() + '.' + (+date.getMonth()+1) + '.' + date.getFullYear() 
})`,`taskFiveInput.addEventListener('blur', () => {
    let mass = taskFiveInput.value.split('. ')
    for(let i = 0; i < mass.length; i++){
        let item = document.createElement('li')
        taskFivelistItems.appendChild(item)
        item.textContent = mass[i]
    }
})`]