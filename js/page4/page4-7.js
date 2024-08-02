
/* №1 Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке. */

function sortText(str) {
    let mass = str.split(' ')
    mass.sort()
    return mass.join(' ')
}

createBlockStr('№1 Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.', 'Любая строка с любым текстом', 'Отсортировать строку в алфавитном порядке', sortText)

/* №2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов. */

function massOverall(mass, mass2) {
    let massOver = [];
    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass2.length; j++) {
            if (mass[i] === mass2[j] && !massOver.includes(mass[i])) {
                massOver.push(mass[i])
            }
        }
    }
    return massOver.join(', ')
}

createBlockMassTwo('№2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.', '1, 2, 5, 10, 20, 22, 16, 2, 4', '2, 16, 10, 12, 3, 18, 9, 24', 'Вернуть массив общих элементов', massOverall)

/* №3 Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд. */

function randomNum() {
    let item = Math.floor(Math.random() * 100)
    if(localStorage.getItem('item') != item){
        localStorage.setItem('item', item);
        return item
    } else {
        return randomNum()
    }
}

createBlockNoData('№3 Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.', 'Вернуть случайное число (без повторений)', randomNum)

/* №4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/

function returnLastElem(mass, num) {
    let item = '';
    for (let i = 0; i < mass.length; i++) {
        if (num === mass[i]) {
            item = mass[i + 1];
        }
        if (num === mass[mass.length - 1]) {
            item = mass[0]
        }
    }
    return item
}

createBlockNumMass('№4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент.', '1, 2, 3, 4, 5, 6, 7, 8', 4, 'Вернуть следующий элемент', returnLastElem)


let massFunc = [`function sortText(str) {
    let mass = str.split(' ')
    mass.sort()
    return mass.join(' ')
}`,`function massOverall(mass, mass2) {
    let massOver = [];
    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass2.length; j++) {
            if (mass[i] === mass2[j] && !massOver.includes(mass[i])) {
                massOver.push(mass[i])
            }
        }
    }
    return massOver
}`,`function randomNum() {
    let item = Math.floor(Math.random() * 100)
    if(localStorage.getItem('item') != item){
        localStorage.setItem('item', item);
        return item
    } else {
        return randomNum()
    }
}`,`function returnLastElem(mass, num) {
    let item = '';
    for (let i = 0; i < mass.length; i++) {
        if (num === mass[i]) {
            item = mass[i + 1];
        }
        if (num === mass[mass.length - 1]) {
            item = mass[0]
        }
    }
    return item
}`]