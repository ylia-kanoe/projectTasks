
/* №1 Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр. */

function checkNumTwo(str) {
    if (!isNaN(Number(str))) {
        return "Число"
    } else {
        return "НЕ Число"
    }
}

createBlockStr('№1 Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр.', '12589632', 'Строка является числом?', checkNumTwo)

/* №2 Дана переменная со строкой. Проверьте, что эта строка представляет собой дробь. */

function checkNumFraction(str) {
    if (str.includes('.') && !isNaN(Number(str))) {
        return "Дробь"
    } else {
        return "НЕ Дробь"
    }
}

createBlockStr('№2 Дана переменная со строкой. Проверьте, что эта строка представляет собой дробь.', '12.802', 'Строка представляет собой дробь?', checkNumFraction)

/* №3 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число. */

function twoMaxValue(mass) {
    let max = +mass[0];
    let mass2 = []
    for (let i = 0; i < mass.length; i++) {
        if (+mass[i] > max) {
            max = +mass[i];
            mass2.push(max)
        }
    }
    return mass2[mass2.length - 2]
}

createBlockMass('№3 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.', '1,2,3,8,9,10,1,2,3,6,7,8,9,3,4,5', 'Второе по величине число', twoMaxValue)

/* №4 Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального. */

function massFull(num, num2) {
    let mass = []
    for (let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++) {
        mass.push(i)
    }
    return mass.join(', ')
}

createBlockNumTwo('№4 Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.', 50, 5, 'Массив чисел от минимального до максимального', massFull)

/* №5 Сделайте функцию, которая заполнит массив случайными латинскими буквами. */

function massFillLatinLetter() {
    let mass = []
    let char = ''
    for (let i = 0; i < 10; i++) {
        char = Math.floor(Math.random() * (90 - 65) + 65);
        mass.push(String.fromCharCode(char))
    }
    return mass.join(', ')
}

createBlockNoData('№5 Сделайте функцию, которая заполнит массив случайными латинскими буквами.', 'Заполнить массив случайными латинскими буквами', massFillLatinLetter)

/* №6 Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи. */

function fibonachiSum(num) {
    let sum = 1;
    let mass = [0, 1]
    for (let i = 2; i < num; i++) {
        mass.push(mass[i - 1] + mass[i - 2]);
        sum += mass[i - 1] + mass[i - 2];
    }
    return sum
}

createBlockNum('№6 Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.', 10, 'Вернуть сумму N первых чисел Фибоначчи', fibonachiSum)


let massFunc =
    [`function checkNumTwo(str){
    if(!isNaN(Number(str))){
        return "Число"
    } else {
        return "НЕ Число"
    }
}`, `function checkNumFraction(str){
    if(str.includes('.') && !isNaN(Number(str.textContent))){
         return "Дробь"
    } else {
        return "НЕ Дробь"
    }
}`, `function twoMaxValue(mass){
        let max = +mass[0];
        let mass2 = []
        for(let i = 0; i < mass.length; i++){
            if(+mass[i] > max){
                max = +mass[i];
                mass2.push(max)
            }
        }
        return mass2[mass2.length - 2]
    }`, `function massFull(num, num2) {
        let mass = []
        for(let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++){
           mass.push(i)
        }
        return mass
    }`, `function massFillLatinLetter(num){
    let mass = []
    let char = ''
    for(let i = 0; i < num; i++){
        char =  Math.floor(Math.random() * (90 - 65) + 65);
        mass.push(String.fromCharCode(char))
    }
    return mass.join(', ')
}`, `function fibonachiSum(num){
    let sum = 1;
    let mass = [0,1]
    for(let i = 2; i < num; i++){
        mass.push(mass[i-1] + mass[i-2]);
        sum += mass[i-1] + mass[i-2];
    }
    return sum
}`]