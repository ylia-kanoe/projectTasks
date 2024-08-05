
/* №1 Даны два селекта. В первом селекте выводятся страны. Сделайте так, чтобы во втором селекте выводились города выбранной страны.*/

let country = document.getElementById('country')
let city = document.getElementById('city')

let objCountry = {
	'Нидерланды' : ['Амстердам','Гаага','Роттердам','Харлем','Делфт','Гронинген','Хорн' ],
	'Андорра' :	['Андорра-ла-Велья','Валлнорд','Грандвалира','Кальдеа','Канильо','Ла-Массана'],
	'Греция': ['Афины','Ханья','Патры','Салоники','Ираклион','Пирей','Аргос'],
	'Сербия' : ['Белград','Ниш','Субботица','Кралево','Валево'],
	'Германия' : ['Берлин','Мюнхен','Кёльн','Гамбург','Бремен','Ганновер'],
	'Россия' : ['Москва','Тольятти','Самара','Иркутск','Астана','Анапа','Геленджик','Сочи']
}

for(let item of Object.entries(objCountry)){
	let optionCountry = document.createElement('option')
	optionCountry.value = item[0]
	optionCountry.textContent = item[0]
	country.append(optionCountry)
}

let optCountry = country.querySelectorAll('option')

for(let item of Object.entries(objCountry)){
	if(item[0] == optCountry[0].textContent){	
		for(let i = 0; i < item[1].length; i++){
			let optionCity = document.createElement('option')
			optionCity.textContent = item[1][i]
			city.append(optionCity)
		}
	}
		
}

country.addEventListener('change',(e)=>{
	for(let item of Object.entries(objCountry)){
		if(country.value == item[0]){
			city.innerHTML = ''
			for(let i = 0; i < item[1].length; i++){
				let optionCity = document.createElement('option')
				optionCity.textContent = item[1][i]
				city.append(optionCity)
			}
		}
	}
})

/* №2 Даны инпут и кнопка. В инпут вводится число. По клику на кнопку, проверьте, является ли это число совершенным.*/

let inputNum = document.querySelector('.task-two-input')
let chechNum = document.getElementById('chechNum')
let result = document.querySelector('.task-two-result')

chechNum.addEventListener('click', () => {
    let num = inputNum.value
    let sum = 0
    for(let i = num-1; i > 0; i--){
        if((num / i) % 1 == 0){
            sum += i
        }
    }
    if(sum == num){
      result.textContent = 'Число совершенное'
    } else {
       result.textContent = 'Число НЕ совершенное'
    }
})

/* №3 Дан список событий за определенные месяцы, хранящийся в следующей структуре: let events = [{date:  '2019-12'event: 'name1'},{date:  '2019-12'event: 'name2'},{date:  '2019-11'event: 'name3'},{date:  '2019-11' event: 'name4'},{date:  '2020-10'event: 'name5'},{date:  '2020-10'event: 'name6'},{date: '2020-11'event: 'name5'},{date:  '2020-11'event: 'name6'},{date:  '2020-12'event: 'name7'},{date:  '2020-12'event: 'name8'},{date:  '2020-12' event: 'name9'},] Напишите код, которой переделает структуру данных вот в такую: {2019: {11: [массив событий],12: [массив событий],}2020: {10: [массив событий],11: [массив событий],12: [массив событий],}}*/

function redStructure(){
    let events = [
        {
            date:  '2019-12',
            event: 'name1'
        },
        {
            date:  '2019-12',
            event: 'name2'
        },
        {
            date:  '2019-11',
            event: 'name3'
        },
        {
            date:  '2019-11',
            event: 'name4'
        },
        {
            date:  '2020-10',
            event: 'name5'
        },
        {
            date:  '2020-10',
            event: 'name6'
        },
        {
            date:  '2020-11',
            event: 'name5'
        },
        {
            date:  '2020-11',
            event: 'name6'
        },
        {
            date:  '2020-12',
            event: 'name7'
        },
        {
            date:  '2020-12',
            event: 'name8'
        },
        {
            date:  '2020-12',
            event: 'name9'
        },
    ]

    let obj = {}
    let obj2 = {}
    let mass = []

    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(item1[0] == 'date'){
                obj[item1[1].slice(0,4)] = {}
            }
        }
    }
    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(item1[0] == 'date'){
                obj[item1[1].slice(0,4)][item1[1].slice(5,7)] = []
                
            }
        }
    }
    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(Object.values(item)[0] == item1[1]){
                obj[item1[1].slice(0,4)][item1[1].slice(5,7)].push(Object.values(item)[1])
                
            }
        }
    }
    console.log(obj)
    return JSON.stringify(obj)
}

createBlockNoData("№3 Дан список событий за определенные месяцы, хранящийся в следующей структуре: let events = [{date:  '2019-12'event: 'name1'},{date:  '2019-12'event: 'name2'},{date:  '2019-11'event: 'name3'},{date:  '2019-11' event: 'name4'},{date:  '2020-10'event: 'name5'},{date:  '2020-10'event: 'name6'},{date: '2020-11'event: 'name5'},{date:  '2020-11'event: 'name6'},{date:  '2020-12'event: 'name7'},{date:  '2020-12'event: 'name8'},{date:  '2020-12' event: 'name9'},] Напишите код, которой переделает структуру данных вот в такую: {2019: {11: [массив событий],12: [массив событий],}2020: {10: [массив событий],11: [массив событий],12: [массив событий],}}", "Переделать структуру", redStructure)

let massFunc = [`let country = document.getElementById('country')
let city = document.getElementById('city')

let objCountry = {
	'Нидерланды' : ['Амстердам','Гаага','Роттердам','Харлем','Делфт','Гронинген','Хорн' ],
	'Андорра' :	['Андорра-ла-Велья','Валлнорд','Грандвалира','Кальдеа','Канильо','Ла-Массана'],
	'Греция': ['Афины','Ханья','Патры','Салоники','Ираклион','Пирей','Аргос'],
	'Сербия' : ['Белград','Ниш','Субботица','Кралево','Валево'],
	'Германия' : ['Берлин','Мюнхен','Кёльн','Гамбург','Бремен','Ганновер'],
	'Россия' : ['Москва','Тольятти','Самара','Иркутск','Астана','Анапа','Геленджик','Сочи']
}

for(let item of Object.entries(objCountry)){
	let optionCountry = document.createElement('option')
	optionCountry.value = item[0]
	optionCountry.textContent = item[0]
	country.append(optionCountry)
}

let optCountry = country.querySelectorAll('option')

for(let item of Object.entries(objCountry)){
	if(item[0] == optCountry[0].textContent){	
		for(let i = 0; i < item[1].length; i++){
			let optionCity = document.createElement('option')
			optionCity.textContent = item[1][i]
			city.append(optionCity)
		}
	}
		
}

country.addEventListener('change',(e)=>{
	for(let item of Object.entries(objCountry)){
		if(country.value == item[0]){
			city.innerHTML = ''
			for(let i = 0; i < item[1].length; i++){
				let optionCity = document.createElement('option')
				optionCity.textContent = item[1][i]
				city.append(optionCity)
			}
		}
	}
})`,`chechNum.addEventListener('click', () => {
    let num = inputNum.value
    let sum = 0
    for(let i = num-1; i > 0; i--){
        if((num / i) % 1 == 0){
            sum += i
        }
    }
    if(sum == num){
      result.textContent = 'Число совершенное'
    } else {
       result.textContent = 'Число НЕ совершенное'
    }
})`,`function redStructure(){
    let events = [
        {
            date:  '2019-12',
            event: 'name1'
        },
        {
            date:  '2019-12',
            event: 'name2'
        },
        {
            date:  '2019-11',
            event: 'name3'
        },
        {
            date:  '2019-11',
            event: 'name4'
        },
        {
            date:  '2020-10',
            event: 'name5'
        },
        {
            date:  '2020-10',
            event: 'name6'
        },
        {
            date:  '2020-11',
            event: 'name5'
        },
        {
            date:  '2020-11',
            event: 'name6'
        },
        {
            date:  '2020-12',
            event: 'name7'
        },
        {
            date:  '2020-12',
            event: 'name8'
        },
        {
            date:  '2020-12',
            event: 'name9'
        },
    ]

    let obj = {}
    let obj2 = {}
    let mass = []

    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(item1[0] == 'date'){
                obj[item1[1].slice(0,4)] = {}
            }
        }
    }
    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(item1[0] == 'date'){
                obj[item1[1].slice(0,4)][item1[1].slice(5,7)] = []
                
            }
        }
    }
    for(let item of events){
        for(let item1 of Object.entries(item)){
            if(Object.values(item)[0] == item1[1]){
                obj[item1[1].slice(0,4)][item1[1].slice(5,7)].push(Object.values(item)[1])
                
            }
        }
    }
    console.log(obj)
    return JSON.stringify(obj)
}`]