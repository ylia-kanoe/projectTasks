
/*№1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.*/

function checkThreeElements(mass) {
    let count = 0;
    let rez = ''
    for (let i = 0; i < mass.length; i++) {
        if (String(mass[i]).includes('3')) {
            count++;
        }
    }
    if (count === mass.length) {
        rez = "Все числа из этого массива содержат в себе цифру 3"
    } else {
        rez = "Не все числа из этого массива содержат в себе цифру 3"
    }
    return rez
}

createBlockMass("№1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.", '13, 3, 39, 23, 33, 83, 133, 103, 3001', 'Все числа массива содержат цифру 3?', checkThreeElements)

/*№2 Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'*/

function formasStrKebabSnake(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            str2 += '_';
        } else {
            str2 += str[i];
        }
    }
    return str2
}

createBlockStr("№2 Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'", 'kebab-case', "Преобразовать строку в другой формат", formasStrKebabSnake)

/*№3 Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'*/

function formasStrSnakeCamel(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            str2 += str[i + 1].toUpperCase();
            i++;
        } else {
            str2 += str[i];
        }
    }
    return str2
}

createBlockStr("№3 Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'", 'snake_case', "Преобразовать строку в другой формат", formasStrSnakeCamel)

/*№4 Дана строка в формате: 'camelCase' Преобразуйте ее в формат: 'snake_case'*/

function formasStrCamelSnake(str) {
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str2 += '_' + str[i].toLowerCase();
        } else {
            str2 += str[i];
        }
    }
    return str2
}

createBlockStr("№4 Дана строка в формате: 'camelCase' Преобразуйте ее в формат: 'snake_case'", 'camelCase', "Преобразовать строку в другой формат", formasStrCamelSnake)

/* №5 Сформируйте с помощью циклов следующий массив: [ [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], ]*/

function createNewMass() {
    let mass = [];
    let mass2 = [];
    for (let j = 1; j <= 3; j++) {
        mass2.push(j);
    }
    for (let i = 0; i < 5; i++) {
        mass.push(mass2)
    }
    return mass.join(', ')
}

createBlockNoData("№5 Сформируйте с помощью циклов следующий массив: [ [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], ]", 'Сформировать массив', createNewMass)


let massFunc =
    [`function checkThreeElements(mass){
        let count = 0;
        let rez = ''
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).includes('3')){
                count++;
            }
        }
        if(count === mass.length){
            rez = "Все числа из этого массива содержат в себе цифру 3"
        } else {
            rez = "Не все числа из этого массива содержат в себе цифру 3"
        }
        return rez
    }`, `function formasStrKebabSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '-'){
                str2 += '_';
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`, `function formasStrSnakeCamel(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '_'){
                str2 += str[i+1].toUpperCase();
                i++;
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`, `function formasStrCamelSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === str[i].toUpperCase()){
                str2 += '_' + str[i].toLowerCase();
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`, `function createNewMass(){
        let mass = [];
        let mass2 = [];
        for(let j = 1; j <= 3; j++){
            mass2.push(j);
        }
        for(let i = 0; i < 5; i++){
            mass.push(mass2)
        }
        return mass.join(', ')
    }`]