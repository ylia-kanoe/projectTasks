{
    let task = createTaskBlock("№1 Дано число. Выведите первую цифру этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 100
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести первую цифру'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дано число. Выведите первую цифру этого числа.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = String(inputValue.value)[0]
    })
}

{
    let task = createTaskBlock("№2 Дано число. Выведите последнюю цифру этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 205
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести последнюю цифру'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано число. Выведите последнюю цифру этого числа.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value[inputValue.value.length-1]
    })
}

{
    let task = createTaskBlock("№3 Дано число. Выведите сумму первой и последней цифры этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 205
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести сумму первой и последней цифры'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дано число. Выведите сумму первой и последней цифры этого числа.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = +inputValue.value[0] + +inputValue.value[inputValue.value.length -1]
    })
}

{
    let task = createTaskBlock("№4 Дано число. Выведите количество цифр в этом числе.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 205
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести количество цифр'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дано число. Выведите количество цифр в этом числе.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value.length
    })
}

{
    let task = createTaskBlock("№5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 15
    inputValueTwo.value = 42
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Первые цифры чисел совпадают?'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.*/

    function checkSame(num, num2) {
        if(String(num)[0] == String(num2)[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkSame(inputValueOne.value, inputValueTwo.value)
    })
}

let massFunc = [`String(num)[0]`,`String(num)[String(num).length-1]`,`+(String(num)[0]) + +(String(num)[String(num).length -1])`,
    `String(num).length`,
    `function checkSame(num, num2) {
        if(String(num)[0] == String(num2)[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }`]

