
/* №1 Выведите все целые числа от 1 до 100.*/

function outputNum(numStart, numEnd) {
    let rez = ''
    for (let i = numStart; i <= numEnd; i++) {
        rez += i
        if (i < numEnd) {
            rez += ', '
        }
    }
    return rez
}

createBlockNumTwo("№1 Выведите все целые числа от 1 до 100.", 1, 100, 'Вывести все целые числа', outputNum)

/* №2 Выведите все целые числа от -100 до 0.*/

function outputNumNeg(numStart, numEnd) {
    let rez = ''
    for (let i = numStart; i <= numEnd; i++) {
        rez += i
        if (i < numEnd) {
            rez += ', '
        }
    }
    return rez
}

createBlockNumTwo("№2 Выведите все целые числа от -100 до 0.", -100, 0, 'Вывести все целые числа', outputNumNeg)

/* №3 Выведите все целые числа от 100 до 1.*/

function outputNumRev(numStart, numEnd) {
    let rez = ''
    for (let i = numStart; i >= numEnd; i--) {
        rez += i
        if (i > numEnd) {
            rez += ', '
        }
    }
    return rez
}

createBlockNumTwo("№3 Выведите все целые числа от 100 до 1.", 100, 1, 'Вывести все целые числа', outputNumRev)

/* №4 Выведите все четные числа из промежутка от 1 до 100.*/

function outputNumEven(numStart, numEnd) {
    let rez = ''
    for (let i = numStart; i <= numEnd; i++) {
        if (i % 2 == 0) {
            rez += i
            if (i < numEnd) {
                rez += ', '
            }
        }
    }
    return rez
}

createBlockNumTwo("№4 Выведите все четные числа из промежутка от 1 до 100.", 1, 100, 'Вывести все четные числа', outputNumEven)

/* №5 Выведите все числа кратные трем в промежутке от 1 до 100.*/

function outputNumMulti(numStart, numEnd) {
    let rez = ''
    for (let i = numStart; i <= numEnd; i++) {
        if (i % 3 == 0) {
            rez += i
            if (i < numEnd) {
                rez += ', '
            }
        }
    }
    return rez
}

createBlockNumTwo("№5 Выведите все числа кратные трем в промежутке от 1 до 100.", 1, 100, 'Вывести все числа кратные 3', outputNumMulti)


let massFunc = [`function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }`, `function outputNumNeg(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }`, `function outputNumRev(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i >= numEnd; i--){
            rez += i
            if(i > numEnd){
                rez += ', '
            }
        }
        return rez
    }`, `function outputNumEven(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            if(i % 2 == 0){
                rez += i
                if(i < numEnd){
                    rez += ', '
                }
            }
        }
        return rez
    }`, `function outputNumMulti(numStart, numEnd){
    let rez = ''
    for(let i = numStart; i <= numEnd; i++){
        if(i % 3 == 0){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
    }
    return rez
}`]
