
/* №1 Найдите сумму всех целых чисел от 1 до 100.*/

function outputSum(numStart, numEnd) {
    let sum = 0
    for (let i = +numStart; i <= +numEnd; i++) {
        sum = sum + +i
    }
    return sum
}

createBlockNumTwo("№1 Найдите сумму всех целых чисел от 1 до 100.", 1, 100, 'Найдите сумму всех целых чисел', outputSum)

/* №2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.*/

function outputSum(numStart, numEnd) {
    let sum = 0
    for (let i = +numStart; i <= +numEnd; i++) {
        if (i % 2 == 0) {
            sum = sum + +i
        }
    }
    return sum
}

createBlockNumTwo("№2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.", 1, 100, 'Найдите сумму всех четных чисел', outputSum)

/* №3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.*/

function outputSum(numStart, numEnd) {
    let sum = 0
    for (let i = +numStart; i <= +numEnd; i++) {
        if (i % 2) {
            sum = sum + +i
        }
    }
    return sum
}

createBlockNumTwo("№3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.", 1, 100, 'Найдите сумму всех нечетных чисел', outputSum)

/* №4 Даны два целых числа. Найдите остаток от деления первого числа на второе.*/

function remainderDivision(num, num2) {
    return +num % +num2
}

createBlockNumTwo("№4 Даны два целых числа. Найдите остаток от деления первого числа на второе.", 45, 15, 'Найти остаток от деления', remainderDivision)

/* №5 Дана некоторая строка. Переберите и выведите по очереди все символы с конца строки.*/

function outputLetterReverseFunc(str) {
    let mass = []
    for (let i = str.length - 1; i >= 0; i--) {
        mass.push(str[i])
    }
    return mass.join(', ')
}

createBlockStr("№5 Дана некоторая строка. Переберите и выведите по очереди все символы с конца строки.", 'Дана любая строка', 'Вывести все элементы строки с конца', outputLetterReverseFunc)


let massFunc = [`function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            sum = sum + +i
        }
        return sum
    }`, `function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2 == 0){
                sum = sum + +i
            }
        }
        return sum
    }`, `function outputSum(numStart, numEnd){
        let sum = 0
        for(let i = +numStart; i <= +numEnd; i++){
            if(i % 2){
                sum = sum + +i
            }
        }
        return sum
    }`, `+num % +num2`, `function outputLetterReverseFunc(str) {
        let mass = []
        for(let i = str.length - 1; i >= 0 ; i--){
            mass.push(str[i])
        }
        return mass.join(', ')
    } `]
