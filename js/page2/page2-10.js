
/*№1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.*/

function checkStr(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(Number(str[i])) && str[i] != " ") {
            count++;
        }
    }
    if (count > 3) {
        return "В строке БОЛЬШЕ 3 букв"
    } else {
        return "В строке 3 или МЕНЕЕ буквы"
    }
}

createBlockStr("№1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.", 'Ok5', 'Проверить, что в этой строке не более трех букв', checkStr)

/* №2 Дано число. Получите первую четную цифру с конца этого числа.*/

function firstEvenNum(num) {
    let numberStr = String(num);
    let count = 0;
    let rez = ''
    for (let i = numberStr.length - 1; i >= 0; i--) {
        if (numberStr[i] % 2 == 0) {
            count++;
        }
        if (count === 1) {
            rez = numberStr[i]
            break;
        }
    }
    return rez
}

createBlockNum("№2 Дано число. Получите первую четную цифру с конца этого числа.", 12345653, 'Получить первую четную цифру с конца', firstEvenNum)

/*№3 Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'.*/

function replaceSymbol(str) {
    let mass = str.split(' ');
    let str2 = '';
    for (let i = 0; i < mass.length; i++) {
        str2 += '!' + mass[i].slice(1) + ' ';
    }
    return str2
}

createBlockStr("№3 Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'.", 'abcde abcde abcde', "Заменить первый символ каждого слова на '!'", replaceSymbol)

/*№4 Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.*/

function checkRepeat(mass) {
    let count = 0;
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] == mass[i + 1]) {
            count++;
        }
    }
    if (count > 0) {
        return "есть 2 значения подряд"
    } else {
        return "нет 2 значений подряд"
    }
}

createBlockMass("№4 Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.", '1, 2, 3, 3, 4, 5', 'Проверить, что в массиве есть два одинаковых элемента подряд', checkRepeat)


let massFunc =
    [`function checkStr(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(isNaN(Number(str[i])) && str[i] != " "){
                count ++;
            }
        }
        if(count > 3){
            return "В строке БОЛЬШЕ 3 букв"
        } else {
            return "В строке 3 или МЕНЕЕ буквы"
        }
    }`,
        `function firstEvenNum(num){
        let numberStr = String(num);
        let count = 0;
        let rez = ''
        for(let i = numberStr.length - 1; i >= 0; i--){
            if(numberStr[i] % 2 == 0){
                count ++;
            }
            if(count === 1){
                rez = numberStr[i]
                break;
            }  
        }
        return rez
    }`,
        `function replaceSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += '!' + mass[i].slice(1) + ' ';
        }
        return str2
    }`,
        `function checkRepeat(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == mass[i+1]){
                count ++;
            } 
        }
        if(count > 0){
            return "есть 2 значения подряд"
        } else {
            return "нет 2 значений подряд"
        }
    }`]