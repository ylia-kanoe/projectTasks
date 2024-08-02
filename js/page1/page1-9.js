
/* №1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.*/

function massStrHttp(mass) {
    let massRez = []
    for (i = 0; i < mass.length; i++) {
        if (mass[i].indexOf('http://') == 0) {
            massRez.push(mass[i]);
        }
    }
    return massRez.join(', ')
}

createBlockMass("№1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.", "http://vk.html, http://ok.com, http://google.html, vk.com, ok.com, google.html", 'Оставить строки, которые начинаются на http://', massStrHttp)

/* №2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.*/

function massStrHttpTwo(mass) {
    let massRez = []
    for (i = 0; i < mass.length; i++) {
        if (mass[i].slice(-5) == '.html') {
            massRez.push(mass[i]);
        }
    }
    return massRez.join(', ')
}

createBlockMass("№2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.", "http://vk.html, http://ok.com, http://google.html, vk.com, ok.com, google.html", 'Оставить строки, которые заканчиваются на .html', massStrHttpTwo)

/* №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.*/

function massIncrease(mass) {
    for (let i = 0; i < mass.length; i++) {
        mass.splice(i, 1, mass[i] + mass[i] * 0.1);
    }
    return mass.join(', ')
}

createBlockMass("№3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.", '10,20,30,40,50,1,2,5,9,6,2,5', 'Увеличить каждое число на 10%', massIncrease)


let massFunc = [`function massStrHttp(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].indexOf('http://') == 0){
                massRez.push(mass[i]);
            }
        }
        return massRez
    }`, `function massStrHttp(mass) {
        let massRez = []
        for(i = 0; i < mass.length; i++){
            if(mass[i].slice(-5) == '.html'){
                massRez.push(mass[i]);
            } 
        }
        return massRez
    }`, `function massIncrease(mass) {
        for(let i = 0; i < mass.length; i++){
            mass.splice(i, 1,  mass[i] + mass[i] * 0.1);
        }
        return mass.join(', ')
    }`]

