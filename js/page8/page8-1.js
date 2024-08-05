/* №1 Дан массив: [[1, 2, 3],[1, 2],[1, 2, 3, 4, 5],[1],[1, 2, 3, 4],] Отсортируйте элементы массива по возрастанию количества элементов в подмассиве.*/

function massSort(){
    let mass = [[1, 2, 3],[1, 2],[1, 2, 3, 4, 5],[1],[1, 2, 3, 4]]
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < mass.length - i; j++){
            if(mass[j].length > mass[j+1]?.length){
                [mass[j], mass[j+1]] = [mass[j+1], mass[j]]
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}

createBlockNoData("№1 Дан массив: [[1, 2, 3],[1, 2],[1, 2, 3, 4, 5],[1],[1, 2, 3, 4],] Отсортируйте элементы массива по возрастанию количества элементов в подмассиве.", 'Отсортировать массив', massSort)

/* №2 Дан массив:[[2, 4, 5],[1, 2, 3],[0, 1, 1],[5, 7, 1],] Отсортируйте элементы массива по возрастанию суммы элементов подмассива.*/

function massSortTwo(){
    let mass = [[2, 4, 5],[1, 2, 3],[0, 1, 1],[5, 7, 1],]
    function sumMass(arr){
        if(arr != undefined){
            let sum = 0
            for(let i = 0; i < arr.length; i++){
                sum += arr[i]
            }
            return sum
        }
    }
    // метод 1
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < mass.length - i; j++){
            if(sumMass(mass[j]) > sumMass(mass[j+1]) ){
                [mass[j], mass[j+1]] = [mass[j+1], mass[j]]
            }	
        }	
    }
    // метод 2
    /*for(let i = 0; i < mass.length; i++){
        for(let j = i + 1; j < mass.length; j++){
            if(sumMass(mass[i]) > sumMass(mass[j]) ){
                let item = mass[i]
                mass[i] = mass[j]
                mass[j] = item
            }	
        }	
    }*/

    console.log(mass)
    return mass + ' (результат в консоли)'
}

createBlockNoData("№2 Дан массив:[[2, 4, 5],[1, 2, 3],[0, 1, 1],[5, 7, 1],] Отсортируйте элементы массива по возрастанию суммы элементов подмассива.", 'Отсортировать массив', massSortTwo)

/* №3 Выведите на экран следующую пирамидку:x,xx,xxx,xxxx,xxxxx*/

let taskThreeResult = document.querySelector('.task-three-result')
let str = ''
for(let i = 0; i < 5; i++){
    str += 'x'
    let block = document.createElement('div')
    block.textContent = str
    taskThreeResult.append(block)
}

let massFunc = [`let str = ''
for(let i = 0; i < 5; i++){
    str += 'x'
    let block = document.createElement('div')
    block.textContent = str
    taskThreeResult.append(block)
}`,`function massSort(){
    let mass = [[1, 2, 3],[1, 2],[1, 2, 3, 4, 5],[1],[1, 2, 3, 4]]
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < mass.length - i; j++){
            if(mass[j].length > mass[j+1]?.length){
                [mass[j], mass[j+1]] = [mass[j+1], mass[j]]
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`,`function massSortTwo(){
    let mass = [[2, 4, 5],[1, 2, 3],[0, 1, 1],[5, 7, 1],]
    function sumMass(arr){
        if(arr != undefined){
            let sum = 0
            for(let i = 0; i < arr.length; i++){
                sum += arr[i]
            }
            return sum
        }
    }
    // метод 1
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < mass.length - i; j++){
            if(sumMass(mass[j]) > sumMass(mass[j+1]) ){
                [mass[j], mass[j+1]] = [mass[j+1], mass[j]]
            }	
        }	
    }
    // метод 2
    /*for(let i = 0; i < mass.length; i++){
        for(let j = i + 1; j < mass.length; j++){
            if(sumMass(mass[i]) > sumMass(mass[j]) ){
                let item = mass[i]
                mass[i] = mass[j]
                mass[j] = item
            }	
        }	
    }*/

    console.log(mass)
    return mass + ' (результат в консоли)'
}`]