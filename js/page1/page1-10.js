{
    let task = createTaskBlock("№1 Заполните массив случайными числами из промежутка от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 45
    inputValueTwo.value = 15
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Заполнить массив случайными числами'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Заполните массив случайными числами из промежутка от 1 до 100.*/

    function masFill(num, num2){
        let mass = [];
        for(let i = 0; i <= 10; i++){
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }
        return mass.join(', ')
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = masFill(+inputValueOne.value, +inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№2 Дано некоторое число: 12345 Выведите в консоль все его символы с конца.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Число четное?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дано некоторое число: 12345 Выведите в консоль все его символы с конца. */
    function outputLetterReverseFunc(str) {
        let mass = []
        for(let i = str.length - 1; i >= 0 ; i--){
            mass.push(str[i])
        }
        return mass.join('')
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputLetterReverseFunc(inputValue.value)
    })
}
{
    let task = createTaskBlock(" №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите подмассивы из двух элементов нашего массива: [1, 2][3, 4][5, 6].")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Выведите подмассивы'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите подмассивы из двух элементов нашего массива: [1, 2][3, 4][5, 6].*/

    function divideMass(mass) {
        let str = ''
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 1){
                str += '[' + [mass[i-1], mass[i]] + '] '
            } else if(i == mass.length - 1 && i % 2 == 0){
                str += '[' + [mass[i], ' '] + '] '
            }
        }
        return str
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = divideMass(mass)
    })
}

{
    let task = createTaskBlock("№4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6] .")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = '1, 2, 3'
    inputValueTwo.value = '4, 5, 6'
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Слейте массивы в один новый'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6] .*/

    function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(mass, mass2)
    }

    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        let mass2 = inputValueTwo.value.split(/[,; ]+/)
        result.textContent = combineTwoMass(mass, mass2)
    })
}

let massFunc = [`function masFill(num, num2){
        let mass = [];
        for(let i = 0; i <= 10; i++){
            mass.push(Math.floor(Math.random() * (num2 - num) + num))
        }
        return mass.join(', ')
    }`,`function outputLetterReverseFunc(str) {
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
    }`,` function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(arr1, arr2)
    }`]

