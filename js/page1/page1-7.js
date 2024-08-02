
/* №1 Дана строка: 'abcde' Получите массив букв этой строки.*/

function strMass(str) {
    let mass = []
    for (let i = 0; i <= str.length; i++) {
        if (str[i] != ' ' && str[i] != ',' && str[i] != '.') {
            mass.push(str[i]);
        }
    }
    return mass.join(', ')
}

createBlockStr("№1 Дана строка: 'abcde' Получите массив букв этой строки.", 'abcde', 'Получить массив букв', strMass)

/* №2 Дано некоторое число: 12345 Получите массив цифр этого числа.*/

function numMass(num) {
    let str = String(num);
    let mass = [];
    for (let i = 0; i < str.length; i++) {
        mass.push(+str[i]);
    }
    return mass
}

createBlockNum("№2 Дано некоторое число: 12345 Получите массив цифр этого числа.", 12345, 'Получить массив цифр', numMass)

/* №3 Дано некоторое число: 12345 Переверните его: 54321. */

function numReverce(num) {
    let str = String(num);
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += +str[i];
    }
    return str2
}

createBlockNum("№3 Дано некоторое число: 12345 Переверните его: 54321.", 12345, 'Переверните число', numReverce)

/* №4 Дано некоторое число: 12345 Найдите сумму цифр этого числа.*/

function sumNum(num) {
    let str = String(num);
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum
}

createBlockNum("№4 Дано некоторое число: 12345 Найдите сумму цифр этого числа.", 12345, 'Найти сумму цифр числа', sumNum)



let massFunc = [`function strMass(str) {
        let mass = []
        for (let i = 0; i <= str.length; i++) {
            if (str[i] != ' ' && str[i] != ',' && str[i] != '.') {
                mass.push(str[i]);
            }
        }
        return mass.join(', ')
    }`, `function numMass(num) {
        let str = String(num);
        let mass = [];
        for(let i = 0; i < str.length; i++){
            mass.push(+str[i]);
        }
        return mass
    }`, `function numReverce(num) {
        let str = String(num);
        let str2 = "";
        for( let i = str.length-1; i >= 0; i--){
            str2 += +str[i];
        }
        return str2
    }`, `function sumNum(num) {
        let str = String(num);
        let sum = 0
        for(let i = 0; i < str.length; i++){
            sum += Number(str[i]);
        }
        return sum
    }`]











