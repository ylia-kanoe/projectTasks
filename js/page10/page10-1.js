
/* №1 Сделайте функцию, которая параметром будет принимать английское существительное в единственном числе и возвращать его во множественном числе.*/

function englishWord(str) {
	let obj = {
		'es' : ['s', 'sh', 'ch', 'x', 'z', 'ss'],
		's' : ['oy', 'ay', 'ey'],
		'ves': ['f', 'fe']
	}
	let mass = ['person', 'people','man','men', 'woman','women','child','children','foot','feet',,'tooth','teeth','goose','geese','mouse', 'mice','louse', 'lice','ox','oxen']

	if(mass.includes(str)){
		return mass[mass.indexOf(str) + 1] 
	} else if(obj.hasOwnProperty(str.slice(-2))){
		for(let item of Object.entries(obj)){
			for(let i = 0; i < item[1].length; i++){
				if(str.slice(-2).includes(item[1][i])){
					return str + item[0]
				} 
			}
			
		}
	} else {
		return str + 's'
	}
}

createBlockStr("№1 Сделайте функцию, которая параметром будет принимать английское существительное в единственном числе и возвращать его во множественном числе.", 'apple', 'Сделать множественное число слову', englishWord)

/* №2 Сделайте так, чтобы при клике на любое место окна браузера в месте клика появлялся порядковый номер этого клика.*/

function addPoint(){
    let count = 1
    document.body.addEventListener('click', (e) => {
        let newPoint = document.createElement('div')
        newPoint.classList.add('new-point')
        newPoint.textContent = count
        document.body.append(newPoint) 
        
        newPoint.style.top = e.pageY - 10 + 'px'
        newPoint.style.left = e.pageX - 10 + 'px'
        count++
    })
}

createBlockNoData("№2 Сделайте так, чтобы при клике на любое место окна браузера в месте клика появлялся порядковый номер этого клика.", "Запустить функцию", addPoint)

/* №3 Дан текст со знаками препинаний: 'aaa bbb, ccc. Xxx - eee bbb, kkk!' Получите массив слов из такого текста.*/

function massCreate(str){
    let mass = str.split(/[,. !-]+/)
    console.log(mass)
    return mass.join(', ')
}

createBlockStr("№3 Дан текст со знаками препинаний: 'aaa bbb, ccc. Xxx - eee bbb, kkk!' Получите массив слов из такого текста.", 'aaa bbb, ccc. Xxx - eee bbb, kkk!', "Получить массив слов из строки", massCreate)

/* №4 Дан инпут. По мере ввода в него числа он должен отделять тройки чисел пробелами.*/

let redStr = document.querySelector('.task-four-input')
let count = 1
redStr.addEventListener('keyup' , () => {
	if(count == 3){
		redStr.value += ' '
		count = 0
	}
	count++
})

/* №5 Даны два числа. Выведите на экран процесс умножения этих чисел в столбик, как в школе.*/

let taskFiveInputOne = document.querySelector('.task-five-input-one')
let taskFiveInputTwo = document.querySelector('.task-five-input-two')
let multiplyColumn = document.getElementById('multiplyColumn')
let numberResult = document.querySelector('.number-result')

multiplyColumn.addEventListener('click', () => {
    function multiplication(num, num2) {
        let paragraf = document.createElement('p')
        paragraf.textContent = num
        numberResult.append(paragraf)
    
        if(String(num).slice(-1) === '0'){
            paragraf.style.transform = 'translate(8px, 0)'
        }
    
        let paragraf2 = document.createElement('p')
        paragraf2.textContent = num2
        numberResult.append(paragraf2)
    
        if(String(num2).slice(-1) === '0'){
            paragraf2.style.transform = 'translate(8px, 0)'
        }
    
        let count = 0
    
        for(let i = +String(num2).length-1; i >=  0; i--){
            let paragraf3 = document.createElement('p') 
            let span3 = document.createElement('span')
            span3.textContent = num * +(String(num2)[i])
    
            for(let j = 0; j < count; j++){
                span3.textContent += '  '
            }
            count++
            numberResult.append(paragraf3)
            paragraf3.append(span3)
        }
    
        let paragraf4 = document.createElement('p')
        numberResult.append(paragraf4)

        let span4 = document.createElement('span')
        span4.textContent = num * num2
        span4.classList.add('line') 
        paragraf4.append(span4)
    }
    
    multiplication(taskFiveInputOne.value, taskFiveInputTwo.value)
})

/* №6 Сделайте блок, который будет выезжать сверху экрана по нажатию на кнопку.*/

let outputBlock = document.getElementById('outputBlock')
let block = document.querySelector('.output-block')

outputBlock.addEventListener('click', () => {
	
	let translate = -800
	let int = setInterval(() => {
		block.style.transform = `translateY(${translate}px)`
		translate++
		if(translate == 0){
			clearInterval(int)
		}
	}, 10)
})

let massFunc = [`let redStr = document.querySelector('.task-four-input')
let count = 1
redStr.addEventListener('keyup' , () => {
	console.log(redStr.value)
	if(count == 3){
		redStr.value += ' '
		count = 0
	}
	count++
})`, `multiplyColumn.addEventListener('click', () => {
    function multiplication(num, num2) {
        let paragraf = document.createElement('p')
        paragraf.textContent = num
        numberResult.append(paragraf)
    
        if(String(num).slice(-1) === '0'){
            paragraf.style.transform = 'translate(8px, 0)'
        }
    
        let paragraf2 = document.createElement('p')
        paragraf2.textContent = num2
        numberResult.append(paragraf2)
    
        if(String(num2).slice(-1) === '0'){
            paragraf2.style.transform = 'translate(8px, 0)'
        }
    
        let count = 0
    
        for(let i = +String(num2).length-1; i >=  0; i--){
            let paragraf3 = document.createElement('p') 
            let span3 = document.createElement('span')
            span3.textContent = num * +(String(num2)[i])
    
            for(let j = 0; j < count; j++){
                span3.textContent += '  '
            }
            count++
            numberResult.append(paragraf3)
            paragraf3.append(span3)
        }
    
        let paragraf4 = document.createElement('p')
        numberResult.append(paragraf4)

        let span4 = document.createElement('span')
        span4.textContent = num * num2
        span4.classList.add('line') 
        paragraf4.append(span4)
    }
    
    multiplication(taskFiveInputOne.value, taskFiveInputTwo.value)
})`,`outputBlock.addEventListener('click', () => {
	
	let translate = -800
	let int = setInterval(() => {
		block.style.transform = "translateY(" + translate + "px)"
		translate++
		if(translate == 0){
			clearInterval(int)
		}
	}, 10)
})`,`function englishWord(str) {
	let obj = {
		'es' : ['s', 'sh', 'ch', 'x', 'z', 'ss'],
		's' : ['oy', 'ay', 'ey'],
		'ves': ['f', 'fe']
	}
	let mass = ['person', 'people','man','men', 'woman','women','child','children','foot','feet',,'tooth','teeth','goose','geese','mouse', 'mice','louse', 'lice','ox','oxen']

	if(mass.includes(str)){
		return mass[mass.indexOf(str) + 1] 
	} else if(obj.hasOwnProperty(str.slice(-2))){
		for(let item of Object.entries(obj)){
			for(let i = 0; i < item[1].length; i++){
				if(str.slice(-2).includes(item[1][i])){
					return str + item[0]
				} 
			}
			
		}
	} else {
		return str + 's'
	}
}`,`function addPoint(){
    let count = 1
    document.body.addEventListener('click', (e) => {
        let newPoint = document.createElement('div')
        newPoint.classList.add('new-point')
        newPoint.textContent = count
        document.body.append(newPoint) 
        
        newPoint.style.top = event.clientY - 10
        newPoint.style.left = event.clientX - 10
        count++
    })
}`, `function massCreate(str){
    let mass = str.split(/[,. !-]+/)
    console.log(mass)
    return mass.join(', ')
}`]