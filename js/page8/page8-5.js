
/* №1 Дан массив со словами. Выведите слова, начинающиеся на одинаковые буквы в своем отдельном списке ul. Над каждым списком сделайте h2 с названием буквы, для которой сделан список.*/

let taskOneResult = document.querySelector('.task-one-result')
let mass = ['передать','лечение','высший','сутки','вставать','операция','пространство','спокойный','одежда','кусок','тема','животный','снимать',
'искусство','умный','малый','курс','звонить','очередной','чудо','ощущение','крайний','напоминать','придумать','падать','здание','свежий',
'поговорить','начинаться','милиция','приказать','несмотря','оттуда','засмеяться','волна','задача','касаться','старуха','войско','срок','ужас',
'узкий','материал','приняться','нормальный','крик','знание','трое','четвертый','шум','заставить','автомат','резко','тетя','впечатление','пауза',
'глубина','доллар','сотня','виноватый','студент','боевой','очко','нож','подниматься','мировой','предмет','плохой','майор','ударить','разуметься',
'точный','всякий','деятельность','инженер','программа','костюм','женский','крепкий','театр','встречаться','различный','хвост','танк','социальный',
'мертвый','попытаться','явно','журнал','конь','схватить','вдоль','стихи','степень','отказаться','вытащить','предлагать','фигура','ключ','черт',
'отправиться','побежать','вагон','культура','курить','боец','западный','фильм','восемь','открывать']
let mass2 = []

for(let i = 0; i < mass.length; i++){
    if(!mass2.includes(mass[i][0])){
        let listItemsH2 = document.createElement('h2')
        let listItems = document.createElement('ul')
        mass2.push(mass[i][0])   
        for(let j = 0; j < mass.length; j++){ 
            listItemsH2.textContent = mass[i][0]
            taskOneResult.append(listItemsH2)
            taskOneResult.append(listItems)
            if(mass[i][0] == mass[j][0]){ 
                let listItem = document.createElement('li')
                listItem.textContent = mass[j]
                listItems.append(listItem)        
            }
        }
    } 
}

/* №2 Даны три селекта. В первом селекте выведите дни месяца от 1 до 31, во втором - названия месяцев года, а в третьем - года за предыдущие и следующие 10 лет.
№3 Модифицируйте предыдущую задачу так, чтобы по умолчанию в селектах была выбрана текущая дата.
№4 Модифицируйте предыдущую задачу так, чтобы в первом селекте количество дней соответствовало выбранному месяцу и году.*/

let daysDate = document.getElementById('daysDate')
let monthDate = document.getElementById('monthDate')
let yearDate = document.getElementById('yearDate')

let date = new Date()
let dateToday = new Date()

date.setMonth(date.getMonth() + 1)
date.setDate(0)


for(let i = 1; i <= date.getDate(); i++){
	let optionDays = document.createElement('option')
	optionDays.textContent = i
	daysDate.append(optionDays)
	if(optionDays.textContent == dateToday.getDate()){
		optionDays.selected = true
	}
}

let massMonth = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
for(let i = 0; i < massMonth.length; i++){
	let optionMonth = document.createElement('option')
	optionMonth.textContent = massMonth[i]
	monthDate.append(optionMonth)
	if(i == dateToday.getMonth()){
		optionMonth.selected = true
	}
}

for(let i = date.getFullYear() - 10; i <= date.getFullYear() + 10; i++){
	let optionYear = document.createElement('option')
	optionYear.textContent = i
	yearDate.append(optionYear)
	if(optionYear.textContent == dateToday.getFullYear() ){
		optionYear.selected = true
	}
}

/* №5 Выведите на экран следующую пирамидку: 1, 333, 55555, 7777777, 999999999 */

let taskFiveResult = document.querySelector('.task-five-result')

function pyramidGenerator(){
    let str = ''
    for(let i = 1; i < 10; i++){
        let j = 0
        while(j < i && i % 2 != 0){
            str += i
            j++
        }
        if(i == j){
            let block = document.createElement('div')
            block.textContent = str
            taskFiveResult.append(block)
            str = ''
        }
    }
}
pyramidGenerator()

let massFunc = [`for(let i = 0; i < mass.length; i++){
    if(!mass2.includes(mass[i][0])){
        let listItemsH2 = document.createElement('h2')
        let listItems = document.createElement('ul')
        mass2.push(mass[i][0])   
        for(let j = 0; j < mass.length; j++){ 
            listItemsH2.textContent = mass[i][0]
            taskOneResult.append(listItemsH2)
            taskOneResult.append(listItems)
            if(mass[i][0] == mass[j][0]){ 
                let listItem = document.createElement('li')
                listItem.textContent = mass[j]
                listItems.append(listItem)        
            }
        }
    } 
}`,`let daysDate = document.getElementById('daysDate')
let monthDate = document.getElementById('monthDate')
let yearDate = document.getElementById('yearDate')

let date = new Date()
let dateToday = new Date()

date.setMonth(date.getMonth() + 1)
date.setDate(0)


for(let i = 1; i <= date.getDate(); i++){
	let optionDays = document.createElement('option')
	optionDays.textContent = i
	daysDate.append(optionDays)
	if(optionDays.textContent == dateToday.getDate()){
		optionDays.selected = true
	}
}

let massMonth = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
for(let i = 0; i < massMonth.length; i++){
	let optionMonth = document.createElement('option')
	optionMonth.textContent = massMonth[i]
	monthDate.append(optionMonth)
	if(i == dateToday.getMonth()){
		optionMonth.selected = true
	}
}

for(let i = date.getFullYear() - 10; i <= date.getFullYear() + 10; i++){
	let optionYear = document.createElement('option')
	optionYear.textContent = i
	yearDate.append(optionYear)
	if(optionYear.textContent == dateToday.getFullYear() ){
		optionYear.selected = true
	}
}`,`function pyramidGenerator(){
    let str = ''
    for(let i = 1; i < 10; i++){
        let j = 0
        while(j < i && i % 2 != 0){
            str += i
            j++
        }
        if(i == j){
            let block = document.createElement('div')
            block.textContent = str
            taskFiveResult.append(block)
            str = ''
        }
    }
}`]