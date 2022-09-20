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
    console.log('The number is less 0');
}*/

//--------------

let num = 82;

console.log( ("" + num).split("").reduce((acc, e) => acc + Number(e), 0) ); // 10

//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
//--------------



