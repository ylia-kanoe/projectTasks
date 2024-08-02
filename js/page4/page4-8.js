
/* №1 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива. */

function massRandom(mass) {
    let i = Math.floor(Math.random() * (mass.length - 0) + 0)
    return mass[i]
}

createBlockMass('№1 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.', '2, 3, 5, 9, 6, 7, 8, 4, 1, 0', 'Случайный элемент массива', massRandom)

/* №2 Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива. */

function massRandomTwo(mass, num) {
    let mass2 = []
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * mass.length)
        if (!mass2.includes(mass[random])) {
            mass2.push(mass[random])
        } else {
            i--
        }
    }
    return mass2.join(', ')
}

createBlockNumMass('№2 Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.', '2, 3, 5, 9, 6, 7, 8, 4, 1, 0', 10, 'Вывести n случайных элементов массива', massRandomTwo)

/* №3 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд. */

function massRandomElem(mass) {
    let item = Math.floor(Math.random() * (mass.length - 1));
    if(localStorage.getItem('item') != item){
        localStorage.setItem('item', item);
        return mass[item]
    } else {
        return massRandomElem(mass)
    }
}

createBlockMass('№3 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.', '2, 3, 5, 9, 6, 7, 8, 4, 1, 0', 'Вернуть случайный элемент массива', massRandomElem)

/* №4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка. */

function massFull(num, num2) {
    let mass = [];
    let mass2 = [];
    for (let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++) {

        for (let j = i; j > 0; j--) {
            if ((i / j) % 1 === 0) {
                mass2.push(j)
            }
        }
        if (mass2.length <= 2) {
            mass.push(i)
            mass2 = []
        }
        mass2 = []
    }
    return mass.join(', ')
}

createBlockNumTwo('№4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.', 1, 100, 'Массив простых чисел из промежутка', massFull)

/* №6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел. */

function massFullTwo(num, num2, n) {
    let mass = []
    for (let i = 0; i < n; i++) {
        if (num > num2) {
            mass.push(Math.floor(Math.random() * (num - num2) + num2))
        } else {
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }

        if (mass[i] == mass[i - 1]) {
            mass.splice(i, 1)
            i--
        }
    }
    return mass.join(', ')
}

createBlockNumThree('№6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.', 1, 100, 10, 'Заполнить массив случайными числами', massFullTwo)

/* №7 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись. */

function massFullThree(num, num2, n) {
    function itemRandom() {
        return Math.floor(Math.random() * ((num > num2 ? num : num2) - (num > num2 ? num2 : num)) + (num > num2 ? num2 : num));
    }
    let mass = [];
    let item = 0;
    for (let i = 0; i < n; i++) {
        item = itemRandom()
        if (!mass.includes(item)) {
            mass.push(item)
        } else {
            n++
        }

    }
    return mass.join(', ')
}

createBlockNumThree('№7 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.', 1, 100, 10, 'Заполнить массив случайными числами без повторений', massFullThree)

let massFunc = [`function massRandom(mass) {
    let i = Math.floor(Math.random() * (mass.length - 0) + 0)
    return mass[i]
}`, `function massRandomTwo(mass, num) {
    let mass2 = []
    for (let i = 0; i < num; i++) {
        let random = Math.floor(Math.random() * mass.length)
        if (!mass2.includes(mass[random])) {
            mass2.push(mass[random])
        } else {
            i--
        }
    }
    return mass2.join(', ')
}`, `function massRandomElem(mass) {
    let item = Math.floor(Math.random() * (mass.length - 1));
    let mass2 = []
    if(mass2.includes(mass[item])){
        massRandomElem(mass)
    } else {
        mass2.push(mass[item])
        return mass[item]
    }
}`, `function massFull(num, num2) {
    let mass = [];
    let mass2 = [];
    for (let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++) {

        for (let j = i; j > 0; j--) {
            if ((i / j) % 1 === 0) {
                mass2.push(j)
            }
        }
        if (mass2.length <= 2) {
            mass.push(i)
            mass2 = []
        }
        mass2 = []
    }
    return mass.join(', ')
}`, `function massFullTwo(num, num2, n) {
    let mass = []
    for (let i = 0; i < n; i++) {

        if (num > num2) {
            mass.push(Math.floor(Math.random() * (num - num2) + num2))
        } else {
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }

        if (mass[i] == mass[i - 1]) {
            mass.splice(i, 1)
            i--
        }
    }
    return mass
}`,`function massFullThree(num, num2, n) {
    function itemRandom() {
        return Math.floor(Math.random() * ((num > num2 ? num : num2) - (num > num2 ? num2 : num)) + (num > num2 ? num2 : num));
    }
    let mass = [];
    let item = 0;
    for (let i = 0; i < n; i++) {
        item = itemRandom()
        if (!mass.includes(item)) {
            mass.push(item)
        } else {
            n++
        }

    }
    return mass
}`]


/* №5 Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму. */

function numSum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += +args[i];
    }
    return sum
}
