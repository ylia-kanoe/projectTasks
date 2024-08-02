
/* №1 Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56.*/

function sumNum(num) {
    let numberStr = String(num);
    let sumNumber = '';
    let sum = 0
    for (let i = 0; i < numberStr.length; i++) {
        if (i % 2 == 1) {
            sumNumber += numberStr[i - 1] + numberStr[i]
            sum += +sumNumber
            sumNumber = ''
        }
    }
    return sum
}

createBlockNum("№1 Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56.", 123456, 'Найти сумму пар цифр числа', sumNum)

/*№2 Дан массив с числами: [1, 2, 3, 4, 5] Выведите элементы этого массива в обратном порядке.*/

function redMassive(mass) {
    let mass2 = [];
    for (let i = mass.length - 1; i >= 0; i--) {
        mass2.push(mass[i])
    }
    return mass2.join(', ')
}

createBlockMass("№2 Дан массив с числами: [1, 2, 3, 4, 5] Выведите элементы этого массива в обратном порядке.", '1, 2, 3, 4, 5', 'Вывести элементы массива в обратном порядке', redMassive)


let massFunc =
    [`function sumNum(num){
        let numberStr = String(num);
        let sumNumber = '';
        let sum = 0
        for(let i = 0; i < numberStr.length; i++){
            if(i % 2 == 1){
                sumNumber += numberStr[i-1] + numberStr[i]
                sum += +sumNumber
                sumNumber = ''
            }
        }
        return sum
    }`,
        `function redMassive(mass){
        let mass2 = [];
        for(let i = mass.length - 1; i >= 0; i--){
            mass2.push(mass[i])
        }
        return mass2.join(', ')
    }`]