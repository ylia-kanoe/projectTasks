
/*№1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/

function checkUpper(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase() && str[i] != ' ') {
            count++;
        }
    }
    if (count > 2) {
        return "Строка содержит больше 2 заглавных букв"
    } else {
        return "Строка содержит не более 2 заглавных букв"
    }
}

createBlockStr("№1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.", 'Любая строка где Не более Двух заглавных букв, Ой', 'Проверить, что в этой строке не более двух заглавных букв', checkUpper)

/*№2 Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'.*/

function deleteStr(str) {
    let mass = str.split(' ');
    let str2 = '';
    for (let i = 0; i < mass.length; i++) {
        if (mass[i].length <= 3) {
            str2 += mass[i] + ' ';
        }
    }
    return str2
}

createBlockStr("№2 Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'.", '1 22 333 4444 22 5555 1', 'Удалить из строки все подстроки, в которых символов больше 3', deleteStr)

/* №3 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3].*/

function combineTwoMass(mass, mass2) {
    let massRez = []
    return massRez.concat(mass[0], mass[1], mass2, mass[2])
}

createBlockMassTwo("№3 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3].", '1, 2, 3', 'a, b, c', 'Слейте массивы в один новый', combineTwoMass)


let massFunc =
    [`function checkUpper(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] == str[i].toUpperCase() && str[i] != ' '){
                count ++;
            }
        }
        if(count > 2){
            return "Строка содержит больше 2 заглавных букв"
        } else {
            return "Строка содержит не более 2 заглавных букв"
        }
    }`,
        `function deleteStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                str2 += mass[i] + ' ';
            }
        }
        return str2
    }`,
        `function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(mass[0], mass[1], mass2, mass[2])
    }`]