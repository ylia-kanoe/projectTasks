
/* №1 Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.*/

let clickTD = document.querySelectorAll('.task-one-block td')

Array.from(clickTD).forEach(elem => {
    elem.addEventListener('click', (e) => {
        if(e.shiftKey){
            elem.style.backgroundColor = "red"  
        } else if(e.ctrlKey){
            elem.style.backgroundColor = "green" 
        }
    })
})

/* №2 Дан див и кнопка. По первому клику на кнопку покажите див, а по второму клику - спрячьте.*/

let elemHide = document.getElementById("elemHide")
let elemDiv = document.querySelector(".tast-two-block")

elemHide.addEventListener('click', () => {
    elemDiv.classList.toggle('hide')
})

let massFunc = [`Array.from(clickTD).forEach(elem => {
    elem.addEventListener('click', (e) => {
        if(e.shiftKey){
            elem.style.backgroundColor = "red"  
        } else if(e.ctrlKey){
            elem.style.backgroundColor = "green" 
        }
    })
})`,`elemHide.addEventListener('click', () => {
    elemDiv.classList.toggle('hide')
})`]