/* №1 Дана строка, содержащая в себе дробь: '12/16' апишите код, который распишет процесс сокращения дроби, как в школе: '12/16 = 6/8 = 3/4'*/

let reducingFraction = document.querySelector('.reducing-fraction')

/* №2 Реализуйте алгоритм Решето Эратосфена для поиска простых чисел в заданном промежутке.*/

function sieveEratosfen (num, num2){
    let mass = []
    for(let i = num; i <= num2; i++){
        mass.push(+i)
    }

    for(let i = 1; i <= mass.length; i++){
        for(let j = i + 1 ; j <= mass.length; j++){
            if(mass[j] % mass[i] == 0){
                mass.splice(j, 1)
            }
        }
    }
    return mass.join(', ')
}

createBlockNumTwo("№2 Реализуйте алгоритм Решето Эратосфена для поиска простых чисел в заданном промежутке.", 1, 100, 'Решето Эратосфена', sieveEratosfen)

/* №3 Напишите код, который выведет на канвасе тикающие стрелочные часы, показывающие текущее время.*/
let hour = {
    0: [75, 35],
    1: [95, 45],
    2: [105, 60],
    3: [115, 75],
    4: [105, 90],
    5: [90, 105],
    6: [75, 115],
    7: [60, 110],
    8: [45, 90],
    9: [35, 75],
    10: [45, 55],
    11: [60, 40],
    12: [75, 35],
    13: [95, 45],
    14: [105, 60],
    15: [115, 75],
    16: [105, 90],
    17: [90, 105],
    18: [75, 115],
    19: [60, 110],
    20: [45, 90],
    21: [35, 75],
    22: [45, 55],
    23: [60, 40]
}
function draw() {
    let date = new Date()
    let hoursTime = date.getHours()
    let minutesTime = date.getMinutes()
    
    //console.log(minutesTime)
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
    ctx.moveTo(110, 75);
    ctx.stroke();

    /* Часы */
    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(hour[hoursTime][0], hour[hoursTime][1]);
    ctx.closePath();
    ctx.stroke();
    
        
    /* Минуты */
    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(35, 75);
    ctx.closePath();
    ctx.stroke();
}
  
  draw();

/*

№4 Дана квадратная HTML таблица с четным количеством рядом и колонок. По нажатию на кнопку заполните центр таблицы следующим образом:

*/

let taskFourItemTd = document.querySelectorAll('.task-four-table td')
let taskFourItemTr = document.querySelectorAll('.task-four-table tr')
let tableFill = document.getElementById('tableFill')

tableFill.addEventListener('click', () => {
    let itemsTrOneHalf = taskFourItemTr.length / 2
    let itemsTrTwoHalf = itemsTrOneHalf + 1
    let itemsTdOneHalf = taskFourItemTd.length / taskFourItemTr.length / 2
    let itemsTdTwoHalf = itemsTdOneHalf + 1
    Array.from(taskFourItemTd).forEach((elem, i) => {
        if(i % itemsTdOneHalf == 0){

        elem.textContent = '+'
        }
    
    })
})

// 14 15 20 21


let massFunc = [``, ``, ``, `function sieveEratosfen (num, num2){
    let mass = []
    for(let i = num; i <= num2; i++){
        mass.push(+i)
    }

    for(let i = 1; i <= mass.length; i++){
        for(let j = i + 1 ; j <= mass.length; j++){
            if(mass[j] % mass[i] == 0){
                mass.splice(j, 1)
            }
        }
    }
    return mass.join(', ')
}`]