
{
    let task = createTaskBlock("№1 Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '023m0df0dfg0'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти позицию третьего нуля'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.*/

    function findPos(str){
        let mass = [];
        for(let i = 0; i <= str.length; i++){
            if(str[i] == '0'){
                mass.push(i);
            }
        }
        return mass
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = findPos(inputValue.value)
    })
}

{
    let task = createTaskBlock("№2 Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'abcdefg'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти позицию третьего нуля'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'.*/

    function deleteSymbol(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if((i + 1) % 3){
                str2 += str[i];
            }
        }
       return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = deleteSymbol(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить отрицательные элементы'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.*/

    function delEven(mass){
        let sumChet = 0;
        let sumNechet = 0;
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 0){
                sumChet += +mass[i];
            } else {
                sumNechet += +mass[i];
            }
        }
        return sumChet/sumNechet
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = delEven(mass)
    })
}
let massFunc = 
    [`function findPos(str){
        let mass = [];
        for(let i = 0; i <= str.length; i++){
            if(str[i] == '0'){
                mass.push(i);
            }
        }
        return mass
    }`,
        `function deleteSymbol(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if((i + 1) % 3){
                str2 += str[i];
            }
        }
       return str2
    }`,
        `function delEven(mass){
        let sumChet = 0;
        let sumNechet = 0;
        for(let i = 0; i < mass.length; i++){
            if(i % 2 == 0){
                sumChet += +mass[i];
            } else {
                sumNechet += +mass[i];
            }
        }
        return sumChet/sumNechet
    }
`]