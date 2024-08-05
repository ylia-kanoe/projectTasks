/*№1 Дано слово. Перемешайте буквы этого слова в случайном порядке.*/

let word = document.querySelector(".task-one-input")
let wordResult = document.querySelector(".task-one-result")
let mixLetters = document.getElementById("mixLetters")

mixLetters.addEventListener('click', () => {
    wordResult.textContent = ''
    let massive = word.value.split('')
    let massiveRandLet = []
    function randomLetter(){
        let random = Math.floor(Math.random() * massive.length)
        if(massiveRandLet.includes(random)){
            return randomLetter()
        }
        massiveRandLet.push(random)
        return random
    }
    for(let i = 0; i < massive.length; i++){
        wordResult.textContent += massive[randomLetter()]
    }
})


/* №2 Дан инпут, кнопка и список ul. В инпут вводится число. По клику на кнопку выведите список всех возможных вариантов разложения числа на два множителя.*/

let inputNumber = document.querySelector(".task-two-paragraf")
let taskTwoResult = document.querySelector(".task-two-result")
let chareNumber = document.getElementById("chareNumber")

chareNumber.addEventListener('click', () => {
    taskTwoResult.textContent = ''
	let mass2 = []
	for(let i = inputNumber.value; i > 0; i--){	
		if((inputNumber.value / i) % 1 == 0){
			mass2.push(i)
		}
	}
	for(let i = 0; i < mass2.length / 2; i++){
		let newItem = document.createElement('li')
		newItem.textContent = +mass2[i] + '  and ' + mass2[mass2.length - 1 - i]
		taskTwoResult.append(newItem)
	}
})

/* №3 На странице через абсолютное позиционирование расположены дивы, могущие накладываться друг на друга. По клику на любой див сделайте так, чтобы он стал поверх остальных.*/

let blockAbs = document.querySelectorAll('.task-three-block div')

Array.from(blockAbs).forEach(elem => {
    elem.addEventListener('click', () => {
        blockAbs.forEach(elem2 => { 
            elem2.classList.remove('zindex')
        })
        elem.classList.toggle('zindex')
    })
})

/* №4 Выведите на экран следующую пирамидку: 999999999, 88888888, 7777777, 666666, 55555, 4444, 333, 22, 1 */ 

let taskFourResult = document.querySelector('.task-four-result')
function pyramidGenerator(){
    let str = ''
    for(let i = 9; i > 0; i--){
        j = 0
        while(i > j){
            str +=i
            j++
        }
        let pafagraf = document.createElement('p')
        pafagraf.textContent = str
        taskFourResult.append(pafagraf)
        str = ''
    }
}
pyramidGenerator()

/* №5 Дан список событий за определенные даты, хранящийся в следующей структуре: let events = {'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],} Напишите код, которой переделает структуру данных вот в такую: let events = [{date:  '2019-12-29'event: 'name1'},{date:  '2019-12-31'event: 'name2'},{date:  '2019-12-29'event: 'name3'},{date:  '2019-12-30'event: 'name4'},{date:  '2019-12-29'event: 'name5'},{date:  '2019-12-31'event: 'name6'},{date:  '2019-12-29'event: 'name7'},{date:  '2019-12-30'event: 'name8'},{date:  '2019-12-30'event: 'name9'},] */

function redStructure(){
    let events = {
        '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
        '2019-12-30': ['name4', 'name8', 'name9'],
        '2019-12-31': ['name2', 'name6'],
    }
    let massResult = []
    let obj = {}
    for(let item of Object.entries(events)){
        for(let j = 0; j < item[1].length; j++){
            obj['date'] = item[0]
            obj['event'] = item[1][j]
            massResult.push(obj)
            obj = {}
        }
    }
    console.log(massResult)
    return JSON.stringify(massResult)
}

createBlockNoData("№5 Дан список событий за определенные даты, хранящийся в следующей структуре: let events = {'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],} Напишите код, которой переделает структуру данных вот в такую: let events = [{date:  '2019-12-29'event: 'name1'},{date:  '2019-12-31'event: 'name2'},{date:  '2019-12-29'event: 'name3'},{date:  '2019-12-30'event: 'name4'},{date:  '2019-12-29'event: 'name5'},{date:  '2019-12-31'event: 'name6'},{date:  '2019-12-29'event: 'name7'},{date:  '2019-12-30'event: 'name8'},{date:  '2019-12-30'event: 'name9'},] ", "Переделать структуру", redStructure)

let massFunc = [`word.addEventListener('blur', () => {
    wordResult.textContent = ''
    let massive = word.value.split('')
    let massiveRandLet = []
    function randomLetter(){
        let random = Math.floor(Math.random() * massive.length)
        if(massiveRandLet.includes(random)){
            return randomLetter()
        }
        massiveRandLet.push(random)
        return random
    }
    for(let i = 0; i < massive.length; i++){
        wordResult.textContent += massive[randomLetter()]
    }
})`,`chareNumber.addEventListener('click', () => {
	let mass2 = []
	for(let i = inputNumber.value; i > 0; i--){	
		if((inputNumber.value / i) % 1 == 0){
			mass2.push(i)
		}
	}
	for(let i = 0; i < mass2.length / 2; i++){
		let newItem = document.createElement('li')
		newItem.textContent = +mass2[i] + '  and ' + mass2[mass2.length - 1 - i]
		taskTwoResult.append(newItem)
	}
})`,`Array.from(blockAbs).forEach(elem => {
    elem.addEventListener('click', () => {
        blockAbs.forEach(elem2 => { 
            elem2.classList.remove('zindex')
        })
        elem.classList.toggle('zindex')
    })
})`,`function pyramidGenerator(){
    let str = ''
    for(let i = 9; i > 0; i--){
        j = 0
        while(i > j){
            str +=i
            j++
        }
        let pafagraf = document.createElement('p')
        pafagraf.textContent = str
        taskFourResult.append(pafagraf)
        str = ''
    }
}`,`function redStructure(){
    let events = {
        '2019-12-29': ['name1', 'name3', 'name5', 'name7'],
        '2019-12-30': ['name4', 'name8', 'name9'],
        '2019-12-31': ['name2', 'name6'],
    }
    let massResult = []
    let obj = {}
    for(let item of Object.entries(events)){
        for(let j = 0; j < item[1].length; j++){
            obj['date'] = item[0]
            obj['event'] = item[1][j]
            massResult.push(obj)
            obj = {}
        }
    }
    console.log(massResult)
    return JSON.stringify(massResult)
}`]