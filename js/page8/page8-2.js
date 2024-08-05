
/*№1 В текстареа вводится текст со словами. По потери фокуса сделайте таблицу, в первой колонке которой будут слова из текста, во второй колонке - количество раз, которое это слово встречается, а в третьей - процентное содержание этого слова в текста.*/

let textArea = document.querySelector('.task-one-input-textarea')
let tableSort = document.querySelector('.task-one-table')

textArea.addEventListener('blur', () => {
    tableSort.innerHTML = ''
    let mass = textArea.value.split(' ')
    let mapa = new Map()
    let mass2 = []
    for(let i = 0; i < mass.length; i++){
        
        for(let j = 0; j < mass.length; j++){    
           if(mass[i] == mass[j] )
           mass2.push(mass[j])
        }

        if(!mapa.has(mass[i])){
            mapa.set(mass[i], mass2)

            let tableTr = document.createElement('tr')
            let tableTdOne = document.createElement('td')
            let tableTdTwo = document.createElement('td')
            let tableTdThee = document.createElement('td')

            tableTdOne.textContent = mass[i]
            tableTdTwo.textContent = mapa.get(mass[i]).length
            tableTdThee.textContent = Math.floor((mapa.get(mass[i]).length * 100) / mass.length) + '%'

            tableSort.append(tableTr)
            tableTr.append(tableTdOne)
            tableTr.append(tableTdTwo)
            tableTr.append(tableTdThee)
        }

        mass2 = []
    }
})

/* №2 Дан список ul и кнопка. По нажатию на кнопку отсортируйте пункты списка по возрастанию.*/

let sortMax = document.getElementById('sortMax')
let listItem = document.querySelectorAll('.task-two-list-items li')
let listItems = document.querySelector('.task-two-list-items')

sortMax.addEventListener('click', () => {
    let mass = []
    Array.from(listItem).forEach((elem, i) => {
        mass.push(elem.textContent)
    })
    listItems.textContent = ''
    mass.sort((a,b) => a - b)
    for(let i = 0; i < mass.length; i ++){
        let listItemNew = document.createElement('li')
        listItemNew.textContent = mass[i]
        listItems.append(listItemNew)
    }
})

/*№3 Дан массив, подмассивы которого содержат цифры: [[1, 2, 3],[4, 5, 6],[7, 8, 9],]Слейте элементы этого массива в числа: [123, 456, 789]*/

function massConcat(){
    let mass = [	
        [1, 2, 3],	
        [4, 5, 6],	
        [7, 8, 9], 
    ]
    for(let i = 0; i < mass.length; i++){
        mass[i] = Number(mass[i].join(''))
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}
createBlockNoData("№3 Дан массив, подмассивы которого содержат цифры: [[1, 2, 3],[4, 5, 6],[7, 8, 9],]Слейте элементы этого массива в числа: [123, 456, 789]", 'Слить массив', massConcat)

/*№4 Выведите на экран следующую пирамидку: xx,xxxx,xxxxxx,xxxxxxxx,xxxxxxxxxx*/

let taskFourResult = document.querySelector('.task-four-result')

function pyramidGenerator(){
    let str = ''
    for(let i = 0; i < 5; i++){
        str +='xx'
        let block = document.createElement('div')
        block.textContent = str
        taskFourResult.append(block)
    }
}
pyramidGenerator()

let massFunc = [`textArea.addEventListener('blur', () => {
    tableSort.innerHTML = ''
    let mass = textArea.value.split(' ')
    let mapa = new Map()
    let mass2 = []
    for(let i = 0; i < mass.length; i++){
        
        for(let j = 0; j < mass.length; j++){    
           if(mass[i] == mass[j] )
           mass2.push(mass[j])
        }

        if(!mapa.has(mass[i])){
            mapa.set(mass[i], mass2)

            let tableTr = document.createElement('tr')
            let tableTdOne = document.createElement('td')
            let tableTdTwo = document.createElement('td')
            let tableTdThee = document.createElement('td')

            tableTdOne.textContent = mass[i]
            tableTdTwo.textContent = mapa.get(mass[i]).length
            tableTdThee.textContent = Math.floor((mapa.get(mass[i]).length * 100) / mass.length) + '%'

            tableSort.append(tableTr)
            tableTr.append(tableTdOne)
            tableTr.append(tableTdTwo)
            tableTr.append(tableTdThee)
        }

        mass2 = []
    }
})`,`sortMax.addEventListener('click', () => {
    let mass = []
    Array.from(listItem).forEach((elem, i) => {
        mass.push(elem.textContent)
    })
    listItems.textContent = ''
    mass.sort((a,b) => a - b)
    for(let i = 0; i < mass.length; i ++){
        let listItemNew = document.createElement('li')
        listItemNew.textContent = mass[i]
        listItems.append(listItemNew)
    }
})`,`function pyramidGenerator(){
    let str = ''
    for(let i = 0; i < 5; i++){
        str +='xx'
        let block = document.createElement('div')
        block.textContent = str
        taskFourResult.append(block)
    }
}`,`function massConcat(){
    let mass = [	
        [1, 2, 3],	
        [4, 5, 6],	
        [7, 8, 9], 
    ]
    for(let i = 0; i < mass.length; i++){
        mass[i] = Number(mass[i].join(''))
    }
    console.log(mass)
    return mass + ' (результат в консоли)'
}`]