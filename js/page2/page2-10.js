
{
    let task = createTaskBlock("№1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Ok5'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Проверить, что в этой строке не более трех букв'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.*/

    function checkStr(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(isNaN(Number(str[i])) && str[i] != " "){
                count ++;
            }
        }
        if(count > 3){
            return "В строке БОЛЬШЕ 3 букв"
        } else {
            return "В строке 3 или МЕНЕЕ буквы"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkStr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дано число. Получите первую четную цифру с конца этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345653
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Получить первую четную цифру с конца'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано число. Получите первую четную цифру с конца этого числа.*/

    function firstEvenNum(num){
        let numberStr = String(num);
        let count = 0;
        let rez = ''
        for(let i = numberStr.length - 1; i >= 0; i--){
            if(numberStr[i] % 2 == 0){
                count ++;
            }
            if(count === 1){
                rez = numberStr[i]
                break;
            }  
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = firstEvenNum(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'abcde abcde abcde'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Заменить первый символ каждого слова на '!'"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'.*/

    function replaceSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += '!' + mass[i].slice(1) + ' ';
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = replaceSymbol(inputValue.value)
    })
}

{
    let task = createTaskBlock("№4 Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Проверить, что в массиве есть два одинаковых элемента подряд'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.*/

    function checkRepeat(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == mass[i+1]){
                count ++;
            } 
        }
        if(count > 0){
            return "есть 2 значения подряд"
        } else {
            return "нет 2 значений подряд"
        }
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = checkRepeat(mass)
    })
}
let massFunc = 
    [`function checkStr(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(isNaN(Number(str[i])) && str[i] != " "){
                count ++;
            }
        }
        if(count > 3){
            return "В строке БОЛЬШЕ 3 букв"
        } else {
            return "В строке 3 или МЕНЕЕ буквы"
        }
    }`,
        `function firstEvenNum(num){
        let numberStr = String(num);
        let count = 0;
        let rez = ''
        for(let i = numberStr.length - 1; i >= 0; i--){
            if(numberStr[i] % 2 == 0){
                count ++;
            }
            if(count === 1){
                rez = numberStr[i]
                break;
            }  
        }
        return rez
    }`,
`function replaceSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += '!' + mass[i].slice(1) + ' ';
        }
        return str2
    }`,
`function checkRepeat(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == mass[i+1]){
                count ++;
            } 
        }
        if(count > 0){
            return "есть 2 значения подряд"
        } else {
            return "нет 2 значений подряд"
        }
    }`]