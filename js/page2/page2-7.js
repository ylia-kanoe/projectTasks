
/*№1 Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'.*/

function toUpperStr(str) {
    let mass = str.split(' ');
    let str2 = '';
    for (let i = 0; i < mass.length; i++) {
        if (mass[i].length <= 3) {
            mass[i] = mass[i].toUpperCase();
        }
        str2 += mass[i] + ' ';
    }
    return str2
}

createBlockStr("№1 Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'.", 'a bc def ghij', 'Перевести в верхний регистр подстроки', toUpperStr)

/*№2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.*/

function knowUpperSymbol(str) {
    let rez = ''
    if (str == str.toUpperCase()) {
        rez = "Верхний"
    } else {
        rez = "Нижний"
    }
    return rez
}

createBlockSymbol("№2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.", 'F', 'В каком регистре символ?', knowUpperSymbol)

/* №3 Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28.*/

function deleteNoEvenNum(num) {
    let numberStr = String(num)
    let numberResult = '';

    for (let i = 0; i < numberStr.length; i++) {
        if (numberStr[i] % 2 == 0) {
            numberResult += numberStr[i];
        }
    }
    return numberResult
}

createBlockNum("№3 Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28.", 123789, 'Удалить все нечетные цифры', deleteNoEvenNum)


let massFunc =
    [`function toUpperStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                mass[i] = mass[i].toUpperCase();
            }
            str2 += mass[i] + ' ';
        }
        return str2
    }`,
        `function knowUpperSymbol(str){
        let rez = ''
        if(str == str.toUpperCase()){
            rez = "Верхний"
        } else {
              rez = "Нижний"
        }
        return rez
    }`,
        `function deleteNoEvenNum(num){
        let numberStr = String(num)
        let numberResult = '';

        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] % 2 == 0){ 
                numberResult += numberStr[i];  
            }
        }
        return numberResult
    }`]