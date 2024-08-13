
/* №1 Дано число. Выведите первую цифру этого числа.*/
function numFirstNumber(num) {
    return String(num)[0]
}
createBlockNum("№1 Дано число. Выведите первую цифру этого числа.", 100, 'Вывести первую цифру', numFirstNumber)

/* №2 Дано число. Выведите последнюю цифру этого числа.*/

function numLastNumber(num) {
    return String(num)[String(num).length - 1]
}
createBlockNum("№2 Дано число. Выведите последнюю цифру этого числа.", 205, 'Вывести последнюю цифру', numLastNumber)

/* №3 Дано число. Выведите сумму первой и последней цифры этого числа.*/
function sumNumLastFirstSymbol(num) {
    return +String(num)[0] + +String(num)[String(num).length - 1]
}
createBlockNum("№3 Дано число. Выведите сумму первой и последней цифры этого числа.", 205, 'Вывести сумму первой и последней цифры', sumNumLastFirstSymbol)

/* №4 Дано число. Выведите количество цифр в этом числе.*/

function numLength(num) {
    return String(num).length
}
createBlockNum("№4 Дано число. Выведите количество цифр в этом числе.", 205, 'Вывести количество цифр', numLength)

/* №5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.*/

function checkSame(num, num2) {
    if (String(num)[0] == String(num2)[0]) {
        return "Совпадают";
    } else {
        return "Не совпадают";
    }
}

createBlockNumTwo("№5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.", 15, 42, 'Первые цифры чисел совпадают?', checkSame)


let massFunc = [`function numFirstNumber(num) {
    return String(num)[0]
}`, `function numLastNumber(num) {
    return String(num)[String(num).length - 1]
}`, `function sumNumLastFirstSymbol(num) {
    return +String(num)[0] + +String(num)[String(num).length - 1]
}`,
    `function numLength(num) {
    return String(num).length
}`,
    `function checkSame(num, num2) {
        if(String(num)[0] == String(num2)[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }`]

