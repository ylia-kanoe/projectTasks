{
    let task = createTaskBlock("№1 Дано число. Проверьте, отрицательное оно или нет.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = -5
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Число отрицательное?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дано число. Проверьте, отрицательное оно или нет.*/

    function posNegNam(num){
        if (num > 0){
            return "Положительное"
        } else if (num < 0) {
            return "Отрицательное"
        } else {
            return "0"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = posNegNam(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дана строка. Выведите длину этой строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Строка любой длины'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Длина строки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дана строка. Выведите длину этой строки. */

    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value.length
    })
}

{
    let task = createTaskBlock("№3 Дана строка. Выведите последний символ строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Строка любой длины'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Последний символ строки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дана строка. Выведите последний символ строки.*/
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value[inputValue.value.length - 1]
    })
}

{
    let task = createTaskBlock("№4 Дано число. Проверьте, четное оно или нет.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 15
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Число четное?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дано число. Проверьте, четное оно или нет. */
    function checkNum(num) {
        if(num % 2){
            return "Нечетное";
        } else {
            return "Четное";
        }
    } 

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkNum(inputValue.value)
    })
}

{
    let task = createTaskBlock("№5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 'мышь'
    inputValueTwo.value = 'кошь'
    inputValueOne.placeholder = "Введите слово"
    inputValueTwo.placeholder = "Введите слово"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Первая буква слов совпадает?'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.*/

    function checkSame(str, str2) {
        if(str[0] == str2[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkSame(inputValueOne.value, inputValueTwo.value)
    })
}

let massFunc = [`function posNegNam(num){
        if (num > 0){
            return "Положительное"
        } else if (num < 0) {
            return "Отрицательное"
        } else {
            return "0"
        }
    }`,`str.length`,`str[str.length - 1]`, `function checkNum(num) {
        if(num % 2){
            return "Нечетное";
        } else {
            return "Четное";
        }
    } `,`function checkSame(str, str2) {
        if(str[0] == str2[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }`]

