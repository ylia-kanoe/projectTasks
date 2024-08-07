/* №1 Дан текст со знаками препинаний. Получите массив предложений этого текста.*/

let str = 'Как долго я ждал? Очень долго. А ты долго ждал? Нет. Нет? НЕТ! Я ждал всего час, не более. А ты сколько ждал?? 4 часа, брат, 4 часа. И еще список: что-то; с чем-то; под чем-то;'

function massText(str){
    let mass = str.split(/[?!.;:]+/)
    console.log(mass)
    return mass.join(', ') + ' (результат в консоли)'
}

createBlockStr('№1 Дан текст со знаками препинаний. Получите массив предложений этого текста.', str, 'Получить массив предложений текста', massText)

/* №2 Всем ссылкам, ведующим на чужой сайт, добавьте target="_blank".*/

let reference = document.querySelectorAll('.task-two-list-items a')

Array.from(reference).forEach(elem => {
    if (!elem.href.includes(window.location.origin)) {
        elem.target = '_blank'
    }
})

/*№3 Дана некоторая строка: let str = 'abcde abcde' В переменной хранятся символы: let del = 'abe'; Удалите из строки все указанные в переменной символы. В нашем случае должно получится следующее: 'cd cd'*/

function symbolDelete(str, del){
    let strResult = ''
    let mass = str.split('')
    
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < del.length; j++){
            if(mass[i] == del[j]){
                mass.splice(i,1)
                i--
                break
            }    
        }
    }
    str = mass.join('')
    return str
}


createBlockStrTwo("№3 Дана некоторая строка: let str = 'abcde abcde' В переменной хранятся символы: let del = 'abe'; Удалите из строки все указанные в переменной символы. В нашем случае должно получится следующее: 'cd cd'.", 'abcde abcde', 'abe', 'Удалить из строки символы', symbolDelete)

let massFunc = [`Array.from(reference).forEach(elem => {
    if (!elem.href.includes(window.location.origin)) {
        elem.target = '_blank'
    }
})`,`function massText(str){
    let mass = str.split(/[?!.;:]+/)
    console.log(mass)
    return mass.join(', ')
}`,`function symbolDelete(str, del){
    let strResult = ''
    let mass = str.split('')
    
    for(let i = 0; i < mass.length; i++){
        for(let j = 0; j < del.length; j++){
            if(mass[i] == del[j]){
                mass.splice(i,1)
                i--
                break
            }    
        }
    }
    str = mass.join('')
    return str
}`]