'use strict!';
// function sqrt(num) {
//     return Math.sqrt(num);
// }

// function round(num) {
//     return num.toFixed(3);
// }
// let res = round(sqrt(2));
// console.log(res);

// function func() {
//     let sum = 0;

//     for (let i = 1; i <= 5; i++) {
//         sum += i;
//     }

//     return sum;
// }
// let res = func();
// console.log(res);

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }
// learnJS('JavaSrcipt', done);


// let options = {
//     name: 'ann',
//     width: 1020,
//     height: 200,
//     color: {
//         border: 'red',
//         bg: 'white'
//     },
//     makeTest: function () {
//         console.log('ann');
//     }
// };
// options.makeTest();

// const {
//     border,
//     bg
// } = options.color;
// console.log(border);


// let arr = [2, 4, 6, 8, 10];
// // arr.pop();
// // console.log(arr);
// // arr.push(11, 12);
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// // for (value of arr){
// //     console.log(value);
// // }
// //  console.log(arr.length);
// // arr[99] = 0;
// // console.log(arr);
// // console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри  масcива ${arr}`);
// });

const str = prompt("", "");
const products = str.split(',');
console.log(products.join(';'));

let a = new Array();
a['key'] = 'value';
console.log(a.length);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add));
console.log(Object.assign({}, add));

const clon = Object.assign({}, add);
clon.d = 20;
// console.log(add);
// console.log(clon);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'dwdfwfwf';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

const array = ['a', 'd'];
const newArr = [...array];
console.log(newArr);

const q = {
    one: 1,
    two: 2
};
const newObj = {
    ...q
};
console.log(newObj);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {
//             age
//         } = plan;
//         const {
//             languages
//         } = plan.skills;
//         let res = '';
//         res = `Мне ${plan.age} и я владею языками: ${plan.skills.languages.join(' ').toUpperCase()}`;

//         return res;

//     }

// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// // function showExperience(){
// //     const {exp} = personalPlanPeter.skills;
// //     return exp;
// // }
// // showExperience(personalPlanPeter);

// function showProgrammingLangs() {
//     let res = '';
//     const {
//         programmingLangs
//     } = personalPlanPeter.skills;
//     for (let key in programmingLangs) {
//         res += `Язык ${key} изучен на ${programmingLangs[key]}/n`;
//     }
//     return res;
// }
// showProgrammingLangs(personalPlanPeter);





let options = {
    name: 'ann',
    width: 1020,
    height: 200,
    color: {
        border: {
            left: 'red',
            right: 'orange'
        },
        bg: 'white'
    }
};


// const {border} = options.color;
// console.log(border);
const {
    left,
    right
} = border;
console.log(left);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function () {
        let res = '';
        const {
            age
        } = personalPlanPeter;
        const {
            languages
        } = personalPlanPeter.skills;
        res = ` i am ${age} years old and i learn languages: ${languages.join(' ').toUpperCase()}`;
        return res;

    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);

const family = [];

function showFamily(arr) {
    let res = '';
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        const str = arr.join(' ');
        res = `Семья состоит из: ${str}`;
        return res;
    }
}
showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let res =''; 
//     res = arr.join(' ').toLowerCase();
//     console.log(res);
// }
// standardizeStrings(favoriteCities);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let res = '';
    for (let keys in arr) {
        res = arr.join('\n').toLowerCase();
    }

    console.log(res);
}
standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка';
    } else {
        let arr = str.split('').reverse().join('');
        return (arr);
    }

}
reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let res = `Доступные валюты:\n`;
//     for (let value of arr) {
//         if (value === missingCurr) {

//         } else {

//             res += `${value}\n`;

//         }
//         return res;
//     }
//         if (arr.length === 0) {
//             return 'Нет доступных валют';

//         }
// }
//         availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    } else {
        let res = 'Доступные валюты:\n';
        for (let value of arr) {
            if (value === missingCurr) {

            } else {
                res += `${value}\n`;
            }
        }
        return res;
    }
}
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');



function calculateVolumeAndArea(lenght) {
    if (typeof lenght !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
        return "Вы допустили ошибку!";
    }

    let retVol = lenght * lenght * lenght;
    retAr = lenght * lenght * 6;

    return `Объем куба: ${retVol}, Площадь куба: ${retAr}`;

}
calculateVolumeAndArea(5);

function getCoupeNumber(plNum) {
    if (plNum < 0 || typeof plNum !== 'number' || !Number.isInteger(plNum)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (plNum == 0 || plNum > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(plNum / 4);
}
getCoupeNumber(9);

function getTimeFromMinutes(minutesTotal) {
    if (minutesTotal < 0 || typeof minutesTotal !== 'number' || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }
    const hour = Math.floor(minutesTotal / 60);
    const minute = minutesTotal % 60;
    if ((hour % 10) == 1) {
        return `Это ${hour} час и ${minute} минут`;
    }
    if (hour >= 5 || hour == 0) {
        return `${hour} часов и ${minute} минут`;
    } else {
        return `${hour} часa и ${minute} минут`;
    }

}
getTimeFromMinutes(-13264);

function findMaxNumber(a, b, c, d) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number' ||
        typeof d !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }

}
findMaxNumber(22, 2, 12);

function fib(Num) {
    if (typeof Num != 'number') {
        return "";
    }
    let first = 0,
        second = 1,
        res = `${first}, ${second}`;
    if (Num == 1) {
        return first;
    }

    if (Num == 2) {
        return res;
    }

    for (let i = 3; i <= Num; i++) {
        let third = first + second;
        res += ', ' + third;
        first = second;
        second = third;
    }
    return res;
}
fib(10);



let number0film;
const personalMovieDB = {
    count: number0film,
    movies: {},
    actors: {},
    gentres: [],
    privat: false,
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat == true;
        } else {
            personalMovieDB.privat == false;
        }
    }

};
personalMovieDB.toggleVisibleMyDB();