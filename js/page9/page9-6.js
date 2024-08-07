
/* №1 Сгенерируйте таблицу, покрашенную в виде шахматной доски.*/

let generatorDesc = document.querySelector('.task-one-table')

for (let i = 0; i < 8; i++) {
    let newTr = document.createElement('tr')
    for (let j = 0; j < 8; j++) {
        let newTd = document.createElement('td')
        if (i % 2 == 0 && j % 2 == 1) {
            newTd.style.backgroundColor = '#000'
        } else if (i % 2 == 1 && j % 2 == 0) {
            newTd.style.backgroundColor = '#000'
        }

        newTr.append(newTd)
    }
    generatorDesc.append(newTr)
}

/* №2 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался ее порядковый номер в таблице.*/

let taskTwoItemTd = document.querySelectorAll('.task-two-table td')

Array.from(taskTwoItemTd).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        elem.textContent = i+1
    })
})

/* №3 Дана таблица. Сделайте так, чтобы по клику на любую ячейку в нее писался номер ее ряда и колонки в таблице.*/

let taskThreeItemTr = document.querySelectorAll('.task-three-table tr')
let taskThreeItemTd = document.querySelectorAll('.task-three-table td')

Array.from(taskThreeItemTr).forEach((elem, i) => {
    Array.from(taskThreeItemTd).forEach((elem2, j) => {  
        elem2.addEventListener('click', () => {
            let item = (taskThreeItemTd.length / taskThreeItemTr.length) 
            if(elem2.closest('tr') == elem ){
                let k = j
                if(k >= item -1){
                    while(k > item - 1){
                        k = k - item
                    }
                } 
                elem2.textContent = i + ' '+ k        
            }
        })
    })
})

/* №4 Дано пять чебоксов. Сделайте так, чтобы одновременно можно было отметить не более трех из них.*/

let inputCheckbox = document.querySelectorAll('.task-four-input-checkbox')
let blockElem = document.querySelectorAll('.task-four-block-checkbox')
let count = 0
Array.from(inputCheckbox).forEach((elem, i) => {  
    elem.addEventListener('click', (e) => {
        if(elem.checked){
            count++
            if(count > 3){
                elem.checked = false
                count--
                blockElem[i].classList.add('closed') 
            }
        } else if(!elem.checked){
            count--;
            if(count < 3){
                for(let j = 0; j < blockElem.length; j++){
                    blockElem[j].classList.remove('closed') 
                }
            }
        }      
    })
})

/*  №5 Дан следующий массив: let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; Из приведенного массива динамически создайте таблицу размером в 5 колонок.*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let taskFiveTable = document.querySelector('.task-five-table')

for(let i = 0; i < arr.length / 5; i++){
    let newTr = document.createElement('tr')
    for(let j = 0; j < 5; j++){
        let newTd = document.createElement('td')
        newTr.append(newTd)
    }
    taskFiveTable.append(newTr)
}
let itemTd = document.querySelectorAll('.task-five-table td')

Array.from(itemTd).forEach((elem, i) => {
    if( i >= arr.length){
        i = i - arr.length 
    }
    elem.textContent = arr[i]
})
    
let massFunc = [`
for (let i = 0; i < 8; i++) {
    let newTr = document.createElement('tr')
    for (let j = 0; j < 8; j++) {
        let newTd = document.createElement('td')
        if (i % 2 == 0 && j % 2 == 1) {
            newTd.style.backgroundColor = '#000'
        } else if (i % 2 == 1 && j % 2 == 0) {
            newTd.style.backgroundColor = '#000'
        }

        newTr.append(newTd)
    }
    generatorDesc.append(newTr)
}`,`Array.from(taskTwoItemTd).forEach((elem, i) => {
    elem.addEventListener('click', () => {
        elem.textContent = i+1
    })
})
`,`Array.from(taskThreeItemTr).forEach((elem, i) => {
    Array.from(taskThreeItemTd).forEach((elem2, j) => {  
        elem2.addEventListener('click', () => {
            let item = (taskThreeItemTd.length / taskThreeItemTr.length) 
            if(elem2.closest('tr') == elem ){
                let k = j
                if(k >= item -1){
                    while(k > item - 1){
                        k = k - item
                    }
                } 
                elem2.textContent = i + ' '+ k        
            }
        })
    })
})`,`let count = 0
Array.from(inputCheckbox).forEach((elem, i) => {  
    elem.addEventListener('click', (e) => {
        if(elem.checked){
            count++
            if(count > 3){
                elem.checked = false
                count--
                blockElem[i].classList.add('closed') 
            }
        } else if(!elem.checked){
            count--;
            if(count < 3){
                for(let j = 0; j < blockElem.length; j++){
                    blockElem[j].classList.remove('closed') 
                }
            }
        }      
    })
})`,`let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let taskFiveTable = document.querySelector('.task-five-table')

for(let i = 0; i < arr.length / 5; i++){
    let newTr = document.createElement('tr')
    for(let j = 0; j < 5; j++){
        let newTd = document.createElement('td')
        newTr.append(newTd)
    }
    taskFiveTable.append(newTr)
}
let itemTd = document.querySelectorAll('.task-five-table td')

Array.from(itemTd).forEach((elem, i) => {
    if( i >= arr.length){
        i = i - arr.length 
    }
    elem.textContent = arr[i]
})`]