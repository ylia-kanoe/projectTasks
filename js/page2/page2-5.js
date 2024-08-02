
/*№1 Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.*/

function findPos(str) {
    let mass = [];
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == '0') {
            mass.push(i);
        }
    }
    return mass
}

createBlockStr("№1 Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.", '023m0df0dfg0', 'Получить позиции всех нулей', findPos)

/*№2 Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'.*/

function deleteSymbol(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3) {
            str2 += str[i];
        }
    }
    return str2
}

createBlockStr("№2 Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'.", 'abcdefg', 'Удалить каждый третий символ', deleteSymbol)

/*№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.*/

function delEven(mass) {
    let sumChet = 0;
    let sumNechet = 0;
    for (let i = 0; i < mass.length; i++) {
        if (i % 2 == 0) {
            sumChet += +mass[i];
        } else {
            sumNechet += +mass[i];
        }
    }
    return sumChet / sumNechet
}

createBlockMass("№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.", '1, 2, 3, 4, 5, 6', 'Удалить отрицательные элементы', delEven)

let massFunc =
    [`function findPos(str){
        let mass = [];
        for(let i = 0; i <= str.length; i++){
            if(str[i] == '0'){
                mass.push(i);
            }
        }
        return mass
    }`,
        `function deleteSymbol(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if((i + 1) % 3){
                str2 += str[i];
            }
        }
       return str2
    }`,
        `function delEven(mass){
        let sumChet = 0;
        let sumNechet = 0;
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 0){
                sumChet += +mass[i];
            } else {
                sumNechet += +mass[i];
            }
        }
        return sumChet/sumNechet
    }
`]