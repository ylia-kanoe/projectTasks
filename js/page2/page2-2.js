{
    let task = createTaskBlock("№1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Количество отрицательных элементов'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.*/

    function negativeElement(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                count += 1;
            }
        }
        return count
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = negativeElement(mass)
    })
}

{
    let task = createTaskBlock("№2 Дан массив с числами. Оставьте в нем только положительные числа.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить отрицательные элементы'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан массив с числами. Оставьте в нем только положительные числа.*/

    function delNegativeElement(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = delNegativeElement(mass)
    })
}

{
    let task = createTaskBlock("№3 Дана строка. Удалите предпоследний символ из этой строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Дана любая строка'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти позицию первого нуля'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дана строка. Удалите предпоследний символ из этой строки.*/

    buttonFunc.addEventListener('click', () => {
        result.textContent = inputValue.value.slice(0, -2) +  inputValue.value.slice(-1);
    })
}

{
    let task = createTaskBlock("№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, -2, 3, 4, -5, -6, 4, 3, -5, -5, -6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить отрицательные элементы'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.*/

    function sumFirstDelSecond(mass){
        let sum1 = 0;
        let sum2 = 0;

        for(let i = 0; i < mass.length / 2; i++){
            sum1 = sum1 + +mass[i];
        }
        for(let i = mass.length - 1; i > (mass.length / 2) - 1; i--){
            sum2 = sum2 + +mass[i];
        }
        return (sum1 / sum2).toFixed(2)
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = sumFirstDelSecond(mass)
    })
}


let massFunc = [`function negativeElement(mass){
        let count = 0;
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                count += 1;
            }
        }
        return count
    }`, `function delNegativeElement(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] < 0){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass
    }`,
    `str.slice(0, -2) +  str.slice(-1);`, `function sumFirstDelSecond(mass){
        let sum1 = 0;
        let sum2 = 0;

        for(let i = 0; i < mass.length / 2; i++){
            sum1 = sum1 + +mass[i];
        }
        for(let i = mass.length - 1; i > (mass.length / 2) - 1; i--){
            sum2 = sum2 + +mass[i];
        }
        return (sum1 / sum2).toFixed(2)
    }`]