/*
№1 Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
function sortText(str){
    let mass = str.split(' ')
    mass.sort()
    return mass.join(' ')
}
№2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
function massOverall(mass, mass2){
        let massOver = [];
        for(let i = 0; i < mass.length; i++){
            for(let j = 0; j < mass2.length; j++){
                if(mass[i] === mass2[j] && !massOver.includes(mass[i])){
                    massOver.push(mass[i])
                }
            }
        }
        return massOver
    }
№3 Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
function randomNum(){
    return console.log(Math.floor(Math.random() * 100 ))
}

randomNum()
№4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1


function returnLastElem(mass, num){
    let item = '';
    for(let i = 0; i < mass.length; i++){
        if(num === mass[i]){
            item = mass[i+1];
        }
        if(num === mass[mass.length - 1]){
            item = mass[0]
        }
    }
    return item
}


*/