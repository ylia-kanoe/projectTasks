
/* №1 Дан абзац и инпут. В абзаце через пробел написаны слова. В инпут вводится некоторое слово. По потери фокуса проверьте, есть ли такое слово в абзаце, и если нет - добавьте его.*/

let textWord = document.querySelector('.task-one-paragraf')
let wordFound = document.querySelector('.task-one-input')

wordFound.addEventListener('blur', () => {
    if(textWord.textContent.includes(wordFound.value)){
        wordFound.style.backgroundColor = 'green'
    } else {
        textWord.textContent += ', ' + wordFound.value
        wordFound.style.backgroundColor = 'inherit'
        wordFound.value = ''
    }
})

/* №2 Напишите программу, которая сформирует следующую строку: '-1-12-23-34-45-'*/

function strGenerator(){
    let str = ''
    let strResult = '-'
    for(let i = 0; i < 5; i++){
        if( i == 0){
            str += String(i+1) 
        } else if(str.length < 2){
            str += String(i) + +(i+1)
        }
        strResult += str + "-"
        str = ''
    }
   return strResult
}

createBlockNoData("№2 Напишите программу, которая сформирует следующую строку: '-1-12-23-34-45-'", "Сгенерировать строку", strGenerator)

/* №3 Напишите программу, которая сформирует следующий массив: [12,34,56,78,90,]*/

function massGenerator(){
    let mass = []
    let count = 0 
    for(let i = 1; i <= 10; i++){
        count++
        if(count == 2){
            if(i == 10){
                mass.push(+(i-1) + "0")
            } else {
                mass.push(+(i-1) + `${i}`)
                count = 0
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}

createBlockNoData("№3 Напишите программу, которая сформирует следующий массив: [12,34,56,78,90,]", "Сгенерировать массив", massGenerator)



/*№4 Дан следующая верстка: <a href="1.html">111</a><a href="2.html">222</a><a href="3.html">222</a>Получите содержимое адресов и текстов ссылок в виде следующей структуры:[{text: '111',href: '1.html',},{text: '222',href: '2.html',},{text: '333',href: '3.html',},]*/

let refer = document.querySelectorAll('.task-four-block a')
let taskFourResult = document.querySelector('.task-four-result')
let mass = []
let obj = {}

refer.forEach(elem => {
    obj.text = elem.textContent
    obj.href = elem.href
    mass.push(obj)
    obj = {}
})
console.log(mass)
taskFourResult.textContent = mass + ' (результат в консоли)'

let massFunc = [`wordFound.addEventListener('blur', () => {
    if(textWord.textContent.includes(wordFound.value)){
        wordFound.style.backgroundColor = 'green'
    } else {
        textWord.textContent += ', ' + wordFound.value
        wordFound.style.backgroundColor = 'inherit'
        wordFound.value = ''
    }
})`,`let mass = []
let obj = {}

refer.forEach(elem => {
    obj.text = elem.textContent
    obj.href = elem.href
    mass.push(obj)
    obj = {}
})
console.log(mass)
taskFourResult.textContent = mass + ' (результат в консоли)'`,`function strGenerator(){
    let str = ''
    let strResult = '-'
    for(let i = 0; i < 5; i++){
        if( i == 0){
            str += String(i+1) 
        } else if(str.length < 2){
            str += String(i) + +(i+1)
        }
        strResult += str + "-"
        str = ''
    }
   return strResult
}
`,`function massGenerator(){
    let mass = []
    let count = 0 
    for(let i = 1; i <= 10; i++){
        count++
        if(count == 2){
            if(i == 10){
                mass.push(+(i-1) + "0")
            } else {
                mass.push(+(i-1) + "{i}")
                count = 0
            }
        }
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`]



