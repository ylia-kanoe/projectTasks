
/*№1 Дана кнопка. По клику на кнопку плавно прокрутите окно браузера до самого низа.*/

let scrollDoc = document.getElementById('scrollDoc')

scrollDoc.addEventListener('click', () => {
    window.scrollBy({top: document.documentElement.clientHeight, behavior : 'smooth'})
})

/* №2 Даны кнопки и дивы. Каждая кнопка соответствует своему диву. Сделайте так, чтобы по первому клику на кнопку открывался ее див, а по второму клику - скрывался.*/

let buttonOpen = document.querySelectorAll('.task-two-list-items button')
let blockText = document.querySelectorAll('.task-two-list-items blockText')

buttonOpen.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.nextElementSibling.classList.toggle('hide')
    })
})

/* №3 Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.*/

let strRus = document.querySelector('.task-three-input')
let strTranslit = document.querySelector('.task-three-result')
let massAlfTr = ['a','b','v','g','d','e','yo','zh','z','i','j','k','l','m','n','o','p','r','s','t','u','f','h','c','ch','sh','sh','y','e','yu','ya']
let massAlfRu = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ы','э','ю','я']

strRus.addEventListener('blur', () => {
    let strOne = strRus.value
    let strTwo = ''
    for(let i = 0; i < String(strOne).length; i++){
        if(massAlfRu.includes(String(strOne)[i])){
        strTwo += massAlfTr[massAlfRu.indexOf(String(strOne)[i])]
        }
    }
    strTranslit.textContent = strTwo
})

/* №4 Напишите программу, которая сформирует следующий массив:[['x', 'x', 'x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x'],['x', 'x'],['x'],]*/

function massGenerator(){
    let massResult = []
    let mass = []
    for(let i = 4; i >= 0; i--){
        for(let j = 0; j < 5; j++){
            mass.push('x')
            if(i == j){
                break
            }
        }
        massResult.push(mass)
        mass = []
    }
    console.log(massResult)
    return massResult.join(', ') + ' (результат в консоли)'
}
createBlockNoData("№4 Напишите программу, которая сформирует следующий массив:[['x', 'x', 'x', 'x', 'x'],['x', 'x', 'x', 'x'],['x', 'x', 'x'],['x', 'x'],['x'],]", 'Сгенерировать массив', massGenerator)

let massFunc = [`scrollDoc.addEventListener('click', () => {
    window.scrollBy({top: document.documentElement.clientHeight, behavior : 'smooth'})
})`,`buttonOpen.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.nextElementSibling.classList.toggle('hide')
    })
})`,`let massAlfTr = ['a','b','v','g','d','e','yo','zh','z','i','j','k','l','m','n','o','p','r','s','t','u','f','h','c','ch','sh','sh','y','e','yu','ya']
let massAlfRu = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ы','э','ю','я']

strRus.addEventListener('blur', () => {
    let strOne = strRus.value
    let strTwo = ''
    for(let i = 0; i < String(strOne).length; i++){
        if(massAlfRu.includes(String(strOne)[i])){
        strTwo += massAlfTr[massAlfRu.indexOf(String(strOne)[i])]
        }
    }
    strTranslit.textContent = strTwo
})`,`function massGenerator(){
    let massResult = []
    let mass = []
    for(let i = 4; i >= 0; i--){
        for(let j = 0; j < 5; j++){
            mass.push('x')
            if(i == j){
                break
            }
        }
        massResult.push(mass)
        mass = []
    }
    console.log(massResult)
    return massResult
}`]