
/*№1 Дана строка. Если в этой строке более одного символа, выведите предпоследний символ этой строки.*/

function lastLetterThree(str) {
    if (str.length > 1) {
        return 'Предпоследний символ: ' + str[str.length - 2];
    } else {
        return "Строка в 1 символ";
    }
}

createBlockStr("№1 Дана строка. Если в этой строке более одного символа, выведите предпоследний символ этой строки.", 'Любая строка с любыми символами', 'Предпоследний символ', lastLetterThree)

/* №2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.*/

function delOst(num, num2) {
    if (+num % +num2) {
        return "Делится с остатком"
    } else {
        return "Делится без остатка"
    }
}

createBlockNumTwo("№2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.", 45, 15, 'Первое делится на второе?', delOst)

let massFunc = [`function lastLetterThree(str) {
        if(str.length > 1){
            return 'Предпоследний символ: ' + str[str.length - 2];
        } else {
           return "Строка в 1 символ";
        }
    }`, `function delOst(num, num2){
        if(+num % +num2){
            return "Делится с остатком"
        } else {
             return "Делится без остатка"
        }
    }`]
