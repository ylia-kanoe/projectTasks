
/* №1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.*/

function sumSquares(mass) {
    let sum = 0
    for (let i = 0; i < mass.length; i++) {
        sum = sum + mass[i] * mass[i];
    }
    return sum
}

createBlockMass("№1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.", '1,2,3,4,5,6,7', 'Найти сумму квадратов элементов', sumSquares)

/* №2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.*/

function sumSquareRoots(mass) {
    let sum = 0
    for (let i = 0; i < mass.length; i++) {
        sum = sum + Math.sqrt(+mass[i]);
    }
    return sum
}

createBlockMass("№2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.", '4,9,25', 'Найти сумму квадратов элементов', sumSquareRoots)

/*№3 Дан массив с числами. Найдите сумму положительных элементов этого массива.*/

function sumPositiveElem(mass) {
    let sum = 0
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] > 0) {
            sum = sum + +mass[i];
        }
    }
    return sum
}

createBlockMass("№3 Дан массив с числами. Найдите сумму положительных элементов этого массива.", '1,-2,3,-4,5,6,7,8,-9,-10,-40,-50,100', 'Найти сумму квадратов элементов', sumPositiveElem)

/*№4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.*/

function sumZeroBetweenTen(mass) {
    let sum = 0
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] > 0 && mass[i] < 10) {
            sum = sum + +mass[i];
        }
    }
    return sum
}

createBlockMass("№4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.", '1,2,3,4,5,6,7,8,9,10,40,50', 'Найти сумму квадратов элементов', sumZeroBetweenTen)

let massFunc = [`function sumSquares(mass){
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + mass[i]*mass[i];
        }
        return sum
    }`, `function sumSquareRoots(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + Math.sqrt(+mass[i]);
        }
        return sum
    }`, `function sumPositiveElem(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0){
                sum = sum + +mass[i];
            }
        }
        return sum
    }`, `function sumZeroBetweenTen(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0 && mass[i] < 10){
                sum = sum + +mass[i];
            }
        }
        return sum
    }`]

