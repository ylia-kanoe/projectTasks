{
    let task = createTaskBlock("№1 Найдите сумму всех целых чисел от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найдите сумму всех целых чисел'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Найдите сумму всех целых чисел от 1 до 100.*/

    function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            sum = sum + +i
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = outputSum(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найдите сумму всех четных чисел'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.*/

    function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2 == 0){
                sum = sum + +i
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = outputSum(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найдите сумму всех нечетных чисел'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.*/

    function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2){
                sum = sum + +i
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = outputSum(inputValueOne.value, inputValueTwo.value)
    })
}
{
    let task = createTaskBlock("№4 Даны два целых числа. Найдите остаток от деления первого числа на второе.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 45
    inputValueTwo.value = 15
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти остаток от деления'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Даны два целых числа. Найдите остаток от деления первого числа на второе.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = +inputValueOne.value % +inputValueTwo.value
    })
}

{
    let task = createTaskBlock("№5 Дана некоторая строка. Переберите и выведите по очереди все символы с конца строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Дана любая строка'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все элементы строки с конца'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №5 Дана некоторая строка. Переберите и выведите по очереди все символы с конца строки.*/

    function outputLetterReverseFunc(str) {
        let mass = []
        for(let i = str.length - 1; i >= 0 ; i--){
            mass.push(str[i])
        }
        return mass.join(', ')
    }  

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputLetterReverseFunc(inputValue.value)
    })
}

let massFunc = [`function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            sum = sum + +i
        }
        return sum
    }`,`function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2 == 0){
                sum = sum + +i
            }
        }
        return sum
    }`,`function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2){
                sum = sum + +i
            }
        }
        return sum
    }`,`+num % +num2`,`function outputLetterReverseFunc(str) {
        let mass = []
        for(let i = str.length - 1; i >= 0 ; i--){
            mass.push(str[i])
        }
        return mass.join(', ')
    } `]
