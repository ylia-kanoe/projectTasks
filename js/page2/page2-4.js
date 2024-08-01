{
    let task = createTaskBlock("№1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Считаем от 0 до 100'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти позицию третьего нуля'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.*/

    function findNum(str){
        let numberCount = [];
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i])) && str[i] != " " ){
                numberCount.push(i);
            }  
        }
        return numberCount[0]
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = findNum(inputValue.value)
    })
}
{
    let task = createTaskBlock("№2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.")
    let result = document.createElement('p')
    result.classList.add('result')
    let preText = document.createElement('pre')
    preText.classList.add('pre-text')
    preText.textContent = `let objDate = {
    year: '2025',
    month: '12',
    day: '31',
}`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести массив ключей и массив значений'
    task.append(preText)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.*/
    let obj = {
        year: '2025',
        month: '12',
        day: '31',
    }

    buttonFunc.addEventListener('click', () => {
        function createMass(obj){
            let massKeys = [Object.keys(obj)];
            let massValues = [Object.values(obj)];
            result.textContent = 'Массив ключей: [' + massKeys + ']'
            result.textContent += ' Массив значений: [' + massValues + ']'
        }
        createMass(obj)
    })
}

{
    let task = createTaskBlock("№3 Дано число. Выведите количество четных цифр в этом числе.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 258
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Количество четных цифр'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дано число. Выведите количество четных цифр в этом числе.*/

    function countEven(num){
        let num2 = String(num);
        let count = 0;
        for(let i = 0; i <= num2.length; i++){
            if(Number(num2[i]) % 2 == 0){
                count++;
            }
        }
        return count
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = countEven(inputValue.value)
    })
}
{
    let task = createTaskBlock("№4 Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'abcde'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Перевести в верхний регистр все нечетные буквы строки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'.*/

    function upperEven(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(i % 2 == 0){
                str2 += str[i].toUpperCase();
            } else {
                str2 += str[i];
            }
        }
       return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = upperEven(inputValue.value)
    })
}
{
    let task = createTaskBlock("№5 Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'aaa bbb ccc'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Сделать заглавным первый символ каждого слова'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№5 Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'.*/

    function upperEven(str){
        let str2 = '';
        let mass = str.split(' ');
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i][0].toUpperCase() + mass[i].slice(1) + ' ';
        }
       return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = upperEven(inputValue.value)
    })
}



let massFunc = 
    [`function findNum(str){
        let numberCount = [];
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i])) && str[i] != " " ){
                numberCount.push(i);
            }  
        }
        return numberCount[0]
    }`,
        `function createMass(obj){
        let massKeys = [Object.keys(obj)];
        let massValues = [Object.values(obj)];
        return massKeys, massValues
    }`,
        `function countEven(num){
        let num2 = String(num);
        let count = 0;
        for(let i = 0; i <= num2.length; i++){
            if(Number(num2[i]) % 2 == 0){
                count++;
            }
        }
        return count
    }
`,
        `function upperEven(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(i % 2 == 0){
                str2 += str[i].toUpperCase();
            } else {
                str2 += str[i];
            }
        }
       return str2
    }`,
        `function upperEven(str){
        let str2 = '';
        let mass = str.split(' ');
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i][0].toUpperCase() + mass[i].slice(1) + ' ';
        }
       return str2
    }`]