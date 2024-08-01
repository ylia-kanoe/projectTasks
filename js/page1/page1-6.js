
{
    let task = createTaskBlock("№1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1,2,3,4,5,6,7'
    inputValue.placeholder = "введите элементы массива через ',', '.' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму квадратов элементов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.*/

    function sumSquares(mass){
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + mass[i]*mass[i];
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,;. ]+/)
        result.textContent = sumSquares(mass)
    })
}

{
    let task = createTaskBlock("№2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '4,9,25'
    inputValue.placeholder = "введите элементы массива через ',', '.' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму квадратов элементов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.*/

    function sumSquareRoots(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + Math.sqrt(+mass[i]);
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,;. ]+/)
        result.textContent = sumSquareRoots(mass)
    })
}

{
    let task = createTaskBlock("№3 Дан массив с числами. Найдите сумму положительных элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value =  '1,-2,3,-4,5,6,7,8,-9,-10,-40,-50,100'
    inputValue.placeholder = "введите элементы массива через ',', '.' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму квадратов элементов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дан массив с числами. Найдите сумму положительных элементов этого массива.*/

    function sumPositiveElem(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0){
                sum = sum + +mass[i];
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,;. ]+/)
        result.textContent = sumPositiveElem(mass)
    })
}

{
    let task = createTaskBlock("№4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value =  '1,2,3,4,5,6,7,8,9,10,40,50'
    inputValue.placeholder = "введите элементы массива через ',', '.' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму квадратов элементов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.*/

    function sumZeroBetweenTen(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0 && mass[i] < 10){
                sum = sum + +mass[i];
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,;. ]+/)
        result.textContent = sumZeroBetweenTen(mass)
    })
}

let massFunc = [`function sumSquares(mass){
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + mass[i]*mass[i];
        }
        return sum
    }`,`function sumSquareRoots(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            sum = sum + Math.sqrt(+mass[i]);
        }
        return sum
    }`, `function sumPositiveElem(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0){
                sum = sum + +mass[i];
            }
        }
        return sum
    }`,`function sumZeroBetweenTen(mass) {
        let sum = 0
        for(let i = 0; i < mass.length; i++){
            if(mass[i] > 0 && mass[i] < 10){
                sum = sum + +mass[i];
            }
        }
        return sum
    }`]

