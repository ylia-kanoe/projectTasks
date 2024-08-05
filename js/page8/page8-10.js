
/* №1 Даны два инпута и кнопка. В инпуты вводятся числа. По клику на кнопку, проверьте, являются ли эти числа дружественными или нет.*/

let numOne = document.querySelector('.task-one-input-one')
let numTwo = document.querySelector('.task-one-input-two')
let checkFriends = document.getElementById('checkFriends')
let taskOneResult = document.querySelector('.task-one-result')

function massCreate(num){
	let mass = []
	for(let i = num - 1; i > 0; i--){
		if((num / i) % 1 == 0){
			mass.push(i)
		}
	}
	return mass
}

function massDelitelSum(mass){
	let sum = 0
	for(let i = 0; i < mass.length; i++){
		sum += +mass[i]
	}
	return sum
}

checkFriends.addEventListener('click', () => {
	let massOne = massCreate(numOne.value)
	let massTwo = massCreate(numTwo.value)
	if(numOne.value == massDelitelSum(massTwo) && numTwo.value == massDelitelSum(massOne)){
		taskOneResult.textContent = 'Дружественные числа'
	} else {
		taskOneResult.textContent = 'НЕ дружественные числа'
	}
})

/* №2 Дан некоторый массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] Дана переменная: let n = 3; Превратите этот массив в двухмерный, по n элементов в подмассиве.*/

let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function massChange(mass, n){
    let mass2 = []
    let massResult = []
    let count = 1

    for(let i = 0; i < mass.length; i++){
        if(count <= 3){
            mass2.push(mass[i])
        } 
        if(mass2.length == n){
            massResult.push(mass2)
            mass2 = []
            count = 1
        }
    }
    mass = massResult
    console.log(mass)
    return mass.join(', ') + ' (результат в консоли)'
}

createBlockNumMass("№2 Дан некоторый массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] Дана переменная: let n = 3; Превратите этот массив в двухмерный, по n элементов в подмассиве.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12', 3, 'Превратить массив в двумерный', massChange)

/* №3 Дан массив: [ [1, 2, 3, 4, 5], [1, 2, 3], [1, 2],] Добавьте в каждый подмассив столько пустых строк, чтобы количество элементов в каждом подмассиве стало равно количеству элементов в самом длинном подмассиве.*/

function addLength(){
    let mass = [[1, 2, 3, 4, 5], [1, 2, 3], [1, 2]]
    let maxlength = 0
    for(let i = 0; i < mass.length; i++){
        if(mass[i].length > maxlength){
            maxlength = mass[i].length
        }
    }
    for(let i = 0; i < mass.length; i++){
        while(mass[i].length < maxlength){
            mass[i].push('')
        }
    }
    
    console.log(mass)
    return mass.join(', ') + ' (результат в консоли)'
}

createBlockNoData("№3 Дан массив: [ [1, 2, 3, 4, 5], [1, 2, 3], [1, 2],] Добавьте в каждый подмассив столько пустых строк, чтобы количество элементов в каждом подмассиве стало равно количеству элементов в самом длинном подмассиве.", 'Сравнять подмассивы по длине', addLength)

let massFunc = [`function massCreate(num){
	let mass = []
	for(let i = num - 1; i > 0; i--){
		if((num / i) % 1 == 0){
			mass.push(i)
		}
	}
	return mass
}

function massDelitelSum(mass){
	let sum = 0
	for(let i = 0; i < mass.length; i++){
		sum += +mass[i]
	}
	return sum
}

checkFriends.addEventListener('click', () => {
	let massOne = massCreate(numOne.value)
	let massTwo = massCreate(numTwo.value)
	if(numOne.value == massDelitelSum(massTwo) && numTwo.value == massDelitelSum(massOne)){
		taskOneResult.textContent = 'Дружественные числа'
	} else {
		taskOneResult.textContent = 'НЕ дружественные числа'
	}
})
`,`let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function massChange(mass, n){
    let mass2 = []
    let massResult = []
    let count = 1

    for(let i = 0; i < mass.length; i++){
        if(count <= 3){
            mass2.push(mass[i])
        } 
        if(mass2.length == n){
            massResult.push(mass2)
            mass2 = []
            count = 1
        }
    }
    mass = massResult
    console.log(mass)
    return mass.join(', ') + ' (результат в консоли)'
}`,`function addLength(){
    let mass = [[1, 2, 3, 4, 5], [1, 2, 3], [1, 2]]
    let maxlength = 0
    for(let i = 0; i < mass.length; i++){
        if(mass[i].length > maxlength){
            maxlength = mass[i].length
        }
    }
    for(let i = 0; i < mass.length; i++){
        while(mass[i].length < maxlength){
            mass[i].push('')
        }
    }
    
    console.log(mass)
    return mass.join(', ') + ' (результат в консоли)'
}`]