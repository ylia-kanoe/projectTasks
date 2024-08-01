ЧИСЛО

{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 12345653
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* */

    

    buttonFunc.addEventListener('click', () => {
        result.textContent = firstEvenNum(inputValue.value)
    })
}

СТРОКА

{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'aaa bbb ccc eee fff'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ""
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /**/


    buttonFunc.addEventListener('click', () => {
        result.textContent = delStrSecondWord(inputValue.value)
    })
}
МАССИВ

{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /**/

   
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = delFiveElement(mass)
    })
}
/* ДВА ЧИСЛА */


{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 1000
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* */

    
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = createMass(inputValueOne.value, inputValueTwo.value)
    })
}

/* ДВЕ СТРОКИ */


{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 'мышь'
    inputValueTwo.value = 'кошь'
    inputValueOne.placeholder = "Введите слово"
    inputValueTwo.placeholder = "Введите слово"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* */

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkSame(inputValueOne.value, inputValueTwo.value)
    })
}


/* ДВА МАССИВА*/


{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = '1, 2, 3'
    inputValueTwo.value = '1, 2, 3, 4, 5'
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* */

    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        let mass2 = inputValueTwo.value.split(/[,; ]+/)
        deleteLengMass(mass, mass2)
    })
}

СТРУКТУРА
{
    let task = createTaskBlock("")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = ``
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = ''
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /* */
    
    
    
    buttonFunc.addEventListener('click', () => {
        let data = []
        result.textContent = sumData(data)
    })
}