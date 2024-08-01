{
    let task = createTaskBlock("№1 Выведите  все числа в промежутке от 10 до 1000, у которых первая цифра четная.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 10
    inputValueTwo.value = 1000
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести числа, у которых первая цифра четная'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Выведите  все числа в промежутке от 10 до 1000, у которых первая цифра четная.*/

    function numFirstEven(num, num2){
        let mass = []
        for(let i = num; i <= num2; i++){
            if(+String(i)[0] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = numFirstEven(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№2 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5].")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Поменяйте местами пары элементов массива'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5].*/

    function massSwap(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            count++;
            if(count === 2){
                [mass[i], mass[i-1]] = [mass[i-1], mass[i]];
                count =  0;
            }
        }
        return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = massSwap(mass)
    })
}

{
    let task = createTaskBlock("№3 Дан следующий объект: let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = `{
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму элементов'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дан следующий объект: let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта.*/
    
    function sumObj(obj){
        let sum = 0;
        for(let val of Object.values(obj)){
            for(let val2 of Object.values(val)){
                sum += val2;
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let obj = {
            1: {
                1: 11,
                2: 12,
                3: 13,
            },
            2: {
                1: 21,
                2: 22,
                3: 23,
            },
            3: {
                1: 24,
                2: 25,
                3: 26,
            },
        }
        result.textContent = sumObj(obj)
    })
}


let massFunc = 
    [`function numFirstEven(num, num2){
        let mass = []
        for(let i = num; i <= num2; i++){
            if(+String(i)[0] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
        `function massSwap(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            count++;
            if(count === 2){
                [mass[i], mass[i-1]] = [mass[i-1], mass[i]];
                count =  0;
            }
        }
        return mass
    }`,
        `function sumObj(obj){
        let sum = 0;
        for(let val of Object.values(obj)){
            for(let val2 of Object.values(val)){
                sum += val2;
            }
        }
        return sum
    }`]