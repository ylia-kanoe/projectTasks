
/*№1 Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.*/

function deleteBigNumber(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (String(mass[i]).length > 3) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass
}

createBlockMass("№1 Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр.", '10, 22, 302, 4000, 5, 6425, 25, 5, 1000, 300, 20, 10, 200, 2000', 'Удалить числа, состоящие более чем из трех цифр', deleteBigNumber)

/*№2 Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.*/

function checkNumberZero(num) {
    let str = String(num);
    let count = 0;
    let rez = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] > 0) {
            count++;
        }
    }
    if (count === str.length) {
        rez = "Все числа больше 0"
    } else {
        rez = "Не все числа больше 0"
    }
    return rez
}

createBlockNum("№2 Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.", 12345, 'Все цифры этого числа больше нуля?', checkNumberZero)

/*№3 Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9].*/

function divideElem(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        let massItem = String(mass[i]);
        for (let j = 0; j < massItem.length; j++) {
            mass2.push(+massItem[j]);
        }
    }
    return mass2
}

createBlockMass("№3 Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9].", '123, 456, 789', 'Разбить элементы посимвольно', divideElem)

/*№4 Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]; Найдите сумму элементов этой структуры.*/

function sumData() {
    let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        for (let item of Object.values(data[i])) {
            sum += item;
        }
    }
    return sum
}

createBlockNoData("№4 Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]; Найдите сумму элементов этой структуры.", 'Найти сумму элементов', sumData)


let massFunc =
    [`function deleteBigNumber(mass){
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).length > 3){
                mass.splice(i,1);
                i--;
            }
        }
        return mass
    }`, `function checkNumberZero(num){
        let str = String(num);
        let count = 0;
        let rez = ''
        for(let i = 0; i < str.length; i++){
            if(str[i] > 0){
                count++;
            }
        }
        if(count === str.length){
            rez = "Все числа больше 0"
        } else {
            rez = "Не все числа больше 0"
        }
        return rez
    }`, `function divideElem(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            let massItem = String(mass[i]);
            for(let j = 0; j < massItem.length; j++){
                mass2.push(+massItem[j]);
            }
        }
        return mass2
    }`, `function sumData(obj){
        let sum = 0;
        for(let i = 0; i < data.length; i++){
            for(let item of Object.values(data[i])){
                sum += item;
            }
        }
        return sum
    }`]