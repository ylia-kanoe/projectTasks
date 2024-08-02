
/* №1 Заполните массив целыми числами от 1 до 10.*/

function createMas(numStart, numEnd) {
    let mass = [];
    for (i = +numStart; i <= +numEnd; i++) {
        mass.push(i);
    }
    return mass.join(', ')
}

createBlockNumTwo("№1 Заполните массив целыми числами от 1 до 10.", 1, 10, 'Заполнить массив числами', createMas)


/* №2 Заполните массив четными числами из промежутка от 1 до 100.*/

function createMasTwo(numStart, numEnd) {
    let mass = [];
    for (i = +numStart; i <= +numEnd; i++) {
        if (i % 2 == 0) {
            mass.push(i);
        }
    }
    return mass.join(', ')
}

createBlockNumTwo("№2 Заполните массив четными числами из промежутка от 1 до 100.", 1, 100, 'Заполнить массив числами', createMasTwo)


/* №3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.*/

function roundMass(mass) {
    for (i = 0; i < mass.length; i++) {
        mass[i] = Number(mass[i]).toFixed(1)
    }
    return mass.join(', ')
}

createBlockMass("№3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.", '1.456, 2.125, 3.32, 4.1, 5.34', 'Округлите элементы массива', roundMass)



let massFunc = [`function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            mass.push(i);
        }
        return mass.join(', ')
    }`, `function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            if(i % 2 == 0){
                mass.push(i);
            }
        }
        return mass.join(', ')
    }`, `function roundMass(mass) {
        for (i = 0; i < mass.length; i++) {
            mass[i] = Number(mass[i]).toFixed(1)
        }
        return mass.join(', ')
    }`]

