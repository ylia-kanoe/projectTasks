
/* №1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.*/

function findNum(str) {
    let numberCount = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i])) && str[i] != " ") {
            numberCount.push(i);
        }
    }
    return numberCount[0]
}
createBlockStr("№1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.", 'Считаем от 0 до 100', 'Найти позицию третьего нуля', findNum)

/* №2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.*/


function createMass() {
    let obj = {'year': '2025','month': '12','day': '31',}
    let massKeys = [Object.keys(obj)];
    let massValues = [Object.values(obj)];
    let rez = 'Массив ключей: [' + massKeys + ']' + '\n' + ' Массив значений: [' + massValues + ']'

    return rez
}
createBlockNoData("№2 Дан объект с ключами и значениями {'year': '2025','month': '12','day': '31',}. Запишите в первый массив ключи объекта, а во второй - значения.", 'Вывести массив ключей и массив значений', createMass)

/* №3 Дано число. Выведите количество четных цифр в этом числе.*/

function countEven(num) {
    let num2 = String(num);
    let count = 0;
    for (let i = 0; i <= num2.length; i++) {
        if (Number(num2[i]) % 2 == 0) {
            count++;
        }
    }
    return count
}

createBlockNum("№3 Дано число. Выведите количество четных цифр в этом числе.", 258, 'Количество четных цифр', countEven)

/* №4 Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'.*/

function upperEvenLetter(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            str2 += str[i].toUpperCase();
        } else {
            str2 += str[i];
        }
    }
    return str2
}

createBlockStr("№4 Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'.", 'abcde', 'Перевести в верхний регистр все нечетные буквы строки', upperEvenLetter)

/*№5 Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'.*/

function upperEven(str) {
    let str2 = '';
    let mass = str.split(' ');
    for (let i = 0; i < mass.length; i++) {
        str2 += mass[i][0].toUpperCase() + mass[i].slice(1) + ' ';
    }
    return str2
}

createBlockStr("№5 Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'.", 'aaa bbb ccc', 'Сделать заглавным первый символ каждого слова', upperEven)


let massFunc =
    [`function findNum(str){
        let numberCount = [];
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i])) && str[i] != " " ){
                numberCount.push(i);
            }  
        }
        return numberCount[0]
    }`,
        `function createMass(obj){
        let massKeys = [Object.keys(obj)];
        let massValues = [Object.values(obj)];
        return massKeys, massValues
    }`,
        `function countEven(num){
        let num2 = String(num);
        let count = 0;
        for(let i = 0; i <= num2.length; i++){
            if(Number(num2[i]) % 2 == 0){
                count++;
            }
        }
        return count
    }
`,
        `function upperEven(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(i % 2 == 0){
                str2 += str[i].toUpperCase();
            } else {
                str2 += str[i];
            }
        }
       return str2
    }`,
        `function upperEven(str){
        let str2 = '';
        let mass = str.split(' ');
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i][0].toUpperCase() + mass[i].slice(1) + ' ';
        }
       return str2
    }`]