/*

№1 Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
dateSumFeb.addEventListener('click', () => {
    let dateToday = new Date(dateParagraf.textContent)
    let dateFebruary = new Date(dateToday)
    dateFebruary.setMonth(1)
    dateFebruary.setDate(29)
    for(let i = 0; i < 5; i++){
       if(dateFebruary.getMonth() == 2){
        dateFebruary.setFullYear(dateFebruary.getFullYear() + 1)
        dateFebruary.setMonth(1)
        dateFebruary.setDate(29)
       } 
    }   
    result.textContent = 'Дней до следующего 29 февраля: ' + (dateFebruary - dateToday) / (60 * 60 * 24 * 1000)

№2 Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
pancakesDay.addEventListener('click', () => {
    let pancDay = new Date()
    let dateToday = new Date()
    if(dateToday.getMonth() > 1){
        pancDay.setFullYear(pancDay.getFullYear() + 1)
    } 
    pancDay.setMonth(2)
    pancDay.setDate(0)
    for(let i = 0; i <= 7; i++){
        if(pancDay.getDay() != 0){
            pancDay.setDate(pancDay.getDate() - 1) 
            
        }
    }
    result.textContent = 'Следующая масленница: ' + pancDay.getFullYear() + '-' + (pancDay.getMonth() + 1) + '-' + pancDay.getDate()
№3 Сделайте функцию, которая будет возвращать случайный цвет.
function colorRandom(){
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 16).toString(16)
    }
    return color
}
№4 Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
function massDelitel(mass){
        let mass3 = [];
        let count = 0;
        let massResult = []
        for(let i = 0; i < mass.length; i++){
            for(let j = mass[i]; j > 0; j--){
                if((mass[i] / j) % 1 == 0){
                    mass3.push(j)
                }
            }
        }
        for(let i = 0; i < mass3.length; i++){
            count = 0;
            for(let j = 0; j < mass3.length; j++){
                if(mass3[i] == mass3[j]){
                    count++;
                }                
            }
            if(count === mass.length && !massResult.includes(+mass3[i])){
                massResult.push(+mass3[i])
                
            }
        }
        console.log(massResult)
        return massResult
    }
№5 Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
[ [2,4,8,10,5,2,1],[3,16,48,7],[2,5,1,8,2,5,1,8,8],[4,4,4,4,4,5,1,4,3],[2,17,48] ] 
function maxMassItem(mass){
    let massResult = [];
    for(let i = 0; i < mass.length; i++){
        let maxItem = 0;
        for(let j = 0; j < mass[i].length; j++){
            if(mass[i][j] > maxItem){
                maxItem = mass[i][j]
            }
            if(j == mass[i].length - 1){
                massResult.push(maxItem)
                maxItem = 0;
            }
        }      
    }
    return massResult
}
    
*/