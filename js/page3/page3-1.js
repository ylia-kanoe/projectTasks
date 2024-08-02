
/* №1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.*/

function numIncr(num) {
    let numberStr = String(num);
    let rez = ''
    for (let i = 0; i < numberStr.length; i++) {
        if (numberStr[i] > numberStr[i + 1]) {
            rez = "Числа не расположены по возрастанию"
            break;
        }
        if (numberStr[i] == numberStr.length) {
            rez = "Числа расположены по возрастанию"
        }
    }
    return rez
}

createBlockNum("№1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.", 1234565321, 'Все цифры расположены по возрастанию?', numIncr)


/*№2 Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.*/

function deleteEmptyElem(mass) {
    for (let i = 0; i < mass.length; i++) {
        if (mass[i] == '') {
            mass.splice(i, 1);
            i--;
        }
    }
    return mass.join(', ')
}

createBlockMass("№2 Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.", '1, , 2, 3, , 5', 'Удалить из массива все пустые строки', deleteEmptyElem)

/*№3 Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве.*/


function massSubMassSort() {
    let mass = [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2]]
    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass[i].length; j++) {
            for (let z = 0; z < mass[i].length - j; z++) {
                if (mass[i][z] > mass[i][z + 1]) {
                    [mass[i][z], mass[i][z + 1]] = [mass[i][z + 1], mass[i][z]]
                }
            }
        }
    }
    return mass.join(', ')
}

createBlockNoData("№3 Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве.", 'Отсортировать элементы в каждом подмассиве', massSubMassSort)

/* №4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5]; Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.*/

function deleteLengMass(mass, mass2) {
    let rez = ''
    if (mass.length > mass2.length) {
        mass.length = mass2.length;
    } else {
        mass2.length = mass.length;
    }
    return rez = mass + "\n" + mass2
}

createBlockMassTwo("№4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5]; Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.", '1, 2, 3', '1, 2, 3, 4, 5', 'Удалить из большего массива лишние элементы', deleteLengMass)


let massFunc =
    [`function numIncr(num){
        let numberStr = String(num);
        let rez = ''
        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] > numberStr[i+1]){
                rez = "Числа не расположены по возрастанию"
                break;
            } 
            if(numberStr[i] == numberStr.length){
                rez = "Числа расположены по возрастанию"
            }
        }
        return rez
    }`,
        ` function deleteEmptyElem(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == ''){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass.join(', ')
    }`,
        `function massSubMassSort(mass){
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                for(let z = 0; z < mass[i].length - j; z++){
                    if(mass[i][z] > mass[i][z+1]){
                        [mass[i][z], mass[i][z+1]] = [mass[i][z+1], mass[i][z]]
                    }
                }
            }  
        }
        return mass.join(', ')
    }`,
        `function deleteLengMass(mass, mass2) {
        if(mass.length > mass2.length){
            mass.length = mass2.length;
        } else {
            mass2.length = mass.length;
        }
        return mass2 + '\n' + mass
    }`]