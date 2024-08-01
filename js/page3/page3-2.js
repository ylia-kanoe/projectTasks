{
    let task = createTaskBlock("№1 Выведите все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValueOne = document.createElement('input')
    let inputValueTwo = document.createElement('input')
    inputValueOne.value = 1
    inputValueTwo.value = 1000
    inputValueOne.placeholder = "Введите число"
    inputValueTwo.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Вывести числа, у которых предпоследняя цифра четная'
    task.append(inputValueOne)
    task.append(inputValueTwo)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Выведите все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.*/

    function numPenultEven(num, num2) {
        let mass = []
        for(let i = num; i <= num2; i++){
            if(String(i)[String(i).length-2] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = numPenultEven(inputValueOne.value, inputValueTwo.value)
    })
}

{
    let task = createTaskBlock("№2 Дан массив. Удалите из него каждый пятый элемент.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Удалить каждый пятый элемент'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дан массив. Удалите из него каждый пятый элемент.*/

    function delFiveElement(mass){
        let count = 0
        for(let i = 0; i < mass.length; i++){
            count ++;
            if(count === 5){
                mass.splice(i,1);
                i--;
                count = 0;
            }
        }
        return mass
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = delFiveElement(mass)
    })
}

{
    let task = createTaskBlock("№3 Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 5
    inputValue.placeholder = "Введите число"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Сделать строку, содержащую столько нулей, сколько указано'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'.*/

    function createStr(num){
        let str = '';
        for(let i = 0; i < num; i++)(
            str += '0'
        )
        return str
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = createStr(inputValue.value)
    })
}

{
    let task = createTaskBlock("№4 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'aaa bbb ccc eee fff'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Удалить каждое второе слово"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'.*/

    function delStrSecondWord(str){
        let mass = str.split(' ');
        let str2 = '';
        let count = 0;
    
        for(i = 0; i < mass.length; i++){
            if(i % 2 === 0){       
                count++;
                str2 += mass[i] + ' '; 
            } 
            if(count === 2){
                count = 0;
            }
        }
           return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = delStrSecondWord(inputValue.value)
    })
}

{
    let task = createTaskBlock("№5 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива.")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = '[[1, 2, 3],[4, 5, 6],[7, 8, 9],]'
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Найти сумму элементов'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /*№5 Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива.*/
    
    function sumMass(mass){
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                sum +=mass[i][j];
            }
        }
        return sum
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = [[1, 2, 3],[4, 5, 6],[7, 8, 9],]
        result.textContent = sumMass(mass)
    })
}



let massFunc = 
    [`function numPenultEven(num, num2) {
        let mass = []
        for(let i = num; i <= num2; i++){
            if(String(i)[String(i).length-2] % 2 == 0){
                mass.push(i)
            }
        }
        return mass.join(', ')
    }`,
        `function delFiveElement(mass){
        let count = 0
        for(let i = 0; i < mass.length; i++){
            count ++;
            if(count === 5){
                mass.splice(i,1);
                i--;
                count = 0;
            }
        }
        return mass
    }`,
        `function createStr(num){
        let str = '';
        for(let i = 0; i < num; i++)(
            str += '0'
        )
        return str
    }`,
`function delStrSecondWord(str){
        let mass = str.split(' ');
        let str2 = '';
        let count = 0;
    
        for(i = 0; i < mass.length; i++){
            if(i % 2 === 0){       
                count++;
                str2 += mass[i] + ' '; 
            } 
            if(count === 2){
                count = 0;
            }
        }
           return str2
    }`,`function sumMass(mass){
        let sum = 0;
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass[i].length; j++){
                sum +=mass[i][j];
            }
        }
        return sum
    }`]