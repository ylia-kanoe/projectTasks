
/* №1 Сделайте функцию, которая вернет текущий день недели словом. */

function today(date){
    let dateFunc = new Date(date)
    let mass = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return mass[dateFunc.getDay()]
}

let dateToday = new Date().getFullYear() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getDate() 

createBlockDate('№1 Сделайте функцию, которая вернет текущий день недели словом.', dateToday, 'Текущий день недели', today)

/* №2 Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате. */

function dateDay(date){
    let dateFunc = new Date(date)
    let mass = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return mass[dateFunc.getDay()]
}

createBlockDate('№2 Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.', '1996-10-22', 'Узнать день недели', dateDay)

/* №3 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам. */

function quantitySecond(sec){
    let rez = sec / 60 / 60 / 24 
    
    return rez
}

createBlockSecond('№3 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.', '604800', 'Узнать количество суток', quantitySecond)


/* №4 Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.*/

function CutString(num, str){
    str = str.slice(0, num);      
    return str
}

createBlockNumStr('№4 Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.', 5, 'Любая строка любого размера', 'Обрезать строку до указаной длины', CutString)


/* №5 Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате. */

function zodiakIconFunc(datetime) {
    let mass = [['Водолей', '21.01', '20.02'], ['Рыбы', '21.02', '20.03'], ['Овен', '21.03', '19.04'], ['Козерог', '22.12', '20.01'],
    ['Телец', '20.04', '20.05'], ['Близнецы', '21.05', '21.06'], ['Рак', '22.06', '22.07'], ['Лев', '23.07', '22.08'],
    ['Дева', '23.08', '22.09'], ['Весы', '23.09', '23.10'], ['Скорпион', '24.10', '21.11'], ['Стрелец', '22.11', '21.12']];
    let date = new Date(datetime)
    for (let i = 0; i < mass.length; i++) {
        let mass2 = mass[i]
        let dateStart = new Date(date)
        let dateStop = new Date(date)
        dateStart.setDate(mass2[1][0] + mass2[1][1])
        dateStart.setMonth(mass2[1][3] + mass2[1][4] - 1)
        dateStop.setDate(mass2[2][0] + mass2[2][1])
        dateStop.setMonth(mass2[2][3] + mass2[2][4] - 1)
        if (dateStart <= date && date <= dateStop) {
            return mass2[0]
        }
    }
}

createBlockDate('№5 Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.', '1996-10-22', 'Узнать знак зодиака', zodiakIconFunc)

/* №6 Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.*/ 

function delitelNumber(num){
    let sum = 0
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            sum += +i
        } 
    }
    return sum
}

createBlockNum('№6 Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.', 1000, 'Сумма делителей числа', delitelNumber)



let massFunc = 
    [`function today(date){
    let dateFunc = new Date(date)
    let mass = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return mass[dateFunc.getDay()]
}`,`function dateDay(date){
    let dateFunc = new Date(date)
    let mass = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return mass[dateFunc.getDay()]
}`,`function quantitySecond(sec){
    let data = new Date(+sec);
    let rez = data.getDate()
    
    return rez
}` ,`function CutString(num, str){
    str = str.slice(0, num);      
    return str
}`,`function zodiakIconFunc(datetime) {
    let mass = [['Водолей', '21.01', '20.02'], ['Рыбы', '21.02', '20.03'], ['Овен', '21.03', '19.04'], ['Козерог', '22.12', '20.01'],
    ['Телец', '20.04', '20.05'], ['Близнецы', '21.05', '21.06'], ['Рак', '22.06', '22.07'], ['Лев', '23.07', '22.08'],
    ['Дева', '23.08', '22.09'], ['Весы', '23.09', '23.10'], ['Скорпион', '24.10', '21.11'], ['Стрелец', '22.11', '21.12']];
    let date = new Date(datetime)
    for (let i = 0; i < mass.length; i++) {
        let mass2 = mass[i]
        let dateStart = new Date(date)
        let dateStop = new Date(date)
        dateStart.setDate(mass2[1][0] + mass2[1][1])
        dateStart.setMonth(mass2[1][3] + mass2[1][4] - 1)
        dateStop.setDate(mass2[2][0] + mass2[2][1])
        dateStop.setMonth(mass2[2][3] + mass2[2][4] - 1)
        if (dateStart <= date && date <= dateStop) {
            return mass2[0]
        }
    }
}`,`function delitelNumber(num){
    let sum = 0
    for(let i = num; i > 0; i--){
        if((num / i) % 1 === 0){
            sum += +i
        } 
    }
    return sum
}`]