
{
    let task = createTaskBlock("№1 Дана некоторая строка. Найдите позицию первого нуля в строке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Считаем от 0 до 100'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти позицию первого нуля'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дана некоторая строка. Найдите позицию первого нуля в строке. */

    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value.indexOf('0')
    })
}

{
    let task = createTaskBlock("№2 Выведите все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 1000
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести числа, где сумма первой и второй цифры равна 5'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.*/

    function createMass(numStart, numEnd) {
        let mass = [];
        for(let i = numStart; i <= numEnd; i++){
            if(+String(i)[0]+ +String(i)[1] == 5){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = createMass(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock(" №3 Дан массив. Удалите из него элементы с заданным значением.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = '1, 2, 3, 4, 5, 6'
    inputValueTwo.value = 5
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Выведите подмассивы'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дан массив. Удалите из него элементы с заданным значением.*/

    function deleteNum(mass, num){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] === num){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        result.textContent = deleteNum(mass, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Сумма первой половины массива'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.*/

    function sumHalfMass(mass) {
        let sum = 0;
        for(let i = 0; i < Math.floor(mass.length / 2); i++){
            sum += +mass[i];
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = sumHalfMass(mass)
    })
}



let massFunc = [`str.indexOf('0')`, `function createMass(numStart, numEnd) {
        let mass = [];
        for(let i = numStart; i <= numEnd; i++){
            if(+String(i)[0]+ +String(i)[1] == 5){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
        `function deleteNum(mass, num){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] === num){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }`, `function sumHalfMass(mass) {
        let sum = 0;
        for(let i = 0; i < Math.floor(mass.length / 2); i++){
            sum += +mass[i];
        }
        return sum
    }`]

