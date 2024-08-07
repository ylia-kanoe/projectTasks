
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

/* №4 Даны два числа. Выведите на экран процесс нахождения НОД, как в школе. */

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
}, 1000);`,``,``,`tableFill.addEventListener('click', () => {
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