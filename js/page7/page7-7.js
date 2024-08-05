
/*№1 Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.*/

function councMassElem(mass, num){
    let count = 0;
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < String(mass[i]).length; j++){
            if(String(mass[i])[j] == String(num)){
                count ++
            }
        }
    }
    return count
}

createBlockNumMass("№1 Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива.", '1,2,3,5,9,13,15,65,63,63,53,6,33,25,2,33,5', 3, 'Посчитать количество указанных цифр', councMassElem)

/* №2 Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345',]*/

function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += i+1
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}

createBlockNoData("№2 Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345',]", 'Сгенерировать массив', massGenerator)

/* №3 Дан массив: let affairs = [	{date:  '2019-12-29',event: 'name1',},{date:  '2019-12-31',	event: 'name2',},{date:  '2019-12-29',event: 'name3',},{date:  '2019-12-30',event: 'name4',},{date:  '2019-12-29',event: 'name5',},{date:  '2019-12-31',event: 'name6',},{date:  '2019-12-29',event: 'name7',},{date:  '2019-12-30',event: 'name8',},{date:  '2019-12-30',event: 'name9',},] Получите из этого массива уникальные даты, то есть вот так: ['2019-12-29', '2019-12-30', '2019-12-31'] */

function uniqueDate(){
    let affairs = [
        {
            date:  '2019-12-29',
            event: 'name1',
        },
        {
            date:  '2019-12-31',
            event: 'name2',
        },
        {
            date:  '2019-12-29',
            event: 'name3',
        },
        {
            date:  '2019-12-30',
            event: 'name4',
        },
        {
            date:  '2019-12-29',
            event: 'name5',
        },
        {
            date:  '2019-12-31',
            event: 'name6',
        },
        {
            date:  '2019-12-29',
            event: 'name7',
        },
        {
            date:  '2019-12-30',
            event: 'name8',
        },
        {
            date:  '2019-12-30',
            event: 'name9',
        },
    ]
    let massResult = []

    for(let i = 0; i < affairs.length; i++){
        if(!massResult.includes(Object.values(affairs[i])[0])){
            massResult.push(Object.values(affairs[i])[0])
        }
    }
    console.log(massResult)
    return massResult + ' (результат в консоли)'
}

createBlockNoData("№3 Дан массив: let affairs = [	{date:  '2019-12-29',event: 'name1',},{date:  '2019-12-31',	event: 'name2',},{date:  '2019-12-29',event: 'name3',},{date:  '2019-12-30',event: 'name4',},{date:  '2019-12-29',event: 'name5',},{date:  '2019-12-31',event: 'name6',},{date:  '2019-12-29',event: 'name7',},{date:  '2019-12-30',event: 'name8',},{date:  '2019-12-30',event: 'name9',},] Получите из этого массива уникальные даты, то есть вот так: ['2019-12-29', '2019-12-30', '2019-12-31']", 'Получить уникальные даты', uniqueDate)

let massFunc = [`function councMassElem(mass, num){
    let count = 0;
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < String(mass[i]).length; j++){
            if(String(mass[i])[j] == String(num)){
                count ++
            }
        }
    }
    return count
}`,`function massGenerator(){
    let mass = []
    let str = ''
    for(let i = 0; i < 5; i++){
        str += i+1
        mass.push(str)
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}
`,`function uniqueDate(){
    let affairs = [
        {
            date:  '2019-12-29',
            event: 'name1',
        },
        {
            date:  '2019-12-31',
            event: 'name2',
        },
        {
            date:  '2019-12-29',
            event: 'name3',
        },
        {
            date:  '2019-12-30',
            event: 'name4',
        },
        {
            date:  '2019-12-29',
            event: 'name5',
        },
        {
            date:  '2019-12-31',
            event: 'name6',
        },
        {
            date:  '2019-12-29',
            event: 'name7',
        },
        {
            date:  '2019-12-30',
            event: 'name8',
        },
        {
            date:  '2019-12-30',
            event: 'name9',
        },
    ]
    let massResult = []

    for(let i = 0; i < affairs.length; i++){
        if(!massResult.includes(Object.values(affairs[i])[0])){
            massResult.push(Object.values(affairs[i])[0])
        }
    }
    console.log(massResult)
    return massResult + ' (результат в консоли)'
}`]