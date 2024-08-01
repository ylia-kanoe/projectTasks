/*

№1 Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
function dateFound(strDate){
        let str = new Date(strDate);
        if(str.toString() === "Invalid Date" ){
            return "Такой даты не существует"
        } else {
            return str
        }
    }
№2 Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
function strLatin(num){
    let str = ''
    let char = 0;
    for(let i = 0; i < num; i++){
        char = Math.floor(Math.random() * (90 - 65) + 65)
        str += String.fromCharCode(char)
    }      
    return str
}
№3 Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
function strUpperCut(str){
        let mass = str.split(' ')
        let str2 = '';
    
        for(let i = 0; i < mass.length; i++){
            str2 += mass[i][0].toUpperCase();
        }
        return str2
    }
№4 Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
function massDelitel(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            for(let j = mass[i]; j > 0; j--){
                if((mass[i] / j) % 1 === 0){
                  mass2.push(j)
                }
                if(j === 1){
                    mass[i] = mass2;
                    mass2 = []
                }
            }
        }
        return mass
    }
№5 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

{
	d: 12,
	h: 10,
	m: 59,
	s: 59,
}

function secondObject(sec){
    let date = new Date(sec);
    let obj = {
	    d: date.getDate(),
	    h: date.getHours(),
	    m: date.getMinutes(),
	    s: date.getSeconds(),
    }
    return JSON.stringify(obj)
}
*/