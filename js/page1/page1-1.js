
/* №1 Дано число. Проверьте, отрицательное оно или нет.*/

function posNegNam(num) {
    if (num > 0) {
        return "Положительное"
    } else if (num < 0) {
        return "Отрицательное"
    } else {
        return "0"
    }
}

createBlockNum('№1 Дано число. Проверьте, отрицательное оно или нет.', '-5', 'Число отрицательное?', posNegNam)


/* №2 Дана строка. Выведите длину этой строки. */

function strLength(str) {
    return str.length
}

createBlockStr("№2 Дана строка. Выведите длину этой строки.", 'Строка любой длины', 'Длина строки', strLength)

/* №3 Дана строка. Выведите последний символ строки.*/

function strLastSymbol(str) {
    return str[str.length - 1]
}

createBlockStr("№3 Дана строка. Выведите последний символ строки.", 'Строка любой длины', 'Последний символ строки', strLastSymbol)

/* №4 Дано число. Проверьте, четное оно или нет. */

function checkNum(num) {
    if (num % 2) {
        return "Нечетное";
    } else {
        return "Четное";
    }
}
createBlockNum("№4 Дано число. Проверьте, четное оно или нет.", 15, 'Число четное?', checkNum)

/* №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.*/

function checkSame(str, str2) {
    if (str[0] == str2[0]) {
        return "Совпадают";
    } else {
        return "Не совпадают";
    }
}

createBlockStrTwo("№5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.", 'мышь', 'кошь', 'Первая буква слов совпадает?', checkSame)

let massFunc = [`function posNegNam(num){
        if (num > 0){
            return "Положительное"
        } else if (num < 0) {
            return "Отрицательное"
        } else {
            return "0"
        }
    }`, `str.length`, `str[str.length - 1]`, `function checkNum(num) {
        if(num % 2){
            return "Нечетное";
        } else {
            return "Четное";
        }
    } `, `function checkSame(str, str2) {
        if(str[0] == str2[0]) {
            return "Совпадают";
        } else {
            return "Не совпадают";
        }
    }`]

