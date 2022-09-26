/*
for (let i = 1; i <= 100; i ++) {
    console.log(i);
}*/

//--------------

/*for(let i = 11; i <= 33; i ++) {
    console.log(i);
}*/

//--------------

/*for(let i = 0; i <=100; i += 2) {
    console.log(i);
}*/

//--------------

/*for(let i = 1; i <= 99; i +=2) {
    console.log(i);
}*/

//--------------

/*for(let i = 100; i > 0; i --) {
    console.log(i);
}*/

//--------------

/*let arr = ['a', 'b', 'c', 'd', 'e'];

for(let elem of arr) {
    console.log(elem);
}*/

//--------------

/*let obj = {x:1, y:2, z:3};

for(let key in obj) {
    console.log(obj[key]);
    //console.log(key);
}*/

//--------------

/*let i = 0

while(i <= 99) {
    i++;
    console.log(i);
}*/

//--------------

/*let i = 10;

while(i <=32) {
    i ++;
    console.log(i);
}*/

//--------------

/*let num = 30;

while(num < 1000) {
    num = num * 3;
    console.log(num);
}

console.log(num);*/

//--------------

/*let num = 500;

while (num > 10) {
    num = num / 2;
}

console.log(num);*/

//--------------

/*let arr = [1, 2, 3, 4, 5];

for(let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}*/

//--------------

//let arr = ['a', 'b', 'c', 'd', 'e'];

/*for(let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}*/

/*for (let i = 1; i <= 3; i++) {
    console.log(arr[i]);
}*/

/*for(let i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
}*/

/*for (let i = 0; i <= arr.length -1; i++) {
    console.log(arr[i]);
}*/

//--------------

/*let arr = [1, 2, 3, 4, 5];

for(let elem of arr) {
    if(elem % 2 === 0){
        console.log(elem);
    }
}*/

//--------------

/*let arr = [2, 5, 9, 15, 1, 4];

for(let elem of arr) {
    if(elem > 3 && elem < 10) {
        console.log(elem);
    }
}*/

//--------------

/*let obj = {a:1, b:2, c:3, d:4, e:5};

for(let key in obj) {
    if(obj[key] % 2 !== 0) {
        console.log(key);
        console.log(obj[key]);
    }
}*/

//--------------

/*let res = 0;

for (let i = 1; i <= 100; i++) {
    res = res + i;
    console.log(res);
}

console.log(res);*/

//--------------

/*let res = 0;

for(let i = 2; i <= 100; i++) {
    res = res + i;
    if(res % 2 === 0) {

        console.log(res);
    }
}

console.log(res);*/

//--------------

/*let num = 0;

for(let i = 1; i <= 99; i++) {
    num += i;
    if(num % 2 !== 0) {
        console.log(num);
    }
}

console.log(num);*/

//--------------

/*let num = 1;

for(let i = 1; i <= 5; i++) {
    num *= i;
    console.log(num);
}*/

//--------------

/*let arr = [1, 2, 3, 4, 5];
let res = 0;

for (let elem of arr) {
    res += elem;
}

console.log(res);*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for(let elem of arr) {
    res += elem;
}

console.log(res);*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for(let i = 0; i <= arr.length; i++) {
    if(arr[i] % 2 === 0) {
        res += arr[i];
    }
}
console.log(res);*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
   if (elem % 2 === 0) {
       res += elem;
   }
}

console.log(res);*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res = elem **2;
    console.log(res);
}*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 1;

for (let i = 0; i <= arr.length -1; i++) {
    res *= arr[i];
    console.log(res);
}

console.log(res);*/

//--------------

/*let arr = [2, 5, 9, 3, 1, 4];
let res = 1;

for (let elem of arr) {
    res *= elem;
    console.log(res);
}*/

//--------------

/*let str = '';

for(let i = 1; i <= 5; i++) {
    str += i;
}

console.log(str);*/

//--------------

/*let str = '';

for(let i = 0; i <= 4; i++) {
    str += '-';
}

console.log(str);*/

//--------------

/*let str = '';

for(let i = 1; i <= 9; i++) {
    str += i;
}

console.log(str);*/

//--------------

/*let str = '';

for( let i = 9; i > 0; i--) {
    str += i;
}

console.log(str);*/

//--------------

/*let str = '';


for(let i = 1, y = '-'; i <= 9; i++, y = '-') {
    str = str + y + i;
}

console.log(str + '-');*/

//--------------

/*for (let i = 1; i <= 100; i++) {
    let str = String(i);

    if (str[0] === '1' || str[0] === '2') {
        console.log(i);
    }
}*/

//--------------

/*
for(let i = 10; i <= 1000; i++) {
    let str = String(i).charAt(0);

    console.log(str);
}
*/

//--------------

/*for(let i = 10; i <= 1000; i++) {
    let str = String(i);

    let chart = str.charAt(str.length-1);

    console.log(chart);
}*/

//--------------

/*for(let i = 10; i <=1000; i++) {
    let str = String(i);
    let firstNumber = Number(str[0]);
    let secondNumber = Number(str[1]);

    let sum = firstNumber + secondNumber;

    console.log(sum)
}*/

//--------------

/*for(let i = 10; i <= 1000; i++) {
    let str = String(i);

    if(str[0] === '1') {
        console.log(str);
    }
}*/

//--------------

/*for(let i = 10; i <= 1000; i++) {
    let str = String(i);
    let firstNumber = Number(str[0]);
    let secondNumber = Number(str[1]);

    let sum = firstNumber + secondNumber;

    if(sum === 5) {
        console.log (str);
    }
}*/

//--------------

/*let arr = [25, 32, 68, 42, 69, 14, 0];

for(let elem of arr) {
    if (elem === 0) {
        console.log(elem);
        break;
    }
}*/

//--------------

/*let arr = [25, 32, 68, -2, 42, 69, 14, 0];
let sum = [];


for (let elem of arr) {
    if (elem < 0) {
        break;
    }
    sum.push(elem);
}

console.log(sum);*/

//--------------

function loopsBreak2() {
    let arr = [25, 32, 68, -2, 42, 69, 14, 0];
    let sum = 0;

    for(let elem of arr) {
        if(elem < 0) {
            break;
        }
        sum += elem;
    }
    console.log(sum);
}

//--------------

function loopsBreak3() {
    let arr = [25, 99, 68, -2, 42, 3, 14, 0];


    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === 3) {
            console.log(i);
            break;
        }
    }
}

//--------------

function loopsBreak4() {
    let sum = 0;
    let cnt = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
        if (sum > 100) {
            break;
        }
        cnt ++;
    }
    console.log(cnt);
}


//loopsBreak2();
//loopsBreak3();
loopsBreak4();

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

