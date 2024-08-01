{
    let task = createTaskBlock("№1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 1234565321
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Все цифры расположены по возрастанию?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.*/

    function numIncr(num){
        let numberStr = String(num);
        let rez = ''
        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] > numberStr[i+1]){
                rez = "Числа не расположены по возрастанию"
                break;
            } 
            if(numberStr[i] == numberStr.length){
                rez = "Числа расположены по возрастанию"
            }
        }
        return rez
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = numIncr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, , 2, 3, , 5'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить из массива все пустые строки'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.*/

    function deleteEmptyElem(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == ''){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = deleteEmptyElem(mass)
    })
}
{
    let task = createTaskBlock("№3 Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = '[[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2]]'
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Отсортировать элементы в каждом подмассиве'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве.*/
    
    function massSubMassSort(mass){
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                for(let z = 0; z < mass[i].length - j; z++){
                    if(mass[i][z] > mass[i][z+1]){
                        [mass[i][z], mass[i][z+1]] = [mass[i][z+1], mass[i][z]]
                    }
                }
            }  
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] 
        result.textContent = massSubMassSort(mass)
    })
}

{
    let task = createTaskBlock("№4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5]; Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = '1, 2, 3'
    inputValueTwo.value = '1, 2, 3, 4, 5'
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить из большего массива лишние элементы'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5]; Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.*/

    buttonFunc.addEventListener('click', () => {
        
        let mass = inputValueOne.value.split(/[,; ]+/)
        let mass2 = inputValueTwo.value.split(/[,; ]+/)
        function deleteLengMass(mass, mass2) {
            if(mass.length > mass2.length){
                mass.length = mass2.length;
            } else {
                mass2.length = mass.length;
            }
            result.textContent = mass + "\n"
            result.textContent += mass2
        }

        deleteLengMass(mass, mass2)
    })
}

let massFunc = 
    [`function numIncr(num){
        let numberStr = String(num);
        let rez = ''
        for(let i = 0; i < numberStr.length; i++){
            if(numberStr[i] > numberStr[i+1]){
                rez = "Числа не расположены по возрастанию"
                break;
            } 
            if(numberStr[i] == numberStr.length){
                rez = "Числа расположены по возрастанию"
            }
        }
        return rez
    }`,
        ` function deleteEmptyElem(mass){
        for(let i = 0; i < mass.length; i++){
            if(mass[i] == ''){
                mass.splice(i, 1);
                i--;
            }
        }
        return mass.join(', ')
    }`,
        `function massSubMassSort(mass){
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                for(let z = 0; z < mass[i].length - j; z++){
                    if(mass[i][z] > mass[i][z+1]){
                        [mass[i][z], mass[i][z+1]] = [mass[i][z+1], mass[i][z]]
                    }
                }
            }  
        }
        return mass.join(', ')
    }`,
`function deleteLengMass(mass, mass2) {
        if(mass.length > mass2.length){
            mass.length = mass2.length;
        } else {
            mass2.length = mass.length;
        }
        return mass2 + '\n' + mass
    }`]