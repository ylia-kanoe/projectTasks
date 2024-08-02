
/* №1 Дана некоторая строка. Найдите позицию первого нуля в строке. */

function findFirstZero(str) {
    return str.indexOf('0')
}

createBlockStr("№1 Дана некоторая строка. Найдите позицию первого нуля в строке.", 'Считаем от 0 до 100', 'Найти позицию первого нуля', findFirstZero)

/* №2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.*/

function createMass(numStart, numEnd) {
    let mass = [];
    for (let i = numStart; i <= numEnd; i++) {
        if (+String(i)[0] + +String(i)[1] == 5) {
            mass.push(i)
        }
    }
    return mass.join(', ')
}

createBlockNumTwo("№2 Выведите все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.", 1, 1000, 'Вывести числа, где сумма первой и второй цифры равна 5', createMass)

/* №3 Дан массив. Удалите из него элементы с заданным значением.*/

function deleteNum(mass, num) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] === num) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass.join(', ')
}

createBlockNumMass(" №3 Дан массив. Удалите из него элементы с заданным значением.", '1, 2, 3, 4, 5, 6', 5, 'Удалить элементы', deleteNum)

/*№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.*/

function sumHalfMass(mass) {
    let sum = 0;
    for (let i = 0; i < Math.floor(mass.length / 2); i++) {
        sum += +mass[i];
    }
    return sum
}

createBlockMass("№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.", '1, 2, 3, 4, 5, 6', 'Сумма первой половины массива', sumHalfMass)


let massFunc = [`str.indexOf('0')`, `function createMass(numStart, numEnd) {
        let mass = [];
        for(let i = numStart; i <= numEnd; i++){
            if(+String(i)[0]+ +String(i)[1] == 5){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
    `function deleteNum(mass, num){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] === num){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }`, `function sumHalfMass(mass) {
        let sum = 0;
        for(let i = 0; i < Math.floor(mass.length / 2); i++){
            sum += +mass[i];
        }
        return sum
    }`]

