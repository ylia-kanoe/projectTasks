
{
    let task = createTaskBlock("№1 Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '10, 22, 302, 4000, 5, 6425, 25, 5, 1000, 300, 20, 10, 200, 2000'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить числа, состоящие более чем из трех цифр'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.*/

    function deleteBigNumber(mass){
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).length > 3){
                mass.splice(i,1);
                i--;
            }
        }
        return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = deleteBigNumber(mass)
    })
}

{
    let task = createTaskBlock("№2 Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Все цифры этого числа больше нуля?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.*/

    function checkNumberZero(num){
        let str = String(num);
        let count = 0;
        let rez = ''
        for(let i = 0; i < str.length; i++){
            if(str[i] > 0){
                count++;
            }
        }
        if(count === str.length){
            rez = "Все числа больше 0"
        } else {
            rez = "Не все числа больше 0"
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkNumberZero(inputValue.value)
    })
}


{
    let task = createTaskBlock("№3 Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9].")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '123, 456, 789'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Разбить элементы посимвольно'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9].*/

    function divideElem(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            let massItem = String(mass[i]);
            for(let j = 0; j < massItem.length; j++){
                mass2.push(+massItem[j]);
            }
        }
        return mass2
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = divideElem(mass)
    })
}


{
    let task = createTaskBlock("№4 Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]; Найдите сумму элементов этой структуры.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = `let data = [
            {
                1: 11,
                2: 12,
                3: 13,
            },
            {
                1: 21,
                2: 22,
                3: 23,
            },
            {
                1: 24,
                2: 25,
                3: 26,
            },
        ];`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму элементов'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]; Найдите сумму элементов этой структуры.*/
    
    function sumData(data){
        let sum = 0;
        for(let i = 0; i < data.length; i++){
            for(let item of Object.values(data[i])){
                sum += item;
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let data = [
            {
                1: 11,
                2: 12,
                3: 13,
            },
            {
                1: 21,
                2: 22,
                3: 23,
            },
            {
                1: 24,
                2: 25,
                3: 26,
            },
        ];
        result.textContent = sumData(data)
    })
}


let massFunc = 
    [`function deleteBigNumber(mass){
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).length > 3){
                mass.splice(i,1);
                i--;
            }
        }
        return mass
    }`,`function checkNumberZero(num){
        let str = String(num);
        let count = 0;
        let rez = ''
        for(let i = 0; i < str.length; i++){
            if(str[i] > 0){
                count++;
            }
        }
        if(count === str.length){
            rez = "Все числа больше 0"
        } else {
            rez = "Не все числа больше 0"
        }
        return rez
    }`,`function divideElem(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            let massItem = String(mass[i]);
            for(let j = 0; j < massItem.length; j++){
                mass2.push(+massItem[j]);
            }
        }
        return mass2
    }`,`function sumData(obj){
        let sum = 0;
        for(let i = 0; i < data.length; i++){
            for(let item of Object.values(data[i])){
                sum += item;
            }
        }
        return sum
    }`]