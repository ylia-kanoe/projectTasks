
/* №1 Выведите  все числа в промежутке от 10 до 1000, у которых первая цифра четная.*/

function numFirstEven(num, num2) {
    let mass = []
    for (let i = num; i <= num2; i++) {
        if (+String(i)[0] % 2 == 0) {
            mass.push(i)
        }
    }
    return mass.join(', ')
}

createBlockNumTwo("№1 Выведите  все числа в промежутке от 10 до 1000, у которых первая цифра четная.", 10, 1000, 'Вывести числа, у которых первая цифра четная', numFirstEven)

/*№2 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5].*/

function massSwap(mass) {
    let count = 0;
    for (let i = 0; i < mass.length; i++) {
        count++;
        if (count === 2) {
            [mass[i], mass[i - 1]] = [mass[i - 1], mass[i]];
            count = 0;
        }
    }
    return mass
}

createBlockMass("№2 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5].", '1, 2, 3, 4, 5, 6', 'Поменяйте местами пары элементов массива', massSwap)

/*№3 Дан следующий объект: let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта.*/

function sumObj() {
    let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},}
    let sum = 0;
    for (let val of Object.values(obj)) {
        for (let val2 of Object.values(val)) {
            sum += val2;
        }
    }
    return sum
}
createBlockNoData("№3 Дан следующий объект: let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта.", 'Найти сумму элементов', sumObj)


let massFunc =
    [`function numFirstEven(num, num2){
        let mass = []
        for(let i = num; i <= num2; i++){
            if(+String(i)[0] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
        `function massSwap(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            count++;
            if(count === 2){
                [mass[i], mass[i-1]] = [mass[i-1], mass[i]];
                count =  0;
            }
        }
        return mass
    }`,
        `function sumObj(obj){
        let sum = 0;
        for(let val of Object.values(obj)){
            for(let val2 of Object.values(val)){
                sum += val2;
            }
        }
        return sum
    }`]