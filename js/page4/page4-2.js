
let dateToday = new Date().getFullYear() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getDate() 

/* №1 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.*/

function numberSum(num){
    let sum = 0;
    for(let item of String(num)){
        sum += +item;
    }
    return sum
}
createBlockNum('№1 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.', 20365, 'Сумма цифр числа', numberSum)

/* №2 Сделайте функцию, которая параметром будет принимать число и удалять из него нули. */

function zeroDelete(num) {
    let newNum = '';
    for (let item of String(num)) {
        if (item !== '0') {
            newNum += item;
        }
    }
    return newNum
}
createBlockNum('№2 Сделайте функцию, которая параметром будет принимать число и удалять из него нули.', 10023, 'Удалить из числа нули', zeroDelete)

/* №3 Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет. */

function dateSum(dateTime) {
    let date = new Date(dateTime)
    let dateToday = new Date()
    if (dateToday > date) {
        return 'дней прошло: ' + Math.floor((dateToday - date) / (60 * 60 * 24 * 1000))
    } else {
        return 'дней осталось: ' + Math.floor((date - dateToday) / (60 * 60 * 24 * 1000))
    }
}
createBlockDate('№3 Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.', '2024-10-22', 'Сколько дней до это даты', dateSum)

/* №4 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет. */

function visoDate(datetime){
    let date = new Date(datetime)
    let dateMonth = new Date(date.setMonth(1))
    let dateDay = new Date(dateMonth.setDate(29))

    if(dateMonth.getMonth() == 1 && dateDay.getDate() == 29 ){
       return "Год високосный"
    } else {
       return"Год НЕ високосный"
    }
}
createBlockYear('№4 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.', '2024', 'Год високосный?', visoDate)

/* №5 Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет. */

function visoDateTwo(){
    let mass = [];
    let date = new Date();
    let dateNew = new Date(date);

    for(let i = date.getFullYear(); i > date.getFullYear() - 100; i--){
        let dateYear = new Date(dateNew.setFullYear(i));
        if(new Date(dateNew.setDate(29)).getDate() == 29 && new Date(dateNew.setMonth(1)).getMonth() == 1){
            mass.push(dateYear.getFullYear())
        } 
    }
    return mass.join(', ')
}
createBlockNoData('№5 Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.', 'Високосные года за предыдущие и следующие 100 лет', visoDateTwo)

/* №6 Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца. */

function dayCount() {
    let date = new Date();
    let dateNew = new Date();
    dateNew.setMonth(date.getMonth() + 1);
    dateNew.setDate(0);
    return dateNew.getDate() - date.getDate()
}

    createBlockNoData('№6 Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.', 'До конца месяца осталось', dayCount)

/* №7 Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}
*/

function dateTodayObj(datetime) {
    let date = new Date(datetime)
    let mass = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
    let obj = {
        next: mass[date.getDay() + 1],
        curr: mass[date.getDay()],
        prev: mass[date.getDay() - 1],
    };
    return JSON.stringify(obj)
}

createBlockDate('№7 Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде объекта.', dateToday, 'Вернуть сегодня, завтра, послезавтра в вид объекта', dateTodayObj)
    

let massFunc = 
    [`function numberSum(num){
    let sum = 0;
    for(let item of String(num)){
        sum += +item;
    }
    return sum
}`, `function zeroDelete(num) {
    let newNum = '';
    for (let item of String(num)) {
        if (item !== '0') {
            newNum += item;
        }
    }
    return newNum
}`, `function dateSum(dateTime) {
    let date = new Date(dateTime)
    let dateToday = new Date()
    if (dateToday > date) {
        return 'дней прошло: ' + Math.floor((dateToday - date) / (60 * 60 * 24 * 1000))
    } else {
        return 'дней осталось: ' + Math.floor((date - dateToday) / (60 * 60 * 24 * 1000))
    }
}`,`function visoDate(datetime){
    let date = new Date(datetime)
    let dateMonth = new Date(date.setMonth(1))
    let dateDay = new Date(dateMonth.setDate(29))

    if(dateMonth.getMonth() == 1 && dateDay.getDate() == 29 ){
       return "Год високосный"
    } else {
       return"Год НЕ високосный"
    }
}`,`function visoDateTwo(){
    let mass = [];
    let date = new Date();
    let dateNew = new Date(date);

    for(let i = date.getFullYear(); i > date.getFullYear() - 100; i--){
        let dateYear = new Date(dateNew.setFullYear(i));
        if(new Date(dateNew.setDate(29)).getDate() == 29 && new Date(dateNew.setMonth(1)).getMonth() == 1){
            mass.push(dateYear.getFullYear())
        } 
    }
    return mass.join(', ')
}`,`function dayCount(date) {
    let dateNew = new Date(date);
    dateNew.setMonth(date.getMonth() + 1);
    dateNew.setDate(0);
    return dateNew.getDate() - date.getDate()
}`,`function dateTodayObj(date) {
    let mass = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
    let obj = {
        next: mass[date.getDay() + 1],
        curr: mass[date.getDay()],
        prev: mass[date.getDay() - 1],
    };
    return JSON.stringify(obj)
}`]