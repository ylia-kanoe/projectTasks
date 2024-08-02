
/*№1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.*/

function sortString(str) {
    let mass = str.split(/[ .]+/);
    for (let i = 0; i < mass.length; i++) {
        if (mass[i][0] == mass[i][0].toUpperCase()) {
            mass[i] = mass[i].toLowerCase()
        }
    }
    mass.sort();
    return mass.join(' ')
}

createBlockStr("№1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.", 'Любая строка любой длины', "Отсортировать слова в алфавитном порядке", sortString)

/* №2 Дано число. Получите массив делителей этого числа.*/

function massDelNumber(num) {
    let mass = [];
    for (let i = num; i > 0; i--) {
        if (num % i == 0) {
            mass.push(i);
        }
    }
    return mass
}

createBlockNum("№2 Дано число. Получите массив делителей этого числа.", 6050, 'Получить массив делителей числа', massDelNumber)

/* №3 Даны два числа. Получите массив общих делителей этих чисел.*/

function massOverallDelNum(num, num2) {
    let mass = [];
    for (let i = (+num > +num2) ? +num : +num2; i > 0; i--) {
        if (+num % i == 0 && +num2 % i == 0) {
            mass.push(i);
        }
    }
    return mass
}

createBlockNumTwo("№3 Даны два числа. Получите массив общих делителей этих чисел.", 315, 98, 'Массив общих делителей', massOverallDelNum)

/* №4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.*/

function checkDelNumber(num) {
    let mass = [];
    let rez = ''
    for (let i = +num; i > 0; i--) {
        if (+num % i == 0 && i != +num && i != 1) {
            mass.push(i);
        }
    }
    if (mass.length > 1) {
        rez = "у этого числа МНОГО делителей " + mass
    } else if (mass.length === 0) {
        rez = "у этого числа НЕТ делителей, кроме него самого и единицы"
    } else {
        rez = "у этого числа только ОДИН делитель " + mass
    }
    return rez
}

createBlockNum("№4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.", 618, 'У числа только один делитель?', checkDelNumber)

/*№5 Через запятую написаны числа. Получите максимальное из этих чисел.*/

function findMax(mass) {
    let max = 0;
    for (let i = 0; i < mass.length; i++) {
        if (+mass[i] > max) {
            max = mass[i];
        }
    }
    return max
}

createBlockMass("№5 Через запятую написаны числа. Получите максимальное из этих чисел.", '1, 2, 3, 4, 5, 6, 7, 8, 40, 9, 10, 11, 12, 13, 14, 15, 16', 'Максимальное число', findMax)

/*№6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.*/

function addElements(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        mass2.push(mass[i]);
        if (String(mass[i]).length == 1) {
            mass2.push(mass[i]);
        }
    }
    return mass2
}

createBlockMass("№6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16', 'После каждого однозначного числа вставьте такое же', addElements)

/*№7 Дана строка. Удалите из нее все гласные буквы.*/

function delVocalicString(str) {
    let mass2 = str.split('')
    let mass = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
    for (let i = 0; i < mass2.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (mass2[i] === mass[j]) {
                mass2.splice(i, 1);
                i--;
            }
        }
    }
    return mass2.join('')
}

createBlockStr("№7 Дана строка. Удалите из нее все гласные буквы.", 'Любая строка с любыми словами', "Удалить все гласные буквы", delVocalicString)

/*№8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.*/

function toUpperLastSymbol(str) {
    let mass = str.split(' ');
    let str2 = '';
    for (let i = 0; i < mass.length; i++) {
        str2 += mass[i].slice(0, [mass[i].length - 1]) + mass[i][mass[i].length - 1].toUpperCase() + ' ';
    }
    return str2
}

createBlockStr("№8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.", 'Любая строка с любыми словами', "Сделать заглавной последнюю букву каждого слова", toUpperLastSymbol)

/* №9 Дан следующая структура: let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] Найдите сумму элементов этой структуры.*/

function sumDataTwo() {
    let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] 
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        for (let key of Object.values(data[i])) {
            for (let j = 0; j < key.length; j++) {
                sum += key[j];
            }
        }
    }
    return sum
}

createBlockNoData("№9 Дан следующая структура: let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] Найдите сумму элементов этой структуры.", 'Сумма элементов структуры', sumDataTwo)



let massFunc =
    [`function sortString(str){
        let mass = str.split(/[ .]+/);
        for(let i = 0; i < mass.length; i++){
            if(mass[i][0] == mass[i][0].toUpperCase()){
                mass[i] = mass[i].toLowerCase()
            }
        }
        mass.sort();
        return mass.join(' ')
    }`, `function massDelNumber(num){
        let mass = [];
        for(let i = num; i > 0; i--){
            if(num % i == 0){
                mass.push(i);
            }
        }
        return mass
    }`, `function massOverallDelNum(num, num2){
        let mass = [];
        for(let i = (+num > +num2) ? +num : +num2; i > 0; i--){
            if(+num % i == 0 && +num2 % i == 0){
                mass.push(i);
            }
        }
       return mass
    }`, `function checkDelNumber(num){
        let mass = [];
        let rez = ''
        for(let i = +num; i > 0; i--){
            if(+num % i == 0 && i != +num && i != 1){
                mass.push(i);
            }
        }
        if(mass.length > 1){
            rez = "у этого числа МНОГО делителей " + mass
        } else if(mass.length === 0) {
            rez = "у этого числа НЕТ делителей, кроме него самого и единицы"
        } else {
            rez = "у этого числа только ОДИН делитель " + mass
        }
        return rez
    }`, `function findMax(str){
        let mass = str.split(', ');
        let max = 0;
        for(let i = 0; i < mass.length; i++){
            if(+mass[i] > max){
                max = mass[i];
            }
        }
        return max
    }`, `function addElements(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            mass2.push(mass[i]);
            if(String(mass[i]).length == 1){
                mass2.push(mass[i]);
            }
        }
        return mass2
    }`, `function delVocalicString(str){
        let mass2 = str.split('')
        let mass = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
        for(let i = 0; i < mass2.length; i++){
            for(let j = 0; j < mass.length; j++){
                if(mass2[i] === mass[j]){
                    mass2.splice(i,1);
                    i--;
                }
            }
        }
        return mass2.join(' ')
    }`, `function toUpperLastSymbol(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i].slice(0,[mass[i].length-1]) + mass[i][mass[i].length-1].toUpperCase() + ' ';
        }
        return str2
    }`, `function sumDataTwo(obj){
        let sum = 0;
        for(let i = 0; i < obj.length; i++){
            for(let key of Object.values(obj[i])){
                for(let j = 0; j < key.length; j++){
                    sum += key[j];
                }
            }
        }
         return sum
    }`]