let dateToday = new Date().getFullYear() + '-' + (+new Date().getMonth() + 1) + '-' + new Date().getDate()

/* №1 Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля. */

function dateSumFeb(datetime) {
    let dateToday = new Date(datetime)
    let dateFebruary = new Date(dateToday)
    dateFebruary.setFullYear(dateFebruary.getFullYear() + 1)
    dateFebruary.setMonth(1)
    dateFebruary.setDate(29)
    for (let i = 0; i < 5; i++) {
        if (dateFebruary.getMonth() == 2) {
            dateFebruary.setFullYear(dateFebruary.getFullYear() + 1)
            dateFebruary.setMonth(1)
            dateFebruary.setDate(29)
        }
    }
    return 'Дней до следующего 29 февраля: ' + (dateFebruary - dateToday) / (60 * 60 * 24 * 1000)
}

createBlockDate('№1 Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.', dateToday, 'Дней до ближайшего 29 февраля', dateSumFeb)

/* №2 Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы. */

function pancakesDay() {
    let pancDay = new Date()
    let dateToday = new Date()
    if (dateToday.getMonth() > 1) {
        pancDay.setFullYear(pancDay.getFullYear() + 1)
    }
    pancDay.setMonth(2)
    pancDay.setDate(0)
    for (let i = 0; i <= 7; i++) {
        if (pancDay.getDay() != 0) {
            pancDay.setDate(pancDay.getDate() - 1)

        }
    }
    return 'Следующая масленница: ' + pancDay.getFullYear() + '-' + (pancDay.getMonth() + 1) + '-' + pancDay.getDate()
}

createBlockNoData('№2 Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.', 'Следующая масленница', pancakesDay)

/* №3 Сделайте функцию, которая будет возвращать случайный цвет. */

function colorRandom() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16)
    }
    return color
}

createBlockNoData('№3 Сделайте функцию, которая будет возвращать случайный цвет.', 'Вывести случайный цвет', colorRandom)

/* №4 Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива. */

function massDelitel(mass) {
    let mass3 = [];
    let count = 0;
    let massResult = []
    for (let i = 0; i < mass.length; i++) {
        for (let j = mass[i]; j > 0; j--) {
            if ((mass[i] / j) % 1 == 0) {
                mass3.push(j)
            }
        }
    }
    for (let i = 0; i < mass3.length; i++) {
        count = 0;
        for (let j = 0; j < mass3.length; j++) {
            if (mass3[i] == mass3[j]) {
                count++;
            }
        }
        if (count === mass.length && !massResult.includes(+mass3[i])) {
            massResult.push(+mass3[i])

        }
    }
    return massResult
}

createBlockMass('№4 Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.', '10, 15, 100, 20, 200', 'Вывести общие делители чисел', massDelitel)

/* №5 Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве. */

function maxMassItem() {
    mass = [ [2,4,8,10,5,2,1],[3,16,48,7],[2,5,1,8,2,5,1,8,8],[4,4,4,4,4,5,1,4,3],[2,17,48] ]
    let massResult = [];
    for (let i = 0; i < mass.length; i++) {
        let maxItem = 0;
        for (let j = 0; j < mass[i].length; j++) {
            if (mass[i][j] > maxItem) {
                maxItem = mass[i][j]
            }
            if (j == mass[i].length - 1) {
                massResult.push(maxItem)
                maxItem = 0;
            }
        }
    }
    return massResult
}

createBlockNoData('№5 Сделайте функцию, которая параметром будет принимать двухмерный массив чисел [ [2,4,8,10,5,2,1],[3,16,48,7],[2,5,1,8,2,5,1,8,8],[4,4,4,4,4,5,1,4,3],[2,17,48] ] и возвращать массив максимальных чисел в каждом подмассиве.', 'Масссив максимальных чисел подмассивов', maxMassItem)


let massFunc = [`function dateSumFeb(datetime) {
    let dateToday = new Date(datetime)
    let dateFebruary = new Date(dateToday)
    dateFebruary.setMonth(1)
    dateFebruary.setDate(29)
    for(let i = 0; i < 5; i++){
       if(dateFebruary.getMonth() == 2){
        dateFebruary.setFullYear(dateFebruary.getFullYear() + 1)
        dateFebruary.setMonth(1)
        dateFebruary.setDate(29)
       } 
    }   
    return 'Дней до следующего 29 февраля: ' + (dateFebruary - dateToday) / (60 * 60 * 24 * 1000)
}`, `function pancakesDay() {
    let pancDay = new Date()
    let dateToday = new Date(datetime)
    if(dateToday.getMonth() > 1){
        pancDay.setFullYear(pancDay.getFullYear() + 1)
    } 
    pancDay.setMonth(2)
    pancDay.setDate(0)
    for(let i = 0; i <= 7; i++){
        if(pancDay.getDay() != 0){
            pancDay.setDate(pancDay.getDate() - 1) 
            
        }
    }
    return 'Следующая масленница: ' + pancDay.getFullYear() + '-' + (pancDay.getMonth() + 1) + '-' + pancDay.getDate()
}`, `function colorRandom(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 16).toString(16)
    }
    return color
}`,`function massDelitel(mass) {
    let mass3 = [];
    let count = 0;
    let massResult = []
    for (let i = 0; i < mass.length; i++) {
        for (let j = mass[i]; j > 0; j--) {
            if ((mass[i] / j) % 1 == 0) {
                mass3.push(j)
            }
        }
    }
    for (let i = 0; i < mass3.length; i++) {
        count = 0;
        for (let j = 0; j < mass3.length; j++) {
            if (mass3[i] == mass3[j]) {
                count++;
            }
        }
        if (count === mass.length && !massResult.includes(+mass3[i])) {
            massResult.push(+mass3[i])

        }
    }
    return massResult
}`,`function maxMassItem(mass) {
    let massResult = [];
    for (let i = 0; i < mass.length; i++) {
        let maxItem = 0;
        for (let j = 0; j < mass[i].length; j++) {
            if (mass[i][j] > maxItem) {
                maxItem = mass[i][j]
            }
            if (j == mass[i].length - 1) {
                massResult.push(maxItem)
                maxItem = 0;
            }
        }
    }
    return massResult
}`]