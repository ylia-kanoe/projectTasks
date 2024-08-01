{
    let task = createTaskBlock("№1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Любая строка любой длины'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Отсортировать слова в алфавитном порядке"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.*/

    function sortString(str){
        let mass = str.split(/[ .]+/);
        for(let i = 0; i < mass.length; i++){
            if(mass[i][0] == mass[i][0].toUpperCase()){
                mass[i] = mass[i].toLowerCase()
            }
        }
        mass.sort();
        return mass.join(' ')
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = sortString(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дано число. Получите массив делителей этого числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 6050
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Получить массив делителей числа'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано число. Получите массив делителей этого числа.*/

    function massDelNumber(num){
        let mass = [];
        for(let i = num; i > 0; i--){
            if(num % i == 0){
                mass.push(i);
            }
        }
        return mass
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = massDelNumber(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Даны два числа. Получите массив общих делителей этих чисел.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 315
    inputValueTwo.value = 98
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Массив общих делителей'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Даны два числа. Получите массив общих делителей этих чисел.*/

    function massOverallDelNum(num, num2){
        let mass = [];
        for(let i = (+num > +num2) ? +num : +num2; i > 0; i--){
            if(+num % i == 0 && +num2 % i == 0){
                mass.push(i);
            }
        }
       return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = massOverallDelNum(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 618
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'У числа только один делитель?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.*/

    function checkDelNumber(num){
        let mass = [];
        let rez = ''
        for(let i = +num; i > 0; i--){
            if(+num % i == 0 && i != +num && i != 1){
                mass.push(i);
            }
        }
        if(mass.length > 1){
            rez = "у этого числа МНОГО делителей " + mass
        } else if(mass.length === 0) {
            rez = "у этого числа НЕТ делителей, кроме него самого и единицы"
        } else {
            rez = "у этого числа только ОДИН делитель " + mass
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkDelNumber(inputValue.value)
    })
}

{
    let task = createTaskBlock("№5 Через запятую написаны числа. Получите максимальное из этих чисел.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6, 7, 8, 40, 9, 10, 11, 12, 13, 14, 15, 16'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Максимальное число'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№5 Через запятую написаны числа. Получите максимальное из этих чисел.*/

    function findMax(mass){
        let max = 0;
        for(let i = 0; i < mass.length; i++){
            if(+mass[i] > max){
                max = mass[i];
            }
        }
        return max
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = findMax(mass)
    })
}

{
    let task = createTaskBlock("№6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'После каждого однозначного числа вставьте такое же'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.*/

    function addElements(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            mass2.push(mass[i]);
            if(String(mass[i]).length == 1){
                mass2.push(mass[i]);
            }
        }
        return mass2
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = addElements(mass)
    })
}
{
    let task = createTaskBlock("№7 Дана строка. Удалите из нее все гласные буквы.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Любая строка с любыми словами'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Удалить все гласные буквы"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№7 Дана строка. Удалите из нее все гласные буквы.*/

    function delVocalicString(str){
        let mass2 = str.split('')
        let mass = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
        for(let i = 0; i < mass2.length; i++){
            for(let j = 0; j < mass.length; j++){
                if(mass2[i] === mass[j]){
                    mass2.splice(i,1);
                    i--;
                }
            }
        }
        console.log(mass2)
        return mass2.join('')
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = delVocalicString(inputValue.value)
    })
}
{
    let task = createTaskBlock("№8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Любая строка с любыми словами'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Сделать заглавной последнюю букву каждого слова"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.*/

    function toUpperLastSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i].slice(0,[mass[i].length-1]) + mass[i][mass[i].length-1].toUpperCase() + ' ';
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = toUpperLastSymbol(inputValue.value)
    })
}

{
    let task = createTaskBlock("№9 Дан следующая структура: let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] Найдите сумму элементов этой структуры.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = `[
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
]`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Сумма элементов структуры'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /* №9 Дан следующая структура: let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] Найдите сумму элементов этой структуры.*/
    
    function sumDataTwo(obj){
        let sum = 0;
        for(let i = 0; i < obj.length; i++){
            for(let key of Object.values(obj[i])){
                for(let j = 0; j < key.length; j++){
                    sum += key[j];
                }
            }
        }
         return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let data = [
            {
                1: [1, 2, 3],
                2: [1, 2, 3],
                3: [1, 2, 3],
            },
            {
                1: [1, 2, 3],
                2: [1, 2, 3],
                3: [1, 2, 3],
            },
            {
                1: [1, 2, 3],
                2: [1, 2, 3],
                3: [1, 2, 3],
            },
        ]
        result.textContent = sumDataTwo(data)
    })
}



let massFunc = 
    [`function sortString(str){
        let mass = str.split(/[ .]+/);
        for(let i = 0; i < mass.length; i++){
            if(mass[i][0] == mass[i][0].toUpperCase()){
                mass[i] = mass[i].toLowerCase()
            }
        }
        mass.sort();
        return mass.join(' ')
    }`,`function massDelNumber(num){
        let mass = [];
        for(let i = num; i > 0; i--){
            if(num % i == 0){
                mass.push(i);
            }
        }
        return mass
    }`,`function massOverallDelNum(num, num2){
        let mass = [];
        for(let i = (+num > +num2) ? +num : +num2; i > 0; i--){
            if(+num % i == 0 && +num2 % i == 0){
                mass.push(i);
            }
        }
       return mass
    }`,`function checkDelNumber(num){
        let mass = [];
        let rez = ''
        for(let i = +num; i > 0; i--){
            if(+num % i == 0 && i != +num && i != 1){
                mass.push(i);
            }
        }
        if(mass.length > 1){
            rez = "у этого числа МНОГО делителей " + mass
        } else if(mass.length === 0) {
            rez = "у этого числа НЕТ делителей, кроме него самого и единицы"
        } else {
            rez = "у этого числа только ОДИН делитель " + mass
        }
        return rez
    }`,`function findMax(str){
        let mass = str.split(', ');
        let max = 0;
        for(let i = 0; i < mass.length; i++){
            if(+mass[i] > max){
                max = mass[i];
            }
        }
        return max
    }`,`function addElements(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            mass2.push(mass[i]);
            if(String(mass[i]).length == 1){
                mass2.push(mass[i]);
            }
        }
        return mass2
    }`,`function delVocalicString(str){
        let mass2 = str.split('')
        let mass = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
        for(let i = 0; i < mass2.length; i++){
            for(let j = 0; j < mass.length; j++){
                if(mass2[i] === mass[j]){
                    mass2.splice(i,1);
                    i--;
                }
            }
        }
        return mass2.join(' ')
    }`,`function toUpperLastSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i].slice(0,[mass[i].length-1]) + mass[i][mass[i].length-1].toUpperCase() + ' ';
        }
        return str2
    }`,`function sumDataTwo(obj){
        let sum = 0;
        for(let i = 0; i < obj.length; i++){
            for(let key of Object.values(obj[i])){
                for(let j = 0; j < key.length; j++){
                    sum += key[j];
                }
            }
        }
         return sum
    }`]