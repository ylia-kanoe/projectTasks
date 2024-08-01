

/*
№1 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function numberSum(num){
    let sum = 0;
    for(let item of String(num)){
        sum += +item;
    }
    return sum
}
№2 Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
function zeroDelete(num){
        let newNum = '';
        for(let item of String(num)){
            if(item !== '0'){
                newNum += item;
            }
        }
        return newNum
    }
№3 Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
 function dateSum(date){
        let dateToday = new Date()
        if(dateToday > date){
            return 'дней прошло: ' + Math.floor((dateToday - date) / (60 * 60 * 24 * 1000)) 
        } else {
            return 'дней осталось: ' + Math.floor((date - dateToday) / (60 * 60 * 24 * 1000)) 
        }
    }
№4 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function visoDate(date){
    let dateMonth = new Date(date.setMonth(1))
    let dateDay = new Date(dateMonth.setDate(29))

    if(dateMonth.getMonth() == 1 && dateDay.getDate() == 29 ){
        console.log("Год високосный")
    } else {
        console.log("Год НЕ високосный")
        console.log(new Date(dateMonth.setDate(29)))
    }
}
№5 Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
function visoDate(date){
    let mass = [];
    let dateNew = new Date(date);

    for(let i = date.getFullYear(); i > date.getFullYear() - 100; i--){
        let dateYear = new Date(dateNew.setFullYear(i));

        if(new Date(dateNew.setDate(29)).getDate() == 29 && new Date(dateNew.setMonth(1)).getMonth() == 1){
            mass.push(dateYear.getFullYear())
        } 
    }
    return console.log(mass)
}
№6 Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
function dayCount(date){
        let dateNew = new Date(date);
        dateNew.setMonth(date.getMonth() + 1);
        dateNew.setDate(0);
        return dateNew.getDate() - date.getDate()
    }
№7 Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}

function dateToday(date){
        let mass = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
        let obj = {
            next:  mass[date.getDay()+1], 
            curr:  mass[date.getDay()],
            prev:  mass[date.getDay()-1], 
        };
        return JSON.stringify(obj)
    }
*/