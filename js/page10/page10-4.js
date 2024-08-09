
/* №1 Дан текст со словами. Перемешайте все слова этого текста в случайном порядке.*/

function randomString(strText){
    let mass = strText.split(' ')
    function randomMass(mass){
        let massRandom = []
        for(let i = 0; i < mass.length; i++){
            let random = Math.floor(Math.random() * (mass.length))
            if(massRandom.includes(random)){
                i--
            } else {	
                massRandom.push(random)
            }
        }	
        return massRandom
    }
    let mass2 = randomMass(mass)
    let str = ''
    for(let i = 0; i < mass2.length; i++){
        str += mass[mass2[i]] + ' '
    }
    return str
}

createBlockStr("№1 Дан текст со словами. Перемешайте все слова этого текста в случайном порядке.", 'Очень много слов и очень много букв. Нужно перемешать в случайном порядке', 'Перемешать слова в случайном порядке', randomString)

/* №2 Выведите на страницу обратный отсчет дней, часов, минут и секунд, оставшихся до Нового Года.*/

let result = document.querySelector('.clock-timer')

let date = new Date()
let dateNewYear = new Date()
dateNewYear.setFullYear(dateNewYear.getFullYear() + 1)
dateNewYear.setMonth(0)
dateNewYear.setDate(1)
dateNewYear.setHours(0)
dateNewYear.setMinutes(0)
dateNewYear.setSeconds(0)

let ost = dateNewYear - date

let dateNewYearOneDay = new Date()
dateNewYearOneDay.setMonth(12)
dateNewYearOneDay.setDate(0)

let ost2 = dateNewYear - dateNewYearOneDay

let pDate = document.createElement('p')
let spanDate = document.createElement('span')
pDate.textContent = Math.floor(ost / (60 * 60 * 24 * 1000))
spanDate.textContent = ' Дней'
pDate.append(spanDate)
result.append(pDate)

let pHours = document.createElement('p')
let spanHours = document.createElement('span')
pHours.textContent = Math.floor(ost2 / (60 * 60 * 1000))
spanHours.textContent = ' Часов'
pHours.append(spanHours)
result.append(pHours)

let pMinutes = document.createElement('p')
let spanMinutes = document.createElement('span')
pMinutes.textContent = Math.floor((ost2 / 1000 / 60) % 60)
spanMinutes.textContent = ' Минут'
pMinutes.append(spanMinutes)
result.append(pMinutes)

let pSeconds = document.createElement('p')
let spanSeconds = document.createElement('span')
pSeconds.textContent = Math.floor((ost2 / 1000) % 60)
spanSeconds.textContent = ' Секунд'
pSeconds.append(spanSeconds)
result.append(pSeconds)

setInterval(() => {
    let date = new Date()
    let dateNewYear = new Date()
    dateNewYear.setFullYear(dateNewYear.getFullYear() + 1)
    dateNewYear.setMonth(0)
    dateNewYear.setDate(1)
    dateNewYear.setHours(0)
    dateNewYear.setMinutes(0)
    dateNewYear.setSeconds(0)

    let ost = dateNewYear - date

    let dateNewYearOneDay = new Date()
    dateNewYearOneDay.setMonth(12)
    dateNewYearOneDay.setDate(0)

    let ost2 = dateNewYear - dateNewYearOneDay

    pDate.textContent = Math.floor(ost / (60 * 60 * 24 * 1000))
    spanDate.textContent = ' Дней'
    pDate.append(spanDate)

    pHours.textContent = Math.floor(ost2 / (60 * 60 * 1000))
    spanHours.textContent = ' Часов'
    pHours.append(spanHours)

    pMinutes.textContent = Math.floor((ost2 / 1000 / 60) % 60)
    spanMinutes.textContent = ' Минут'
    pMinutes.append(spanMinutes)

    pSeconds.textContent = Math.floor((ost2 / 1000) % 60)
    spanSeconds.textContent = ' Секунд'
    pSeconds.append(spanSeconds)
}, 1000);

/* №3 Даны два числа. Выведите на экран процесс нахождения НОК, как в школе. */

let taskThreeInputOne = document.querySelector('.task-three-input-one')
let taskThreeInputTwo = document.querySelector('.task-three-input-two')
let findNOK = document.getElementById('findNOK')
let taskThreeResult = document.querySelector('.task-three-result')

function findSimpleNum(num){
    let mass = []
    let mass2 = []
    for(let i = num - 1; i > 0; i--){
        if((num / i) % 1 == 0){
            for(let j = i - 1; j > 0; j--){
                if((i / j) % 1 == 0){
                    mass2.push(j)
                }
            }
            if(mass2.length < 2){
                mass.push(i)
            }
            mass2 = []
        }
    }
    return mass
}

findNOK.addEventListener('click', () => {
    taskThreeResult.innerHTML = ''
    function createElemNumb(num){
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskThreeResult.append(numBlock) 
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for(let i = 1; i < massive.length; i++){

            while(rez % massive[i] == 0){
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push( massive[i])
            }    
        }

        return massNok
    }

    function createMassNOK(mass, mass2){
        let massMini = (mass.length >= mass2.length) ? mass2 :  mass // 2237
        let massMaxi = (mass.length >= mass2.length) ? mass :  mass2 // 2335
        for(let i = 0; i < massMini.length; i++){

            if (!massMaxi.includes(massMini[i])) {
                massMaxi.push(massMini[i])
                }
        }
        return massMaxi
    }

    function createNOK(){  
        let mass = createMassNOK(nokOne, nokTwo)
        let sum = 1
        for(let i = 0; i < mass.length; i++){
            sum = sum * +mass[i]
        }
        return sum
    }

    let nokOne = createElemNumb(+taskThreeInputOne.value)
    let nokTwo = createElemNumb(+taskThreeInputTwo.value)
    let rezNok = document.createElement('div')
    rezNok.classList.add('result-nok')
    taskThreeResult.append(rezNok)
    rezNok.textContent = 'НОК(' + taskThreeInputOne.value + '; '+ taskThreeInputTwo.value + ')' + ' = '  + createMassNOK(nokOne, nokTwo).join(' * ') +  ' = ' + createNOK()
})
    
    

/* №4 Даны два числа. Выведите на экран процесс нахождения НОД, как в школе. */

let taskFourInputOne = document.querySelector('.task-four-input-one')
let taskFourInputTwo = document.querySelector('.task-four-input-two')
let findNOD = document.getElementById('findNOD')
let taskTFourResult = document.querySelector('.task-four-result')

findNOD.addEventListener('click', () => {
    taskTFourResult.innerHTML = ''
    function createElemNumb(num){
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskTFourResult.append(numBlock) 
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for(let i = 1; i < massive.length; i++){

            while(rez % massive[i] == 0){
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push( massive[i])
            }    
        }

        return massNok
    }

    function createMassNOD(mass, mass2){
        let massMini = (mass.length >= mass2.length) ? mass2 :  mass // 2233
        let massMaxi = (mass.length >= mass2.length) ? mass :  mass2 // 222223 
        let massRez = []
        for(let i = 0; i < massMini.length; i++){
            let pos2 = -1;
            let count2 = 0
            while ((pos2 = massMini.indexOf(massMini[i], pos2 + 1)) != -1) {
                count2++
            }
            let pos = -1;
            let count = 0
            while ((pos = massMaxi.indexOf(massMini[i], pos + 1)) != -1) {
                count++
            }
            if(massMini.indexOf(massMini[i], i + 1) != -1){
            
                if(count2 < count){
                    while(count2 > 0){
                        massRez.push(massMini[i])
                        count2--
                    }
                } 
                if(count2 > count){
                    while(count > 0){
                        massRez.push(massMini[i])
                        count--
                    }
                } 
                
            }
            else {
                if(count2 == count){
                    massRez.push(massMini[i])
                }
            }
            count = 0
            count2 = 0
        }
        return massRez
    }

    function createNOD(){  
        let mass = createMassNOD(nodOne, nodTwo)
        let sum = 1
        for(let i = 0; i < mass.length; i++){
            sum = sum * +mass[i]
        }
        return sum
    }

    let nodOne = createElemNumb(+taskFourInputOne.value)
    let nodTwo = createElemNumb(+taskFourInputTwo.value)
    let rezNod = document.createElement('div')
    rezNod.classList.add('result-nok')
    taskTFourResult.append(rezNod)
    rezNod.textContent = 'НОД(' + taskFourInputOne.value + '; '+ taskFourInputTwo.value + ')' + ' = '  + createMassNOD(nodOne, nodTwo).join(' * ') +  ' = ' + createNOD()
})
/* №5 Дана HTML таблица, в которой в произвольных двух ячейках стоят плюсы: По нажатию на кнопку заполните минусами все ячейки между заданными следующим образом:*/

let tableFill = document.getElementById('tableFill')
let taskFiveTableTd = document.querySelectorAll('.task-five-table td')
let taskFiveTableTr = document.querySelectorAll('.task-five-table tr')

tableFill.addEventListener('click', () => {
	let start
	let stop
	let count = 0
	Array.from(taskFiveTableTd).forEach((elem, i) => {
		if(elem.textContent == '+' && count == 0){
			start = i
			count++
		} else if(elem.textContent == '+' && count == 1){
			stop = i
		}
	})

	for(let i = start + 1; i < stop; i++){
		taskFiveTableTd[i].textContent = '-'
	}
})

let massFunc = [`
let result = document.querySelector('.clock-timer')

let pDate = document.createElement('p')
let spanDate = document.createElement('span')

result.append(pDate)
pDate.append(spanDate)

let pHours = document.createElement('p')
let spanHours = document.createElement('span')

result.append(pHours)
pHours.append(spanHours)

let pMinutes = document.createElement('p')
let spanMinutes = document.createElement('span')

result.append(pMinutes)
pMinutes.append(spanMinutes)

let pSeconds = document.createElement('p')
let spanSeconds = document.createElement('span')

result.append(pSeconds)
pSeconds.append(spanSeconds)

setInterval(() => {
    let date = new Date()
    let dateNewYear = new Date()
    dateNewYear.setFullYear(dateNewYear.getFullYear() + 1)
    dateNewYear.setMonth(0)
    dateNewYear.setDate(1)
    dateNewYear.setHours(0)
    dateNewYear.setMinutes(0)
    dateNewYear.setSeconds(0)

    let ost = dateNewYear - date

    let dateNewYearOneDay = new Date()
    dateNewYearOneDay.setMonth(12)
    dateNewYearOneDay.setDate(0)

    let ost2 = dateNewYear - dateNewYearOneDay

    pDate.textContent = Math.floor(ost / (60 * 60 * 24 * 1000))
    spanDate.textContent = ' Дней'

    pHours.textContent = Math.floor(ost2 / (60 * 60 * 1000))
    spanHours.textContent = ' Часов'

    pMinutes.textContent = Math.floor((ost2 / 1000 / 60) % 60)
    spanMinutes.textContent = ' Минут'

    pSeconds.textContent = Math.floor((ost2 / 1000) % 60)
    spanSeconds.textContent = ' Секунд'
}, 1000);`,`function findSimpleNum(num){
    let mass = []
    let mass2 = []
    for(let i = num - 1; i > 0; i--){
        if((num / i) % 1 == 0){
            for(let j = i - 1; j > 0; j--){
                if((i / j) % 1 == 0){
                    mass2.push(j)
                }
            }
            if(mass2.length < 2){
                mass.push(i)
            }
            mass2 = []
        }
    }
    return mass
}

findNOK.addEventListener('click', () => {
    taskThreeResult.innerHTML = ''
    function createElemNumb(num){
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskThreeResult.append(numBlock) 
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for(let i = 1; i < massive.length; i++){

            while(rez % massive[i] == 0){
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push( massive[i])
            }    
        }

        return massNok
    }

    function createMassNOK(mass, mass2){
        let massMini = (mass.length >= mass2.length) ? mass2 :  mass // 2237
        let massMaxi = (mass.length >= mass2.length) ? mass :  mass2 // 2335
        for(let i = 0; i < massMini.length; i++){

            if (!massMaxi.includes(massMini[i])) {
                massMaxi.push(massMini[i])
                }
        }
        return massMaxi
    }

    function createNOK(){  
        let mass = createMassNOK(nokOne, nokTwo)
        let sum = 1
        for(let i = 0; i < mass.length; i++){
            sum = sum * +mass[i]
        }
        return sum
    }

    let nokOne = createElemNumb(+taskThreeInputOne.value)
    let nokTwo = createElemNumb(+taskThreeInputTwo.value)
    let rezNok = document.createElement('div')
    rezNok.classList.add('result-nok')
    taskThreeResult.append(rezNok)
    rezNok.textContent = 'НОК(' + taskThreeInputOne.value + '; '+ taskThreeInputTwo.value + ')' + ' = '  + createMassNOK(nokOne, nokTwo).join(' * ') +  ' = ' + createNOK()
})`,`function findSimpleNum(num){
    let mass = []
    let mass2 = []
    for(let i = num - 1; i > 0; i--){
        if((num / i) % 1 == 0){
            for(let j = i - 1; j > 0; j--){
                if((i / j) % 1 == 0){
                    mass2.push(j)
                }
            }
            if(mass2.length < 2){
                mass.push(i)
            }
            mass2 = []
        }
    }
    return mass
}
    findNOD.addEventListener('click', () => {
    taskTFourResult.innerHTML = ''
    function createElemNumb(num){
        let rez = num
        let massive = findSimpleNum(num)
        massive.reverse()
        let numBlock = document.createElement('div')
        taskTFourResult.append(numBlock) 
        numBlock.classList.add('block-num-nok')
        let blockLeft = document.createElement('div')
        blockLeft.classList.add('block-left')
        numBlock.append(blockLeft)
        let blockRight = document.createElement('div')
        blockRight.classList.add('block-right')

        let number = document.createElement('div')
        blockLeft.append(number)
        number.textContent = num

        numBlock.append(blockRight)
        let massNok = []
        for(let i = 1; i < massive.length; i++){

            while(rez % massive[i] == 0){
                rez = rez / massive[i]
                let numRez = document.createElement('div')
                blockLeft.append(numRez)
                numRez.textContent = rez

                let numRez2 = document.createElement('div')
                blockRight.append(numRez2)
                numRez2.textContent = massive[i]
                massNok.push( massive[i])
            }    
        }

        return massNok
    }

    function createMassNOD(mass, mass2){
        let massMini = (mass.length >= mass2.length) ? mass2 :  mass // 2233
        let massMaxi = (mass.length >= mass2.length) ? mass :  mass2 // 222223 
        let massRez = []
        for(let i = 0; i < massMini.length; i++){
            let pos2 = -1;
            let count2 = 0
            while ((pos2 = massMini.indexOf(massMini[i], pos2 + 1)) != -1) {
                count2++
            }
            let pos = -1;
            let count = 0
            while ((pos = massMaxi.indexOf(massMini[i], pos + 1)) != -1) {
                count++
            }
            if(massMini.indexOf(massMini[i], i + 1) != -1){
            
                if(count2 < count){
                    while(count2 > 0){
                        massRez.push(massMini[i])
                        count2--
                    }
                } 
                if(count2 > count){
                    while(count > 0){
                        massRez.push(massMini[i])
                        count--
                    }
                } 
                
            }
            else {
                if(count2 == count){
                    massRez.push(massMini[i])
                }
            }
            count = 0
            count2 = 0
        }
        return massRez
    }

    function createNOD(){  
        let mass = createMassNOD(nodOne, nodTwo)
        let sum = 1
        for(let i = 0; i < mass.length; i++){
            sum = sum * +mass[i]
        }
        return sum
    }

    let nodOne = createElemNumb(+taskFourInputOne.value)
    let nodTwo = createElemNumb(+taskFourInputTwo.value)
    let rezNod = document.createElement('div')
    rezNod.classList.add('result-nok')
    taskTFourResult.append(rezNod)
    rezNod.textContent = 'НОД(' + taskFourInputOne.value + '; '+ taskFourInputTwo.value + ')' + ' = '  + createMassNOD(nodOne, nodTwo).join(' * ') +  ' = ' + createNOD()
})`,`tableFill.addEventListener('click', () => {
	let start
	let stop
	let count = 0
	Array.from(taskFiveTableTd).forEach((elem, i) => {
		if(elem.textContent == '+' && count == 0){
			start = i
			count++
		} else if(elem.textContent == '+' && count == 1){
			stop = i
		}
	})

	for(let i = start + 1; i < stop; i++){
		taskFiveTableTd[i].textContent = '-'
	}
})`,`function randomString(strText){
    let mass = strText.split(' ')
    function randomMass(mass){
        let massRandom = []
        for(let i = 0; i < mass.length; i++){
            let random = Math.floor(Math.random() * (mass.length))
            if(massRandom.includes(random)){
                i--
            } else {	
                massRandom.push(random)
            }
        }	
        return massRandom
    }
    let mass2 = randomMass(mass)
    let str = ''
    for(let i = 0; i < mass2.length; i++){
        str += mass[mass2[i]] + ' '
    }
    return str
}`]