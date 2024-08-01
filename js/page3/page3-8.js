
{
    let task = createTaskBlock("№1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '13, 3, 39, 23, 33, 83, 133, 103, 3001'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Все числа массива содержат цифру 3?'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.*/

    function checkThreeElements(mass){
        let count = 0;
        let rez = ''
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).includes('3')){
                count++;
            }
        }
        if(count === mass.length){
            rez = "Все числа из этого массива содержат в себе цифру 3"
        } else {
            rez = "Не все числа из этого массива содержат в себе цифру 3"
        }
        return rez
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = checkThreeElements(mass)
    })
}

{
    let task = createTaskBlock("№2 Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'kebab-case'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Преобразовать строку в другой формат"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№2 Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'*/

    function formasStrKebabSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '-'){
                str2 += '_';
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = formasStrKebabSnake(inputValue.value)
    })
}

{
    let task = createTaskBlock("№3 Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'snake_case'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Преобразовать строку в другой формат"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№3 Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'*/

    function formasStrSnakeCamel(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '_'){
                str2 += str[i+1].toUpperCase();
                i++;
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = formasStrSnakeCamel(inputValue.value)
    })
}

{
    let task = createTaskBlock("№4 Дана строка в формате: 'camelCase' Преобразуйте ее в формат: 'snake_case'")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = 'camelCase'
    inputValue.placeholder = "Введите строку"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = "Преобразовать строку в другой формат"
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /*№4 Дана строка в формате: 'camelCase' Преобразуйте ее в формат: 'snake_case'*/

    function formasStrCamelSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === str[i].toUpperCase()){
                str2 += '_' + str[i].toLowerCase();
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }

    buttonFunc.addEventListener('click', () => {
        result.textContent = formasStrCamelSnake(inputValue.value)
    })
}

{
    let task = createTaskBlock("№5 Сформируйте с помощью циклов следующий массив: [ [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], ]")
    let result = document.createElement('p')
    result.classList.add('result')
    let textMass = document.createElement('p')
    textMass.textContent = `[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
]`
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Сформировать массив'
    task.append(textMass)
    task.append(result)
    task.append(buttonFunc)

    /* №5 Сформируйте с помощью циклов следующий массив: [ [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], ]*/
    
    function createNewMass(){
        let mass = [];
        let mass2 = [];
        for(let j = 1; j <= 3; j++){
            mass2.push(j);
        }
        for(let i = 0; i < 5; i++){
            mass.push(mass2)
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        result.textContent = createNewMass()
    })
}




let massFunc = 
    [`function checkThreeElements(mass){
        let count = 0;
        let rez = ''
        for(let i = 0; i < mass.length; i++){
            if(String(mass[i]).includes('3')){
                count++;
            }
        }
        if(count === mass.length){
            rez = "Все числа из этого массива содержат в себе цифру 3"
        } else {
            rez = "Не все числа из этого массива содержат в себе цифру 3"
        }
        return rez
    }`, `function formasStrKebabSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '-'){
                str2 += '_';
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`,`function formasStrSnakeCamel(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === '_'){
                str2 += str[i+1].toUpperCase();
                i++;
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`,`function formasStrCamelSnake(str){
        let str2 = '';
        for(let i = 0; i < str.length; i++){
            if(str[i] === str[i].toUpperCase()){
                str2 += '_' + str[i].toLowerCase();
            } else {
                str2 +=str[i];
            }
        }
        return str2
    }`,`function createNewMass(){
        let mass = [];
        let mass2 = [];
        for(let j = 1; j <= 3; j++){
            mass2.push(j);
        }
        for(let i = 0; i < 5; i++){
            mass.push(mass2)
        }
        return mass.join(', ')
    }`]