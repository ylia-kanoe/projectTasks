/* 
№1 На странице юзер выделяет текст. По нажатию Ctrl + Enter запишите этот текст в буфер обмена.*/

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




























/* №4 Дано число. Выведите на экран процесс разложения числа на простые множители, как в школе.

№5 Дан многомерный объект произвольного уровня вложенности:

{
	a: {
		b: {
			c: '+++'
		}
	},
}
Сделайте функцию, которая будет возвращать элементы объекта, параметром получая строку с ключами объекта, разделенными точками:

func('a.b.c'); // вернет '+++'

№6 Дана таблица. По нажатию на кнопку заполните ее следующим образом:



*/

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