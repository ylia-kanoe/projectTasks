
/*№1 Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут.*/

let taskOneInput = document.querySelector(".task-one-input")
let taskOneResult = document.querySelector(".task-one-result")
let showMassItem = document.getElementById("showMassItem")
let taskOneParagraf = document.querySelector(".task-one-paragraf")
let mass = [1,2,3,4,5,6,7,8,9,10,11,12,13,45,15,85,95,62,35,2,2,2,2,2,3,5,3,6,9,4]
taskOneParagraf.textContent = mass

showMassItem.addEventListener('click', () => {
    taskOneResult.textContent = mass[taskOneInput.value]
})

/* №2 Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.*/

let pafagrafColor = document.querySelector(".task-two-paragraf")
let paintParagraf = document.getElementById("paintParagraf")
let massColorTwo = ['#ADFF2F','#7FFF00','#7CFC00','#00FF00','#32CD32','#98FB98','#90EE90','#00FA9A','#00FF7F','#3CB371','#2E8B57','#228B22','#008000','#006400']
let massButtonText = ['не этот зеленый', 'и не этот','ты вообще знаешь, как зеленый выглядит?','матерь божья, вокруг одни дальтоники']
let count = 0

paintParagraf.addEventListener('click', () => {
    pafagrafColor.style.backgroundColor = massColorTwo[Math.floor(Math.random() * massColorTwo.length-1)]
    if(count < massButtonText.length ){
        paintParagraf.textContent = massButtonText[count]
    } else {
        paintParagraf.textContent = 'ладно, выбери уже любой'
    }
    count++
})

/* №3 Дана таблица и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов.*/

let massColorThree = [ '#FF00FF', '#800080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080']
let item = document.querySelectorAll('.task-three-table td')

Array.from(item).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = massColorThree[Math.floor(Math.random() * massColorThree.length - 1)] 
    })
})

/* №4 Дан текстареа и див. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див.*/

let inputText = document.querySelector(".task-four-input")
let outputText = document.querySelector(".task-four-block")

inputText.addEventListener('keydown', (e) => {
    if(e.code === 'Enter' && e.shiftKey) {
        outputText.textContent = inputText.value
    }
})

let massFunc = [`showMassItem.addEventListener('click', () => {
    taskOneResult.textContent = mass[taskOneInput.value]
})`,`paintParagraf.addEventListener('click', () => {
    pafagrafColor.style.backgroundColor = massColorTwo[Math.floor(Math.random() * massColorTwo.length-1)]
    if(count < massButtonText.length ){
        paintParagraf.textContent = massButtonText[count]
    } else {
        paintParagraf.textContent = 'ладно, выбери уже любой'
    }
    count++
})`,`Array.from(item).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = massColorThree[Math.floor(Math.random() * massColorThree.length - 1)] 
    })
})`,`inputText.addEventListener('keydown', (e) => {
    if(e.code === 'Enter' && e.shiftKey) {
        outputText.textContent = inputText.value
    }
})`]