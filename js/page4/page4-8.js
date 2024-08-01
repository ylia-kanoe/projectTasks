/*

№1 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
function massRandom(mass){
        let i = Math.floor(Math.random() * (mass.length - 0) + 0)
        return mass[i]
    }
№2 Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
function massRandom(mass){
        let mass2 = []
        for(let i = 0; i < mass.length; i++){
            if(Math.floor(Math.random() * (2 - 0) + 0) === 1 ){
            mass2.push(mass[i])
            }
        }
        return mass2
    }
№3 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
function massFound(mass) {
    let item = Math.floor(Math.random() * (mass.length - 1));
    console.log(mass[item])
}

massFound([2,3,5,9,6,7,8,4,1,0])

№4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
function massFull(num, num2){
        let mass = [];
        let mass2 = [];
        for(let i = ((num > num2) ? num2 : num); i <= ((num > num2) ? num : num2); i++ ){
    
            for(let j = i; j > 0; j--){
                if((i / j) % 1 === 0 ){
                    mass2.push(j)
                }
            }
            if(mass2.length <= 2){
                mass.push(i)
                mass2 = []
            }
            mass2 = []  
        }
        return mass
    }
№5 Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.
 function numSum(...args){
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log(sum) 
}

numSum(2,3,5,9,10)
№6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
 function massFull(num, num2, n){
        let mass = []
        for(let i = 0; i < n; i++){
            
            if(num > num2){
                mass.push(Math.floor(Math.random() * (num - num2) + num2))
            } else {
                mass.push(Math.floor(Math.random() * (num2 - num) + num))
            }
              
            if(mass[i] == mass[i-1] ){
                mass.splice(i,1)
                i--   
            }
            
        }
        return mass
    }
№7 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
function massFull(num, num2, n){
        function itemRandom(){
            return Math.floor(Math.random() * ((num > num2 ? num : num2) - (num > num2 ? num2 : num)) + (num > num2 ? num2 : num));
        }
        let mass = [];
        let item = 0;
        for(let i = 0; i < n; i++){
            item = itemRandom()
            if(!mass.includes(item)){
                mass.push(item)
            } else {
              n++
            }
            
        }
        return mass
    }
*/