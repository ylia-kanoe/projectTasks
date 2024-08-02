
/*№1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.*/

function negativeElement(mass) {
    let count = 0;
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] < 0) {
            count += 1;
        }
    }
    return count
}

createBlockMass("№1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.", '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6', 'Количество отрицательных элементов', negativeElement)

/*№2 Дан массив с числами. Оставьте в нем только положительные числа.*/

function delNegativeElement(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] < 0) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass
}

createBlockMass("№2 Дан массив с числами. Оставьте в нем только положительные числа.", '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6', 'Удалить отрицательные элементы', delNegativeElement)

/* №3 Дана строка. Удалите предпоследний символ из этой строки.*/

function delLastSymbol(str) {
    return str.slice(0, -2) + str.slice(-1);
}
createBlockStr("№3 Дана строка. Удалите предпоследний символ из этой строки.", 'Дана любая строка', 'Найти позицию первого нуля', delLastSymbol)

/*№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.*/

function sumFirstDelSecond(mass) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < mass.length / 2; i++) {
        sum1 = sum1 + +mass[i];
    }
    for (let i = mass.length - 1; i > (mass.length / 2) - 1; i--) {
        sum2 = sum2 + +mass[i];
    }
    return (sum1 / sum2).toFixed(2)
}

createBlockMass("№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.", '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6', 'Удалить отрицательные элементы', sumFirstDelSecond)


let massFunc = [`function negativeElement(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                count += 1;
            }
        }
        return count
    }`, `function delNegativeElement(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }`,
    `str.slice(0, -2) +  str.slice(-1);`, `function sumFirstDelSecond(mass){
        let sum1 = 0;
        let sum2 = 0;

        for(let i = 0; i < mass.length / 2; i++){
            sum1 = sum1 + +mass[i];
        }
        for(let i = mass.length - 1; i > (mass.length / 2) - 1; i--){
            sum2 = sum2 + +mass[i];
        }
        return (sum1 / sum2).toFixed(2)
    }`]