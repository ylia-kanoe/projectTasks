
/* №1 Дан абзац и кнопка. Пусть первое нажатие на кнопку красит абзац в красный цвет, а второе нажатие в зеленый.*/

let paragrafColor = document.querySelector(".task-one-paragraf")
let changeColor = document.getElementById("changeColor")
let count = 0

changeColor.addEventListener('click', () => {
    if(count % 2 == 0){
        paragrafColor.style.backgroundColor = 'red'
    } else {
        paragrafColor.style.backgroundColor = 'green'
    }
    count++
})

/* №2 Дан список ul. По клику на любую li добавьте ей в конец ее порядковый номер в списке, но только один раз.*/


let taskTwolistItem = document.querySelectorAll('.task-two-list-items li')

Array.from(taskTwolistItem).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if(elem.textContent[elem.textContent.length-1] != i){
            elem.textContent += i
        }
    })
})

/* №3 Дан список ul. По клику на любую li, если нажата клавиша Ctrl, удалите эту li из списка.*/

let taskThreelistItem = document.querySelectorAll('.task-three-list-items li')
let listItem = document.querySelectorAll('li')

Array.from(taskThreelistItem).forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        if(e.ctrlKey){
            elem.remove()
        }
    })
})

/* №4 Дан абзац с числом и кнопка. По нажатию на кнопку пусть число из абзаца каждую секунду увеличивается на единицу.*/

let taskFourPafagraf = document.querySelector(".task-four-paragraf")
let paragrafStart = document.getElementById("paragrafStart")
let paragrafStop = document.getElementById("paragrafStop")
let startInterval 

paragrafStart.addEventListener('click', () => {
    startInterval = setInterval(() => {
        taskFourPafagraf.textContent = +taskFourPafagraf.textContent + 1
    }, 1000)
})

paragrafStop.addEventListener('click', () => {
    clearInterval(startInterval)
    taskFourPafagraf.textContent = '1'
})


/* №5 Дан инпут и абзац. В инпут вводится дата. Определите, была уже дата в текущем году. Результат выведите в абзац.*/

let taskFiveInput = document.querySelector(".task-five-input")
let taskFiveResult = document.querySelector(".task-five-result")


taskFiveInput.addEventListener('blur', () => {
    let dateToday = new Date()
    let dateFound = new Date(taskFiveInput.value)
    if(dateFound > dateToday){
        taskFiveResult.textContent = "Дата еще не наступила"
    } else {
        taskFiveResult.textContent = "Дата прошла"
    }
})

let massFunc =[`changeColor.addEventListener('click', () => {
    if(count % 2 == 0){
        paragrafColor.style.backgroundColor = 'red'
    } else {
        paragrafColor.style.backgroundColor = 'green'
    }
    count++
})`,`Array.from(taskTwolistItem).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if(elem.textContent[elem.textContent.length-1] != i){
            elem.textContent += i
        }
    })
})`,`Array.from(taskThreelistItem).forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        if(e.ctrlKey){
            elem.remove()
        }
    })
})`,`paragrafStart.addEventListener('click', () => {
    startInterval = setInterval(() => {
        taskFourPafagraf.textContent = +taskFourPafagraf.textContent + 1
    }, 1000)
})

paragrafStop.addEventListener('click', () => {
    clearInterval(startInterval)
    taskFourPafagraf.textContent = '1'
})`,`taskFiveInput.addEventListener('blur', () => {
    let dateToday = new Date()
    let dateFound = new Date(taskFiveInput.value)
    if(dateFound > dateToday){
        taskFiveResult.textContent = "Дата еще не наступила"
    } else {
        taskFiveResult.textContent = "Дата прошла"
    }
})`]