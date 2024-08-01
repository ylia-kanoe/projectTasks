{
    let task = createTaskBlock("№1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Любая строка где Не более Двух заглавных букв, Ой'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Проверить, что в этой строке не более двух заглавных букв'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/

    function checkUpper(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] == str[i].toUpperCase() && str[i] != ' '){
                count ++;
            }
        }
        if(count > 2){
            return "Строка содержит больше 2 заглавных букв"
        } else {
            return "Строка содержит не более 2 заглавных букв"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = checkUpper(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1 22 333 4444 22 5555 1'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить из строки все подстроки, в которых символов больше 3'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'.*/

    function deleteStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                str2 += mass[i] + ' ';
            }
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = deleteStr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3].")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = '1, 2, 3'
    inputValueTwo.value = 'a, b, c'
    inputValueOne.placeholder = "введите элементы массива через ',' или пробел"
    inputValueTwo.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Слейте массивы в один новый'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3].*/

    function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(mass[0], mass[1], mass2, mass[2])
    }

    buttonFunc.addEventListener('click', () => {
        let mass = inputValueOne.value.split(/[,; ]+/)
        let mass2 = inputValueTwo.value.split(/[,; ]+/)
        result.textContent = combineTwoMass(mass, mass2)
    })
}

let massFunc = 
    [`function checkUpper(str){
        let count = 0;
        for(let i = 0; i < str.length; i++){
            if(str[i] == str[i].toUpperCase() && str[i] != ' '){
                count ++;
            }
        }
        if(count > 2){
            return "Строка содержит больше 2 заглавных букв"
        } else {
            return "Строка содержит не более 2 заглавных букв"
        }
    }`,
        `function deleteStr(str){
        let mass = str.split(' ');
        let str2 = '';
        for(let i = 0; i < mass.length; i++){
            if(mass[i].length <= 3){
                str2 += mass[i] + ' ';
            }
        }
        return str2
    }`,
        `function combineTwoMass(mass, mass2){
        let massRez = []
        return massRez.concat(mass[0], mass[1], mass2, mass[2])
    }`]