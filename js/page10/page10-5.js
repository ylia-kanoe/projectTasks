
/* №1 На странице юзер выделяет текст. По нажатию Ctrl + Enter запишите этот текст в буфер обмена.*/

function getSelectionText() {
    var txt = '';
    if (txt = window.getSelection) {
      txt = window.getSelection().toString();
    } else {
      txt = document.selection.createRange().text;
    }
    return txt;
  }

document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.code == "Enter"){
        let text =  getSelectionText()
        navigator.clipboard.writeText(text)
    }
})

/* №2 Дан текстареа. В него вводится текст. По нажатию клавиши Tab вставьте в место моргания курсора символ табуляции.*/

let taskTwoInputTextarea = document.querySelector('.task-two-input-textarea')

taskTwoInputTextarea.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        e.preventDefault();
        taskTwoInputTextarea.value += '\t'
    }
})

/* №3 Даны инпуты. В любой инпут можно ввести текст и нажать Enter. После этого текст из инпута исчезает. Сделайте так, чтобы каждый инпут запоминал 
введенные тексты. Над каждым инпутом разместите стрелочки, с помощью которых можно будет возвращать предыдущий введенный текст в инпут.*/ 

let taskThreeBlockInput = document.querySelectorAll('.task-three-block-input')
let obj = {}

Array.from(taskThreeBlockInput).forEach((elem, i) => {
    elem.addEventListener('keydown', (e) => {
        
        if(e.code === "Enter"){
            localStorage.setItem(i, elem.value);

           
        }
        console.log(localStorage.getItem(i))
    })
}) 






/* №4 Дано число. Выведите на экран процесс разложения числа на простые множители, как в школе.*/

let taskFourInput = document.querySelector('.task-four-input')
let factorize = document.getElementById('factorize')
let taskTFourResult = document.querySelector('.task-four-result')

function findSimpleNum(num) {
    let mass = []
    let mass2 = []
    for (let i = num - 1; i > 0; i--) {
        if ((num / i) % 1 == 0) {
            for (let j = i - 1; j > 0; j--) {
                if ((i / j) % 1 == 0) {
                    mass2.push(j)
                }
            }
            if (mass2.length < 2) {
                mass.push(i)
            }
            mass2 = []
        }
    }
    return mass
}

factorize.addEventListener('click', () => {
    taskTFourResult.innerHTML = ''
    function createElemNumb(num) {
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskTFourResult.append(numBlock)
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for (let i = 1; i < massive.length; i++) {

            while (rez % massive[i] == 0) {
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push(massive[i])
            }
        }

        return massNok
    }

    createElemNumb(+taskFourInput.value)

})

/* №5 Дан многомерный объект произвольного уровня вложенности:

{
	a: {
		b: {
			c: '+++'
		}
	},
}
Сделайте функцию, которая будет возвращать элементы объекта, параметром получая строку с ключами объекта, разделенными точками:

func('a.b.c'); // вернет '+++'

№6 Дана таблица. По нажатию на кнопку заполните ее следующим образом: */

let taskSixItemTd = document.querySelectorAll('.task-six-table td')
let taskSixItemTr = document.querySelectorAll('.task-six-table tr')
let tableFill = document.getElementById('tableFill')
let index = 5
let indexTwo = 5
let indexThree = 10
tableFill.addEventListener('click', () => {
    Array.from(taskSixItemTd).forEach((elem, i) => {
        elem.textContent = index
        index++
        if(index >= indexThree){
           index = indexTwo - 1
           indexTwo = indexTwo - 1
           indexThree = indexThree -1
        }

    })
})

let massFunc = [`function getSelectionText() {
    var txt = '';
    if (txt = window.getSelection) {
      txt = window.getSelection().toString();
    } else {
      txt = document.selection.createRange().text;
    }
    return txt;
  }

document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.code == "Enter"){
        let text =  getSelectionText()
        navigator.clipboard.writeText(text)
    }
})`,`let taskTwoInputTextarea = document.querySelector('.task-two-input-textarea')

taskTwoInputTextarea.addEventListener('keydown', (e) => {
    if(e.key === 'Tab'){
        e.preventDefault();
        taskTwoInputTextarea.value += '\t'
    }
})`, ``, `function findSimpleNum(num) {
    let mass = []
    let mass2 = []
    for (let i = num - 1; i > 0; i--) {
        if ((num / i) % 1 == 0) {
            for (let j = i - 1; j > 0; j--) {
                if ((i / j) % 1 == 0) {
                    mass2.push(j)
                }
            }
            if (mass2.length < 2) {
                mass.push(i)
            }
            mass2 = []
        }
    }
    return mass
}

factorize.addEventListener('click', () => {
    taskTFourResult.innerHTML = ''
    function createElemNumb(num) {
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskTFourResult.append(numBlock)
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for (let i = 1; i < massive.length; i++) {

            while (rez % massive[i] == 0) {
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push(massive[i])
            }
        }

        return massNok
    }

    createElemNumb(+taskFourInput.value)

})`,``,`let taskSixItemTd = document.querySelectorAll('.task-six-table td')
let taskSixItemTr = document.querySelectorAll('.task-six-table tr')
let tableFill = document.getElementById('tableFill')
let index = 5
let indexTwo = 5
let indexThree = 10
tableFill.addEventListener('click', () => {
    Array.from(taskSixItemTd).forEach((elem, i) => {
        elem.textContent = index
        index++
        if(index >= indexThree){
           index = indexTwo - 1
           indexTwo = indexTwo - 1
           indexThree = indexThree -1
        }

    })
})`]