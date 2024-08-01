{
    let task = createTaskBlock("№1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'удалить, ост, удалить, удалить, ост'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить слова, состоящие более чем из трех символов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.*/

    function delElemStr(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length > 3){
                mass.splice(i, 1);
                i--;
            }
        }
       return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = delElemStr(mass)
    })
}

{
    let task = createTaskBlock("№2 Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 1357
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Все цифры этого числа являются нечетными?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными.*/

    function numIncr(num){
        let str = String(num);
        let count = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] % 2){
                count++;
            }
        }
        if(count === str.length){
            return "Все цифры этого числа являются нечетными"
        } else {
            return "Не все цифры этого числа являются нечетными"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = numIncr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'abcba'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Это слово читается одинаково с любой стороны?"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны.*/

    function reverseStr(str){
        let str2 = '';
        let rez = ''
        for(let i = str.length-1; i >= 0; i--){
            str2 += str[i];
        }
        if(str === str2){
            rez = "слово читается одинаково с любой стороны"
        } else {
            rez = "слово НЕ читается одинаково с любой стороны"
        }
        /*Метод реверса
        let mass = str.split('');
        mass.reverse();
        let str2 = mass.join('');*/
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = reverseStr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№4 Дан массив:[[[11, 12, 13],[14, 15, 16],[17, 17, 19],],[[21, 22, 23],[24, 25, 26],[27, 27, 29],],[[31, 32, 33],[34, 35, 36],[37, 37, 39],],] Найдите сумму элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = `[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму элементов'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан массив:[[[11, 12, 13],[14, 15, 16],[17, 17, 19],],[[21, 22, 23],[24, 25, 26],[27, 27, 29],],[[31, 32, 33],[34, 35, 36],[37, 37, 39],],] Найдите сумму элементов этого массива.*/
    
    function sumMassTwo(mass){
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                for(let k = 0; k < mass[i][j].length; k++){
                    sum +=mass[i][j][k];
                }
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = [
            [
                [11, 12, 13],
                [14, 15, 16],
                [17, 17, 19],
            ],
            [
                [21, 22, 23],
                [24, 25, 26],
                [27, 27, 29],
            ],
            [
                [31, 32, 33],
                [34, 35, 36],
                [37, 37, 39],
            ],
        ]
        result.textContent = sumMassTwo(mass)
    })
}


let massFunc = 
    [`function delElemStr(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length > 3){
                mass.splice(i, 1);
                i--;
            }
        }
       return mass
    }`,
        `function numIncr(num){
        let str = String(num);
        let count = 0;

        for(let i = 0; i < str.length; i++){
            if(str[i] % 2){
                count++;
            }
        }
        if(count === str.length){
            return "Все цифры этого числа являются нечетными"
        } else {
            return "Не все цифры этого числа являются нечетными"
        }
    }`,
        `function reverseStr(str){
        let str2 = '';
        let rez = ''
        for(let i = str.length-1; i >= 0; i--){
            str2 += str[i];
        }
        if(str === str2){
            rez = "слово читается одинаково с любой стороны"
        } else {
            rez = "слово НЕ читается одинаково с любой стороны"
        }
        /*Метод реверса
        let mass = str.split('');
        mass.reverse();
        let str2 = mass.join('');*/
        return rez
    }`,
`function sumMassTwo(mass){
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                for(let k = 0; k < mass[i][j].length; k++){
                    sum +=mass[i][j][k];
                }
            }
        }
        return sum
    }`]