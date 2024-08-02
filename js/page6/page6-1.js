
/* №1 Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.*/ 

let mass = [1,2,3,4,5,6,7,8,9]
let clickListFullOne = document.getElementById("clickListFullOne")
let taskOneListItems = document.querySelector(".task-one-list-items")
let taskOneParagraf = document.querySelector(".task-one-paragraf")
taskOneParagraf.textContent = mass.join(', ')

clickListFullOne.addEventListener('click', () => {
    for(let i = 0; i < mass.length; i++){
        let item = document.createElement("li")
        taskOneListItems.appendChild(item)
        item.textContent = mass[i]
    }
})

/*  №2 Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10.*/

let clickListFullTwo = document.getElementById("clickListFullTwo")
let taskTwoListItems = document.querySelector(".task-two-list-items")

clickListFullTwo.addEventListener('click', () => {
    for(let i = 1; i <= 10; i++){
        let item = document.createElement("li")
        taskTwoListItems.appendChild(item)
        item.textContent = i
    }
})

/* №3 Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'.*/

let addItemListThree = document.getElementById("addItemListThree")
let taskThreeListItems = document.querySelector(".task-three-list-items")

addItemListThree.addEventListener('click', () => {
    let item = document.createElement("li")
    taskThreeListItems.appendChild(item)
    item.textContent = '!'
})

/* №4 Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером.*/

let addItemListFour = document.getElementById("addItemListFour")
let taskFourListItems = document.querySelector(".task-four-list-items")
let i = 0

addItemListFour.addEventListener('click', () => {
    i++
    let item = document.createElement("li")
    taskFourListItems.appendChild(item)
    item.textContent = i
})

/* №5 Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка.*/

let removeItemListFive = document.getElementById("removeItemListFive")
let taskFiveListItems = document.querySelector(".task-five-list-items")
let fiveListItems  = document.querySelectorAll(".task-five-list-items li")

removeItemListFive.addEventListener('click', () => {  
    let itemRemove = fiveListItems[fiveListItems.length-1]
    taskFiveListItems.removeChild(itemRemove)
    fiveListItems = document.querySelectorAll(".task-five-list-items li")
})

/* №6 Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите случайный пункт списка.*/

let removeItemListSix = document.getElementById("removeItemListSix")
let taskSixListItems = document.querySelector(".task-six-list-items")

removeItemListSix.addEventListener('click', () => {  
    let item = document.querySelectorAll(".task-six-list-items li")
    let itemRemove = item[Math.floor(Math.random() * (item.length - 1))]
    taskSixListItems.removeChild(itemRemove)
})

let massFunc = [`clickListFullOne.addEventListener('click', () => {
    for(let i = 0; i < mass.length; i++){
        let item = document.createElement("li")
        taskOneListItems.appendChild(item)
        item.textContent = mass[i]
    }
})`,`clickListFullTwo.addEventListener('click', () => {
    for(let i = 1; i <= 10; i++){
        let item = document.createElement("li")
        taskTwoListItems.appendChild(item)
        item.textContent = i
    }
})`,`addItemListThree.addEventListener('click', () => {
    let item = document.createElement("li")
    taskThreeListItems.appendChild(item)
    item.textContent = '!'
})`,`addItemListFour.addEventListener('click', () => {
    i++
    let item = document.createElement("li")
    taskFourListItems.appendChild(item)
    item.textContent = i
})`,`removeItemListFive.addEventListener('click', () => {  
    let itemRemove = fiveListItems[fiveListItems.length-1]
    listItems.removeChild(itemRemove)
    fiveListItems = document.querySelectorAll(".task-five-list-items li")
})`,`removeItemListSix.addEventListener('click', () => {  
    let item = document.querySelectorAll(".task-six-list-items li")
    let itemRemove = item[Math.floor(Math.random() * (item.length - 1))]
    taskSixListItems.removeChild(itemRemove)
})`]