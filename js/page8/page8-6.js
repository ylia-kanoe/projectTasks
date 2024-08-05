
/* №1 Дан абзац с текстом и кнопка. По клику на кнопку покрасьте каждый символ в случайный цвет так, чтобы у соседних символов были разные цвета.*/


let symbolColor = document.querySelector('.task-one-paragraf')
let symbolColorClick = document.getElementById('symbolColorClick')
let mass = symbolColor.textContent.split('')
let massColor = [ 'rgb(255, 0, 255)', 'rgb(128, 0, 128)', 'rgb(255, 0, 0)','rgb(128, 0, 0)','rgb(255, 255, 0)','rgb(128, 128, 0)','rgb(0, 255, 0)','rgb(0, 128, 0)','rgb(0, 255, 255)','rgb(0, 128, 128)','rgb(0, 0, 255)','rgb(0, 0, 128)']
let spanItem = document.querySelectorAll('span')

function randomColor(){
	let color = massColor[Math.floor(Math.random() * massColor.length)]
	if(spanItem.length > 1){
		console.log(spanItem[spanItem.length - 1].style.backgroundColor == color)
		if(spanItem[spanItem.length - 1].style.backgroundColor == color){
			return randomColor()
		}
	}
	return color
}

symbolColorClick.addEventListener('click', () => {
	symbolColor.textContent = ''
	for(let i = 0; i < mass.length; i++){
		let newSpan = document.createElement('span')
		newSpan.textContent = mass[i]
		newSpan.style.backgroundColor = randomColor()
		symbolColor.append(newSpan) 
		spanItem = document.querySelectorAll('span')
	}
})

/* №2 Дан абзац со словами и инпут. В инпут вводится слово. Найдите это слово в абзаце и покрасьте его в красный цвет.*/

let blockText = document.querySelector('.task-two-paragraf')
let wordFound = document.getElementById('wordFound')

wordFound.addEventListener('blur', () => {
    let mass = blockText.textContent.split(' ')
    blockText.textContent = ''
    for(let i = 0; i < mass.length; i++){
        if(wordFound.value == mass[i]){
            let newSpan = document.createElement('span')
            newSpan.textContent = mass[i] + ' '
            newSpan.style.backgroundColor = 'red'
            blockText.append(newSpan)
        } else {
            blockText.append(mass[i] + ' ')
        }
    }
})

/* №3 Дано меню со ссылками. Покрасьте в красный цвет ту ссылку, адрес которой совпадает с URL из адресной строки браузера.*/

let refers = document.querySelectorAll('.task-three-list-items a')

Array.from(refers).forEach(elem => {
    if(elem.href == window.location.href) {
        elem.style.backgroundColor = 'red'
    }
})

/* №4 Выведите на экран следующую пирамидку: xxxxx, xxxx, xxx, xx, x */

let taskFourResult = document.querySelector('.task-four-result')

function pyramidGenerator(){
    let str = 'xxxxx'
    for(let i = 5; i > 0; i--){
        str = str.slice(0,i)
        let block = document.createElement('div')
        block.textContent = str
        taskFourResult.append(block)
    }
}

pyramidGenerator()

/* №5 Дан список событий за определенные даты, хранящийся в следующей структуре: let events = [{date:  '2019-12-29'	event: 'name1'},{date:  '2019-12-31'event: 'name2'},{date:  '2019-12-29'event: 'name3'},{date:  '2019-12-30'event: 'name4'},{date:  '2019-12-29'event: 'name5'},{date:  '2019-12-31'event: 'name6'},{date:  '2019-12-29'event: 'name7'},{date:  '2019-12-30'event: 'name8'},{date:  '2019-12-30'event: 'name9'},]Напишите код, которой переделает структуру данных вот в такую:{'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],} */

function redStructure(){
    let events = [
        {
            date:  '2019-12-29',
            event: 'name1'
        },
        {
            date:  '2019-12-31',
            event: 'name2'
        },
        {
            date:  '2019-12-29',
            event: 'name3'
        },
        {
            date:  '2019-12-30',
            event: 'name4'
        },
        {
            date:  '2019-12-29',
            event: 'name5'
        },
        {
            date:  '2019-12-31',
            event: 'name6'
        },
        {
            date:  '2019-12-29',
            event: 'name7'
        },
        {
            date:  '2019-12-30',
            event: 'name8'
        },
        {
            date:  '2019-12-30',
            event: 'name9'
        },
    ]
    let eventResult = {}
    for(let i = 0; i < events.length; i++){
        for(let item of Object.entries(events[i])){
            if(item[0] == 'date'){
                eventResult[item[1]] = []
            }
        }
    }
    for(let i = 0; i < events.length; i++){
        for(let item2 of Object.entries(events[i])){
            
            if(Object.values(events[i])[0] == item2[1]){
            eventResult[item2[1]].push(Object.values(events[i])[1])
            }
        }
    }
    console.log(eventResult)
    return JSON.stringify(eventResult)
}

createBlockNoData("№5 Дан список событий за определенные даты, хранящийся в следующей структуре: let events = [{date:  '2019-12-29'	event: 'name1'},{date:  '2019-12-31'event: 'name2'},{date:  '2019-12-29'event: 'name3'},{date:  '2019-12-30'event: 'name4'},{date:  '2019-12-29'event: 'name5'},{date:  '2019-12-31'event: 'name6'},{date:  '2019-12-29'event: 'name7'},{date:  '2019-12-30'event: 'name8'},{date:  '2019-12-30'event: 'name9'},]Напишите код, которой переделает структуру данных вот в такую:{'2019-12-29': ['name1', 'name3', 'name5', 'name7'],'2019-12-30': ['name4', 'name8', 'name9'],'2019-12-31': ['name2', 'name6'],}", "Переделать структуру", redStructure)

let massFunc = [`function randomColor(){
	let color = massColor[Math.floor(Math.random() * massColor.length)]
	if(spanItem.length > 1){
		console.log(spanItem[spanItem.length - 1].style.backgroundColor == color)
		if(spanItem[spanItem.length - 1].style.backgroundColor == color){
			return randomColor()
		}
	}
	return color
}

symbolColorClick.addEventListener('click', () => {
	symbolColor.textContent = ''
	for(let i = 0; i < mass.length; i++){
		let newSpan = document.createElement('span')
		newSpan.textContent = mass[i]
		newSpan.style.backgroundColor = randomColor()
		symbolColor.append(newSpan) 
		spanItem = document.querySelectorAll('span')
	}
})`,`wordFound.addEventListener('blur', () => {
    let mass = blockText.textContent.split(' ')
    blockText.textContent = ''
    for(let i = 0; i < mass.length; i++){
        if(wordFound.value == mass[i]){
            let newSpan = document.createElement('span')
            newSpan.textContent = mass[i] + ' '
            newSpan.style.backgroundColor = 'red'
            blockText.append(newSpan)
        } else {
            blockText.append(mass[i] + ' ')
        }
    }
})`,`Array.from(refers).forEach(elem => {
    if(elem.href == window.location.href) {
        elem.style.backgroundColor = 'red'
    }
})`,`function pyramidGenerator(){
    let str = 'xxxxx'
    for(let i = 5; i > 0; i--){
        str = str.slice(0,i)
        let block = document.createElement('div')
        block.textContent = str
        taskFourResult.append(block)
    }
}`,`function redStructure(){
    let events = [
        {
            date:  '2019-12-29',
            event: 'name1'
        },
        {
            date:  '2019-12-31',
            event: 'name2'
        },
        {
            date:  '2019-12-29',
            event: 'name3'
        },
        {
            date:  '2019-12-30',
            event: 'name4'
        },
        {
            date:  '2019-12-29',
            event: 'name5'
        },
        {
            date:  '2019-12-31',
            event: 'name6'
        },
        {
            date:  '2019-12-29',
            event: 'name7'
        },
        {
            date:  '2019-12-30',
            event: 'name8'
        },
        {
            date:  '2019-12-30',
            event: 'name9'
        },
    ]
    let eventResult = {}
    for(let i = 0; i < events.length; i++){
        for(let item of Object.entries(events[i])){
            if(item[0] == 'date'){
                eventResult[item[1]] = []
            }
        }
    }
    for(let i = 0; i < events.length; i++){
        for(let item2 of Object.entries(events[i])){
            
            if(Object.values(events[i])[0] == item2[1]){
            eventResult[item2[1]].push(Object.values(events[i])[1])
            }
        }
    }
    console.log(eventResult)
    return JSON.stringify(eventResult)
}`]