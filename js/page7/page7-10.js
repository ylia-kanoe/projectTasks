
/*№1 Напишите программу, которая сформирует следующую строку: '-x-xx-xxx-xx-x-'*/

function strGenerator(){
    let str = '-'
    for(let i = 0; i <= 2; i++){
        let j = 0
        while(j <= i){
            str += 'x'
            j++
        }    
        str += '-'
    }
    for(let i = 2; i > 0; i--){
        let j = 0
        while(j < i){
            str += 'x'
            j++
        }    
        str += '-'
    }
    return str
}
createBlockNoData("№1 Напишите программу, которая сформирует следующую строку: '-x-xx-xxx-xx-x-'", 'Сгенерировать строку', strGenerator)

/*№2 Напишите программу, которая сформирует следующую строку: '11 12 13 21 22 23 31 32 33'*/

function strGeneratorTwo(){
    let str = ''
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            str += String(i) + String(j)

            if(i != 3 || j != 3){
                str += ' '
            }
        }
    }
    return str
}
createBlockNoData("№2 Напишите программу, которая сформирует следующую строку: '11 12 13 21 22 23 31 32 33'", 'Сгенерировать строку', strGeneratorTwo)

/* №3 Даны дивы с названиями продуктов и ценами. Дан также абзац. Сделайте так, чтобы кликами можно было выбрать несколько продуктов и их суммарная стоимость при этом писалась бы в абзац.*/

let productItem = document.querySelectorAll('.task-three-products .product-item')
let price = document.querySelectorAll('.task-three-products .price')
let inputChech = document.querySelectorAll('.task-three-products input[type=checkbox]')
let sumProducts = document.getElementById('sumProducts')
let sum = 0

Array.from(inputChech).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if(elem.checked){
            sum = sum  + +price[i].textContent
            sumProducts.textContent = 'Итоговая сумма: ' +  sum
        }
        if(!elem.checked){
            sum = sum - +price[i].textContent
            sumProducts.textContent = 'Итоговая сумма: ' +  sum
        }
    })
})

/* №4 Дана таблица прямоугольного размера с нечетным количеством рядов и колонок. Дана кнопка. По клику на кнопку выделите каким-нибудь цветом центральную ячейку.*/

let tableTR = document.querySelectorAll('tr')
let tableTD = document.querySelectorAll('td')
let clickColor = document.getElementById('clickColor')

clickColor.addEventListener('click', () => {
    tableTR.forEach((elem, i) => {
        tableTD.forEach((elem2, j) => {
            if(Math.floor(tableTR.length / 2) == i && Math.floor(tableTD.length / 2) == j){
                elem2.style.backgroundColor = 'red'
            }
        })
    }) 
})

let massFunc = [`Array.from(inputChech).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        if(elem.checked){
            sum = sum  + +price[i].textContent
            sumProducts.textContent =  sum
        }
        if(!elem.checked){
            sum = sum - +price[i].textContent
            sumProducts.textContent =  sum
        }
    })
})`,`clickColor.addEventListener('click', () => {
    tableTR.forEach((elem, i) => {
        tableTD.forEach((elem2, j) => {
            if(Math.floor(tableTR.length / 2) == i && Math.floor(tableTD.length / 2) == j){
                elem2.style.backgroundColor = 'red'
            }
        })
    }) 
})`,`function strGenerator(){
    let str = '-'
    for(let i = 0; i <= 2; i++){
        let j = 0
        while(j <= i){
            str += 'x'
            j++
        }    
        str += '-'
    }
    for(let i = 2; i > 0; i--){
        let j = 0
        while(j < i){
            str += 'x'
            j++
        }    
        str += '-'
    }
    return str
}`,`function strGeneratorTwo(){
    let str = ''
    for(let i = 1; i <= 3; i++){
        for(let j = 1; j <= 3; j++){
            str += String(i) + String(j)

            if(i != 3 || j != 3){
                str += ' '
            }
        }
    }
    return str
}`]