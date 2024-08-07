
let workingTasks = document.querySelector('.working-tasks')
let iconPre = document.querySelectorAll('.icon-pre')
let icon = document.querySelectorAll('.icon')

function createTaskBlock(nameTask){
    let blockTask = document.createElement('div')
    blockTask.classList.add('task')
    let textTask = document.createElement('p')
    textTask.classList.add('text-task')
    textTask.textContent = nameTask
    let icon = document.createElement('div')
    icon.classList.add('icon')
    icon.textContent = '🛈'
    let iconPre = document.createElement('pre')
    iconPre.classList.add('icon-pre')
    blockTask.append(textTask)
    blockTask.append(icon)
    icon.append(iconPre)
    workingTasks.appendChild(blockTask)

    return blockTask
}

/* ЧИСЛО */

function createBlockNum(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите число"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)
   
    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}

/* СТРОКА */

function createBlockStr(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите строку"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}

/* МАССИВ */

function createBlockMass(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = buttonFuction(mass)
    })
}

/* ДВА ЧИСЛА */

function createBlockNumTwo(taskTitle, paramOne, paramTwo, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramOne
    inputValueTwo.value = paramTwo
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValueOne.value, inputValueTwo.value)
    })
}

/* ДВЕ СТРОКИ */

function createBlockStrTwo(taskTitle, paramOne, paramTwo, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramOne
    inputValueTwo.value = paramTwo
    inputValueOne.placeholder = "Введите слово"
    inputValueTwo.placeholder = "Введите слово"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValueOne.value, inputValueTwo.value)
    })
}

/* ДВА МАССИВА*/

function createBlockMassTwo(taskTitle, paramOne, paramTwo, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramOne
    inputValueTwo.value = paramTwo
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите элементы массива через ',' или пробел"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        let mass2 = inputValueTwo.value.split(/[,; ]+/)
        result.textContent = buttonFuction(mass, mass2)
    })
}


/* ЧИСЛО И СТРОКА */

function createBlockNumStr(taskTitle, paramNum, paramStr, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramNum
    inputValueTwo.value = paramStr
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите строку"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValueOne.value, inputValueTwo.value)
    })
}

/* ЧИСЛО И МАССИВ */

function createBlockNumMass(taskTitle, paramMass, paramNum, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramMass
    inputValueTwo.value = paramNum
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "Введите число"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        result.textContent = buttonFuction(mass, inputValueTwo.value)
    })
}

/* ТРИ ЧИСЛА */ 

function createBlockNumThree(taskTitle, paramOne, paramTwo, paramThree, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let inputValueThree = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueOne.value = paramOne
    inputValueTwo.value = paramTwo
    inputValueThree.value = paramThree
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    inputValueThree.placeholder = "Введите число"
    buttonFunc.textContent = buttonName

    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(inputValueThree)
    task.append(result)
    task.append(buttonFunc)
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValueOne.value, inputValueTwo.value, inputValueThree.value)
    })
}

/* ТРИ СТРОКИ И ЧИСЛО */ 

function createBlockNumFour(taskTitle, paramNum, paramOne, paramTwo, paramThree, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValueNum = document.createElement('input')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    let inputValueThree = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValueNum.value = paramNum
    inputValueOne.value = paramOne
    inputValueTwo.value = paramTwo
    inputValueThree.value = paramThree
    inputValueNum.placeholder = "Введите число"
    inputValueOne.placeholder = "Введите слово"
    inputValueTwo.placeholder = "Введите слово"
    inputValueThree.placeholder = "Введите слово"
    buttonFunc.textContent = buttonName

    task.append(inputValueNum)
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(inputValueThree)
    task.append(result)
    task.append(buttonFunc)
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValueNum.value, inputValueOne.value, inputValueTwo.value, inputValueThree.value)
    })
}


/* СТРУКТУРА */

function createBlockStruct(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let textMass = document.createElement('p')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    textMass.textContent = param
    buttonFunc.textContent = buttonName

    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        let data = param
        result.textContent = buttonFuction(data)
    })
}

/* БЕЗ ВВОДНЫХ ДАННЫХ */

function createBlockNoData(taskTitle, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    buttonFunc.textContent = buttonName

    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction()
    })
}

/* ДАТЫ */

function createBlockDate(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите дату в формате 'гггг-мм-дд'"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}
/* СЕКУНДЫ */

function createBlockSecond(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите секунды"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}

/* ГОДА */

function createBlockYear(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите год"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}


/* СИМВОЛ */

function createBlockSymbol(taskTitle, param, buttonName, buttonFuction){
    let task = createTaskBlock(taskTitle)
    let result = document.createElement('p')
    let inputValue = document.createElement('input')
    let buttonFunc = document.createElement('button')

    result.classList.add('result')

    inputValue.value = param
    inputValue.placeholder = "Введите символ"
    buttonFunc.textContent = buttonName

    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    buttonFunc.addEventListener('click', () => {
        result.textContent = buttonFuction(inputValue.value)
    })
}
