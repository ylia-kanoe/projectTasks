
{
    let task = createTaskBlock("№1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = "http://vk.html, http://ok.com, http://google.html, vk.com, ok.com, google.html"
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Оставить строки, которые начинаются на http://'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.*/

    function massStrHttp(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].indexOf('http://') == 0){
                massRez.push(mass[i]);
            }
        }
        return massRez.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = massStrHttp(mass)
    })
}

{
    let task = createTaskBlock("№2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = "http://vk.html, http://ok.com, http://google.html, vk.com, ok.com, google.html"
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Оставить строки, которые заканчиваются на .html'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.*/

    function massStrHttpTwo(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].slice(-5) == '.html'){
                massRez.push(mass[i]);
            } 
        }
        return massRez.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = massStrHttpTwo(mass)
    })
}

{
    let task = createTaskBlock("№3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.")
    let result = document.createElement('p')
    result.classList.add('result')
    let inputValue = document.createElement('input')
    inputValue.value = '10,20,30,40,50,1,2,5,9,6,2,5'
    inputValue.placeholder = "введите элементы массива через ',' или пробел"
    let buttonFunc = document.createElement('button')
    buttonFunc.textContent = 'Увеличить каждое число на 10%'
    task.append(inputValue)
    task.append(result)
    task.append(buttonFunc)

    /* №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.*/

    function massIncrease(mass) {
        for(let i = 0; i < mass.length; i++){
            mass.splice(i, 1,  mass[i] + mass[i] * 0.1);
        }
        return mass.join(', ')
    }
    
    buttonFunc.addEventListener('click', () => {
        let mass = inputValue.value.split(/[,; ]+/)
        result.textContent = massIncrease(mass)
    })
}

let massFunc = [`function massStrHttp(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].indexOf('http://') == 0){
                massRez.push(mass[i]);
            }
        }
        return massRez
    }`,`function massStrHttp(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].slice(-5) == '.html'){
                massRez.push(mass[i]);
            } 
        }
        return massRez
    }`,`function massIncrease(mass) {
        for(let i = 0; i < mass.length; i++){
            mass.splice(i, 1,  mass[i] + mass[i] * 0.1);
        }
        return mass.join(', ')
    }`]

