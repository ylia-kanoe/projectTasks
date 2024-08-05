
/*№1 Пусть даны чекбоксы, отмеченные и нет. По нажатию на кнопку сделайте так, чтобы все чекбоксы сменили свое состояние.*/

let checkboxReverce = document.getElementById('checkboxReverce')
let inputCheckbox = document.querySelectorAll('.task-one-block input[type=checkbox]')

checkboxReverce.addEventListener('click', () => {
	Array.from(inputCheckbox).forEach(elem => {
		if(elem.checked){
			elem.checked = false 
		} else {
			elem.checked = true 
		}	
	})
})

/* №2 Дан следующий массив: let arr = [1, 2, 3, 4, 5, 6]; Дано также число: let num = 3; Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной.*/

function massResult(mass, numb){
	for(let i = 0; i < numb * numb; i++){
		if(!mass[i]){
			mass.push('')
		}
	}
	console.log(mass)
	return mass + ' (результат в консоли)'
}

createBlockNumMass("№2 Дан следующий массив: let arr = [1, 2, 3, 4, 5, 6]; Дано также число: let num = 3; Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной.", '1, 2, 3, 4, 5, 6', 3, 'Добавить пустые строки', massResult)

/* №3 Выведите на экран следующую пирамидку: 111, 222, 333, 444, 555, 666, 777, 888, 999*/

let taskThreeResult = document.querySelector('.task-three-result')

for(let i = 1; i < 10; i++){
    let pafagraf = document.createElement('p')
    pafagraf.textContent = String(i)+String(i)+String(i)
    taskThreeResult.append(pafagraf)
}

let massFunc = [`checkboxReverce.addEventListener('click', () => {
	Array.from(inputCheckbox).forEach(elem => {
		if(elem.checked){
			elem.checked = false 
		} else {
			elem.checked = true 
		}	
	})
})`,`for(let i = 1; i < 10; i++){
    let pafagraf = document.createElement('p')
    pafagraf.textContent = String(i)+String(i)+String(i)
    taskThreeResult.append(pafagraf)
}`,`function massResult(mass, numb){
	for(let i = 0; i < numb * numb; i++){
		if(!mass[i]){
			mass.push('')
		}
	}
	console.log(mass)
	return mass + ' (результат в консоли)'
}
`,]