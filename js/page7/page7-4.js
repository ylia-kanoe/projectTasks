/* №1 Дан ul. Выведите в него дни текущего месяца. Текущий день, а также выходные, выделите другими цветами.*/

let dateMounth = document.querySelector('.task-one-list-items')
let dateToday = new Date()
let dateItem = new Date(dateToday)
dateItem.setMonth(dateItem.getMonth() + 1)
dateItem.setDate(0)
let days = dateItem.getDate()
for(let i = 1; i <= days; i++){
    let item = document.createElement('li')
    dateItem.setDate(i)
    item.textContent = dateItem.getDate()
    dateMounth.append(item)
    if(dateItem.getDay() == 0 || dateItem.getDay() == 6){
        item.style.backgroundColor = 'yellow'
    } else if(dateItem.getDate() == dateToday.getDate()){
        item.style.backgroundColor = 'green'
    }
}

/* №2 Дан абзац, содержащий текст со словами. Сделайте так, чтобы по клику на любое слово из этого абзаца, это слово выделялось красным цветом.*/

let colorTextPar = document.querySelector('.task-two-result')
let colorText = colorTextPar.textContent.split(' ')

function textContentToSpans(){
    colorTextPar.innerHTML = ''
    for(let i = 0; i < colorText.length; i++){
        let span = document.createElement('span')
        span.textContent = colorText[i]
        colorTextPar.append(span)
        colorTextPar.append(' ')
    }
}
textContentToSpans()

let colorTextParSpan = document.querySelectorAll('.task-two-result span')

Array.from(colorTextParSpan).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = 'red'
    })
})


/* №3 Дан инпут и кнопка. В него вводится число из четного количества цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма половины цифр равна сумме второй половине цифр.*/

let numTicket = document.querySelector('.task-three-input')
let checkHappyTicket = document.getElementById('checkHappyTicket')
let taskThreeResult = document.querySelector('.task-three-result')

checkHappyTicket.addEventListener('click', () => {
    let num1 =  0
    let num2 =  0
   
    for(let i = 0; i < String(numTicket.value).length / 2; i++){
        num1 += +(String(numTicket.value)[i])
    }
    for(let i =  String(numTicket.value).length - 1; i >= String(numTicket.value).length / 2; i--){
        num2 += +(String(numTicket.value)[i])
    }
    if(num1 == num2){
        taskThreeResult.textContent = 'Это счастливый билет'
    } else{
        taskThreeResult.textContent = 'Это НЕ счастливый билет'
    }
})

/* №4 Дан инпут. В него вводится текст. Сделайте так, чтобы в инпут нельзя было ввести больше десяти символов. При превышении количества, символы просто не должны вводиться.*/

let inputCheck = document.querySelector('.task-four-input')
let inputDisabled = inputCheck.value

inputCheck.addEventListener('input', () => {
    if(String(inputCheck.value).length <= 10){
        inputDisabled = inputCheck.value
	} else {
		inputCheck.value = inputDisabled
	}
})

/* №5 Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку сделайте так, чтобы в абзаце начал тикать обратный отсчет от введенного в инпут числа до нуля.*/

let numCountDown = document.querySelector('.task-five-input')
let resultCountDown = document.querySelector('.task-five-result')
let countDown = document.getElementById('countDown')
let intervalCountDown 

countDown.addEventListener('click', () => {
    resultCountDown.textContent = numCountDown.value
    intervalCountDown = setInterval(() => {
        resultCountDown.textContent =  +resultCountDown.textContent - 1
        if(resultCountDown.textContent == 0){
            clearInterval(intervalCountDown)
        }
    }, 1000)
})

/* №6 Напишите программу, которая сформирует следующий массив:[	[1],[1, 2],[1, 2, 3],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5, 6],]*/

function massGenerator(){
    let massResult = []
    let mass = []
    for(let i = 0; i < 6; i++){  
        for(let j = 0; j < 6; j++){  
            mass.push(j+1)
            if(i == j){
                break 
            }
        }
        if(i != 3){
            massResult.push(mass)
        }
        mass = []
    }
    console.log(massResult)
    return massResult
}

createBlockNoData('№6 Напишите программу, которая сформирует следующий массив:[	[1],[1, 2],[1, 2, 3],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5, 6],]', 'Сгенерировать массив', massGenerator)

let massFunc = [`let dateToday = new Date()
let dateItem = new Date(dateToday)
dateItem.setMonth(dateItem.getMonth() + 1)
dateItem.setDate(0)
let days = dateItem.getDate()
for(let i = 1; i <= days; i++){
    let item = document.createElement('li')
    dateItem.setDate(i)
    item.textContent = dateItem.getDate()
    dateMounth.append(item)
    if(dateItem.getDay() == 0 || dateItem.getDay() == 6){
        item.style.backgroundColor = 'yellow'
    } else if(dateItem.getDate() == dateToday.getDate()){
        item.style.backgroundColor = 'green'
    }
}`,`let colorTextPar = document.querySelector('.task-two-result')
let colorText = colorTextPar.textContent.split(' ')

function textContentToSpans(){
    colorTextPar.innerHTML = ''
    for(let i = 0; i < colorText.length; i++){
        let span = document.createElement('span')
        span.textContent = colorText[i]
        colorTextPar.append(span)
        colorTextPar.append(' ')
    }
}
textContentToSpans()

let colorTextParSpan = document.querySelectorAll('.task-two-result span')

Array.from(colorTextParSpan).forEach(elem => {
    elem.addEventListener('click', () => {
        elem.style.backgroundColor = 'red'
    })
})`,`checkHappyTicket.addEventListener('click', () => {
    let num1 =  0
    let num2 =  0
   
    for(let i = 0; i < String(numTicket.value).length / 2; i++){
        num1 += +(String(numTicket.value)[i])
    }
    for(let i =  String(numTicket.value).length - 1; i >= String(numTicket.value).length / 2; i--){
        num2 += +(String(numTicket.value)[i])
    }
    if(num1 == num2){
        taskThreeResult.textContent = 'Это счастливый билет'
    } else{
        taskThreeResult.textContent = 'Это НЕ счастливый билет'
    }
})`,`let inputCheck = document.querySelector('.task-four-input')
let inputDisabled = inputCheck.value

inputCheck.addEventListener('input', () => {
    if(String(inputCheck.value).length <= 10){
        inputDisabled = inputCheck.value
	} else {
		inputCheck.value = inputDisabled
	}
})`,`countDown.addEventListener('click', () => {
    resultCountDown.textContent = numCountDown.value
    intervalCountDown = setInterval(() => {
        resultCountDown.textContent =  +resultCountDown.textContent - 1;
        if(resultCountDown.textContent == 0){
            clearInterval(intervalCountDown)
        }
    }, 1000)
})`,`function massGenerator(){
    let massResult = []
    let mass = []
    for(let i = 0; i < 6; i++){  
        for(let j = 0; j < 6; j++){  
            mass.push(j+1)
            if(i == j){
                break 
            }
        }
        if(i != 3){
            massResult.push(mass)
        }
        mass = []
    }
    console.log(massResult)
    return massResult
}`]