
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


const objReference = {
    'Дано число. Проверьте, отрицательное оно или нет': "page1-1.html",
    'Дана строка. Выведите длину этой строки': "page1-1.html",
    'Дана строка. Выведите последний символ строки': "page1-1.html",
    'Дано число. Проверьте, четное оно или нет': "page1-1.html",
    'Даны два слова. Проверьте, что первые буквы этих слов совпадают': "page1-1.html",
    'Дано число. Выведите первую цифру этого числа': "page1-2.html",
    "Дано число. Выведите последнюю цифру этого числа" : "page1-2.html",
    "Дано число. Выведите сумму первой и последней цифры этого числа" : "page1-2.html",
    "Дано число. Выведите количество цифр в этом числе" : "page1-2.html",
    "Даны два числа. Проверьте, что первые цифры этих чисел совпадают" : "page1-2.html",
    "Дана строка. Если в этой строке более одного символа, выведите предпоследний символ этой строки" : "page1-3.html",
    "Даны два целых числа. Проверьте, что первое число без остатка делится на второе" : "page1-3.html",
    "Выведите все целые числа от 1 до 100" : "page1-4.html",
    "Выведите все целые числа от -100 до 0" : "page1-4.html",
    "Выведите все целые числа от 100 до 1" : "page1-4.html",
    "Выведите все четные числа из промежутка от 1 до 100" : "page1-4.html",
    "Выведите все числа кратные трем в промежутке от 1 до 100" : "page1-4.html",
    "Найдите сумму всех целых чисел от 1 до 100" : "page1-5.html",
    "Найдите сумму всех целых четных чисел в промежутке от 1 до 100" : "page1-5.html",
    "Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100" : "page1-5.html",
    "Даны два целых числа. Найдите остаток от деления первого числа на второе" : "page1-5.html",
    "Дана некоторая строка. Переберите и выведите по очереди все символы с конца строки" : "page1-5.html",
    "Дан массив с числами. Найдите сумму квадратов элементов этого массива" : "page1-6.html",
    "Дан массив с числами. Найдите сумму квадратных корней элементов этого массива" : "page1-6.html",
    "Дан массив с числами. Найдите сумму положительных элементов этого массива" : "page1-6.html",
    "Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти" : "page1-6.html",
    "Дана строка: 'abcde' Получите массив букв этой строки" : "page1-7.html",
    "Дано некоторое число: 12345 Получите массив цифр этого числа" : "page1-7.html",
    "Дано некоторое число: 12345 Переверните его: 54321" : "page1-7.html",
    "Дано некоторое число: 12345 Найдите сумму цифр этого числа" : "page1-7.html",
    "Заполните массив целыми числами от 1 до 10" : "page1-8.html",
    "Заполните массив четными числами из промежутка от 1 до 100" : "page1-8.html",
    "Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части" : "page1-8.html",
    "Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://" : "page1-9.html",
    "Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html" : "page1-9.html",
    "Дан массив с числами. Увеличьте каждое число из массива на 10 процентов" : "page1-9.html",
    "Заполните массив случайными числами из промежутка от 1 до 100" : "page1-10.html",
    "Дано некоторое число: 12345 Выведите все его символы с конца" : "page1-10.html",
    "Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите подмассивы из двух элементов нашего массива: [1, 2][3, 4][5, 6]" : "page1-10.html",
    "Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]" : "page1-10.html",
    "Дана некоторая строка. Найдите позицию первого нуля в строке" : "page2-1.html",
    "Выведите все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти" : "page2-1.html",
    "Дан массив. Удалите из него элементы с заданным значением" : "page2-1.html",
    "Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива" : "page2-1.html",
    "Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве" : "page2-2.html",
    "Дан массив с числами. Оставьте в нем только положительные числа" : "page2/page2-2.html",
    "Дана строка. Удалите предпоследний символ из этой строки" : "page2-2.html",
    "Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов" : "page2-2.html",
    "Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова" : "page2-3.html",
    "Дана некоторая строка. Найдите позицию третьего нуля в строке" : "page2-3.html",
    "Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел" : "page2-3.html",
    "Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: {year: '2025',month: '12',day: '31',}" : "page2-3.html",
    "Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке" : "page2-4.html",
    "Дан объект с ключами и значениями {'year': '2025','month': '12','day': '31',}. Запишите в первый массив ключи объекта, а во второй - значения" : "page2-4.html",
    "Дано число. Выведите количество четных цифр в этом числе" : "page2-4.html",
    "Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'" : "page2-4.html",
    "Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'" : "page2-4.html",
    "Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке" : "page2-5.html",
    "Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'" : "page2-5.html",
    "Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях" : "page2-5.html",
    "Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки" : "page2-6.html",
    "Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987]" : "page2-6.html",
    "Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567'" : "page2-6.html",
    "Дана некоторая строка: 'AbCdE' Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее: 'aBcDe'" : "page2-6.html",
    "Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56]" : "page2-6.html",
    "Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'" : "page2-6.html",
    "Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'" : "page2-7.html",
    "Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем" : "page2-7.html",
    "Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28" : "page2-7.html",
    "Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв" : "page2-8.html",
    "Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'" : "page2-8.html",
    "Даны два массива: let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]" : "page2-8.html",
    "Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56" : "page2-9.html",
    "Дан массив с числами: [1, 2, 3, 4, 5] Выведите элементы этого массива в обратном порядке" : "page2-9.html",
    "Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв" : "page2-10.html",
    "Дано число. Получите первую четную цифру с конца этого числа" : "page2-10.html",
    "Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'" : "page2-10.html",
    "Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд" : "page2-10.html",
    "Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию" : "page3-1.html",
    "Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки" : "page3-1.html",
    "Дан массив: [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве" : "page3-1.html",
    "Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [1, 2, 3, 4, 5]; Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми" : "page3-1.html",
    "Выведите все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная" : "page3-2.html",
    "Дан массив. Удалите из него каждый пятый элемент" : "page3-2.html",
    "Дана некоторая переменная с числом: let num = 5; Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'" : "page3-2.html",
    "Дана некоторая строка со словами: 'aaa bbb ccc eee fff' Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'" : "page3-2.html",
    "Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Найдите сумму элементов этого массива" : "page3-2.html",
    "Дан массив со словами.Удалите из него слова, состоящие более чем из трех символов" : "page3-3.html",
    "Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными" : "page3-3.html",
    "Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны" : "page3-3.html",
    "Дан массив: [[[11, 12, 13], [14, 15, 16], [17, 17, 19],], [[21, 22, 23], [24, 25, 26], [27, 27, 29],], [[31, 32, 33], [34, 35, 36], [37, 37, 39],],] Найдите сумму элементов этого массива" : "page3-3.html",
    "Выведите все числа в промежутке от 10 до 1000, у которых первая цифра четная" : "page3-4.html",
    "Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]" : "page3-4.html",
    "Дан следующий объект: let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта" : "page3-4.html",
    "Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'" : "page3-5.html",
    "Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5" : "page3-5.html",
    "Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль" : "page3-5.html",
    "Дан массив с числами. Проверьте, что в нем есть число, содержащее в себе цифру 3" : "page3-5.html",
    "Дано некоторое число: 35142 Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345" : "page3-5.html",
    "Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'" : "page3-5.html",
    "Дан следующий объект: let obj = { 1: { 1: { 1: 111, 2: 112, 3: 113, }, 2: { 1: 121, 2: 122, 3: 123, }, }, 2: { 1: { 1: 211, 2: 212, 3: 213, }, 2: { 1: 221, 2: 222, 3: 223, }, }, 3: { 1: { 1: 311, 2: 312, 3: 313, }, 2: { 1: 321, 2: 322, 3: 323, }, }, } Найдите сумму элементов этого объекта" : "page3-5.html",
    "Дан массив с числами. Удалите из него числа, состоящие более чем из трех цифр" : "page3-6.html",
    "Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля" : "page3-6.html",
    "Дан некоторый массив, например, вот такой: [123, 456, 789] Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]" : "page3-6.html",
    "Дан следующая структура: let data = [ { 1: 11, 2: 12, 3: 13, }, { 1: 21, 2: 22, 3: 23, }, { 1: 24, 2: 25, 3: 26, }, ]; Найдите сумму элементов этой структуры" : "page3-6.html",
    "Дана строка со словами. Отсортируйте слова в алфавитном порядке" : "page3-7.html",
    "Дано число. Получите массив делителей этого числа" : "page3-7.html",
    "Даны два числа. Получите массив общих делителей этих чисел" : "page3-7.html",
    "Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы" : "page3-7.html",
    "Через запятую написаны числа. Получите максимальное из этих чисел" : "page3-7.html",
    "Дан массив с числами. После каждого однозначного числа вставьте еще такое же" : "page3-7.html",
    "Дана строка. Удалите из нее все гласные буквы" : "page3-7.html",
    "Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке" : "page3-7.html",
    "Дан следующая структура: let data = [ { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3], }, ] Найдите сумму элементов этой структуры" : "page3-7.html",
    "Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3" : "page3-8.html",
    "Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'" : "page3-8.html",
    "Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'" : "page3-8.html",
    "Дана строка в формате: 'camelCase' Преобразуйте ее в формат: 'snake_case'" : "page3-8.html",
    "Сформируйте с помощью циклов следующий массив: [ [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], ]" : "page3-8.html",
    "Дана строка. Проверьте, что эта строка состоит только из цифр" : "page3-9.html",
    "Дана строка. Проверьте, что эта строка состоит только из четных цифр" : "page3-9.html",
    "Дан массив с числами. Удалите из него числа, имеющие два и более нуля" : "page3-9.html",
    "Найдите все числа от 1 до 1000, сумма цифр которых равна 13" : "page3-9.html",
    "Сформируйте с помощью циклов следующий массив: [ [1, 2, 3],[4, 5, 6],[7, 8, 9], ]" : "page3-9.html",
    "Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза" : "page3-10.html",
    "Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа" : "page3-10.html",
    "Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе" : "page3-10.html",
    "Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней" : "page3-10.html",
    "Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите" : "page3-10.html",
    "Дан массив: [[1, 2, 3],[4, 5, 6],[7, 8, 9],] Слейте элементы этого массива в один одномерный массив: [1, 2, 3, 4, 5, 6, 7, 8, 9]" : "page3-10.html",
    "Сделайте функцию, которая вернет текущий день недели словом" : "page4-1.html",
    "Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате" : "page4-1.html",
    "Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам" : "page4-1.html",
    "Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром" : "page4-1.html",
    "Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате" : "page4-1.html",
    "Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей" : "page4-1.html",
    "Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр" : "page4-2.html",
    "Сделайте функцию, которая параметром будет принимать число и удалять из него нули" : "page4-2.html",    
    "Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет" : "page4-2.html",
    "Сделайте функцию, которая параметром будет год и проверять, високосный он или нет" : "page4-2.html",
    "Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет" : "page4-2.html",
    "Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца" : "page4-2.html",
    "Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде объекта" : "page4-2.html",
    "Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли" : "page4-3.html",
    "Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз" : "page4-3.html",
    "Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы" : "page4-3.html",
    "Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде объекта" : "page4-3.html",
    "Сделайте функцию, которая параметром будет принимать число, а количество его делителей" : "page4-4.html",
    "Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате" : "page4-4.html",
    "Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей" : "page4-4.html",
    "Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет" : "page4-4.html",
    "Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры" : "page4-4.html",
    "Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка" : "page4-4.html",
    "Дана переменная со строкой. Проверьте, что эта строка представляет собой число, то есть состоит только из цифр" : "page4-5.html",
    "Дана переменная со строкой. Проверьте, что эта строка представляет собой дробь" : "page4-5.html",
    "Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число" : "page4-5.html",
    "Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального" : "page4-5.html",
    "Сделайте функцию, которая заполнит массив случайными латинскими буквами" : "page4-5.html",
    "Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи" : "page4-5.html",
    "Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет" : "page4-6.html",
    "Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами" : "page4-6.html",
    "Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов" : "page4-6.html",
    "Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей" : "page4-6.html",
    "Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде объекта" : "page4-6.html",
    "Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке" : "page4-7.html",
    "Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов" : "page4-7.html",
    "Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд" : "page4-7.html",
    "Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент" : "page4-7.html",
    "Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива." : "page4-8.html",
    "Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива" : "page4-8.html",
    "Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подрядv" : "page4-8.html",
    "Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка" : "page4-8.html",
    "Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел" : "page4-9.html",
    "Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись" : "page4-8.html",
    "Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля" : "page4-9.html",
    "Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы" : "page4-9.html",
    "Сделайте функцию, которая будет возвращать случайный цвет" : "page4-9.html",
    "Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива" : "page4-9.html",
    "Сделайте функцию, которая параметром будет принимать двухмерный массив чисел [ [2,4,8,10,5,2,1],[3,16,48,7],[2,5,1,8,2,5,1,8,8],[4,4,4,4,4,5,1,4,3],[2,17,48] ] и возвращать массив максимальных чисел в каждом подмассиве" : "page4-9.html",
    "Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы" : "page4-10.html",
    "Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке" : "page4-10.html",
    "Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы" : "page4-10.html",
    "Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами" : "page4-10.html",
    "Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами" : "page4-10.html",
    "Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов" : "page4-10.html",
    "Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел" : "page5-1.html",
    "Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат" : "page5-1.html",
    "Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац" : "page5-1.html",
    "Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат" : "page5-1.html",
    "Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат" : "page5-1.html",
    "Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац" : "page5-2.html",
    "Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел" : "page5-2.html",
    "Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див" : "page5-2.html",
    "Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке" : "page5-2.html",
    "Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа" : "page5-3.html",
    "Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац" : "page5-3.html",
    "Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа" : "page5-3.html",
    "Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац" : "page5-3.html",
    "Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку" : "page5-3.html",
    "Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'" : "page5-4.html",
    "Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок" : "page5-4.html",
    "Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац" : "page5-4.html",
    "Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день" : "page5-4.html",
    "Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца" : "page5-4.html",
    "Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день" : "page5-5.html",
    "Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего" : "page5-5.html",
    "Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки" : "page5-5.html",
    "Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу" : "page5-5.html",
    "Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке" : "page5-5.html",
    "Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац" : "page5-6.html",
    "Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100" : "page5-6.html",
    "Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате" : "page5-6.html",
    "Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза" : "page5-6.html",
    "Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href" : "page5-6.html",
    "Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут" : "page5-7.html",
    "Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу" : "page5-7.html",
    "Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую" : "page5-7.html",
    "Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался" : "page5-7.html",
    "В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр" : "page5-7.html",
    "Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа" : "page5-8.html",
    "Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива" : "page5-8.html",
    "Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац" : "page5-8.html",
    "Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль" : "page5-8.html",
    "Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13" : "page5-8.html",
    "Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми" : "page5-9.html",
    "Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет" : "page5-9.html",
    "Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый" : "page5-9.html",
    "В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025" : "page5-9.html",
    "Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li" : "page5-9.html",
    "Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив" : "page5-10.html",
    "Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива" : "page5-10.html",
    "Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива" : "page5-10.html",
    "Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года" : "page5-10.html",
    "Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед" : "page5-10.html",
    "Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива" : "page6-1.html",
    "Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10" : "page6-1.html",
    "Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'" : "page6-1.html",
    "Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером" : "page6-1.html",
    "Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка" : "page6-1.html",
    "Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите случайный пункт списка" : "page6-1.html",
    "По клику на кнопку создайте HTML таблицу с заданной шириной и высотой" : "page6-2.html",
    "По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли их порядковые номера" : "page6-2.html",
    "По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли номера их рядов и колонок" : "page6-2.html",
    "Дан массив: [[1, 2, 3], [4, 5, 6], [7, 8, 9],] По нажатию на кнопку создайте таблицу, заполненную данными из этого массива" : "page6-2.html",
    "Дан абзац и кнопка. Пусть первое нажатие на кнопку красит абзац в красный цвет, а второе нажатие в зеленый" : "page6-3.html",
    "Дан список ul. По клику на любую li добавьте ей в конец ее порядковый номер в списке, но только один раз" : "page6-3.html",
    "Дан список ul. По клику на любую li, если нажата клавиша Ctrl, удалите эту li из списка" : "page6-3.html",
    "Дан абзац с числом и кнопка. По нажатию на кнопку пусть число из абзаца каждую секунду увеличивается на единицу" : "page6-3.html",
    "Дан инпут и абзац. В инпут вводится дата. Определите, была уже дата в текущем году. Результат выведите в абзац" : "page6-3.html",
    "Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка" : "page6-4.html",
    "Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка" : "page6-4.html",
    "Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов" : "page6-4.html",
    "Дан инпут и ul. В инпут вводится год. Выведите в список даты всех пятниц 13-е в заданном году" : "page6-4.html",
    "Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру" : "page6-5.html",
    "Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел" : "page6-5.html",
    "Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел" : "page6-5.html",
    "Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки" : "page6-5.html",
    "Даны два инпута, абзац и кнопка. В инпуты через запятую вводятся числа. По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах" : "page6-5.html",
    "Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут" : "page6-6.html",
    "Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива" : "page6-6.html",
    "Дана таблица и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов" : "page6-6.html",
    "Дан текстареа и див. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див" : "page6-6.html",
    "Выведите даты всех выходных дней текущего года в виде списка ul" : "page6-7.html",
    "Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца" : "page6-7.html",
    "Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца" : "page6-7.html",
    "Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу. Например, при вводе числа 5 у нас должна получится строка '00000'" : "page6-7.html",
    "Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый" : "page6-8.html",
    "Дан див и кнопка. По первому клику на кнопку покажите див, а по второму клику - спрячьте" : "page6-8.html",
    "Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу" : "page6-9.html",
    "Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами" : "page6-9.html",
    "Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li" : "page6-9.html",
    "Дана кнопка и список ul, заполненный пунктами с числами. По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка" : "page6-9.html",
    "Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот текст больше текста последнего тега li из списка" : "page6-10.html",
    "Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный" : "page6-10.html",
    "Напишите код, который выведет на экран таблицу умножения" : "page6-10.html",
    "Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте" : "page6-10.html",
    "Дана кнопка и список ul, заполненный числами. По клику на кнопку удалите пункт списка, содержащий самое максимальное число" : "page7-1.html",
    "Дан абзац, содержащий текст со словами. Дана также кнопка. По клику на кнопку возьмите каждое слово в свой тег span" : "page7-1.html",
    "Дан абзац, содержащий текст со словами и с дробями вида 1/2. Дана также кнопка. По клику на кнопку возьмите каждую дробь в свой тег span" : "page7-1.html",
    "Дана таблица и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в первой колонке все даты рождения юзера, а во второй колонке - соответствующие дни недели" : "page7-1.html",
    "Напишите программу, которая сформирует следующий массив: [[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],[[1, 2, 3],[1, 2, 3],[1, 2, 3],],]" : "page7-1.html",
    "Дан список ul с числами, инпут и кнопка. В инпут вводится число. По клику на кнопку покрасьте в красный цвет li, содержащее введенное число" : "page7-2.html",
    "Даны чекбоксы, с помощью которых у юзера спрашиваются языки, которые он знает. Дан также абзац. По мере выбора чекбоксов юзером выводите в абзац выбранные языки через запятую" : "page7-2.html",
    "Напишите программу, которая сформирует следующий массив:[['x'],['x', 'x'],['x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x', 'x', 'x'],]" : "page7-2.html",
    "Дан верстка, получите содержимое текстов абзацев в виде массива:['111','222','333','444','555',]" : "page7-2.html",
    "Дан абзац, содержащий текст со словами. Некоторые слова повторяются два раза. По клику на кнопку удалите лишние одинаковые рядом стоящие слова" : "page7-3.html",
    "Дана следующая структура данных: let data = [ {text: '111',href: '1.html',},{text: '222',href: '2.html',},{text: '333',href: '3.html',},] Сформируйте с помощью этих данных верстку" : "page7-3.html",
    "Сделайте функцию, которая будет возвращать массив, заполненный N случайными числами из заданного диапазона так, чтобы числа не повторялись" : "page7-3.html",
    "Дан ul. Выведите в него дни текущего месяца. Текущий день, а также выходные, выделите другими цветами" : "page7-4.html",
    "Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово выделялось красным цветом" : "page7-4.html",
    "Дан инпут и кнопка. В него вводится число из четного количества цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма половины цифр равна сумме второй половине цифр" : "page7-4.html",
    "Дан инпут. В него вводится текст. Сделайте так, чтобы в инпут нельзя было ввести больше десяти символов. При превышении количества, символы просто не должны вводиться" : "page7-4.html",
    "Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку сделайте так, чтобы в абзаце начал тикать обратный отсчет от введенного в инпут числа до нуля" : "page7-4.html",
    "Напишите программу, которая сформирует следующий массив:[ [1],[1, 2],[1, 2, 3],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5, 6],]" : "page7-4.html",
    "Дана кнопка. По клику на кнопку плавно прокрутите окно браузера до самого низа" : "page7-5.html",
    "Даны кнопки и дивы. Каждая кнопка соответствует своему диву. Сделайте так, чтобы по первому клику на кнопку открывался ее див, а по второму клику - скрывался" : "page7-5.html",
    "Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит" : "page7-5.html",
    "Напишите программу, которая сформирует следующий массив:[['x', 'x', 'x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x'],['x', 'x'],['x'],]" : "page7-5.html",
    "На странице через абсолютное позиционирование расположены два дива. По клику на кнопку проверьте, накладываются ли эти дивы друга на друга или нет" : "page7-6.html",
    "Дана кнопка и ul. По клику на кнопку выведите список всех возможных счастливых билетов. Билет представляет собой строку из шести цифр, может быть с нулями спереди. Билет считается счастливым, если сумма сумма первых трех цифр равна сумме вторых трех цифр" : "page7-6.html",
    "Напишите программу, которая сформирует следующий массив: ['x','xx','xxx','xxxx','xxxxx',]" : "page7-6.html",
    "Дан такой объект: let data = {2018: {11: {29: [1, 2, 3],30: [4, 5],},12: {30: [6, 7],31: [8, 9],},},2019: {12: {29: [10, 11],30: [12, 13],31: [14, 15],}},} Запишите все элементы этого объекта в какой-нибудь массив, вот так:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]" : "page7-6.html",
    "Дан массив с числами. Подсчитайте общее количество цифр 3 во всех числах данного массива" : "page7-7.html",
    "Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345',]" : "page7-7.html",
    "Дан массив: let affairs = [ {date: '2019-12-29',event: 'name1',},{date: '2019-12-31', event: 'name2',},{date: '2019-12-29',event: 'name3',},{date: '2019-12-30',event: 'name4',},{date: '2019-12-29',event: 'name5',},{date: '2019-12-31',event: 'name6',},{date: '2019-12-29',event: 'name7',},{date: '2019-12-30',event: 'name8',},{date: '2019-12-30',event: 'name9',},] Получите из этого массива уникальные даты, то есть вот так: ['2019-12-29', '2019-12-30', '2019-12-31']" : "page7-7.html",
    "Дана кнопка и список ul. По клику на кнопку добавьте в конец каждой li ссылку, по нажатию на которую текст li будет перечеркиваться (но не текст ссылки)" : "page7-8.html",
    "Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово меняло порядок своих букв на обратный" : "page7-8.html",
    "Дан следующий массив: let users = [{id: 1, name: 'user1', surn: 'surn1', age: 30},{id: 2, name: 'user2', surn: 'surn2', age: 31},{id: 3, name: 'user3', surn: 'surn3', age: 32},]; Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы" : "page7-8.html",
    "Напишите программу, которая сформирует следующий массив: ['1','12','123','1234','12345','1234','123','12','1',]" : "page7-8.html",
    "Дан абзац и инпут. В абзаце через пробел написаны слова. В инпут вводится некоторое слово. По потери фокуса проверьте, есть ли такое слово в абзаце, и если нет - добавьте его." : "page7-9.html",
    "Дан следующая верстка: 111222222Получите содержимое адресов и текстов ссылок в виде следующей структуры:[{text: '111',href: '1.html',},{text: '222',href: '2.html',},{text: '333',href: '3.html',},]" : "page7-9.html",
    "Напишите программу, которая сформирует следующую строку: '-1-12-23-34-45-'" : "page7-9.html",
    "Напишите программу, которая сформирует следующий массив: [12,34,56,78,90,]" : "page7-9.html",
    "Даны дивы с названиями продуктов и ценами. Дан также абзац. Сделайте так, чтобы кликами можно было выбрать несколько продуктов и их суммарная стоимость при этом писалась бы в абзац" : "page7-10.html",
    "Дана таблица прямоугольного размера с нечетным количеством рядов и колонок. Дана кнопка. По клику на кнопку выделите каким-нибудь цветом центральную ячейку" : "page7-10.html",
    "Напишите программу, которая сформирует следующую строку: '-x-xx-xxx-xx-x-'" : "page7-10.html",
    "Напишите программу, которая сформирует следующую строку: '11 12 13 21 22 23 31 32 33'" : "page7-10.html",
    "Выведите на экран следующую пирамидку:x,xx,xxx,xxxx,xxxxx" : "page8-1.html",
    "Дан массив: [[1, 2, 3],[1, 2],[1, 2, 3, 4, 5],[1],[1, 2, 3, 4],] Отсортируйте элементы массива по возрастанию количества элементов в подмассиве" : "page8-1.html",
    "Дан массив:[[2, 4, 5],[1, 2, 3],[0, 1, 1],[5, 7, 1],] Отсортируйте элементы массива по возрастанию суммы элементов подмассива" : "page8-1.html",
    "В текстареа вводится текст со словами. По потери фокуса сделайте таблицу, в первой колонке которой будут слова из текста, во второй колонке - количество раз, которое это слово встречается, а в третьей - процентное содержание этого слова в текста" : "page8-2.html",
    "Дан список ul и кнопка. По нажатию на кнопку отсортируйте пункты списка по возрастанию" : "page8-2.html",
    "Выведите на экран следующую пирамидку: xx, xxxx, xxxxxx, xxxxxxxx, xxxxxxxxxx." : "page8-2.html",
    "Дан массив, подмассивы которого содержат цифры: [[1, 2, 3],[4, 5, 6],[7, 8, 9],]Слейте элементы этого массива в числа: [123, 456, 789]" : "page8-2.html",
    "Пусть даны чекбоксы, отмеченные и нет. По нажатию на кнопку сделайте так, чтобы все чекбоксы сменили свое состояние" : "page8-3.html",
    "Выведите на экран следующую пирамидку: 111, 222, 333, 444, 555, 666, 777, 888, 999" : "page8-3.html",
    "Дан следующий массив: let arr = [1, 2, 3, 4, 5, 6]; Дано также число: let num = 3; Добавьте в приведенный массив столько пустых строк, чтобы длина массива стала равна квадрату числа из переменной" : "page8-3.html",
    "Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту" : "page8-4.html",
    "Дана строка с текстом. Получите процентное содержание каждого символа текста в виде объекта, в котором ключами будут символы, а значениями - их процентное содержание" : "page8-4.html",
    "Дан список ul и инпут. По мере ввода текста в инпут оставляйте видимыми только те li, текст которых начинается на текст, введенный в инпут" : "page8-4.html",
    "Выведите на экран следующую пирамидку: 1, 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999" : "page8-4.html",
    "Дан список городов и их стран, хранящийся в следующей структуре: let data = [ {country: 'country1',city: 'city11',},{country: 'country2',city: 'city21',},{country: 'country3',city: 'city31',},{country: 'country1',city: 'city12',},{country: 'country1',city: 'city13',},{country: 'country2', city: 'city22',},{country: 'country3',city: 'city31',},] Напишите код, которой переделает структуру данных вот в такую: {'country1': ['city11', 'city12', 'city13',],'country2': ['city21', 'city22'],'country3': ['city31', 'city32'],}" : "page8-4.html",
    "Дан массив со словами. Выведите слова, начинающиеся на одинаковые буквы в своем отдельном списке ul. Над каждым списком сделайте h2 с названием буквы, для которой сделан список." : "page8-5.html",
    "Даны три селекта. В первом селекте выведите дни месяца от 1 до 31, во втором - названия месяцев года, а в третьем - года за предыдущие и следующие 10 лет" : "page8-5.html",
    "Модифицируйте предыдущую задачу так, чтобы по умолчанию в селектах была выбрана текущая дата" : "page8-5.html",
    "Модифицируйте предыдущую задачу так, чтобы в первом селекте количество дней соответствовало выбранному месяцу и году" : "page8-5.html",
    "Выведите на экран следующую пирамидку: 1, 333, 55555, 7777777, 999999999" : "page8-5.html",
    "Дан абзац с текстом и кнопка. По клику на кнопку покрасьте каждый символ в случайный цвет так, чтобы у соседних символов были разные цвета" : "page8-6.html",
    "Дан абзац со словами и инпут. В инпут вводится слово. Найдите это слово в абзаце и покрасьте его в красный цвет" : "page8-6.html",
    "Дано меню со ссылками. Покрасьте в красный цвет ту ссылку, адрес которой совпадает с URL из адресной строки браузера" : "page8-6.html",
    "Выведите на экран следующую пирамидку: xxxxx, xxxx, xxx, xx, x" : "page8-6.html",
    "Дан список событий за определенные даты, хранящийся в следующей структуре: let events = [{date: '2019-12-29' event: 'name1'},{date: '2019-12-31'event: 'name2'},{date: '2019-12-29'event: 'name3'},{date: '2019-12-30'event: 'name4'},{date: '2019-12-29'event: 'name5'},{date: '2019-12-31'event: 'name6'},{date: '2019-12-29'event: 'name7'},{date: '2019-12-30'event: 'name8'},{date: '2019-12-30'event: 'name9'},]Напишите код, которой переделает структуру данных вот в такую:{'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],}" : "page8-6.html",
    "Дано слово. Перемешайте буквы этого слова в случайном порядке." : "page8-7.html",
    "Дан инпут, кнопка и список ul. В инпут вводится число. По клику на кнопку выведите список всех возможных вариантов разложения числа на два множителя" : "page8-7.html",
    "На странице через абсолютное позиционирование расположены дивы, могущие накладываться друг на друга. По клику на любой див сделайте так, чтобы он стал поверх остальных" : "page8-7.html",
    "Выведите на экран следующую пирамидку: 999999999, 88888888, 7777777, 666666, 55555, 4444, 333, 22, 1" : "page8-7.html",
    "Дан список событий за определенные даты, хранящийся в следующей структуре: let events = {'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],} Напишите код, которой переделает структуру данных вот в такую: let events = [{date: '2019-12-29'event: 'name1'},{date: '2019-12-31'event: 'name2'},{date: '2019-12-29'event: 'name3'},{date: '2019-12-30'event: 'name4'},{date: '2019-12-29'event: 'name5'},{date: '2019-12-31'event: 'name6'},{date: '2019-12-29'event: 'name7'},{date: '2019-12-30'event: 'name8'},{date: '2019-12-30'event: 'name9'},]" : "page8-7.html",
    "Даны два селекта. В первом селекте выводятся страны. Сделайте так, чтобы во втором селекте выводились города выбранной страны" : "page8-8.html",
    "Даны инпут и кнопка. В инпут вводится число. По клику на кнопку, проверьте, является ли это число совершенным" : "page8-8.html",
    "Дан список событий за определенные месяцы, хранящийся в следующей структуре: let events = [{date: '2019-12'event: 'name1'},{date: '2019-12'event: 'name2'},{date: '2019-11'event: 'name3'},{date: '2019-11' event: 'name4'},{date: '2020-10'event: 'name5'},{date: '2020-10'event: 'name6'},{date: '2020-11'event: 'name5'},{date: '2020-11'event: 'name6'},{date: '2020-12'event: 'name7'},{date: '2020-12'event: 'name8'},{date: '2020-12' event: 'name9'},] Напишите код, которой переделает структуру данных вот в такую: {2019: {11: [массив событий],12: [массив событий],}2020: {10: [массив событий],11: [массив событий],12: [массив событий],}}" : "page8-8.html",
    "Дано меню со ссылками. Сделайте так, чтобы по клику на ссылку меню под ней выпадало подменю" : "page8-9.html",
    "Дан абзац со словами и кнопка. По клику на кнопку покрасьте каждое слово в случайный цвет так, чтобы у соседних абзацев были разные цвета" : "page8-9.html",
    "Дан див. У этого дива есть крестик закрытия. Сделайте так, чтобы по клику на крестик, либо на любое место страницы вне дива, этот див прятался" : "page8-9.html",
    "Дан текстареа и ul. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter каждая строка текста добавилась в список в виде отдельного тега li" : "page8-9.html",
    "Дан такой список дел за определенную дату: let affairs = {'2019-12-31': ['массив дел'],'2018-11-29': ['массив дел'],'2018-11-30': ['массив дел'],'2018-12-27': ['массив дел'],'2019-12-29': ['массив дел'],'2019-12-30': ['массив дел'],'2018-12-30': ['массив дел'],'2018-12-31': ['массив дел'],} Выведите на экран все дела за 2018 год" : "page8-9.html",
    "Даны два инпута и кнопка. В инпуты вводятся числа. По клику на кнопку, проверьте, являются ли эти числа дружественными или нет" : "page8-10.html",
    "Дан некоторый массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] Дана переменная: let n = 3; Превратите этот массив в двухмерный, по n элементов в подмассиве" : "page8-10.html",
    "Дан массив: [ [1, 2, 3, 4, 5], [1, 2, 3], [1, 2],] Добавьте в каждый подмассив столько пустых строк, чтобы количество элементов в каждом подмассиве стало равно количеству элементов в самом длинном подмассиве" : "page8-10.html",
    "Всем ссылкам, ведующим на чужой сайт, добавьте target='_blank'" : "page9-1.html",
    "Дан текст со знаками препинаний. Получите массив предложений этого текста" : "page9-1.html",
    "Дана некоторая строка: let str = 'abcde abcde' В переменной хранятся символы: let del = 'abe'; Удалите из строки все указанные в переменной символы. В нашем случае должно получится следующее: 'cd cd'" : "page9-1.html",
    "Дан список ul и кнопка. По нажатию на кнопку перемешайте пункты списка в случайном порядке" : "page9-2.html",
    "Дан инпут, абзац и кнопка. В инпут вводится целое число. По нажатию на кнопку выведите в абзац разложение этого числа на простые множители" : "page9-2.html",
    "Даны два инпута и кнопка. По клику на кнопку выведите список список ul всех простых чисел из промежутка, заданном значениями инпутов" : "page9-2.html",
    "Два числа делятся друг на друга, в результате получается периодическая дробь. Напишите код, который определит период этой дроби" : "page9-2.html",
    "Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву" : "page9-3.html",
    "Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии" : "page9-3.html",
    "Дан массив с точками:[[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]] Отрисуйте эти точки на графике" : "page9-3.html",
    "Дана таблица. По нажатию на кнопку добавьте в эту таблицу новый ряд" : "page9-4.html",
    "Дана таблица. По нажатию на кнопку добавьте в эту таблицу новую колонку" : "page9-4.html",
    "Дана таблица. По нажатию на кнопку добавьте в эту таблицу и новый ряд, и новую колонку" : "page9-4.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования этой ячейки. (записать изменения Enter)" : "page9-4.html",
    "Дана таблица и кнопка. По нажатию на кнопку покрасьте в красный цвет случайную ячейку таблицы. Повторное нажатие на кнопку должно закрашивать новую незакрашенную ячейку, пока ячейки не закончатся" : "page9-4.html",
    "Дана таблица и кнопка. Пусть каждое нажатие на кнопку красит в красный цвет следующую по порядку ячейку таблицы" : "page9-4.html",
    "Выведите на экран 6 случайных картинок игральных карт" : "page9-4.html",
    "Дан селект и радио кнопочки, количество радио равно количеству пунктов в селекте. Сделайте так, чтобы при выборе пункта в селекте автоматически становилась отмеченной соответствующая радио кнопочка" : "page9-5.html",
    "Дана таблица. По нажатию на кнопку выделите в таблице красным цветом N случайных ячеек" : "page9-5.html",
    "Дан массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку создайте таблицу, заполненную данными из этого массива, содержащую столько колонок, сколько указано в инпуте" : "page9-5.html",
    "Сделайте функцию, которая будет устанавливать правильную форму существительного после числа. Вот как должна работать эта функция: func(1, 'яблоко', 'яблока', 'яблок'); // выведет '1 яблоко' Вот пример для для двухзначных чисел: func(11, 'яблоко', 'яблока', 'яблок'); // выведет '11 яблок' Наша функция должна работать для чисел любой длины: func(1223421, 'яблоко', 'яблока', 'яблок'); // выведет '1223421 яблоко'" : "page9-5.html",
    "Сгенерируйте таблицу, покрашенную в виде шахматной доски" : "page9-6.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался ее порядковый номер в таблице" : "page9-6.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался номер ее ряда и колонки в таблице" : "page9-6.html",
    "Дано пять чебоксов. Сделайте так, чтобы одновременно можно было отметить не более трех из них." : "page9-6.html",
    "Дан следующий массив: let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; Из приведенного массива динамически создайте таблицу размером в 5 колонок" : "page9-6.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красился ряд с этой ячейкой" : "page9-7.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в красный цвет красилась колонка с этой ячейкой" : "page9-7.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку удалялся ряд с этой ячейкой" : "page9-7.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую удалялась колонка с этой ячейкой" : "page9-7.html",
    "Дана таблица и кнопка. По клику на кнопку покрасьте в красный цвет ячейки, расположенные на диагонали таблицы" : "page9-7.html",
    "Дана таблица и кнопка. По клику на кнопку поменяйте местами первый и второй ряд таблицы" : "page9-8.html",
    "Дана таблица и кнопка. По клику на кнопку поменяйте местами первую и вторую колонки таблицы" : "page9-8.html",
    "Дана таблица. Сделайте так, чтобы при кликах на любую яейку таблицы в нее по очереди вставлялись числа 1, 2 и 3" : "page9-8.html",
    "Дана таблица. Сделайте так, чтобы по клику на любую ячейку в этой ячейке появлялся порядковый номер клика" : "page9-9.html",
    "Дана таблица, заполненная числами по порядку и кнопка. По нажатию на кнопку перемешайте числа в таблице" : "page9-9.html",
    "Дан текстареа. В него вводится текст. По потери фокуса найдите самый часто используемый символ этого текста и выведите его в абзац" : "page9-9.html",
    "Даны инпуты. Поставьте первому инпуту в value число 1, через секунду второму число 2, еще через секунду третьему число 3 и так далее пока инпуты не закончатся. Когда инпуты закончатся продолжите нумерацию с первого инпута" : "page9-9.html",
    "Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999" : "page9-9.html",
    "Дана таблица. Юзер кликает по очереди на две ячейки, выделяя их. Сделайте так, чтобы красным цветом выделились все ячейки, расположенные по порядку между теми, на которые кликнул юзер" : "page9-10.html",
    "Дан инпут. По мере ввода в него числа он должен отделять тройки чисел пробелами" : "page10-1.html",
    "Даны два числа. Выведите на экран процесс умножения этих чисел в столбик, как в школе" : "page10-1.html",
    "Сделайте блок, который будет выезжать сверху экрана по нажатию на кнопку" : "page10-1.html",
    "Сделайте функцию, которая параметром будет принимать английское существительное в единственном числе и возвращать его во множественном числе" : "page10-1.html",
    "Сделайте так, чтобы при клике на любое место окна браузера в месте клика появлялся порядковый номер этого клика" : "page10-1.html",
    "Дан текст со знаками препинаний: 'aaa bbb, ccc. Xxx - eee bbb, kkk!' Получите массив слов из такого текста" : "page10-1.html",
    "Дана таблица. При клике на ячейку она активируется каким-нибудь цветом. Сделайте так, чтобы ячейки вокруг активированной не активировались" : "page10-2.html",
    "Дана таблица. Сделайте так, чтобы каждую секунду активировалась случайная ячейка таблицы. Одна ячейка не может быть активной два раза подряд" : "page10-2.html",
    "Дан текстареа. Как известно, его размер можно менять, потянув за уголок. Сделайте так, чтобы можно было изменить размер этого текстареа, а затем обновить страницу - и изменения не должны пропасть" : "page10-2.html",
    "Дан инпут и кнопка. По клику на кнопку выведите список ul всех избыточных чисел из промежутка, от 0 до заданного значения инпута" : "page10-2.html",
    "Дана квадратная HTML таблица произвольного размера. По нажатию на кнопку заполните половину таблицу следующим образом" : "page10-2.html",
    "Сделайте инпут, в который можно ввести только числа. Остальные символы не должны вводится в инпут" : "page10-3.html",
    "Дан блок. По клику на блок покажите всплывающую подсказку с некоторым достаточно длинным текстом. Покажите подсказку или сверху или снизу с учетом того, чтобы она целиком поместилась на экране и не ушла под прокрутку" : "page10-3.html",
    "Дана прямоугольная таблица. По нажатию на кнопку покрасьте ячейки одной диагонали в красный цвет, а второй диагонали - в зеленый" : "page10-3.html",
    "Дано окно браузера. Сделайте так, чтобы элементы, целиком находящиеся в левой половине окна покрасились в зеленый цвет, целиком находящиеся в правой половине окна - в синий, а находящиеся и там, и там - в красный" : "page10-3.html",
    "Дан массив из шести цифр. Проверьте, можно ли собрать из этих цифр счастливый билет" : "page10-3.html",
    "Напишите код, который будет генерировать пароль заданного размера. Пароль обязательно должен будет содержать маленькую и большую буквы, цифру и какой-то специальный символ" : "page10-3.html",
    "Дана строка, содержащая два числа и математическую операцию между ними: '10 + 20' Напишите код, который вычислит результат записанной математической операции" : "page10-3.html",
    "Выведите на страницу обратный отсчет дней, часов, минут и секунд, оставшихся до Нового Года" : "page10-4.html",
    "Даны два числа. Выведите на экран процесс нахождения НОК, как в школе" : "page10-4.html",
    "Даны два числа. Выведите на экран процесс нахождения НОД, как в школе" : "page10-4.html",
    "Дана HTML таблица, в которой в произвольных двух ячейках стоят плюсы. По нажатию на кнопку заполните минусами все ячейки между заданными следующим образом:" : "page10-4.html",
    "Дан текст со словами. Перемешайте все слова этого текста в случайном порядке" : "page10-4.html",
    "На странице юзер выделяет текст. По нажатию Ctrl + Enter запишите этот текст в буфер обмена" : "page10-5.html",
    "Дан текстареа. В него вводится текст. По нажатию клавиши Tab вставьте в место моргания курсора символ табуляции" : "page10-5.html",
    "Дано число. Выведите на экран процесс разложения числа на простые множители, как в школе" : "page10-5.html",
    "Дана таблица. По нажатию на кнопку заполните ее следующим образом" : "page10-5.html",
    "Дан инпут. Сделайте так, чтобы при вводе в него слова 'blur' этот инпут терял фокус" : "page10-6.html",
    "Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в одном ряду таблицы можно было активировать не более 5-ти ячеек" : "page10-7.html",
    "Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в одной колонке таблицы можно было активировать не более 5-ти ячеек" : "page10-7.html",
    "Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы для активированной ячейки нельзя было активировать ее соседей слева и справа" : "page10-7.html",
    "Дана таблица. По клику на любую ячейку эта ячейка выделяется каким-то цветом, активируюясь. Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей сверху и снизу" : "page10-7.html",
    "Дана строка, содержащая две дроби и математическую операцию между ними: '2/3 + 3/4' Напишите код, который вычислит результат записанной математической операции" : "page10-7.html",
    "Даны два инпута и кнопка. По клику на кнопку выведите список список ul всех дружественных чисел из промежутка, заданном значениями инпутов" : "page10-8.html",
    "Дана форма с инпутами, текстареа, чебоксами, радиокнопками и селектами. Юзер как-то изменяет элементы формы. Сделайте так, чтобы после перезагрузки окна браузера все элементы формы пришли в то состояние, в котором их оставил юзер" : "page10-8.html",
    "Дан массив. Выведите все варианты перестановки элементов этого массива" : "page10-8.html",
    "Дан див, текстом которого является некоторый CSS код. Напишите скрипт, который выполнит подсветку синтаксиса этого кода." : "page10-9.html",
    "При заходе на страницу сайта покажите юзеру обратный отсчет, который закончится через час от момента захода юзера на сайт. Сделайте так, чтобы после обновления страницы, отсчет продолжался с того места, на котором он остановился" : "page10-9.html",
    "Дана HTML таблица, в которой в произвольных двух ячейках стоят плюсы. По нажатию на кнопку заполните минусами все ячейки вокруг заданных следующим образом" : "page10-9.html",
    "Реализуйте алгоритм Решето Эратосфена для поиска простых чисел в заданном промежутке." : "page10-10.html",
}

