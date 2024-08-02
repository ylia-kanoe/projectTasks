
/* №1 Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы. */

function strFound(str) {
    let code = str.codePointAt(0)
    let rez = ''
    if ((65 <= code && code <= 90) || (97 <= code && code <= 122)) {
        rez = "Латиница"
    } else if ((1040 <= code && code <= 1071) || (1072 <= code && code <= 1103)) {
        rez = "Кириллица"
    }
    return rez
}

createBlockSymbol('№1 Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.', 'b', 'Эта буква латиница или кириллица?', strFound)

/* №2 Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке. */

function massRandom(mass) {
    let mass2 = []
    let massResult = []
    for (let i = 0; i < mass.length; i++) {
        let random = Math.floor(Math.random() * mass.length)
        if (mass2.includes(random)) {
            i--
        } else {
            mass2.push(random)
        }
    }
    for (let i = 0; i < mass2.length; i++) {
        massResult.push(mass[mass2[i]])
    }
    return massResult
}

createBlockMass('№2 Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.', '1, 2, 3, 4, 5, 6, 7, 8, 9, 0', 'Перемешать элементы в случайном порядке', massRandom)

/* №3 Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы. */

function strSort(str) {
    let mass = str.split(' ')
    let obj = {}
    let mass2 = []

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (mass[i][0] === mass[j][0]) {
                mass2.push(mass[j])
            }
        }

        obj[mass[i][0]] = mass2
        mass2 = []
    }
    return JSON.stringify(obj)
}

createBlockStr('№3 Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.', 'любой текст записать в объект с любыми словами и любыми символами', 'Записать текст в объект', strSort)

/* №4 Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами. */

function numberString(num) {
    let mass = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    let massSot = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'всемьсот', 'девятьсот']
    let massThu = ['одна тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
    let mass2 = []
    for (let i = String(num).length - 1; i >= 0; i--) {

        /* тысячные */
        if (i == String(num).length - 4) {
            mass2.push(massThu[String(num)[i] - 1])
            /*
            if([String(num)[i]] == 1){
                mass2.push('тысяча') 
            } else if([String(num)[i]] == 2) {
                mass2.push(mass[String(num)[i]].slice(0,-1) + "е тысячи" ) 
            } else if([String(num)[i]] == 3 || [String(num)[i]] == 4 ) { 
                mass2.push(mass[String(num)[i]] + " тысячи" ) 
            } else { 
                mass2.push(mass[String(num)[i]] + " тысяч" ) 
            }*/
        }
        /* сотни */
        if (i == String(num).length - 3) {
            mass2.push(massSot[String(num)[i] - 1])
        }

        /* десятки */
        if (i == String(num).length - 2) {

            if (String(num)[i] == 1) {
                if (String(num)[String(num).length - 1] == 4 || String(num)[String(num).length - 1] == 5 || String(num)[String(num).length - 1] == 6 || String(num)[String(num).length - 1] == 9) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "нaдцать")

                } else if (String(num)[String(num).length - 1] == 2) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "енадцать")

                } else if (String(num)[String(num).length - 1] == 1 || String(num)[String(num).length - 1] == 3 || String(num)[String(num).length - 1] == 7 || String(num)[String(num).length - 1] == 8) {
                    mass2.push(mass[String(num)[String(num).length - 1]] + "aдцать")

                } else if (String(num)[String(num).length - 1] == 0) {
                    mass2.push("десять")
                }

                /* удаление последнего элемента массива, если десятки начинаются с 1*/
                if (String(num).length == 3) {
                    mass2.splice(i - 1, 1)
                } else if (String(num).length == 2) {
                    mass2.splice(i, 1)
                } else if (String(num).length == 4) {
                    mass2.splice(i - 2, 1)
                }

            } else if ([String(num)[i]] == 2 || [String(num)[i]] == 3) {
                mass2.push(mass[String(num)[i]] + "дцать")
            } else if ([String(num)[i]] == 4) {
                mass2.push("сорок")
            } else if ([String(num)[i]] == 5 || [String(num)[i]] == 6 || [String(num)[i]] == 7 || [String(num)[i]] == 8) {
                mass2.push(mass[String(num)[i]] + "десят")
            } else if ([String(num)[i]] == 9) {
                mass2.push("девяносто")
            }
        }

        if (i == String(num).length - 1) {
            mass2.push(mass[String(num)[i]])
        }
    }

    /* Проверка на последний 0 */
    if (mass2[0] == 'ноль' && mass2.length > 1) {
        mass2.splice(0, 1)
    }

    return mass2.reverse().join(' ')
}

createBlockNum('№4 Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.', 9999, 'Вывести число словами', numberString)

/* №5 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами. */

function massDelitel(num) {
    let mass = []
    let massResult = []
    for (let i = num; i > 0; i--) {
        if ((num / i) % 1 == 0) {
            for (let j = i; j > 0; j--) {
                if ((i / j) % 1 == 0) {
                    mass.push(j)
                }
            }
            if (mass.length <= 2) {
                massResult.push(i)
            }
            mass = []
        }
    }
    return massResult
}

createBlockNum('№5 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.', 5032, 'Массив простых делителей числа', massDelitel)

/* №6 Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов. */

function strSlog(str) {
    let massSlog = ['аб', 'ав', 'аг', 'ад', 'аж', 'аз', 'аи', 'ай', 'ак', 'ал', 'ам', 'ан', 'ап', 'ар', 'ас', 'ат', 'ау', 'аф', 'ах', 'ац',
        'ач', 'аш', 'ащ', 'аю', 'ая', 'абь', 'авь', 'агь', 'адь', 'ажь', 'азь', 'акь', 'аль', 'амь', 'ань', 'апь', 'арь', 'ась', 'ать', 'афь',
        'ахь', 'аць', 'ачь', 'ашь', 'ащь', 'ба', 'баб', 'баг', 'бар', 'бат', 'бе', 'бер', 'берж', 'бё', 'би', 'бир', 'бо', 'бор', 'борь', 'бра',
        'бре', 'брь', 'бу', 'бъ', 'бы', 'бык', 'бырь', 'бь', 'бэ', 'бю', 'бюст', 'бя', 'брит', 'ва', 'ват', 'вать', 'ве', 'век', 'вель', 'вен',
        'вё', 'ви', 'виль', 'во', 'воль', 'все', 'ву', 'въ', 'вы', 'выд', 'вый', 'вь', 'вэ', 'вю', 'вя', 'га', 'гад', 'гар', 'гард', 'гат', 'ге',
        'гё', 'ги', 'гим', 'гин', 'го', 'горд', 'год', 'гу', 'гум', 'гус', 'гусь', 'гъ', 'гы', 'гь', 'гэ', 'гю', 'гюс', 'гя', 'да', 'дам', 'дар',
        'де', 'дё', 'ди', 'до', 'ддон', 'доз', 'ду', 'дъ', 'ды', 'дыб', 'дым', 'дыр', 'дь', 'дэ', 'дю', 'дя', 'еа', 'еб', 'ев', 'ег', 'ед', 'ее', 'её',
        'еж', 'ез', 'еи', 'ей', 'ек', 'ел', 'ем', 'ен', 'ео', 'еп', 'ер', 'ес', 'ет', 'еу', 'еф', 'ех', 'ец', 'еч', 'еш', 'ещ', 'ею', 'ея', 'ебь',
        'евь', 'егь', 'едь', 'ежь', 'езь', 'екь', 'ель', 'емь', 'ень', 'епь', 'ерь', 'есь', 'еть', 'ефь', 'ехь', 'ець', 'ечь', 'ешь', 'ещь', 'ёб',
        'ёв', 'ёг', 'ёд', 'ёж', 'ёз', 'ёй', 'ёк', 'ёл', 'ём', 'ён', 'ёп', 'ёпть', 'ёр', 'ёс', 'ёт', 'ёф', 'ёх', 'ёц', 'ёч', 'ёш', 'ёщ', 'жа', 'же',
        'жест', 'жё', 'жи', 'жо', 'жу', 'жъ', 'жы', 'жь', 'жэ', 'жю', 'жя', 'за', 'зе', 'зё', 'зи', 'зо', 'зу', 'зъ', 'зы', 'зь', 'зэ', 'зю',
        'зя', 'иб', 'ив', 'иг', 'ид', 'иж', 'из', 'ии', 'ий', 'ик', 'ил', 'им', 'ин', 'ип', 'ир', 'ис', 'ит', 'ить', 'иф', 'их', 'иц', 'ич', 'иш',
        'ищ', 'ия', 'йод', 'ка', 'кар', 'ке', 'кё', 'ки', 'ко', 'ком', 'коч', 'ку', 'къ', 'кы', 'кь', 'кэ', 'кю', 'кя', 'ла', 'ле', 'лен', 'лё',
        'ли', 'ло', 'лов', 'лон', 'лу', 'лъ', 'лы', 'ль', 'лэ', 'лю', 'люк', 'ля', 'ляж', 'ляжь', 'ма', 'ме', 'мед', 'мё', 'мёд', 'ми', 'мн', 'мо',
        'мод', 'мож', 'мон', 'монт', 'мор', 'му', 'муж', 'мъ', 'мы', 'мь', 'мэ', 'мю', 'мя', 'мат', 'мыт', 'мят', 'на', 'не', 'нё', 'ни', 'но',
        'ной', 'ну', 'нъ', 'ны', 'ный', 'нь', 'нэ', 'ню', 'ня', 'нг', 'нов', 'об', 'ов', 'ог', 'од', 'ое', 'ож', 'оз', 'ой', 'ок', 'ол', 'ом', 'он',
        'оо', 'оп', 'ор', 'ос', 'от', 'оу', 'оф', 'ох', 'оц', 'оч', 'ош', 'ощ', 'па', 'пас', 'пе', 'печь', 'пё', 'пёр', 'пёс', 'пи', 'по', 'пол',
        'порт', 'пру', 'прус', 'прусь', 'пси', 'пу', 'пъ', 'пы', 'пь', 'пэ', 'пю', 'пя', 'прян', 'пьян', 'ра', 'раб', 'раж', 'раз', 'рап', 'рас',
        'рат', 'ре', 'реп', 'рё', 'ри', 'ро', 'роч', 'ру', 'руль', 'рус', 'русь', 'ръ', 'ры', 'рь', 'рэ', 'рэп', 'рю', 'ря', 'са', 'се', 'сен',
        'сё', 'си', 'ска', 'сказ', 'ский', 'ской', 'ску', 'скуй', 'сло', 'сме', 'сне', 'снег', 'степ', 'степь', 'стэп', 'со', 'сол', 'солн', 'су',
        'суп', 'съ', 'сы', 'сь', 'сэ', 'сю', 'ся', 'свеж', 'сын', 'та', 'тать', 'таю', 'тель', 'те', 'тес', 'тё', 'ти', 'то', 'тор', 'ту', 'тъ', 'ты',
        'ть', 'тэ', 'тю', 'тя', 'у', 'уб', 'ув', 'уг', 'уд', 'уж', 'уз', 'уй', 'ук', 'ул', 'ум', 'ун', 'уп', 'ур', 'ус', 'ут', 'уу', 'уф', 'ух', 'уц',
        'уч', 'уш', 'ущ', 'фа', 'фе', 'фё', 'фи', 'фит', 'фо', 'фу', 'фъ', 'фы', 'фь', 'фэ', 'фю', 'фя', 'ха', 'хе', 'хё', 'хи', 'хит', 'хо', 'ху',
        'хуй', 'хъ', 'хы', 'хь', 'хэ', 'хю', 'хя', 'ца', 'цап', 'це', 'цё', 'ци', 'цип', 'цо', 'цу', 'цъ', 'цы', 'ць', 'цэ', 'цю', 'ця', 'ча', 'че',
        'чел', 'чё', 'чи', 'чка', 'чо', 'чу', 'чъ', 'чы', 'чь', 'чэ', 'чю', 'чя', 'чист', 'ша', 'ше', 'шё', 'ши', 'шо', 'шу', 'шъ', 'шы', 'шь', 'шэ',
        'шю', 'шя', 'ща', 'ще', 'щё', 'щёт', 'щи', 'що', 'щу', 'щъ', 'щы', 'щь', 'щэ', 'щю', 'щя', 'ъ', 'ыб', 'ыв', 'ыг', 'ыд', 'ыж', 'ыз', 'ый',
        'ык', 'ыл', 'ым', 'ын', 'ып', 'ыр', 'ыс', 'ыт', 'ыф', 'ых', 'ыц', 'ыч', 'ыш', 'ыщ', 'ь', 'эб', 'эв', 'эвр', 'эг', 'эд', 'эж', 'эз', 'эи',
        'эй', 'эк', 'эл', 'эм', 'эн', 'эп', 'эр', 'эс', 'эт', 'эф', 'эх', 'эц', 'эч', 'эш', 'эщ', 'юб', 'юв', 'юг', 'юд', 'юж', 'юз', 'юй', 'юк',
        'юл', 'юм', 'юн', 'юп', 'юр', 'юс', 'ют', 'юф', 'юх', 'юц', 'юч', 'юш', 'ющ', 'юя', 'яб', 'яв', 'яг', 'яд', 'яж', 'яз', 'яй', 'як', 'ял',
        'ям', 'ян', 'яп', 'яр', 'яс', 'ят', 'яу', 'яф', 'ях', 'яц', 'яч', 'яш', 'ящ', 'яю', 'яя']

    let massResult = []
    let str2 = ''
    for (let i = 0; i < str.length; i++) {
        str2 += str[i]
        if (massSlog.includes(str2)) {
            massResult.push(str2)
            str2 = ''
        } else if (massSlog.includes(str2.slice(1))) {

            massResult[massResult.length - 1] = massResult[massResult.length - 1] + str2.slice(0, 1)
            massResult.push(str2.slice(1))
            str2 = ''
        } else if (i == str.length - 1) {
            massResult[massResult.length - 1] = massResult[massResult.length - 1] + str2
        }
    }
    return massResult.join('-')
}

createBlockStr('№6 Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.', 'армагеддон', 'Вывести слово по слогам', strSlog)

let massFunc = [
    `function strFound(str) {
    let code = str.codePointAt(0)
    let rez = ''
    if ((65 <= code && code <= 90) || (97 <= code && code <= 122)) {
        rez = "Латиница"
    } else if ((1040 <= code && code <= 1071) || (1072 <= code && code <= 1103)) {
        rez = "Кириллица"
    }
    return rez
}`,`function massRandom(mass) {
    let mass2 = []
    let massResult = []
    for (let i = 0; i < mass.length; i++) {
        let random = Math.floor(Math.random() * mass.length)
        if (mass2.includes(random)) {
            i--
        } else {
            mass2.push(random)
        }
    }
    for (let i = 0; i < mass2.length; i++) {
        massResult.push(mass[mass2[i]])
    }
    return massResult
}`,`function strSort(str) {
    let mass = str.split(' ')
    let obj = {}
    let mass2 = []

    for (let i = 0; i < mass.length; i++) {
        for (let j = 0; j < mass.length; j++) {
            if (mass[i][0] === mass[j][0]) {
                mass2.push(mass[j])
            }
        }

        obj[mass[i][0]] = mass2
        mass2 = []
    }
    return JSON.stringify(obj)
}`,`function numberString(num) {
    let mass = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять']
    let massSot = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'всемьсот', 'девятьсот']
    let massThu = ['одна тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
    let mass2 = []
    for (let i = String(num).length - 1; i >= 0; i--) {

        /* тысячные */
        if (i == String(num).length - 4) {
            mass2.push(massThu[String(num)[i] - 1])
            /*
            if([String(num)[i]] == 1){
                mass2.push('тысяча') 
            } else if([String(num)[i]] == 2) {
                mass2.push(mass[String(num)[i]].slice(0,-1) + "е тысячи" ) 
            } else if([String(num)[i]] == 3 || [String(num)[i]] == 4 ) { 
                mass2.push(mass[String(num)[i]] + " тысячи" ) 
            } else { 
                mass2.push(mass[String(num)[i]] + " тысяч" ) 
            }*/
        }
        /* сотни */
        if (i == String(num).length - 3) {
            mass2.push(massSot[String(num)[i] - 1])
        }

        /* десятки */
        if (i == String(num).length - 2) {

            if (String(num)[i] == 1) {
                if (String(num)[String(num).length - 1] == 4 || String(num)[String(num).length - 1] == 5 || String(num)[String(num).length - 1] == 6 || String(num)[String(num).length - 1] == 9) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "нaдцать")

                } else if (String(num)[String(num).length - 1] == 2) {
                    mass2.push(mass[String(num)[String(num).length - 1]].slice(0, -1) + "енадцать")

                } else if (String(num)[String(num).length - 1] == 1 || String(num)[String(num).length - 1] == 3 || String(num)[String(num).length - 1] == 7 || String(num)[String(num).length - 1] == 8) {
                    mass2.push(mass[String(num)[String(num).length - 1]] + "aдцать")

                } else if (String(num)[String(num).length - 1] == 0) {
                    mass2.push("десять")
                }

                /* удаление последнего элемента массива, если десятки начинаются с 1*/
                if (String(num).length == 3) {
                    mass2.splice(i - 1, 1)
                } else if (String(num).length == 2) {
                    mass2.splice(i, 1)
                } else if (String(num).length == 4) {
                    mass2.splice(i - 2, 1)
                }

            } else if ([String(num)[i]] == 2 || [String(num)[i]] == 3) {
                mass2.push(mass[String(num)[i]] + "дцать")
            } else if ([String(num)[i]] == 4) {
                mass2.push("сорок")
            } else if ([String(num)[i]] == 5 || [String(num)[i]] == 6 || [String(num)[i]] == 7 || [String(num)[i]] == 8) {
                mass2.push(mass[String(num)[i]] + "десят")
            } else if ([String(num)[i]] == 9) {
                mass2.push("девяносто")
            }
        }

        if (i == String(num).length - 1) {
            mass2.push(mass[String(num)[i]])
        }
    }

    /* Проверка на последний 0 */
    if (mass2[0] == 'ноль' && mass2.length > 1) {
        mass2.splice(0, 1)
    }

    return mass2.reverse().join(' ')
}`,`function massDelitel(num) {
    let mass = []
    let massResult = []
    for (let i = num; i > 0; i--) {
        if ((num / i) % 1 == 0) {
            for (let j = i; j > 0; j--) {
                if ((i / j) % 1 == 0) {
                    mass.push(j)
                }
            }
            if (mass.length <= 2) {
                massResult.push(i)
            }
            mass = []
        }
    }
    return massResult
}`,`function strSlog(str) {
    let massSlog = ['аб', 'ав', 'аг', 'ад', 'аж', 'аз', 'аи', 'ай', 'ак', 'ал', 'ам', 'ан', 'ап', 'ар', 'ас', 'ат', 'ау', 'аф', 'ах', 'ац',
        'ач', 'аш', 'ащ', 'аю', 'ая', 'абь', 'авь', 'агь', 'адь', 'ажь', 'азь', 'акь', 'аль', 'амь', 'ань', 'апь', 'арь', 'ась', 'ать', 'афь',
        'ахь', 'аць', 'ачь', 'ашь', 'ащь', 'ба', 'баб', 'баг', 'бар', 'бат', 'бе', 'бер', 'берж', 'бё', 'би', 'бир', 'бо', 'бор', 'борь', 'бра',
        'бре', 'брь', 'бу', 'бъ', 'бы', 'бык', 'бырь', 'бь', 'бэ', 'бю', 'бюст', 'бя', 'брит', 'ва', 'ват', 'вать', 'ве', 'век', 'вель', 'вен',
        'вё', 'ви', 'виль', 'во', 'воль', 'все', 'ву', 'въ', 'вы', 'выд', 'вый', 'вь', 'вэ', 'вю', 'вя', 'га', 'гад', 'гар', 'гард', 'гат', 'ге',
        'гё', 'ги', 'гим', 'гин', 'го', 'горд', 'год', 'гу', 'гум', 'гус', 'гусь', 'гъ', 'гы', 'гь', 'гэ', 'гю', 'гюс', 'гя', 'да', 'дам', 'дар',
        'де', 'дё', 'ди', 'до', 'ддон', 'доз', 'ду', 'дъ', 'ды', 'дыб', 'дым', 'дыр', 'дь', 'дэ', 'дю', 'дя', 'еа', 'еб', 'ев', 'ег', 'ед', 'ее', 'её',
        'еж', 'ез', 'еи', 'ей', 'ек', 'ел', 'ем', 'ен', 'ео', 'еп', 'ер', 'ес', 'ет', 'еу', 'еф', 'ех', 'ец', 'еч', 'еш', 'ещ', 'ею', 'ея', 'ебь',
        'евь', 'егь', 'едь', 'ежь', 'езь', 'екь', 'ель', 'емь', 'ень', 'епь', 'ерь', 'есь', 'еть', 'ефь', 'ехь', 'ець', 'ечь', 'ешь', 'ещь', 'ёб',
        'ёв', 'ёг', 'ёд', 'ёж', 'ёз', 'ёй', 'ёк', 'ёл', 'ём', 'ён', 'ёп', 'ёпть', 'ёр', 'ёс', 'ёт', 'ёф', 'ёх', 'ёц', 'ёч', 'ёш', 'ёщ', 'жа', 'же',
        'жест', 'жё', 'жи', 'жо', 'жу', 'жъ', 'жы', 'жь', 'жэ', 'жю', 'жя', 'за', 'зе', 'зё', 'зи', 'зо', 'зу', 'зъ', 'зы', 'зь', 'зэ', 'зю',
        'зя', 'иб', 'ив', 'иг', 'ид', 'иж', 'из', 'ии', 'ий', 'ик', 'ил', 'им', 'ин', 'ип', 'ир', 'ис', 'ит', 'ить', 'иф', 'их', 'иц', 'ич', 'иш',
        'ищ', 'ия', 'йод', 'ка', 'кар', 'ке', 'кё', 'ки', 'ко', 'ком', 'коч', 'ку', 'къ', 'кы', 'кь', 'кэ', 'кю', 'кя', 'ла', 'ле', 'лен', 'лё',
        'ли', 'ло', 'лов', 'лон', 'лу', 'лъ', 'лы', 'ль', 'лэ', 'лю', 'люк', 'ля', 'ляж', 'ляжь', 'ма', 'ме', 'мед', 'мё', 'мёд', 'ми', 'мн', 'мо',
        'мод', 'мож', 'мон', 'монт', 'мор', 'му', 'муж', 'мъ', 'мы', 'мь', 'мэ', 'мю', 'мя', 'мат', 'мыт', 'мят', 'на', 'не', 'нё', 'ни', 'но',
        'ной', 'ну', 'нъ', 'ны', 'ный', 'нь', 'нэ', 'ню', 'ня', 'нг', 'нов', 'об', 'ов', 'ог', 'од', 'ое', 'ож', 'оз', 'ой', 'ок', 'ол', 'ом', 'он',
        'оо', 'оп', 'ор', 'ос', 'от', 'оу', 'оф', 'ох', 'оц', 'оч', 'ош', 'ощ', 'па', 'пас', 'пе', 'печь', 'пё', 'пёр', 'пёс', 'пи', 'по', 'пол',
        'порт', 'пру', 'прус', 'прусь', 'пси', 'пу', 'пъ', 'пы', 'пь', 'пэ', 'пю', 'пя', 'прян', 'пьян', 'ра', 'раб', 'раж', 'раз', 'рап', 'рас',
        'рат', 'ре', 'реп', 'рё', 'ри', 'ро', 'роч', 'ру', 'руль', 'рус', 'русь', 'ръ', 'ры', 'рь', 'рэ', 'рэп', 'рю', 'ря', 'са', 'се', 'сен',
        'сё', 'си', 'ска', 'сказ', 'ский', 'ской', 'ску', 'скуй', 'сло', 'сме', 'сне', 'снег', 'степ', 'степь', 'стэп', 'со', 'сол', 'солн', 'су',
        'суп', 'съ', 'сы', 'сь', 'сэ', 'сю', 'ся', 'свеж', 'сын', 'та', 'тать', 'таю', 'тель', 'те', 'тес', 'тё', 'ти', 'то', 'тор', 'ту', 'тъ', 'ты',
        'ть', 'тэ', 'тю', 'тя', 'у', 'уб', 'ув', 'уг', 'уд', 'уж', 'уз', 'уй', 'ук', 'ул', 'ум', 'ун', 'уп', 'ур', 'ус', 'ут', 'уу', 'уф', 'ух', 'уц',
        'уч', 'уш', 'ущ', 'фа', 'фе', 'фё', 'фи', 'фит', 'фо', 'фу', 'фъ', 'фы', 'фь', 'фэ', 'фю', 'фя', 'ха', 'хе', 'хё', 'хи', 'хит', 'хо', 'ху',
        'хуй', 'хъ', 'хы', 'хь', 'хэ', 'хю', 'хя', 'ца', 'цап', 'це', 'цё', 'ци', 'цип', 'цо', 'цу', 'цъ', 'цы', 'ць', 'цэ', 'цю', 'ця', 'ча', 'че',
        'чел', 'чё', 'чи', 'чка', 'чо', 'чу', 'чъ', 'чы', 'чь', 'чэ', 'чю', 'чя', 'чист', 'ша', 'ше', 'шё', 'ши', 'шо', 'шу', 'шъ', 'шы', 'шь', 'шэ',
        'шю', 'шя', 'ща', 'ще', 'щё', 'щёт', 'щи', 'що', 'щу', 'щъ', 'щы', 'щь', 'щэ', 'щю', 'щя', 'ъ', 'ыб', 'ыв', 'ыг', 'ыд', 'ыж', 'ыз', 'ый',
        'ык', 'ыл', 'ым', 'ын', 'ып', 'ыр', 'ыс', 'ыт', 'ыф', 'ых', 'ыц', 'ыч', 'ыш', 'ыщ', 'ь', 'эб', 'эв', 'эвр', 'эг', 'эд', 'эж', 'эз', 'эи',
        'эй', 'эк', 'эл', 'эм', 'эн', 'эп', 'эр', 'эс', 'эт', 'эф', 'эх', 'эц', 'эч', 'эш', 'эщ', 'юб', 'юв', 'юг', 'юд', 'юж', 'юз', 'юй', 'юк',
        'юл', 'юм', 'юн', 'юп', 'юр', 'юс', 'ют', 'юф', 'юх', 'юц', 'юч', 'юш', 'ющ', 'юя', 'яб', 'яв', 'яг', 'яд', 'яж', 'яз', 'яй', 'як', 'ял',
        'ям', 'ян', 'яп', 'яр', 'яс', 'ят', 'яу', 'яф', 'ях', 'яц', 'яч', 'яш', 'ящ', 'яю', 'яя']

    let massResult = []
    let str2 = ''
    for (let i = 0; i < str.length; i++) {
        str2 += str[i]
        if (massSlog.includes(str2)) {
            massResult.push(str2)
            str2 = ''
        } else if (massSlog.includes(str2.slice(1))) {

            massResult[massResult.length - 1] = massResult[massResult.length - 1] + str2.slice(0, 1)
            massResult.push(str2.slice(1))
            str2 = ''
        } else if (i == str.length - 1) {
            massResult[massResult.length - 1] = massResult[massResult.length - 1] + str2
        }
    }
    return massResult.join('-')
}`
]