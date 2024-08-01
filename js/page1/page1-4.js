
{
    let task = createTaskBlock("№1 Выведите все целые числа от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все целые числа'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Выведите все целые числа от 1 до 100.*/

    function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputNum(+inputValueOne.value, +inputValueTwo.value)
    })
}
{
    let task = createTaskBlock("№2 Выведите все целые числа от -100 до 0.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = -100
    inputValueTwo.value = 0
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все целые числа'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Выведите все целые числа от -100 до 0.*/

    function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputNum(+inputValueOne.value, +inputValueTwo.value)
    })
}
{
    let task = createTaskBlock("№3 Выведите все целые числа от 100 до 1.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 100
    inputValueTwo.value = 1
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все целые числа'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Выведите все целые числа от 100 до 1.*/

    function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i >= numEnd; i--){
            rez += i
            if(i > numEnd){
                rez += ', '
            }
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputNum(+inputValueOne.value, +inputValueTwo.value)
    })
}
{
    let task = createTaskBlock("№4 Выведите все четные числа из промежутка от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все четные числа'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Выведите все четные числа из промежутка от 1 до 100.*/

    function outputNum(numStart, numEnd){
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
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputNum(+inputValueOne.value, +inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№5 Выведите все числа кратные трем в промежутке от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести все числа кратные 3'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №5 Выведите все числа кратные трем в промежутке от 1 до 100.*/

    function outputNum(numStart, numEnd){
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
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = outputNum(+inputValueOne.value, +inputValueTwo.value)
    })
}

let massFunc = [`function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }`,`function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i <= numEnd; i++){
            rez += i
            if(i < numEnd){
                rez += ', '
            }
        }
        return rez
    }`,`function outputNum(numStart, numEnd){
        let rez = ''
        for(let i = numStart; i >= numEnd; i--){
            rez += i
            if(i > numEnd){
                rez += ', '
            }
        }
        return rez
    }`, `function outputNum(numStart, numEnd){
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
    }`,`function outputNum(numStart, numEnd){
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
