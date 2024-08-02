
/* №1 Выведите все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.*/

function numPenultEven(num, num2) {
    let mass = []
    for (let i = num; i <= num2; i++) {
        if (String(i)[String(i).length - 2] % 2 == 0) {
            mass.push(i)
        }
    }
    return mass.join(', ')
}

createBlockNumTwo("№1 Выведите все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.", 1, 1000, 'Вывести числа, у которых предпоследняя цифра четная', numPenultEven)

/*№2 Дан массив. Удалите из него каждый пятый элемент.*/

function delFiveElement(mass) {
    let count = 0
    for (let i = 0; i < mass.length; i++) {
        count++;
        if (count === 5) {
            mass.splice(i, 1);
            i--;
            count = 0;
        }
    }
    return mass
}

createBlockMass("№2 Дан массив. Удалите из него каждый пятый элемент.", '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16', 'Удалить каждый пятый элемент', delFiveElement)

/* №3 Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'.*/

function createStr(num) {
    let str = '';
    for (let i = 0; i < num; i++)(
        str += '0'
    )
    return str
}

createBlockNum("№3 Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'.", 5, 'Сделать строку, содержащую столько нулей, сколько указано', createStr)

/*№4 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'.*/

function delStrSecondWord(str) {
    let mass = str.split(' ');
    let str2 = '';
    let count = 0;

    for (i = 0; i < mass.length; i++) {
        if (i % 2 === 0) {
            count++;
            str2 += mass[i] + ' ';
        }
        if (count === 2) {
            count = 0;
        }
    }
    return str2
}

createBlockStr("№4 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'.", 'aaa bbb ccc eee fff', "Удалить каждое второе слово", delStrSecondWord)

/*№5 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива.*/

function sumMass() {
    let mass = [[1, 2, 3],[4, 5, 6],[7, 8, 9],]
    let sum = 0;
    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass[i].length; j++) {
            sum += mass[i][j];
        }
    }
    return sum
}

createBlockNoData("№5 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива.",  'Найти сумму элементов', sumMass)


let massFunc =
    [`function numPenultEven(num, num2) {
        let mass = []
        for(let i = num; i <= num2; i++){
            if(String(i)[String(i).length-2] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
        `function delFiveElement(mass){
        let count = 0
        for(let i = 0; i < mass.length; i++){
            count ++;
            if(count === 5){
                mass.splice(i,1);
                i--;
                count = 0;
            }
        }
        return mass
    }`,
        `function createStr(num){
        let str = '';
        for(let i = 0; i < num; i++)(
            str += '0'
        )
        return str
    }`,
        `function delStrSecondWord(str){
        let mass = str.split(' ');
        let str2 = '';
        let count = 0;
    
        for(i = 0; i < mass.length; i++){
            if(i % 2 === 0){       
                count++;
                str2 += mass[i] + ' '; 
            } 
            if(count === 2){
                count = 0;
            }
        }
           return str2
    }`, `function sumMass(mass){
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                sum +=mass[i][j];
            }
        }
        return sum
    }`]