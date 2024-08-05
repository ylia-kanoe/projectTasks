/* №1 Дана кнопка и блок с текстом. Текст по высоте не влазит в блок и скрыт. По клику на кнопку распахните блок на всю высоту.*/

let taskOneBlock = document.querySelector('.task-one-block')
let openText = document.getElementById('openText')

openText.addEventListener('click', () => {
	taskOneBlock.style.overflow = "visible"
	taskOneBlock.style.height = "auto"
})

/* №2 Дана строка с текстом. Получите процентное содержание каждого символа текста в виде объекта, в котором ключами будут символы, а значениями - их процентное содержание.*/

let taskTwoBlock = document.querySelector('.task-two-block')
let result = document.querySelector('.task-two-result')
let mass = taskTwoBlock.textContent.split('')
let map = new Map()
let count = 0
let sum = 0
for(let i = 0; i < mass.length; i++){
	for(let j = 0; j < mass.length; j++){
		if(mass[i] == mass[j]){
			count++
		}
	}
	if(!map.has(mass[i])){
		map.set(mass[i], ((count * 100) / mass.length).toFixed(2))
		
		sum += ((+map.get(mass[i]) * 100) / mass.length)
		let newOne = document.createElement('p')
		let newTwo = document.createElement('span')
		newOne.textContent = mass[i] + ": "
		newTwo.textContent = ' ' + map.get(mass[i]) + '%'
		result.append(newOne)
		newOne.append(newTwo)
	}
	count = 0
}

/* №3 Дан список ul и инпут. По мере ввода текста в инпут оставляйте видимыми только те li, текст которых начинается на текст, введенный в инпут.*/

let listItem = document.querySelectorAll('.task-three-list-items li')
let inputText = document.getElementById("inputText")

inputText.addEventListener('keyup', () => {
	Array.from(listItem).forEach(elem => {
		if(!elem.textContent.startsWith(inputText.value)){
			elem.style.visibility = 'hidden'
		} else {
			elem.style.visibility = 'visible'
		}
	})
})

/* №4 Выведите на экран следующую пирамидку: 1, 22, 333, 4444, 55555, 666666, 7777777, 88888888, 999999999.*/

let taskFourResult = document.querySelector('.task-four-result')

function pyramidGenerator(){
    let str = ''
    for(let i = 1; i < 10; i++){
        let j = 0
        while(j < i){
            str += i
            j++
        }
        if(j == i){
            let block = document.createElement('div')
            block.textContent = str
            taskFourResult.append(block)
            str = ''
        }
    }
}

pyramidGenerator()

/* №5 Дан список городов и их стран, хранящийся в следующей структуре: let data = [	{country: 'country1',city:    'city11',},{country: 'country2',city:    'city21',},{country: 'country3',city:    'city31',},{country: 'country1',city:    'city12',},{country: 'country1',city:    'city13',},{country: 'country2',	city:    'city22',},{country: 'country3',city:    'city31',},] Напишите код, которой переделает структуру данных вот в такую: {'country1': ['city11', 'city12', 'city13',],'country2': ['city21', 'city22'],'country3': ['city31', 'city32'],}*/

function redStructure(){
    let data = [
        {
            country: 'country1',
            city:    'city11',
        },
        {
            country: 'country2',
            city:    'city21',
        },
        {
            country: 'country3',
            city:    'city31',
        },
        {
            country: 'country1',
            city:    'city12',
        },
        {
            country: 'country1',
            city:    'city13',
        },
        {
            country: 'country2',
            city:    'city22',
        },
        {
            country: 'country3',
            city:    'city32',
        },
    ]
    
    let dataResult = {}
    for(let i = 0; i < data.length; i++){
        for(let item of Object.entries(data[i])){
            if(item[0] == 'country' ){
                dataResult[item[1]] = []
            }
        }
    }
    for(let i = 0; i < data.length; i++){
        for(let item of Object.entries(data[i])){
            if(Object.values(data[i])[0] == item[1] ){
                dataResult[item[1]].push(Object.values(data[i])[1])
            }
        }
    }
    console.log(dataResult)
    return JSON.stringify(dataResult)
}

createBlockNoData("№5 Дан список городов и их стран, хранящийся в следующей структуре: let data = [	{country: 'country1',city:    'city11',},{country: 'country2',city:    'city21',},{country: 'country3',city:    'city31',},{country: 'country1',city:    'city12',},{country: 'country1',city:    'city13',},{country: 'country2',	city:    'city22',},{country: 'country3',city:    'city31',},] Напишите код, которой переделает структуру данных вот в такую: {'country1': ['city11', 'city12', 'city13',],'country2': ['city21', 'city22'],'country3': ['city31', 'city32'],}", "Переделать структуру", redStructure)

let massFunc = [`openText.addEventListener('click', () => {
	taskOneBlock.style.overflow = "visible"
	taskOneBlock.style.height = "auto"
})`,`let taskTwoBlock = document.querySelector('.task-two-block')
let result = document.querySelector('.task-two-result')
let mass = taskTwoBlock.textContent.split('')
let map = new Map()
let count = 0
let sum = 0
for(let i = 0; i < mass.length; i++){
	for(let j = 0; j < mass.length; j++){
		if(mass[i] == mass[j]){
			count++
		}
	}
	if(!map.has(mass[i])){
		map.set(mass[i], ((count * 100) / mass.length).toFixed(2))
		
		sum += ((+map.get(mass[i]) * 100) / mass.length)
		let newOne = document.createElement('p')
		let newTwo = document.createElement('span')
		newOne.textContent = mass[i] + ": "
		newTwo.textContent = ' ' + map.get(mass[i]) + '%'
		result.append(newOne)
		newOne.append(newTwo)
	}
	count = 0
}`,`inputText.addEventListener('keyup', () => {
	Array.from(listItem).forEach(elem => {
		if(!elem.textContent.startsWith(inputText.value)){
			elem.style.visibility = 'hidden'
		} else {
			elem.style.visibility = 'visible'
		}
	})
})`,`function pyramidGenerator(){
    let str = ''
    for(let i = 1; i < 10; i++){
        let j = 0
        while(j < i){
            str += i
            j++
        }
        if(j == i){
            let block = document.createElement('div')
            block.textContent = str
            taskFourResult.append(block)
            str = ''
        }
    }
}`,`function redStructure(){
    let data = [
        {
            country: 'country1',
            city:    'city11',
        },
        {
            country: 'country2',
            city:    'city21',
        },
        {
            country: 'country3',
            city:    'city31',
        },
        {
            country: 'country1',
            city:    'city12',
        },
        {
            country: 'country1',
            city:    'city13',
        },
        {
            country: 'country2',
            city:    'city22',
        },
        {
            country: 'country3',
            city:    'city32',
        },
    ]
    
    let dataResult = {}
    for(let i = 0; i < data.length; i++){
        for(let item of Object.entries(data[i])){
            if(item[0] == 'country' ){
                dataResult[item[1]] = []
            }
        }
    }
    for(let i = 0; i < data.length; i++){
        for(let item of Object.entries(data[i])){
            if(Object.values(data[i])[0] == item[1] ){
                dataResult[item[1]].push(Object.values(data[i])[1])
            }
        }
    }
    console.log(dataResult)
}`]