let dateToday = new Date().getFullYear() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getDate()

/* №1 Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет. */

function dateFound(strDate) {
    let str = new Date(strDate);
    if (str.toString() === "Invalid Date") {
        return "Такой даты не существует"
    } else {
        return str
    }
}

createBlockDate('№1 Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.', dateToday, 'Проверить, существует ли дата', dateFound)

/* №2 Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами. */

function strLatin(num) {
    let str = ''
    let char = 0;
    for (let i = 0; i < num; i++) {
        char = Math.floor(Math.random() * (90 - 65) + 65)
        str += String.fromCharCode(char)
    }
    return str
}

createBlockNum('№2 Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.', 10, 'Сгенерировать строку со случайными латинскими буквами', strLatin)

/* №3 Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов. */

function strUpperCut(str) {
    let mass = str.split(' ')
    let str2 = '';

    for (let i = 0; i < mass.length; i++) {
        str2 += mass[i][0].toUpperCase();
    }
    return str2
}

createBlockStr('№3 Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.', 'Любая строка с любыми словами', 'Вернуть строку из первых букв всех слов в верхнем регистре', strUpperCut)

/* №4 Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей. */

function massDelitel(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        for (let j = mass[i]; j > 0; j--) {
            if ((mass[i] / j) % 1 === 0) {
                mass2.push(j)
            }
            if (j === 1) {
                mass[i] = mass2;
                mass2 = []
            }
        }
    }
    return mass.join(', ')
}

createBlockMass('№4 Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.', '1, 10, 20, 30, 5, 16, 18, 48', 'Заменить каждый элемент на массив его делителей', massDelitel)

/* №5 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
{
    d: 12,
    h: 10,
    m: 59,
    s: 59,
} */

function secondObject(sec) {
    let day = Math.floor(sec / 60 / 60 / 24)
    let hours = Math.floor((sec - (60 * 60 * 24 * day)) / 60 / 60)
    let minutes = Math.floor((sec - (60 * 60 * 24 * day) - (60 * 60 * hours)) / 60)
    let seconds = sec - (60 * 60 * 24 * day) - (60 * 60 * hours) - (60 * minutes)
    let obj = {
        d: day,
        h: hours,
        m: minutes,
        s: seconds,
    }
    return JSON.stringify(obj)
}

createBlockSecond('№5 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде объекта.', 895125, 'Вернуть объект с количеством дней, часов, минут и секунд', secondObject)



let massFunc = [`function dateFound(strDate) {
    let str = new Date(strDate);
    if (str.toString() === "Invalid Date") {
        return "Такой даты не существует"
    } else {
        return str
    }
}`,`function strLatin(num) {
    let str = ''
    let char = 0;
    for (let i = 0; i < num; i++) {
        char = Math.floor(Math.random() * (90 - 65) + 65)
        str += String.fromCharCode(char)
    }
    return str
}`,`function strUpperCut(str) {
    let mass = str.split(' ')
    let str2 = '';

    for (let i = 0; i < mass.length; i++) {
        str2 += mass[i][0].toUpperCase();
    }
    return str2
}`,`function massDelitel(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        for (let j = mass[i]; j > 0; j--) {
            if ((mass[i] / j) % 1 === 0) {
                mass2.push(j)
            }
            if (j === 1) {
                mass[i] = mass2;
                mass2 = []
            }
        }
    }
    return mass.join(', ')
}`,`function secondObject(sec) {
    let day = Math.floor(sec / 60 / 60 / 24)
    let hours = Math.floor((sec - (60 * 60 * 24 * day)) / 60 / 60)
    let minutes = Math.floor((sec - (60 * 60 * 24 * day) - (60 * 60 * hours)) / 60)
    let seconds = sec - (60 * 60 * 24 * day) - (60 * 60 * hours) - (60 * minutes)
    let obj = {
        d: day,
        h: hours,
        m: minutes,
        s: seconds,
    }
    return JSON.stringify(obj)
}`]