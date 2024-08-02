
/* №1 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли. */

function massDeleteDouble(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        if (mass2.includes(mass[i])) {
            mass.splice(i, 1);
            i--;
        } else {
            mass2.push(mass[i])
        }
    }
    return mass
}

createBlockMass('№1 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.', '1, 3, 8, 16, 1, 3, 4, 12, 2, 1, 3, 2, 16', 'Удалить из массива все дубли', massDeleteDouble)

/* №2 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз. */

function massDeleteDoubleThree(mass) {
    let mass2 = [];
    let count = 0;

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (mass[i] == mass[j]) {
                count++;
            }
            if (count > 3) {
                mass.splice(j, 1);
                j--;
                count = 0;
            }
            if (j == mass.length - 1) {
                count = 0;
            }
        }
    }
    return mass
}

createBlockMass('№2 Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.', '1, 3, 8, 16, 1, 3, 1, 1, 2, 1, 3, 2, 16, 16, 2, 8', 'Удалить дубли, если они больше 3 раз', massDeleteDoubleThree)

/* №3 Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы. */

function massDeleteDoubleNext(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] == mass[i + 1]) {
            mass.splice(i, 2);
            i - 2;
        }
    }
    return mass
}

createBlockMass('№3 Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы. ',  '1, 3, 8, 16, 1, 3, 1, 1, 2, 1, 3, 2, 16, 16, 2, 8', 'Удалить рядом стоящие одинаковые элементы', massDeleteDoubleNext)

/* №4 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
{
    max: 9,
    min: 1,
} */

function maxMin(mass) {
    let max = mass[0];
    let min = mass[0];
    for (let i of mass) {
        if (+i > max) {
            max = +i;
        }
        if (+i < min) {
            min = +i;
        }
    }
    let obj = {
        'max': max,
        'min': min,
    }
    return JSON.stringify(obj)
}

createBlockMass('№4 Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде объекта.', '1, 3, 8, 16, 1, 1, 3, 2, 16, 16, 2, 8', 'Вернуть максимальное и минимальное значение', maxMin)


let massFunc = 
    [`function massDeleteDouble(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        if (mass2.includes(mass[i])) {
            mass.splice(i, 1);
            i--;
        } else {
            mass2.push(mass[i])
        }
    }
    return mass
}`, `function massDeleteDoubleThree(mass) {
    let mass2 = [];
    let count = 0;

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (mass[i] == mass[j]) {
                count++;
            }
            if (count > 3) {
                mass.splice(j, 1);
                j--;
                count = 0;
            }
            if (j == mass.length - 1) {
                count = 0;
            }
        }
    }
    return mass
}`, `function massDeleteDoubleNext(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] == mass[i + 1]) {
            mass.splice(i, 2);
            i - 2;
        }
    }
    return mass
}`,`function maxMin(mass) {
    let max = mass[0];
    let min = mass[0];
    for (let i of mass) {
        if (+i > max) {
            max = +i;
        }
        if (+i < min) {
            min = +i;
        }
    }
    let obj = {
        'max': max,
        'min': min,
    }
    return JSON.stringify(obj)
}`]