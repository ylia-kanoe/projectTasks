
/*№1 Дано меню со ссылками. Сделайте так, чтобы по клику на ссылку меню под ней выпадало подменю.*/

let taskOneListItem = document.querySelectorAll('.task-one-list-items li')
let taskOneSubMenu = document.querySelectorAll('.task-one-list-items .sub-menu')

Array.from(taskOneListItem).forEach(elem => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();
		Array.from(taskOneSubMenu).forEach(elem2 => {
			if(elem.contains(elem2)){
				elem2.classList.toggle('open')
			}
		})
	})
})

/* №2 Дан абзац со словами и кнопка. По клику на кнопку покрасьте каждое слово в случайный цвет так, чтобы у соседних слов были разные цвета.*/

let wordColor = document.querySelector('.task-two-paragraf')
let wordColorClick = document.getElementById('wordColorClick')
let mass = wordColor.textContent.split(' ')
let massColor = [ 'rgb(255, 0, 255)', 'rgb(128, 0, 128)', 'rgb(255, 0, 0)','rgb(128, 0, 0)','rgb(255, 255, 0)','rgb(128, 128, 0)','rgb(0, 255, 0)','rgb(0, 128, 0)','rgb(0, 255, 255)','rgb(0, 128, 128)','rgb(0, 0, 255)','rgb(0, 0, 128)']
let spanElem = document.querySelectorAll('span')

function colorRandom(){
	let color = massColor[Math.floor(Math.random() * massColor.length)]
	if(spanElem.length > 1){
		console.log(spanElem[spanElem.length - 1].style.backgroundColor == color)
		if(spanElem[spanElem.length - 1].style.backgroundColor == color){
			return colorRandom()
		}
	}
	return color
}

wordColorClick.addEventListener('click', () => {
	wordColor.innerHTML = ''
	for(let i = 0; i < mass.length; i++){
		let newSpan = document.createElement('span')
		newSpan.textContent += mass[i] + ' '
		newSpan.style.backgroundColor = colorRandom()
		wordColor.append(newSpan)
		spanElem = document.querySelectorAll('span')
	}
})

/* №3 Дан див. У этого дива есть крестик закрытия. Сделайте так, чтобы по клику на крестик, либо на любое место страницы вне дива, этот див прятался.*/

let popup = document.querySelector('.task .popup')
let closePopup = document.querySelector('.task .close-popup')
let taskThreePopup = document.querySelector('.task-three-popup')

taskThreePopup.addEventListener('click', () => {
    popup.classList.toggle('open')
})

closePopup.addEventListener('click', () => {
	popup.classList.toggle('open')
})

document.addEventListener('click', (e) => {
	if(!e.composedPath().includes(popup) && !e.composedPath().includes(taskThreePopup)){
		popup.classList.remove('open')
	}
})

/* №4 Дан текстареа и ul. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter каждая строка текста добавилась в список в виде отдельного тега li.*/


let taskFourResult = document.querySelector('.task-four-list-items')
let textBlock = document.querySelector('.task-four-input-textarea')

textBlock.addEventListener('keydown', (e) => {
	if(e.code === 'Enter' && e.shiftKey){
		let mass = textBlock.value.split('\n')
		let newItem = document.createElement('li')
		newItem.textContent = mass[mass.length - 1]
		taskFourResult.append(newItem)
	}
})

/* №5 Дан такой список дел за определенную дату: let affairs = {'2019-12-31': ['массив дел'],'2018-11-29': ['массив дел'],'2018-11-30': ['массив дел'],'2018-12-27': ['массив дел'],'2019-12-29': ['массив дел'],'2019-12-30': ['массив дел'],'2018-12-30': ['массив дел'],'2018-12-31': ['массив дел'],} Выведите на экран все дела за 2018 год.*/

let affairs = {
	'2019-12-31': ['массив дел'],
	'2018-11-29': ['массив дел'],
	'2018-11-30': ['массив дел'],
	'2018-12-27': ['массив дел'],
	'2019-12-29': ['массив дел'],
	'2019-12-30': ['массив дел'],
	'2018-12-30': ['массив дел'],
	'2018-12-31': ['массив дел'],
}
let taskFiveResult = document.querySelector('.task-five-list-items')

for(let item of Object.entries(affairs)){
	if(item[0].includes('2018')){
		let newItem = document.createElement('li')
		newItem.textContent += item[0] + ': ' + item[1]
		taskFiveResult.append(newItem)
	}
}

let massFunc = [`Array.from(taskOneListItem).forEach(elem => {
	elem.addEventListener('click', (e) => {
		e.preventDefault();
		Array.from(taskOneSubMenu).forEach(elem2 => {
			if(elem.contains(elem2)){
				elem2.classList.toggle('open')
			}
		})
	})
})`,`wordColorClick.addEventListener('click', () => {
	wordColor.innerHTML = ''
	for(let i = 0; i < mass.length; i++){
		let newSpan = document.createElement('span')
		newSpan.textContent += mass[i] + ' '
		newSpan.style.backgroundColor = colorRandom()
		wordColor.append(newSpan)
		spanElem = document.querySelectorAll('span')
	}
})`,`closePopup.addEventListener('click', () => {
	popup.classList.toggle('open')
})

document.addEventListener('click', (e) => {
	if(!e.composedPath().includes(popup)){
		popup.classList.toggle('open')
	}
})`,`textBlock.addEventListener('keydown', (e) => {
	if(e.code === 'Enter' && e.shiftKey){
		let mass = textBlock.value.split('\n')
		let newItem = document.createElement('li')
		newItem.textContent = mass[mass.length - 1]
		taskFourResult.append(newItem)
	}
})`,`for(let item of Object.entries(affairs)){
	if(item[0].includes('2018')){
		let newItem = document.createElement('li')
		newItem.textContent += item[0] + ': ' + item[1]
		taskFiveResult.append(newItem)
	}
}`]