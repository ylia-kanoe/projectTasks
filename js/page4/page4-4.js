/*
№1 Сделайте функцию, которая параметром будет принимать число, а количество его делителей.
function delitelNumber(num){
        let mass = [];
        for(let i = num; i > 0; i--){
            if((num / i) % 1 == 0){
                mass.push(i)
            }
        }
        return mass.length
    }
№2 Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
let mass = [ ['Водолей', '21.01', '20.02'], ['Рыбы', '21.02', '20.03'], ['Овен', '21.03', '19.04'], ['Козерог', '22.12', '20.01'],
    ['Телец', '20.04', '20.05'], ['Близнецы', '21.05', '21.06'], ['Рак', '22.06', '22.07'], ['Лев', '23.07', '22.08'],
    ['Дева', '23.08', '22.09'], ['Весы', '23.09', '23.10'], ['Скорпион', '24.10', '21.11'], ['Стрелец', '22.11', '21.12']];

    function zodiakIconFunc(date){
        for(let i = 0; i < mass.length; i++){
            let mass2 = mass[i]
            let dateStart = new Date(date) 
            let dateStop = new Date(date) 
            dateStart.setDate(mass2[1][0]+mass2[1][1])
            dateStart.setMonth(mass2[1][3]+mass2[1][4] - 1)
            dateStop.setDate(mass2[2][0]+mass2[2][1])
            dateStop.setMonth(mass2[2][3]+mass2[2][4]- 1)
            if (dateStart <= date && date <= dateStop){     
                return mass2[0]
            }
        }
    }
№3 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
function massDelitel(num){
        let mass = []
        let massResult = []
        for(let i = num; i > 0; i--){
            if((num / i) % 1 == 0){
                for(let j = i; j > 0; j--){
                    if((i / j) % 1 == 0){
                       mass.push(j)
                    }
                }
                if(mass.length <= 2){
                    massResult.push(i)  
                }
                mass = []  
            }
        }
        return massResult
    }
№4 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function ckeckSimpleNum(num){
        let mass = []    
        for(let i = num; i > 1; i--){
            if((num / i) % 1 === 0){
                mass.push(i)
            }
        }
        if(mass.length === 1){
            return "Число простое"
        } else {
           return "Число НЕ простое"
        }
    }
№5 Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
function numberDelete(num){
        let str = '';
        for(let i of String(num)){
            if( i % 2 != 0){
                str += i;
            }
        }
        return str
    }
№6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
 function masFill(num, num2){
        let mass = [];
        for(let i = 0; i <= 10; i++){
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }
        return mass
    }
*/