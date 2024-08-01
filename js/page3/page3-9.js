/*
№1 Дана строка. Проверьте, что эта строка состоит только из цифр.
function checkNumber(str){
        let count = 0;
        let rez = ''
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i]))){
                count++;
            }
        }
        if(count === str.length){
            rez = "строка состоит только из цифр"
        } else {
            rez = "строка состоит НЕ только из цифр"
        }
        return rez
    }
№2 Дана строка. Проверьте, что эта строка состоит только из четных цифр.
function checkNumNumberEven(str){
        let count = 0;
        let rez = ''
        for(let i = 0; i < str.length; i++){
            if(!isNaN(Number(str[i])) && str[i] % 2 === 0){
                count++;
            }
        }
        if(count === str.length){
            rez = "строка состоит только из четных цифр"
        } else {
            rez = "строка состоит НЕ только из четных цифр"
        }
        return rez
    }
№3 Дан массив с числами. Удалите из него числа, имеющие два и более нуля.
function deleteMassiveMoreZero(mass){
        let count = 0;
        let str = '';
        for(let i = 0; i < mass.length; i++){
            str = String(mass[i]);
            for(let j = 0; j < str.length; j++){
                if(str[j] === '0'){
                    count++;
                }

                if(count >= 2){
                    mass.splice(i,1);
                    i--;
                    count = 0;
                } 

                if(j == str.length-1){
                    count = 0;
                }
            }
        }
        return mass
    }
№4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
function findThirteen(numStart, numEnd) {
    result.textContent = ''
    let sum = 0; 
    let mass = [];
    for(let i = numStart; i <= numEnd; i++){
        let str = String(i);
        for(let j = 0; j < str.length; j++){
            sum += +str[j];
            if(sum === 13 && j === str.length-1){
                mass.push(i);
                sum = 0;
            } else if(j === str.length-1){
                sum = 0;
            }
        }
    }

    return mass
})
№5 Сформируйте с помощью циклов следующий массив:

[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
function createNewMassTwo(){
    let mass = [];
    let mass2 = [];
    for(let i = 1; i < 10; i ++){
        mass2.push(i);
        if(mass2.length == 3){
            mass.push(mass2);
            mass2 = [];
        }
    }
    return (mass.join(', ')
}
*/