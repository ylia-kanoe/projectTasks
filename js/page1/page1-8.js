
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

{
    let task = createTaskBlock("№1 Заполните массив целыми числами от 1 до 10.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 10
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Заполнить массив числами'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Заполните массив целыми числами от 1 до 10.*/

    function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            mass.push(i);
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = createMas(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№2 Заполните массив четными числами из промежутка от 1 до 100.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 100
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Заполнить массив числами'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Заполните массив четными числами из промежутка от 1 до 100.*/

    function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            if(i % 2 == 0){
                mass.push(i);
            }
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = createMas(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1.456, 2.125, 3.32, 4.1, 5.34'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Округлите элементы массива'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.*/

    function roundMass(mass) {
        for (i = 0; i < mass.length; i++) {
            mass[i] = Number(mass[i]).toFixed(1)
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = roundMass(mass)
    })
}

let massFunc = [`function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            mass.push(i);
        }
        return mass.join(', ')
    }`,`function createMas(numStart, numEnd) {
        let mass = [];
        for (i = +numStart; i <= +numEnd; i++) {
            if(i % 2 == 0){
                mass.push(i);
            }
        }
        return mass.join(', ')
    }`,`function roundMass(mass) {
        for (i = 0; i < mass.length; i++) {
            mass[i] = Number(mass[i]).toFixed(1)
        }
        return mass.join(', ')
    }`]

