/*let test = 10;
let firstScore = 5;
let secondScore = 15;
let firstString = 'Hello';
let secondString = 'Hello World';
let numberString = '125';*/
/*let firstNumber = 15;
let secondNumber = 99;*/

/*if(test > 10) {
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

/*if(test < 10) {
    console.log('true')
} else {
    console.log('false');
}*/

//--------------

/*if(test >= 10){
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

/*if(test <= 10){
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

/*if(test === 10){
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

/*if(test !== 10){
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

/*if(firstScore > secondScore){
    console.log('Your score is higher than main score. Congratulation!');
} else {
    console.log('Your score is less than main score. Sorry!');
}*/

//--------------

/*if(firstScore === secondScore){
    console.log('Your score is higher than main score. Congratulation!');
} else {
    console.log('Your score is less than main score. Sorry!');
}*/

//--------------

/*if(firstString === secondString) {
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

//&& - AND

/*if (firstNumber > 0 && firstScore < 5) {
    console.log('true'); // сработает это
} else {
    console.log('false');
}*/

//--------------

/*
if(firstNumber >=10 && firstNumber <=20) {
    console.log('true');
} else {
    console.log('false');
}
*/

//--------------

/*if(firstNumber <= 1 && secondNumber >= 3){
    console.log('true');
} else {
    console.log('false');
}*/

//--------------

//|| - OR

/*let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = 3;

if (num === 0 || num > 1 && num < 5 ) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num1 = 25;
let num2 = 8;

if ( !(num1 >= 0 || num2 <= 10)) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let test = true;

if(test === true){
    console.log(true);
} else {
    console.log(false);
}*/

//--------------

/*let test = false;

if(test === false) {
    console.log(true);
} else {
    console.log(false);
}*/

//--------------

/*let test = 10;

if(test === 10) {
    console.log('Yes');
}*/

//--------------

/*let day = 28;

if(day >= 1 && day < 11 ) {
    console.log('The first decade');
} else if (day >= 11 && day < 21) {
    console.log('The second decade');
} else if (day >= 21 && day < 31) {
    console.log('The third decade');
} else {
    console.log('Error');
}*/

//--------------

/*let num = 82;

if (num >= 10 && num < 99) {
    let secondNumber = num % 10;
    let firstNumber = (num - secondNumber) / 10;

    let sum = secondNumber + firstNumber;
    if (sum <= 9) {
        console.log('The sum of the digits is unambiguous');
    } else {
        console.log('The sum of the digits is two digits');
    }
} else {
    console.log('Error');
}*/

//--------------

/*let num = 82;

console.log( ("" + num).split("").reduce((acc, e) => acc + Number(e), 0) ); // 10*/

//--------------

/*let lang = 'it';

switch (lang) {
    case 'en':
        console.log('English');
        break;
    case 'it':
        console.log('Italian');
        break;
    case 'de':
        console.log('Germany');
        break;
    default:
        console.log('Spain');
        break;
}*/

//--------------

/*let num = 1;
let res = num >= 0 ? '1' : '2';

console.log(res);*/

//--------------

/*let a = 2 * (3 - 1);
let b = 6 - 2;

console.log(a === b);*/

//--------------

/*let a = 5 * (7 - 4);
let b = 1 + 2 + 7;

console.log(a > b);*/

//--------------

/*let a = 2 ** 4;
let b = 4 ** 2;

/!*console.log(a !== b);*!/

let c = a >= 0 && b < 20;
console.log(c);*/

//--------------

/*let ok = confirm('Are you 18 years old?');

if (ok) {
    alert('Access for adult');
} else {
    alert('User access denied');
}*/

//--------------

/*let test = true;
let res;

if (test) {
    res = 1;
} else {
    res = 2;
}

console.log(res);*/

//--------------

/*let age = 17;
let adult;

if (age >= 18) {
    adult = true;
}

console.log(adult);*/

//--------------

/*let age = 25;

if (age >= 18) {
    let adult = true;
    console.log(adult);
}
console.log(age);*/

//--------------

/*let age = 17;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);*/

//--------------

/*let age = 32;
let res;

if (age >= 18) {
    if (age <= 23) {
        res = 'from 18 to 23';
    } else {
        res = 'more than 23';
    }
} else {
   res = 'less than 18';
}

console.log(res);*/

//--------------

/*let min = 42;

if(min >= 0 && min < 20) {
    console.log('1 quarter');
} else if (min >= 20 && min < 40) {
    console.log('2 quarter');
} else if (min >= 40 && min < 60) {
    console.log('3 quarter');
} else {
    console.log('more than 1 hour');
}*/

//--------------

/*let array = [25, 81, 93, 6, 46, 75];

if (array.length >= 3) {
    console.log(array[0] + array[1] + array[2] + array[3] + array[4] + array[5]);
} else {
    console.log(array[0] + array[1]);
}*/

//--------------

/*let str = 'Anastasia';

if (str[0] === 'A') {
    console.log('Anastasia')
} else {
    console.log(false);
}*/

//--------------

/*let str = 'gfhdsgfhegsfnasbfmshfjx';

if (str[str.length - 1] === 'x') {
    console.log('You\'re right');
} else {
    console.log('Try it again');
}*/

//--------------

/*let str = 'hrynkevich';

if (str[0] === 'a' || str[0] === 'b') {
    console.log('anastasia');
} else {
    console.log('hrynkevich');
}*/

//--------------

/*let num = 152360;

if (String(num[num.length -1] === 0)) {
    console.log(true);
} else {
    console.log(false);
}*/

//--------------

/*let num = 21;
let result = num % 2;

if (result === 0 || result === 2 || result === 4 || result === 8) {
    console.log('The number is even');
} else {
    console.log('The number is odd');
}*/

//--------------

/*let a = 10;
let b = 3;
let rest = a % b;

if (rest === 0) {
    console.log('Divided entirely');
} else {
    console.log('Divided with the remainder ' + rest);
}*/

//--------------

/*let num = 39;
let divided = num % 2;

if(divided === 0) {
    console.log('Divided entirely');
} else {
    console.log('Divided with the remainder ' + divided);
}*/

//--------------

/*let num = 33;
let divided = num % 3;

if(divided === 0) {
    console.log('The number has been divided by three');
} else {
    console.log('The number could not divided on 3');
}*/

//--------------

/*
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
    console.log('+++');
} else {
    console.log('---');
}
*/

//--------------

/*let num1 = '1';
let num2 = '2';

let sum = Number(num1) + Number(num2);

if (sum === 3) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = 123;

if (String(num[0] === 1)) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = 123;

if (String(num[0] === 1)) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = 12;

if (String(num.length === 2)) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = 12;
let str = String(num);

if (str.length === 2) {
    console.log('+++');
} else {
    console.log('---');
}*/

//--------------

/*let num = '123033';

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 === sum2) {
    console.log('Amounts are equal');
} else {
    console.log('amounts are NOT equal');
}*/

//--------------

/*let month = 10;

if((month >=1 && month <= 3) || (month === 12) ) {
    console.log('Winter month');
} else if (month >3 && month <= 5) {
    console.log('Spring month');
} else if (month >5 && month <= 8) {
    console.log('Summer month');
} else if (month >8 && month <= 11) {
    console.log('Autumn month');
}*/

//--------------

/*let str = 'abcde';

if(str[0] === 'a') {
    console.log('Yes');
} else {
    console.log('No');
}*/

//--------------

/*let num = 42345;
let str = String(num);


if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
    console.log('Yes')
} else {
    console.log('No');
}*/

//--------------

/*let num = 356;
let str = String(num);

let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);

console.log(sum);*/

//--------------

/*let num = 245731;
let str = String(num);

let firstSum = Number(str[0]) + Number(str[1]) + Number(str[2]);
let secondSum = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (firstSum === secondSum) {
    console.log('Yes');
} else {
    console.log('No');
}*/




