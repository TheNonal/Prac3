// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты

// Переменные: year, dogname, age, years, myDog, cups, tea, guests
// Функции: dogYears, makeTea, secret
// Встроенные функции: log
// Аргументы: dogname, age, cups, tea
// Параметры: myDog, 4, guests, 'Earl Grey'


// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.

let text = 'JS';
console.log(text.toLowerCase());

 
// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

let text2 = 'я люблю JS !';
console.log(text2.substr(2, 5));
console.log(text2.substr(8, 2));
console.log(text2.substring(2, 7));
console.log(text2.substring(8, 10));
console.log(text2.slice(2, 7));
console.log(text2.slice(8, 10));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

let text3 = 'я люблю JS!';
console.log(text3.indexOf('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

let txt = 'Я люблю майнкрафт';
let n = 4;
let res;
if(txt.length > n){
    res = txt.slice(0, n) + '...';
    console.log(res);
}
else{
    res = txt;
    console.log(res);
};


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

let text4 = 'Я-люблю-JS!';
console.log(text4.replace(/-/g, '!'));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

let text5 = 'я люблю JS';
console.log(text5.split(' '));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let text6 = 'привет мир';
console.log(text6.split(''));