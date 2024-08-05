/* №1 Дан абзац, содержащий текст со словами. Некоторые слова повторяются два раза. По клику на кнопку удалите лишние одинаковые рядом стоящие слова.*/

let taskOneParagraf = document.querySelector('.task-one-paragraf')
let removeWord = document.getElementById('removeWord')

removeWord.addEventListener('click', () => {
    let mass = taskOneParagraf.textContent.split(' ')
    for(let i = 0; i < mass.length; i++){
        if(mass[i] == mass[i+1]){
            mass.splice(i,1)
            i--
        }
    }
    taskOneParagraf.textContent = mass.join(' ')
})

/* №2 Сделайте функцию, которая будет возвращать массив, заполненный N случайными числами из заданного диапазона так, чтобы числа не повторялись.*/

function massGenerator(num1, num2, num3){
    let mass = []
    for(let i = 0; i < num3; i++){
        let random = Math.floor(Math.random() * (num2 - num1) + num1)
        if(!mass.includes(random)){
            mass.push(random)
        } else {
            i--
        }
    }
    return mass
}

createBlockNumThree('№2 Сделайте функцию, которая будет возвращать массив, заполненный N случайными числами из заданного диапазона так, чтобы числа не повторялись.', 10, 30, 10, 'Сгенерировать массив случайных чисел', massGenerator)

/*№3 Дана следующая структура данных: let data = [ {text: '111',href: '1.html',},{text: '222',href: '2.html',},{text: '333',href: '3.html',},] Сформируйте с помощью этих данных следующую верстку: <a href="1.html">111</a><a href="2.html">222</a><a href="3.html">222</a>*/

let taskThreeResult = document.querySelector('.task-three-result')
let data = [
	{
		text: '111',
		href: '1.html',
	},
	{
		text: '222',
		href: '2.html',
	},
	{
		text: '333',
		href: '3.html',
	},
] 

for(let i = 0; i < data.length; i++){
    let newRefer = document.createElement('a')
    newRefer.href = Object.values(data[i])[1]
    newRefer.textContent = Object.values(data[i])[0]
    newRefer.classList.add('new-reference')
    taskThreeResult.append(newRefer)
}

let massFunc = [`removeWord.addEventListener('click', () => {
    let mass = taskOneParagraf.textContent.split(' ')
    for(let i = 0; i < mass.length; i++){
        if(mass[i] == mass[i+1]){
            mass.splice(i,1)
            i--
        }
    }
    taskOneParagraf.textContent = mass.join(' ')
})`,`function massGenerator(num1, num2, num3){
    let mass = []
    for(let i = 0; i < num3; i++){
        let random = Math.floor(Math.random() * (num2 - num1) + num1)
        if(!mass.includes(random)){
            mass.push(random)
        } else {
            i--
        }
    }
    return mass
}`,`for(let i = 0; i < data.length; i++){
    let newRefer = document.createElement('a')
    newRefer.href = Object.values(data[i])[1]
    newRefer.textContent = Object.values(data[i])[0]
    newRefer.classList.add('new-reference')
    taskThreeResult.append(newRefer)
}`]