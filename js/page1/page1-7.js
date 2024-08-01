
{
    let task = createTaskBlock("№1 Дана строка: 'abcde' Получите массив букв этой строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'abcde'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Получить массив букв'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дана строка: 'abcde' Получите массив букв этой строки.*/

    function massSt(str) {
        let mass = []
        for (let i = 0; i <= str.length; i++) {
            if (str[i] != ' ' && str[i] != ',' && str[i] != '.') {
                mass.push(str[i]);
            }
        }
        return mass.join(', ')
    }
    buttonFunc.addEventListener('click', () => {
        result.textContent = massSt(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дано некоторое число: 12345 Получите массив цифр этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Получить массив цифр'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано некоторое число: 12345 Получите массив цифр этого числа.*/

    function massNum(num) {
        let str = String(num);
        let mass = [];
        for(let i = 0; i < str.length; i++){
            mass.push(+str[i]);
        }
        return mass
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = massNum(inputValue.value)
    })
}


{
    let task = createTaskBlock("№3 Дано некоторое число: 12345 Переверните его: 54321.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Переверните число'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дано некоторое число: 12345 Переверните его: 54321. */

    function massNum(num) {
        let str = String(num);
        let str2 = "";
        for( let i = str.length-1; i >= 0; i--){
            str2 += +str[i];
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = massNum(inputValue.value)
    })
}

{
    let task = createTaskBlock("№4 Дано некоторое число: 12345 Найдите сумму цифр этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму цифр числа'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дано некоторое число: 12345 Найдите сумму цифр этого числа.*/

    function sumNum(num) {
        let str = String(num);
        let sum = 0
        for(let i = 0; i < str.length; i++){
            sum += Number(str[i]);
        }
        return sum
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = sumNum(inputValue.value)
    })
}



let massFunc = [`function massSt(str) {
        let mass = []
        for (let i = 0; i <= str.length; i++) {
            if (str[i] != ' ' && str[i] != ',' && str[i] != '.') {
                mass.push(str[i]);
            }
        }
        return mass.join(', ')
    }`,`function massNum(num) {
        let str = String(num);
        let mass = [];
        for(let i = 0; i < str.length; i++){
            mass.push(+str[i]);
        }
        return mass
    }`, `function massNum(num) {
        let str = String(num);
        let str2 = "";
        for( let i = str.length-1; i >= 0; i--){
            str2 += +str[i];
        }
        return str2
    }`,`function sumNum(num) {
        let str = String(num);
        let sum = 0
        for(let i = 0; i < str.length; i++){
            sum += Number(str[i]);
        }
        return sum
    }`]











