
/*№1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.*/

function findPos(str) {
    let mass = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i])) && str[i] != ' ') {
            mass.push(i)
        }
    }
    return mass
}

createBlockStr("№1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.", '023m0df0dfg0', 'Массив позиций всех цифр', findPos)

/*№2 Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987].*/

function reverseElem(mass) {
    for (let i = 0; i < mass.length; i++) {
        let count = '';
        for (let j = String(mass[i]).length - 1; j >= 0; j--) {
            count += String(mass[i])[j]
            if (j == 0) {
                mass[i] = count
            }
        }
    }
    return mass
}

createBlockMass("№2 Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987].", '123, 456, 789', 'Перевернуть элементы массива', reverseElem)

/* №3 Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'.*/

function separateNum(num) {
    let str = String(num)
    let str2 = '';
    let str3 = '';
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        count++;
        if (count == 3) {
            str2 = str2 + str[i] + ' ';
            count = 0;
        } else {
            str2 = str2 + str[i];
        }
    }
    for (let i = str2.length - 1; i >= 0; i--) {
        str3 += str2[i];
    }
    return str3
}

createBlockNum("№3 Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'.", 1234567, 'Отделить тройки цифр', separateNum)

/*№4 Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'.*/

function reverseUpper(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str2 += str[i].toLowerCase();
        } else {
            str2 += str[i].toUpperCase();
        }
    }
    return str2
}

createBlockStr("№4 Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'.", 'AbCdE', 'Сменить регистр на противоположный', reverseUpper)

/*№5 Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56].*/

function redMassive(mass) {
    let mass2 = [];
    let count = 0;
    for (let i = 0; i < mass.length; i++) {
        count++;
        if (count == 2) {
            mass2.push(+(String(mass[i - 1]) + String(mass[i])));
            count = 0;
        }
    }
    return mass2
}

createBlockMass("№5 Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56].", '1, 2, 3, 4, 5, 6', 'Слить пары элементов', redMassive)

/*№6 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'.*/

function toUpperStrSecond(str) {
    let mass = str.split(' ');
    let str2 = '';
    for (let i = 0; i < mass.length; i++) {
        if (i % 2 == 1) {
            mass[i] = mass[i][0].toUpperCase() + mass[i].slice(1);
        }
        str2 += mass[i] + ' ';
    }
    return str2
}

createBlockStr("№6 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'.", 'aaa bbb ccc eee fff', 'Сделать заглавным первый символ каждого второго слова', toUpperStrSecond)


let massFunc =
    [`function findPos(str){
        let mass = [];
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i])) && str[i] != ' '){
                mass.push(i)
            }
        }
        return mass
    }`,
        `function reverseElem(mass){
        for(let i = 0; i < mass.length; i++){
            let count = '';
            for(let j = String(mass[i]).length - 1; j >= 0; j--){
                count += String(mass[i])[j]
                if(j == 0){
                    mass[i] = count
                }
            }
        }
        return mass
    }`,
        `function separateNum(num){
        let str = String(num)
        let str2 = '';
        let str3 = '';
        let count = 0;
        for (let i = str.length -1; i >= 0; i--){
            count ++;
            if(count == 3){
                str2 =  str2 + str[i] + ' ';
                count = 0;
            } else {
                str2 =  str2 + str[i];
            }
        }
        for(let i = str2.length -1; i >= 0; i--){
            str3 +=  str2[i];
        }  
        return str3
    }`,
        `function reverseUpper(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === str[i].toUpperCase()){
                str2 += str[i].toLowerCase();
            } else {
                str2 += str[i].toUpperCase();
            }
        }
        return str2
    }`,
        `function redMassive(mass){
        let mass2 = [];
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            count ++;
            if(count == 2){
                mass2.push(+(String(mass[i-1]) + String(mass[i]))); 
                count = 0;
            }
        }
        return mass2
    }`,
        `function toUpperStrSecond(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 1){
                mass[i] = mass[i][0].toUpperCase() + mass[i].slice(1);
            } 
            str2 += mass[i] + ' ';
        }
        return str2
    }`]