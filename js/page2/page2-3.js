
{
    let task = createTaskBlock("№1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 'кошка'
    inputValueTwo.value = 'аквариум'
    inputValueOne.placeholder = "Введите слово"
    inputValueTwo.placeholder = "Введите слово"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Первые буквы слов совпадают?'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.*/

    function checkLet(str, str2) {
        if(str.at(-1) === str2.at(0) || str.at(-1).toUpperCase() === str2.at(0).toUpperCase()){
            return "Совпадает"
        } else {
            return "Не совпадает"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkLet(inputValueOne.value, inputValueTwo.value)
    })
}
{
    let task = createTaskBlock("№2 Дана некоторая строка. Найдите позицию третьего нуля в строке.")
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

    /* №2 Дана некоторая строка. Найдите позицию третьего нуля в строке.*/

    function findZero(str){
        let count = 0;
        let pos = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '0'){
                count ++;
                pos = i;
                if(count === 3){
                    break;
                }
            }
        }
       return pos
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = findZero(inputValue.value)
    })
}
{
    let task = createTaskBlock("№3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '12,34,56'
    inputValue.placeholder = "Введите строку с числами"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму чисел строки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.*/

    function findSum(str){
        let mass = str.split(',');
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            sum = sum + Number(mass[i]);
        }
        return sum
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = findSum(inputValue.value)
    })
}
{
    let task = createTaskBlock("№4 Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {year: '2025',month: '12',day: '31',}.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '2025-12-31'
    inputValue.placeholder = "введите дату в формате 'гггг-мм-дд'"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Преобразуйте дату в формат объекта'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {year: '2025',month: '12',day: '31',}.*/

    function dateToObject(str){
        let objDate = {};
        let massDate = str.split("-");
        
        objDate.year = massDate[0];
        objDate.month = massDate[1];
        objDate.day = massDate[2];
            
        return JSON.stringify(objDate)
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = dateToObject(inputValue.value)
    })
}


let massFunc = [`function checkLet(str, str2) {
        if(str.at(-1) === str2.at(0) || str.at(-1).toUpperCase() === str2.at(0).toUpperCase()){
            return "Совпадает"
        } else {
            return "Не совпадает"
        }
    }`,
    `function findZero(str){
        let count = 0;
        let pos = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '0'){
                count ++;
                pos = i;
                if(count === 3){
                    break;
                }
            }
        }
       return pos
    }`,
    `function findSum(str){
        let mass = str.split(',');
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            sum = sum + Number(mass[i]);
        }
        return sum
    }`,
    `function dateToObject(str){
        let objDate = {};
        let massDate = str.split("-");
        
        objDate.year = massDate[0];
        objDate.month = massDate[1];
        objDate.day = massDate[2];
            
        return JSON.stringify(objDate)
    }`]