
/*№1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.*/

function findA(str) {
    let mass = str.split(/[. ,]+/);
    for (let i = 0; i < mass.length; i++) {
        if (mass[i][0] !== 'a') {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass
}

createBlockStr("№1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.", 'Awaken, awaken, awaken, awaken. Awaken, awaken, awaken, awaken Awaken, awaken, awaken, awaken As you stand upon the edge Hanging in the balance And fate may fall down upon you While the devil is knocking', 'Записать в массив слова на букву "а"', findA)

/*№2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.*/

function delOnFiveNum(mass) {
    for (let i = 0; i < mass.length; i++) {
        if ((mass[i] / 5) % 1 != 0) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass
}

createBlockMass("№2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.", '10, 22, 32, 40, 5, 64', 'Оставить те числа, которые делятся на 5', delOnFiveNum)

/*№3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.*/

function includeZeroNum(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (!String(mass[i]).includes('0')) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass
}

createBlockMass("№3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.", '10, 22, 32, 40, 5, 604', 'Оставить те числа, которые содержат 0', includeZeroNum)

/*№4 Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.*/

function includeThreeNum(mass) {
    let rez = ''
    for (let i = 0; i < mass.length; i++) {
        if (String(mass[i]).includes('3')) {
            rez = mass[i] + ' содержит цифру 3'
        }
    }
    if (rez == '') {
        return 'Ни в одном элементе нет цифры 3'
    }
    return rez
}

createBlockMass("№4 Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.", '10, 22, 32, 40, 5, 604', 'В массиве есть числа, которые содержат 3?', includeThreeNum)

/* №5 Дано некоторое число: 35142 Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345.*/

function sortNumber(num) {
    let str = String(num);
    let mass = [];

    for (let i = 0; i < str.length; i++) {
        mass.push(str[i]);
    }

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass.length - i; j++) {
            if (mass[j] > mass[j + 1]) {
                [mass[j], mass[j + 1]] = [mass[j + 1], mass[j]]
            }
        }
    }
    return mass.join('');
}

createBlockNum("№5 Дано некоторое число: 35142 Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345.", 35142, 'Отсортируйте цифры', sortNumber)

/* №6 Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'.*/

function createStrTwo(num) {
    let str = '-';
    for (let i = 1; i <= num; i++) {
        str += i + '-';
    }
    return str
}

createBlockNum("№6 Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'.", 5, 'Сформируйте строку', createStrTwo)

/*№7 Дан следующий объект: let obj = { 1: { 1: { 1: 111, 2: 112, 3: 113, }, 2: { 1: 121, 2: 122, 3: 123, }, }, 2: { 1: { 1: 211, 2: 212, 3: 213, }, 2: { 1: 221, 2: 222, 3: 223, }, }, 3: { 1: { 1: 311, 2: 312, 3: 313, }, 2: { 1: 321, 2: 322, 3: 323, }, }, } Найдите сумму элементов этого объекта.*/

function sumObjTwo() {
    let obj = { 1: { 1: { 1: 111, 2: 112, 3: 113, }, 2: { 1: 121, 2: 122, 3: 123, }, }, 2: { 1: { 1: 211, 2: 212, 3: 213, }, 2: { 1: 221, 2: 222, 3: 223, }, }, 3: { 1: { 1: 311, 2: 312, 3: 313, }, 2: { 1: 321, 2: 322, 3: 323, }, }, }
    let sum = 0;
    for (let val of Object.values(obj)) {
        for (let val2 of Object.values(val)) {
            for (let val3 of Object.values(val2)) {
                sum += val3;
            }
        }
    }
    return sum
}

createBlockNoData("№7 Дан следующий объект: let obj = { 1: { 1: { 1: 111, 2: 112, 3: 113, }, 2: { 1: 121, 2: 122, 3: 123, }, }, 2: { 1: { 1: 211, 2: 212, 3: 213, }, 2: { 1: 221, 2: 222, 3: 223, }, }, 3: { 1: { 1: 311, 2: 312, 3: 313, }, 2: { 1: 321, 2: 322, 3: 323, }, }, } Найдите сумму элементов этого объекта.", 'Найти сумму элементов', sumObjTwo)


let massFunc =
    [`function findA(str){
        let mass = str.split(/[. ,]+/);
        for(let i = 0; i < mass.length; i++){
            if(mass[i][0] !== 'a'){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }`, `function delOnFiveNum(mass){
        for(let i = 0; i < mass.length; i++){
            if((mass[i] / 5) % 1 != 0){
                 mass.splice(i,1);
                 i--;
            }
        }
        return mass
    }`, `function includeZeroNum(mass){
        for(let i = 0; i < mass.length; i++){
            if(!String(mass[i]).includes('0')){
                mass.splice(i,1);
                i--;
            }
        }
        return mass
    }`, `function includeThreeNum(mass){
        let rez = ''
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).includes('3')){
                rez = mass[i] + ' содержит цифру 3'
            }
        }
        if(rez == ''){
            return 'Ни в одном элементе нет цифры 3'
        }
        return rez
    }`, `function sortNumber(num){
        let str = String(num);
        let mass = [];

        for(let i = 0; i < str.length; i++){
            mass.push(str[i]);
        }

        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass.length - i; j++){
                    if(mass[j] > mass[j+1]){
                        [mass[j], mass[j+1]] = [mass[j+1], mass[j]]
                    }
            }
        }
        return  mass.join('');
    }`, `function createStrTwo(num){
        let str = '-';
        for(let i = 1; i <= num; i++){
            str += i + '-';
        }
        return str
    }`, `function sumObjTwo(obj){
        let sum = 0;
        for(let val of Object.values(obj)){
            for(let val2 of Object.values(val)){
                for(let val3 of Object.values(val2)){
                    sum += val3;
                }
            }
        }
        return sum
    }`]