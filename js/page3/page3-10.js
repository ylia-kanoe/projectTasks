/*

№1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
 function massElementCopy(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            mass2.push(mass[i]);
            mass2.push(mass[i]);
        }
        return mass2
    }
№2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
function massDivider(mass, num){
    for(let i = 0; i < mass.length; i++){
        if((num / mass[i]) % 1 !=0 ){
            mass.splice(i,1);
            i--;
        }
    }
     return mass.join(', ')
}
№3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
function massNumberOverall(num, num2){
        let mass = [];
        for(let i = 0; i < String(num).length; i++ ){
            for(let j = 0; j < String(num2).length; j++){
                if(+String(num)[i] == +String(num2)[j] && !mass.includes(+String(num2)[j])){
        
                    mass.push(+String(num2)[j])
                }
            }
        }
        return mass
    }
№4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
function posElementThree(num){
        let mass = [];
        for(let i = 1; i < String(num).length-1; i++){
            if(String(num)[i] === '3'){
                mass.push(i)
            }
        }
        return mass
    }
№5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
function deleteRepeatNumber(mass){
        let str = '';
        for(let i = 0; i < mass.length; i++){
            let str2 = String(mass[i]);
            for(let j = 0; j < str2.length; j++){
                if(str.includes(str2[j]) ){
                    mass.splice(i,1);
                    i--;
                    str = '';
                } else {
                    str += str2[j];
                }
                if(j === str2.length - 1){
                    str = '';
                }
                
            }
        }  
        return mass 
    }
№6 Дан массив:

[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Слейте элементы этого массива в один одномерный массив:

[1, 2, 3, 4, 5, 6, 7, 8, 9]
function massConcat(mass){
    let mass2 = [];
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < mass[i].length; j++){
            mass2.push(mass[i][j]);
        }
    }
    return mass2.join(', ')
}

*/