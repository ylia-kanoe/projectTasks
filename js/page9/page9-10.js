/* №1 Дана таблица. Юзер кликает по очереди на две ячейки, выделяя их (Ctrl). Сделайте так, чтобы красным цветом выделились все ячейки, расположенные по порядку между теми, на которые кликнул юзер. */

let taskOneTable = document.querySelector('.task-one-table')
let taskOneItemTr = document.querySelectorAll('.task-one-table tr')
let taskOneItemTd = document.querySelectorAll('.task-one-table td')
let massClick = []

Array.from(taskOneItemTd).forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        if(e.ctrlKey){
            massClick.push(i)
            if(massClick.length == 2){
                let min = massClick[0] > massClick[1] ? massClick[1]: massClick[0]
                let max = massClick[0] > massClick[1] ? massClick[0]: massClick[1] 
                for(let i = min+1; i < max; i++){
                    taskOneItemTd[i].style.backgroundColor = 'red'
                }
                massClick = []
            }
        }
    })
})
    
/* №2 Напишите код, который определит максимальный уровень вложенности многомерного массива.*/

//let massTwo = [[[1,1,1],[1,2,3,4],[1,2,5]],[[1,2],[1,5]],[[1],[1,4,7],[[1,2],[1],[1],[[2,3,5],[1,5]],[1],[1,3]]]]

/* №3 Дан список каких-то данных за определенные даты, хранящийся в следующей структуре: let data = [ { year: 2019, month: 11, day: 20, data: ['массив с данными'] }, { year: 2019, month: 11, day: 21, data: ['массив с данными'] }, { year: 2019, month: 12, day: 25, data: ['массив с данными'] }, { year: 2019, month: 12, day: 26, data: ['массив с данными'] }, { year: 2020, month: 10, day: 29, data: ['массив с данными'] }, { year: 2020, month: 10, day: 30, data: ['массив с данными'] }, { year: 2020, month: 11, day: 19, data: ['массив с данными'] }, { year: 2020, month: 11, day: 20, data: ['массив с данными'] }, ] Напишите код, которой переделает структуру данных в структуру вида: { год1: { месяц1: { день1: [массив данных], день2: [массив данных], день3: [массив данных], } месяц2: { день1: [массив данных], день2: [массив данных], день3: [массив данных], } } год2: { месяц1: { день1: [массив данных], день2: [массив данных], день3: [массив данных], } месяц2: { день1: [массив данных], день2: [массив данных], день3: [массив данных], } } }*/

/*let data = [
	{
		year: 2019,
		month: 11,
		day: 20,
		data: ['массив с данными 1']
	},
	{
		year: 2019,
		month: 11,
		day: 21,
		data: ['массив с данными 2']
	},
	{
		year: 2019,
		month: 12,
		day: 25,
		data: ['массив с данными 3']
	},
	{
		year: 2019,
		month: 12,
		day: 26,
		data: ['массив с данными 4']
	},
	{
		year: 2020,
		month: 10,
		day: 29,
		data: ['массив с данными 5']
	},
	{
		year: 2020,
		month: 10,
		day: 30,
		data: ['массив с данными 6']
	},
	{
		year: 2020,
		month: 11,
		day: 19,
		data: ['массив с данными 7']
	},
	{
		year: 2020,
		month: 11,
		day: 20,
		data: ['массив с данными 8']
	},
]*/

let massFunc = [`Array.from(taskOneItemTd).forEach((elem, i) => {
    elem.addEventListener('click', (e) => {
        if(e.ctrlKey){
            massClick.push(i)
            if(massClick.length == 2){
                let min = massClick[0] > massClick[1] ? massClick[1]: massClick[0]
                let max = massClick[0] > massClick[1] ? massClick[0]: massClick[1] 
                for(let i = min+1; i < max; i++){
                    taskOneItemTd[i].style.backgroundColor = 'red'
                }
                massClick = []
            }
        }
    })
})`]

