/* 
№1 Напишите код, который нарисует стрелку на канвасе. Острие стрелки должно указывать в заданную точку, а сама стрелка должна быть наклонена под заданным углом.

№2 Дан див, текстом которого является некоторый CSS код. Напишите скрипт, который выполнит подсветку синтаксиса этого кода.

/* №3 При заходе на страницу сайта покажите юзеру обратный отсчет, который закончится через час от момента захода юзера на сайт. Сделайте так, чтобы после обновления страницы, отсчет продолжался с того места, на котором он остановился. */

let taskThreeBlock = document.querySelector('.task-three-block')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
let min = 59
let sec = 60


document.addEventListener('DOMContentLoaded', () => {
    setInterval((() => {
        let minu = localStorage.getItem('min')
        let secu = localStorage.getItem('sec')
        minutes.textContent = minu
        seconds.textContent = secu
        secu--
        if (secu == 0) {
            minu--
            secu = 60
        }
        localStorage.setItem('min', minu);
        localStorage.setItem('sec', secu);

        minu = localStorage.getItem('min')
        secu = localStorage.getItem('sec')
    }), 1000)

})




/* №4 Напишите код, который сгенерирует таблицу, в которой случайным образом будут расставлены корабли для игры в морской бой.*/






/* №5 Дана HTML таблица, в которой в произвольных двух ячейках стоят плюсы: По нажатию на кнопку заполните минусами все ячейки вокруг заданных следующим образом: */

let taskFourItemTd = document.querySelectorAll('.task-five-table td')
let taskFourItemTr = document.querySelectorAll('.task-five-table tr')
let tableFill = document.getElementById('tableFill')

tableFill.addEventListener('click', () => {
    let mass = []
    Array.from(taskFourItemTd).forEach((elem, i) => {
        if(elem.textContent == '+'){
            if((i+1) % taskFourItemTr.length == 0){
                mass.push(i - 1)
                mass.push(i + taskFourItemTr.length)
                mass.push(i - taskFourItemTr.length)
                mass.push(i + taskFourItemTr.length - 1)
                mass.push(i - taskFourItemTr.length - 1)
            } else if(i % taskFourItemTr.length == 0){
                mass.push(i + 1)
                mass.push(i + taskFourItemTr.length)
                mass.push(i - taskFourItemTr.length)
                mass.push(i + taskFourItemTr.length + 1)
                mass.push(i - taskFourItemTr.length + 1)
            } else {
                mass.push(i + 1)
                mass.push(i - 1)
                mass.push(i + taskFourItemTr.length)
                mass.push(i - taskFourItemTr.length)
                mass.push(i + taskFourItemTr.length - 1)
                mass.push(i - taskFourItemTr.length - 1)
                mass.push(i + taskFourItemTr.length + 1)
                mass.push(i - taskFourItemTr.length + 1)

            }           
        } 
    })
    for(let i = 0; i < mass.length; i++){
        if(mass[i] < taskFourItemTd.length){
            taskFourItemTd[mass[i]].textContent = '-'
        }
    }
})