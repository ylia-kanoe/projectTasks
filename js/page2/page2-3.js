/* №1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.*/

function checkLet(str, str2) {
    if (str.at(-1) === str2.at(0) || str.at(-1).toUpperCase() === str2.at(0).toUpperCase()) {
        return "Совпадает"
    } else {
        return "Не совпадает"
    }
}

createBlockStrTwo("№1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.", 'кошка', 'аквариум', 'Последняя буква первого совпадает с первой буквой последнего?', checkLet)

/* №2 Дана некоторая строка. Найдите позицию третьего нуля в строке.*/

function findZeroThree(str) {
    let count = 0;
    let pos = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;
            pos = i;
            if (count === 3) {
                break;
            }
        }
    }
    return pos
}

createBlockStr("№2 Дана некоторая строка. Найдите позицию третьего нуля в строке.", 'Считаем от 0 до 100', 'Найти позицию третьего нуля', findZeroThree)

/* №3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.*/

function findSum(str) {
    let mass = str.split(',');
    let sum = 0;
    for (let i = 0; i < mass.length; i++) {
        sum = sum + Number(mass[i]);
    }
    return sum
}

createBlockStr("№3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.", '12,34,56', 'Найти сумму чисел строки', findSum)

/* №4 Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {year: '2025',month: '12',day: '31',}.*/

function dateToObject(str) {
    let objDate = {};
    let massDate = str.split("-");

    objDate.year = massDate[0];
    objDate.month = massDate[1];
    objDate.day = massDate[2];

    return JSON.stringify(objDate)
}

createBlockDate("№4 Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {year: '2025',month: '12',day: '31',}.", '2025-12-31', 'Преобразуйте дату в формат объекта', dateToObject)



let massFunc = [`function checkLet(str, str2) {
        if(str.at(-1) === str2.at(0) || str.at(-1).toUpperCase() === str2.at(0).toUpperCase()){
            return "Совпадает"
        } else {
            return "Не совпадает"
        }
    }`,
    `function findZero(str){
        let count = 0;
        let pos = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '0'){
                count ++;
                pos = i;
                if(count === 3){
                    break;
                }
            }
        }
       return pos
    }`,
    `function findSum(str){
        let mass = str.split(',');
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            sum = sum + Number(mass[i]);
        }
        return sum
    }`,
    `function dateToObject(str){
        let objDate = {};
        let massDate = str.split("-");
        
        objDate.year = massDate[0];
        objDate.month = massDate[1];
        objDate.day = massDate[2];
            
        return JSON.stringify(objDate)
    }`]