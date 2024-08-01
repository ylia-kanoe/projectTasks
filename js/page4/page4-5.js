/*
№1 Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
function checkNumTwo(str){
    if(!isNaN(Number(str))){
        return "Число"
    } else {
        return "НЕ Число"
    }
}
№2 Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
function checkNumFraction(str){
    if(str.includes('.') && !isNaN(Number(str.textContent))){
         return "Дробь"
    } else {
        return "НЕ Дробь"
    }
}
№3 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
function twoMaxValue(mass){
        let max = +mass[0];
        let mass2 = []
        for(let i = 0; i < mass.length; i++){
            if(+mass[i] > max){
                max = +mass[i];
                mass2.push(max)
            }
        }
        return mass2[mass2.length - 2]
    }
№4 Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
function massFull(num, num2) {
        let mass = []
        for(let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++){
           mass.push(i)
        }
        return mass
    }
№5 Сделайте функцию, которая заполнит массив случайными латинскими буквами.
function massFillLatinLetter(num){
    let mass = []
    let char = ''
    for(let i = 0; i < num; i++){
        char =  Math.floor(Math.random() * (90 - 65) + 65);
        mass.push(String.fromCharCode(char))
    }
    return mass.join(', ')
}
№6 Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
function fibonachiSum(num){
    let sum = 1;
    let mass = [0,1]
    for(let i = 2; i < num; i++){
        mass.push(mass[i-1] + mass[i-2]);
        sum += mass[i-1] + mass[i-2];
    }
    return sum
}
*/