
/*№1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.*/

function massElementCopy(mass) {
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        mass2.push(mass[i]);
        mass2.push(mass[i]);
    }
    return mass2
}

createBlockMass("№1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10', 'Повторить каждый элемент.', massElementCopy)

/* №2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.*/

function massDivider(mass, num) {
    for (let i = 0; i < mass.length; i++) {
        if ((num / mass[i]) % 1 != 0) {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass.join(', ')
}

createBlockNumMass("№2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10', 20, 'Оставить в массиве делители числа', massDivider)

/* №3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.*/

function massNumberOverall(num, num2) {
    let mass = [];
    for (let i = 0; i < String(num).length; i++) {
        for (let j = 0; j < String(num2).length; j++) {
            if (+String(num)[i] == +String(num2)[j] && !mass.includes(+String(num2)[j])) {

                mass.push(+String(num2)[j])
            }
        }
    }
    return mass
}

createBlockNumTwo("№3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.", 20083, 19021, 'Получить массив общих цифр', massNumberOverall)

/*№4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней. */

function posElementThree(num) {
    let mass = [];
    for (let i = 1; i < String(num).length - 1; i++) {
        if (String(num)[i] === '3') {
            mass.push(i)
        }
    }
    return mass
}

createBlockNum("№4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.", 31234565333, 'Массив позиций всех цифр 3, без первой и последней', posElementThree)

/*№5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.*/

function deleteRepeatNumber(mass) {
    let str = '';
    for (let i = 0; i < mass.length; i++) {
        let str2 = String(mass[i]);
        for (let j = 0; j < str2.length; j++) {
            if (str.includes(str2[j])) {
                mass.splice(i, 1);
                i--;
                str = '';
            } else {
                str += str2[j];
            }
            if (j === str2.length - 1) {
                str = '';
            }

        }
    }
    return mass.join(', ')
}

createBlockMass("№5 Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16', 'Удалить элементы с одинаковыми числами', deleteRepeatNumber)

/* №6 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Слейте элементы этого массива в один одномерный массив: [1, 2, 3, 4, 5, 6, 7, 8, 9]*/

function massConcat() {
    let mass = [[1, 2, 3],[4, 5, 6],[7, 8, 9],]
    let mass2 = [];
    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass[i].length; j++) {
            mass2.push(mass[i][j]);
        }
    }
    return mass2.join(', ')
}

createBlockNoData("№6 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Слейте элементы этого массива в один одномерный массив: [1, 2, 3, 4, 5, 6, 7, 8, 9]",'Слить подмассивы в один массив', massConcat)


let massFunc =
    [`function massElementCopy(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            mass2.push(mass[i]);
            mass2.push(mass[i]);
        }
        return mass2
    }`, `function massDivider(mass, num){
        for(let i = 0; i < mass.length; i++){
            if((num / mass[i]) % 1 !=0 ){
                mass.splice(i,1);
                i--;
            }
        }
         return mass.join(', ')
    }`, `function massNumberOverall(num, num2){
        let mass = [];
        for(let i = 0; i < String(num).length; i++ ){
            for(let j = 0; j < String(num2).length; j++){
                if(+String(num)[i] == +String(num2)[j] && !mass.includes(+String(num2)[j])){
        
                    mass.push(+String(num2)[j])
                }
            }
        }
        return mass
    }`, `function posElementThree(num){
        let mass = [];
        for(let i = 1; i < String(num).length-1; i++){
            if(String(num)[i] === '3'){
                mass.push(i)
            }
        }
        return mass
    }`, `function deleteRepeatNumber(mass){
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
        return mass.join(', ')
    }`, `function massConcat(mass){
        let mass2 = [];
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                mass2.push(mass[i][j]);
            }
        }
        return mass2.join(', ')
    }`]