/* №1 Дан массив. Выведите все варианты перестановки элементов этого массива.*/

let taskOneListItems = document.querySelector('.task-one-list-items')
let taskOneParagraf = document.querySelector('.task-one-paragraf')
let massive = [1,2,3,4]
taskOneParagraf.textContent = massive.join(', ')

function randomMass(mass){
    let massRandNum = []
    for(let i = 0; i < mass.length; i++){
        let randomNum = Math.floor(Math.random() * mass.length)
        if(!massRandNum.includes(randomNum)){
            massRandNum.push(randomNum)
        } else {
            i--
        }
    }
    let massRez = []
	for(let i = 0; i < massRandNum.length; i++){
		massRez.push(mass[massRandNum[i]])
		
	}
	return massRez
}

function newMass(mass){
    let massRez = []
    let count = 0
    let tes = 0
    let num = mass.length
    while (count < factorial(num) ) {
        let newMass = randomMass(mass)
        for(let i = 0; i < massRez.length; i++){
            if(massRez[i].toString() === newMass.toString()){
                tes = 1
                count --
            }
        }
        if (tes != 1) {
            massRez.push(newMass)
            let listItem = document.createElement('li')
            taskOneListItems.append(listItem)
            listItem.textContent = newMass.join(', ')
        } 
            count ++
            tes = 0
        
    }
    return massRez
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

newMass(massive)

/*№2 Напишите код, который нарисует радугу на канвасе.*/

/* №3 Даны два инпута и кнопка. По клику на кнопку выведите список список ul всех дружественных чисел из промежутка, заданном значениями инпутов. */

let taskThreeListItems = document.querySelector('.task-three-list-items')
let taskThreeInputOne = document.querySelector('.task-three-input-one')
let taskThreeInputTwo = document.querySelector('.task-three-input-two')
let foundFriendlyNum = document.getElementById('foundFriendlyNum')

function friendlyNumbers(num, num2){
    let obj = {}
    let sum = 0
    for(let i = num2; i > num; i--){
        for(let j = i - 1; j >= 1; j--){
            if((i / j) % 1 == 0){
                sum += j
            }
        }
        obj[i] = sum
        sum = 0
    }
    for(let item of Object.entries(obj)){
        for(let item2 of Object.entries(obj)){
            if(item[0] == item2[1] && item[1] == item2[0]){
                let listItem = document.createElement('li')
                listItem.textContent = item[0] + " дружественен с " +  item[1]
                taskThreeListItems.append(listItem)
            }
        }
    }
}

foundFriendlyNum.addEventListener('click', () => {
    friendlyNumbers(+taskThreeInputOne.value, +taskThreeInputTwo.value)
})

/* №4 Дана форма с инпутами, текстареа, чебоксами, радиокнопками и селектами. Юзер как-то изменяет элементы формы. Сделайте так, чтобы после перезагрузки окна браузера все элементы формы пришли в то состояние, в котором их оставил юзер.*/

let userName = document.querySelector('input[name=user-name]')
let userSurname = document.querySelector('input[name=user-surname]')
let userInfo = document.querySelector('textarea')
let userLanguage = document.querySelectorAll('input[name=lang-choose]')
let userCountry = document.querySelectorAll('select[name=select-one]')
let userCountrys = document.querySelectorAll('select[name=select-one] option')
let usetPet = document.querySelectorAll('select[name=select-two]')
let usetPets = document.querySelectorAll('select[name=select-two] option')
let userNumber = document.querySelectorAll('input[name=radio-num]')
let massLanguage = []

userName.addEventListener('input', () => {
    localStorage.setItem('userName', userName.value);
})

userSurname.addEventListener('input', () => {
    localStorage.setItem('userSurname', userSurname.value);
})

userInfo.addEventListener('input', () => {
   localStorage.setItem('userInfo', userInfo.value);
})

Array.from(userLanguage).forEach(elem => {
    elem.addEventListener('input', () => {
        if(!massLanguage.includes(elem.value)){
            massLanguage.push(elem.value)
        } else {
            for(let i = 0; i < massLanguage.length; i++){
                if(massLanguage[i] == elem.value){
                    massLanguage.splice(i, 1)
                    i--
                }
            }
        }
        localStorage.setItem('userLanguage', massLanguage)
    })
})

Array.from(userCountry).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('userCountry', elem.value);
    })
})

Array.from(usetPet).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('usetPet', elem.value);
    })
})

Array.from(userNumber).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('userNumber', elem.value);  
    })
})

document.addEventListener('DOMContentLoaded', () => {
    userName.value = localStorage.getItem('userName')
    userSurname.value = localStorage.getItem('userSurname')
    userInfo.value = localStorage.getItem('userInfo')

    Array.from(userCountrys).forEach(elem => { 
        if(elem.value  == localStorage.getItem('userCountry')){
            elem.selected = true
        }
    })
  

    Array.from(usetPets).forEach(elem => {
        if(elem.value  == localStorage.getItem('usetPet')){
            elem.selected = true
        }
    })

    Array.from(userNumber).forEach(elem => {
        if(elem.value  == localStorage.getItem('userNumber')){
            elem.checked = true
        }
    })

    massLanguage = localStorage.getItem('userLanguage').split(',')
    Array.from(userLanguage).forEach(elem => {
        for(let i = 0; i < massLanguage.length; i++){
            if(massLanguage[i] == elem.value){
                elem.checked = true
            }
        }
    })
})

/* №5 Дана квадратная HTML таблица произвольного размера. По нажатию на кнопку транспонируйте ее, то есть завалите ее на бок. Посмотрим на примере. Пусть у нас есть вот такая таблица:
После транспонирования она должна превратится в следующую:
*/

let massFunc = [`let massive = [1,2,3,4]
taskOneParagraf.textContent = massive.join(', ')

function randomMass(mass){
    let massRandNum = []
    for(let i = 0; i < mass.length; i++){
        let randomNum = Math.floor(Math.random() * mass.length)
        if(!massRandNum.includes(randomNum)){
            massRandNum.push(randomNum)
        } else {
            i--
        }
    }
    let massRez = []
	for(let i = 0; i < massRandNum.length; i++){
		massRez.push(mass[massRandNum[i]])
		
	}
	return massRez
}

function newMass(mass){
    let massRez = []
    let count = 0
    let tes = 0
    let num = mass.length
    while (count < factorial(num) ) {
        let newMass = randomMass(mass)
        for(let i = 0; i < massRez.length; i++){
            if(massRez[i].toString() === newMass.toString()){
                tes = 1
                count --
            }
        }
        if (tes != 1) {
            massRez.push(newMass)
            let listItem = document.createElement('li')
            taskOneListItems.append(listItem)
            listItem.textContent = newMass.join(', ')
        } 
            count ++
            tes = 0
        
    }
    return massRez
}

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

newMass(massive)`,``,`
function friendlyNumbers(num, num2){
    let obj = {}
    let sum = 0
    for(let i = num2; i > num; i--){
        for(let j = i - 1; j >= 1; j--){
            if((i / j) % 1 == 0){
                sum += j
            }
        }
        obj[i] = sum
        sum = 0
    }
    for(let item of Object.entries(obj)){
        for(let item2 of Object.entries(obj)){
            if(item[0] == item2[1] && item[1] == item2[0]){
                let listItem = document.createElement('li')
                listItem.textContent = item[0] + " дружественен с " +  item[1]
                taskThreeListItems.append(listItem)
            }
        }
    }
}

foundFriendlyNum.addEventListener('click', () => {
    friendlyNumbers(+taskThreeInputOne.value, +taskThreeInputTwo.value)
})`,`let userName = document.querySelector('input[name=user-name]')
let userSurname = document.querySelector('input[name=user-surname]')
let userInfo = document.querySelector('textarea')
let userLanguage = document.querySelectorAll('input[name=lang-choose]')
let userCountry = document.querySelectorAll('select[name=select-one]')
let userCountrys = document.querySelectorAll('select[name=select-one] option')
let usetPet = document.querySelectorAll('select[name=select-two]')
let usetPets = document.querySelectorAll('select[name=select-two] option')
let userNumber = document.querySelectorAll('input[name=radio-num]')
let massLanguage = []

userName.addEventListener('input', () => {
    localStorage.setItem('userName', userName.value);
})

userSurname.addEventListener('input', () => {
    localStorage.setItem('userSurname', userSurname.value);
})

userInfo.addEventListener('input', () => {
   localStorage.setItem('userInfo', userInfo.value);
})

Array.from(userLanguage).forEach(elem => {
    elem.addEventListener('input', () => {
        if(!massLanguage.includes(elem.value)){
            massLanguage.push(elem.value)
        } else {
            for(let i = 0; i < massLanguage.length; i++){
                if(massLanguage[i] == elem.value){
                    massLanguage.splice(i, 1)
                    i--
                }
            }
        }
        localStorage.setItem('userLanguage', massLanguage)
    })
})

Array.from(userCountry).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('userCountry', elem.value);
    })
})

Array.from(usetPet).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('usetPet', elem.value);
    })
})

Array.from(userNumber).forEach(elem => {
    elem.addEventListener('change', () => {
        localStorage.setItem('userNumber', elem.value);  
    })
})

document.addEventListener('DOMContentLoaded', () => {
    userName.value = localStorage.getItem('userName')
    userSurname.value = localStorage.getItem('userSurname')
    userInfo.value = localStorage.getItem('userInfo')

    Array.from(userCountrys).forEach(elem => { 
        if(elem.value  == localStorage.getItem('userCountry')){
            elem.selected = true
        }
    })
  

    Array.from(usetPets).forEach(elem => {
        if(elem.value  == localStorage.getItem('usetPet')){
            elem.selected = true
        }
    })

    Array.from(userNumber).forEach(elem => {
        if(elem.value  == localStorage.getItem('userNumber')){
            elem.checked = true
        }
    })

    massLanguage = localStorage.getItem('userLanguage').split(',')
    Array.from(userLanguage).forEach(elem => {
        for(let i = 0; i < massLanguage.length; i++){
            if(massLanguage[i] == elem.value){
                elem.checked = true
            }
        }
    })
})`, ``]