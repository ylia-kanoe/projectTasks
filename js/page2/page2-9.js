
{
    let task = createTaskBlock("№1 Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 123456
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму пар цифр числа'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56.*/

    function sumNum(num){
        let numberStr = String(num);
        let sumNumber = '';
        let sum = 0
        for(let i = 0; i < numberStr.length; i++){
            if(i % 2 == 1){
                sumNumber += numberStr[i-1] + numberStr[i]
                sum += +sumNumber
                sumNumber = ''
            }
        }
        return sum
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = sumNum(inputValue.value)
    })
}


{
    let task = createTaskBlock("№2 Дан массив с числами: [1, 2, 3, 4, 5] Выведите элементы этого массива в обратном порядке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести элементы массива в обратном порядке'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан массив с числами: [1, 2, 3, 4, 5] Выведите элементы этого массива в обратном порядке.*/

    function redMassive(mass){
        let mass2 = [];
        for(let i = mass.length - 1; i >= 0; i--){
            mass2.push(mass[i])
        }
        return mass2.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = redMassive(mass)
    })
}



let massFunc = 
    [`function sumNum(num){
        let numberStr = String(num);
        let sumNumber = '';
        let sum = 0
        for(let i = 0; i < numberStr.length; i++){
            if(i % 2 == 1){
                sumNumber += numberStr[i-1] + numberStr[i]
                sum += +sumNumber
                sumNumber = ''
            }
        }
        return sum
    }`,
        `function redMassive(mass){
        let mass2 = [];
        for(let i = mass.length - 1; i >= 0; i--){
            mass2.push(mass[i])
        }
        return mass2.join(', ')
    }`]