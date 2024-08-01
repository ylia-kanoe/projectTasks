{
    let task = createTaskBlock("№1 Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'a bc def ghij'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Перевести в верхний регистр подстроки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'.*/

    function toUpperStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                mass[i] = mass[i].toUpperCase();
            }
            str2 += mass[i] + ' ';
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = toUpperStr(inputValue.value)
    })
}
{
    let task = createTaskBlock("№2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'F'
    inputValue.placeholder = "Введите символ"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'В каком регистре символ?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.*/

    function knowUpperSymbol(str){
        let rez = ''
        if(str == str.toUpperCase()){
            rez = "Верхний"
        } else {
              rez = "Нижний"
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = knowUpperSymbol(inputValue.value)
    })
}


{
    let task = createTaskBlock("№3 Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 123789
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить все нечетные цифры'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28.*/

    function deleteNoEvenNum(num){
        let numberStr = String(num)
        let numberResult = '';

        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] % 2 == 0){ 
                numberResult += numberStr[i];  
            }
        }
        return numberResult
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = deleteNoEvenNum(inputValue.value)
    })
}


let massFunc = 
    [`function toUpperStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                mass[i] = mass[i].toUpperCase();
            }
            str2 += mass[i] + ' ';
        }
        return str2
    }`,
        `function knowUpperSymbol(str){
        let rez = ''
        if(str == str.toUpperCase()){
            rez = "Верхний"
        } else {
              rez = "Нижний"
        }
        return rez
    }`,
        `function deleteNoEvenNum(num){
        let numberStr = String(num)
        let numberResult = '';

        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] % 2 == 0){ 
                numberResult += numberStr[i];  
            }
        }
        return numberResult
    }`]