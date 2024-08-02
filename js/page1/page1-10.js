
/* №1 Заполните массив случайными числами из промежутка от 1 до 100.*/

function masFill(num, num2) {
    let mass = [];
    for (let i = 0; i <= 10; i++) {
        mass.push(Math.floor(Math.random() * (num2 - num) + num))
    }
    return mass.join(', ')
}

createBlockNumTwo("№1 Заполните массив случайными числами из промежутка от 1 до 100.", 1, 100, 'Заполнить массив случайными числами', masFill)

/* №2 Дано некоторое число: 12345 Выведите все его символы с конца. */
function outputLetterReverseFunc(str) {
    let mass = []
    for (let i = str.length - 1; i >= 0; i--) {
        mass.push(str[i])
    }
    return mass.join('')
}

createBlockNum("№2 Дано некоторое число: 12345 Выведите все его символы с конца.", 12345, 'Число четное?', outputLetterReverseFunc)

/* №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите подмассивы из двух элементов нашего массива: [1, 2][3, 4][5, 6].*/

function divideMass(mass) {
    let str = ''
    for (let i = 0; i < mass.length; i++) {
        if (i % 2 == 1) {
            str += '[' + [mass[i - 1], mass[i]] + '] '
        } else if (i == mass.length - 1 && i % 2 == 0) {
            str += '[' + [mass[i], ' '] + '] '
        }
    }
    return str
}

createBlockMass("№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите подмассивы из двух элементов нашего массива: [1, 2][3, 4][5, 6].", '1, 2, 3, 4, 5, 6', 'Выведите подмассивы', divideMass)

/* №4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6] .*/

function combineTwoMass(mass, mass2) {
    let massRez = []
    return massRez.concat(mass, mass2)
}

createBlockMassTwo("№4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6] .", '1, 2, 3', '4, 5, 6', 'Слейте массивы в один новый', combineTwoMass)


let massFunc = [`function masFill(num, num2){
        let mass = [];
        for(let i = 0; i <= 10; i++){
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }
        return mass.join(', ')
    }`, `function outputLetterReverseFunc(str) {
        let mass = []
        for(let i = str.length - 1; i >= 0 ; i--){
            mass.push(str[i])
        }
        return mass.join('')
    }`,
    `function divideMass(mass) {
       let str = ''
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 1){
                str += '[' + [mass[i-1], mass[i]] + '] '
            } else if(i == mass.length - 1 && i % 2 == 0){
                str += '[' + [mass[i], ' '] + '] '
            }
        }
    }`, ` function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(arr1, arr2)
    }`]

