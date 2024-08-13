
/* №1 Сделайте инпут, в который можно ввести только числа. Остальные символы не должны вводится в инпут.*/


let taskOneInputNumber = document.querySelector('.task-one-input')
let numValue = taskOneInputNumber.value

taskOneInputNumber.addEventListener('keyup', () => {
	if(!isNaN(Number(taskOneInputNumber.value)) && !taskOneInputNumber.value.includes(' ')){
		taskOneInputNumber.value = numValue + taskOneInputNumber.value.slice(-1)
		numValue = taskOneInputNumber.value
	} else {
		taskOneInputNumber.value = numValue
	}
})

/* №2 Дан блок. По клику на блок покажите всплывающую подсказку с некоторым достаточно длинным текстом. Покажите подсказку или сверху или снизу с учетом того, чтобы она целиком поместилась на экране и не ушла под прокрутку. */

let helperBlock = document.querySelector('.helper-block')
let closePopup = document.querySelector('.close-popup')
let helpMessage = document.querySelector('.helper-block-popup')

helperBlock.addEventListener('click', () => {
    helpMessage.classList.add('open')

	if(helpMessage.getBoundingClientRect().height > 200){
		let wid = helpMessage.getBoundingClientRect().height / 2 
		if(document.body.getBoundingClientRect().width > helpMessage.getBoundingClientRect().width + helpMessage.getBoundingClientRect().x){
			helpMessage.style.width = helpMessage.getBoundingClientRect().width + wid +'px'
		} else {
			helpMessage.style.width = helpMessage.getBoundingClientRect().width + wid/2 +'px'
		}
	}

	if(document.body.getBoundingClientRect().width < (helpMessage.getBoundingClientRect().x + helpMessage.getBoundingClientRect().width)){
		helpMessage.style.right = "20px"
	} 
	 
	if(document.body.getBoundingClientRect().height < (helpMessage.getBoundingClientRect().bottom + helpMessage.getBoundingClientRect().y + helpMessage.getBoundingClientRect().height)){
		helpMessage.style.bottom = "20px"
	}
})

closePopup.addEventListener('click', (e) => {
    e.stopPropagation()
    helpMessage.classList.remove('open')
})

/* №3 Дан массив из шести цифр. Проверьте, можно ли собрать из этих цифр счастливый билет.*/

function random(mass){
	let massRand = []
	for(let i = 0; i < mass.length; i++){
		let randNum = Math.floor(Math.random() * mass.length)
		if(!massRand.includes(randNum)){
			massRand.push(randNum)
		} else {
			i--
		}
	}
	let massRez = []
	for(let i = 0; i < massRand.length; i++){
		massRez.push(mass[massRand[i]])
		
	}
	return massRez
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

function luckyTicket(mass){
	let count = 0
	let num = mass.length	
	let massRez = []
	let ts = 0
	while(count < factorial(num)){
		let ticket = random(mass)
		let sum = 0
		let sum2 = 0
		for(let i = 0; i < ticket.length / 2; i++){
			sum += +ticket[i]
		}
		for(let i = ticket.length / 2; i < ticket.length; i++){
			sum2 += +ticket[i]
		}
		console.log(sum)
		
		console.log(sum2)
		if(sum === sum2){
			for(let i = 0; i < massRez.length; i++){
				if(massRez[i].toString() === ticket.toString()){
					ts = 1
				}
			}
			if(ts == 1){

			} else {
				massRez.push(ticket)
			}
			ts = 0
		}
		count++	
	}
	if(massRez.length == 0){
		return 'Счастливого билета НЕТ'
	} else {
		return 'Счастливые билеты: ' + massRez.join('    ')
	}
}

createBlockMass("№3 Дан массив из шести цифр. Проверьте, можно ли собрать из этих цифр счастливый билет.", '4,8,5,7,6,4', 'Проверка на счастливые билеты', luckyTicket)

/* №4 Дана прямоугольная таблица. По нажатию на кнопку покрасьте ячейки одной диагонали в красный цвет, а второй диагонали - в зеленый.*/

let taskFourTableTd = document.querySelectorAll('.task-four-table td')
let taskFourTableTr = document.querySelectorAll('.task-four-table tr')
let colorDiagonal = document.getElementById('colorDiagonal')

colorDiagonal.addEventListener('click', () => {
	let i = 0
	while(i < taskFourTableTd.length){
		taskFourTableTd[i].style.backgroundColor = 'red'
		i += (taskFourTableTd.length / taskFourTableTr.length ) + 1
	}
	let j = (taskFourTableTd.length / taskFourTableTr.length) - 1
	while(j < taskFourTableTd.length){
		taskFourTableTd[j].style.backgroundColor = 'green'
		j += (taskFourTableTd.length / taskFourTableTr.length ) - 1
	}	
})

/* №5 Напишите код, который будет генерировать пароль заданного размера. Пароль обязательно должен будет содержать маленькую и большую буквы, цифру и какой-то специальный символ.*/

function passwordGenerate(num){
	let massNum = [1,2,3,4,5,6,7,8,9,0]
	let massStr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	let massStrUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let massSymbol = ['(',' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\", ", "^", "_","`", "{", "|", "}", "~"]

	let massRand = [massNum, massStr, massStrUpper, massSymbol]

	let str = ''
	let mass = []

	function createPass(){
		for(let i = 0; i < num; i++){
			let randomMass = massRand[Math.floor(Math.random() * massRand.length)]
			let randomItem = randomMass[Math.floor(Math.random() * randomMass.length)]
			str += randomItem
		}

		let count = 0

		for(let i = 0; i < massStrUpper.length; i++){
			if(!str.includes(massStrUpper[i])){
				count++
				if(count == massStrUpper.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massSymbol.length; i++){
			if(!str.includes(massSymbol[i])){
				count++	
				if(count == massSymbol.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massStr.length; i++){
			if(!str.includes(massStr[i])){
				count++	
				if(count == massStr.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massNum.length; i++){
			if(!str.includes(massNum[i])){
				count++	
				if(count == massNum.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
	}
	
	createPass()
	return str
}


createBlockNum("№5 Напишите код, который будет генерировать пароль заданного размера. Пароль обязательно должен будет содержать маленькую и большую буквы, цифру и какой-то специальный символ.", 6, 'Сгенерировать пароль указанной длины', passwordGenerate)


/* №6 Дано окно браузера. Сделайте так, чтобы элементы, целиком находящиеся в левой половине окна покрасились в зеленый цвет, целиком находящиеся в правой половине окна - в синий, а находящиеся и там, и там - в красный.*/

let taskSixBlock = document.querySelectorAll('.task-six-block-width100')

Array.from(taskSixBlock).forEach(elem => {
	if(elem.getBoundingClientRect().x > document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'green'
	} else if(elem.getBoundingClientRect().width + elem.getBoundingClientRect().x > document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'red'
	} else if(elem.getBoundingClientRect().width + elem.getBoundingClientRect().x < document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'blue'
	}
})

/* №7 Даны два числа. Выведите на экран процесс деления этих чисел в столбик, как в школе.*/

let taskSevenInputOne = document.querySelector('.task-seven-input-one')
let taskSevenInputTwo = document.querySelector('.task-seven-input-two')
let result = document.querySelector('.result-dividing-numbers')
let divideColumn = document.getElementById('divideColumn')

divideColumn.addEventListener('click', () => {
	result.innerHTML = ''
    function dividingNumbers(numOne, numTwo) {
        let quotientRez = String(numOne / numTwo)
    
        let dividend = document.createElement('div')
        let dividendP = document.createElement('p')
        dividend.classList.add('dividend')
        dividendP.classList.add('dividendP')
        dividendP.textContent = numOne
        result.append(dividend)
        dividend.append(dividendP)
    
        let divider = document.createElement('div')
        let dividerP = document.createElement('p')
        divider.classList.add('divider')
        dividerP.classList.add('dividerP')
        dividerP.textContent = numTwo
        result.append(divider)
        divider.append(dividerP)
    
        let quotient = document.createElement('p')
        quotient.classList.add('quotient')
        quotient.textContent = quotientRez;
        divider.append(quotient)
    
        quotientRez = quotientRez.replace('.', '')
    
        for (let i = 0; i < quotientRez.length; i++) {
            if (String(quotientRez)[i] == '.') {
                continue;
            }
    
            let rez = document.createElement('p')
            let rez1 = document.createElement('p')
            for (let j = 1; j <= i; j++) {
                rez1.style.transform = `translateX(${j * 10}px)`
                rez1.style.marginRight = j * 10 + 'px'
            }
    
            rez.classList.add('minus')
            rez1.classList.add('rez')
    
            rez.textContent += (rez.textContent += String(numOne).slice(i, String(+(quotientRez[i]) * +numTwo ).length)) - +(quotientRez[i]) * +numTwo  + String(numOne).slice(String(numOne).slice(i, String(+(quotientRez[i]) * +numTwo ).length).length)
            rez1.textContent += +(quotientRez[i])  * +numTwo
			if(+(quotientRez[i])  * +numTwo == 0){
				break
			}
            for (let k = 0; k <= i; k++) {
                rez.style.transform = `translateX(${(k + 1) * 10}px)`
                rez.style.marginRight = (k + 1) * 10 + 'px'
            }
    
            dividend.append(rez1)
            dividend.append(rez)
        }
    }
    
    dividingNumbers(+taskSevenInputOne.value, +taskSevenInputTwo.value)
})

/* №8 Дана строка, содержащая два числа и математическую операцию между ними: '10 + 20' Напишите код, который вычислит результат записанной математической операции.*/

function calculateStr(str){
    let strOne = ''
    let strTwo = ''
    let operation = ''
    let result = 0
    
    for(let i = 0; i < str.length; i++){
        if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        operation = i
    }
    
    for(let i = 0; i < operation; i++){
        strOne+= str[i]
    }
    
    for(let i = operation+1; i < str.length; i++){
        strTwo+= str[i]
    }
    
    if(str[operation] == '+'){
        result = +strOne + +strTwo
    } else if(str[operation] == '-'){
        result = +strOne - +strTwo
    } else if(str[operation] == '*'){
        result = +strOne * +strTwo
    } else if(str[operation] == '/'){
        result = +strOne / +strTwo
    }
    return result
}

createBlockStr("№8 Дана строка, содержащая два числа и математическую операцию между ними: '10 + 20' Напишите код, который вычислит результат записанной математической операции.", '10 + 20', 'Посчитать значение строки', calculateStr)

let massFunc = [`taskOneInputNumber.addEventListener('keyup', () => {
	if(!isNaN(Number(taskOneInputNumber.value)) && !taskOneInputNumber.value.includes(' ')){
		taskOneInputNumber.value = numValue + taskOneInputNumber.value.slice(-1)
		numValue = taskOneInputNumber.value
	} else {
		taskOneInputNumber.value = numValue
	}
})`,`
helperBlock.addEventListener('click', () => {
    helpMessage.classList.add('open')

	if(helpMessage.getBoundingClientRect().height > 200){
		let wid = helpMessage.getBoundingClientRect().height / 2 
		if(document.body.getBoundingClientRect().width > helpMessage.getBoundingClientRect().width + helpMessage.getBoundingClientRect().x){
			helpMessage.style.width = helpMessage.getBoundingClientRect().width + wid +'px'
		} else {
			helpMessage.style.width = helpMessage.getBoundingClientRect().width + wid/2 +'px'
		}
	}

	if(document.body.getBoundingClientRect().width < (helpMessage.getBoundingClientRect().x + helpMessage.getBoundingClientRect().width)){
		helpMessage.style.right = "20px"
	} 
	 
	if(document.body.getBoundingClientRect().height < (helpMessage.getBoundingClientRect().bottom + helpMessage.getBoundingClientRect().y + helpMessage.getBoundingClientRect().height)){
		helpMessage.style.bottom = "20px"
	}
})

closePopup.addEventListener('click', (e) => {
    e.stopPropagation()
    helpMessage.classList.remove('open')
})`,``,`colorDiagonal.addEventListener('click', () => {
	let i = 0
	while(i < taskFourTableTd.length){
		taskFourTableTd[i].style.backgroundColor = 'red'
		i += (taskFourTableTd.length / taskFourTableTr.length ) + 1
	}
	let j = (taskFourTableTd.length / taskFourTableTr.length) - 1
	while(j < taskFourTableTd.length){
		taskFourTableTd[j].style.backgroundColor = 'green'
		j += (taskFourTableTd.length / taskFourTableTr.length ) - 1
	}	
})`,`divideColumn.addEventListener('click', () => {
    function dividingNumbers(numOne, numTwo) {
        let quotientRez = String(numOne / numTwo)
    
        let dividend = document.createElement('div')
        let dividendP = document.createElement('p')
        dividend.classList.add('dividend')
        dividendP.classList.add('dividendP')
        dividendP.textContent = numOne
        result.append(dividend)
        dividend.append(dividendP)
    
        let divider = document.createElement('div')
        let dividerP = document.createElement('p')
        divider.classList.add('divider')
        dividerP.classList.add('dividerP')
        dividerP.textContent = numTwo
        result.append(divider)
        divider.append(dividerP)
    
        let quotient = document.createElement('p')
        quotient.classList.add('quotient')
        quotient.textContent = quotientRez;
        divider.append(quotient)
    
        quotientRez = quotientRez.replace('.', '')
    
        for (let i = 0; i < quotientRez.length; i++) {
            if (String(quotientRez)[i] == '.') {
                continue;
            }
    
            let rez = document.createElement('p')
            let rez1 = document.createElement('p')
            for (let j = 1; j <= i; j++) {
                rez1.style.transform = "translateX(" + j * 10 +"px)"
                rez1.style.marginRight = j * 10 + 'px'
            }
    
            rez.classList.add('minus')
            rez1.classList.add('rez')
    
            rez.textContent += (rez.textContent += String(numOne).slice(i, String(+(quotientRez[i]) * 52).length)) - +(quotientRez[i]) * 52
            rez1.textContent += +(quotientRez[i]) * 52
    
            for (let k = 0; k <= i; k++) {
                rez.style.transform = "translateX(" +(k + 1) * 10 + "px)"
                rez.style.marginRight = (k + 1) * 10 + 'px'
            }
    
            dividend.append(rez1)
            dividend.append(rez)
        }
    }
    
    dividingNumbers(+taskSevenInputOne.value, +taskSevenInputTwo.value)
})`,`Array.from(taskSixBlock).forEach(elem => {
	if(elem.getBoundingClientRect().x > document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'green'
	} else if(elem.getBoundingClientRect().width + elem.getBoundingClientRect().x > document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'red'
	} else if(elem.getBoundingClientRect().width + elem.getBoundingClientRect().x < document.body.getBoundingClientRect().width / 2){
		elem.style.backgroundColor = 'blue'
	}
})`,`function passwordGenerate(num){
	let massNum = [1,2,3,4,5,6,7,8,9,0]
	let massStr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	let massStrUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let massSymbol = ['(',' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\", ", "^", "_","", "{", "|", "}", "~"]

	let massRand = [massNum, massStr, massStrUpper, massSymbol]

	let str = ''
	let mass = []

	function createPass(){
		for(let i = 0; i < num; i++){
			let randomMass = massRand[Math.floor(Math.random() * massRand.length)]
			let randomItem = randomMass[Math.floor(Math.random() * randomMass.length)]
			str += randomItem
		}

		let count = 0

		for(let i = 0; i < massStrUpper.length; i++){
			if(!str.includes(massStrUpper[i])){
				count++
				if(count == massStrUpper.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massSymbol.length; i++){
			if(!str.includes(massSymbol[i])){
				count++	
				if(count == massSymbol.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massStr.length; i++){
			if(!str.includes(massStr[i])){
				count++	
				if(count == massStr.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
		for(let i = 0; i < massNum.length; i++){
			if(!str.includes(massNum[i])){
				count++	
				if(count == massNum.length){
					str = ''
					return createPass()
				}
			}
		}
		count = 0
	}
	
	createPass()
	return str
}`, `function calculateStr(str){
    let strOne = ''
    let strTwo = ''
    let operation = ''
    let result = 0
    
    for(let i = 0; i < str.length; i++){
        if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
        operation = i
    }
    
    for(let i = 0; i < operation; i++){
        strOne+= str[i]
    }
    
    for(let i = operation+1; i < str.length; i++){
        strTwo+= str[i]
    }
    
    if(str[operation] == '+'){
        result = +strOne + +strTwo
    } else if(str[operation] == '-'){
        result = +strOne - +strTwo
    } else if(str[operation] == '*'){
        result = +strOne * +strTwo
    } else if(str[operation] == '/'){
        result = +strOne / +strTwo
    }
    return result
}`]