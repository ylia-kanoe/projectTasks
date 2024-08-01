{
    let task = createTaskBlock("№1 Дана строка. Если в этой строке более одного символа, выведите предпоследний символ этой строки.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'Любая строка с любыми символами'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Предпоследний символ'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана строка. Если в этой строке более одного символа, выведите предпоследний символ этой строки.*/

    function lastLetterThree(str) {
        if(str.length > 1){
            return 'Предпоследний символ: ' + str[str.length - 2];
        } else {
           return "Строка в 1 символ";
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = lastLetterThree(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 45
    inputValueTwo.value = 15
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Первое делится на второе?'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.*/

    function delOst(num, num2){
        if(+num % +num2){
            return "Делится с остатком"
        } else {
             return "Делится без остатка"
        }
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = delOst(+inputValueOne.value, +inputValueTwo.value)
    })
}

let massFunc = [`function lastLetterThree(str) {
        if(str.length > 1){
            return 'Предпоследний символ: ' + str[str.length - 2];
        } else {
           return "Строка в 1 символ";
        }
    }`,`function delOst(num, num2){
        if(+num % +num2){
            return "Делится с остатком"
        } else {
             return "Делится без остатка"
        }
    }`]
