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

while(i <= 32) {
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

/*for(let i = 10; i <= 1000; i++) {
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
//loopsBreak4();

//--------------

function loopContinue() {
    let arr = [52, 32, 11, 4, 78, 69, 33, 128, 957, 653, 176, 435, 819];

    for(let elem of arr) {
        let result;

        if (elem % 2 === 0 ) {
           result = elem ** 2;
        } else if (elem % 3 === 0) {
            result = Math.pow(elem, 3);
        } else {
            continue;
        }
        console.log(result);
    }
}

//loopContinue();

//--------------

function loopsNested1() {
    for(let i = 1; i <=9; i++) {
        for(let j=1; j <= 3; j++) {
            console.log(i);
        }
    }
}

//loopsNested1();

//--------------

function loopsNested2() {
    for(let i = 1; i <=3; i++) {
        for(let j = 1; j <= 3; j++) {
            console.log(i+''+j);
        }
    }
}

//loopsNested2();

//--------------

function arraysFilling1() {
    let arr = [];

    for(let i = 1; i <= 10; i++) {
        arr.push(i);
    }

    console.log(arr);
}

//arraysFilling1();

//--------------

function arraysFilling2() {
    let arr = [];

    for(let i = 1; i <= 10; i++) {
        arr.push('x');
    }
    console.log(arr);
}

//arraysFilling2();

//--------------

function arraysFilling3() {
    let arr = [1,23,523,213,90,845,289,211,98,4,15,98,140,431,436,881,671,671];
    let newArr = [];

    for(let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

//arraysFilling3();

//--------------

function arraysChanging1() {
    let arr = [1,23,523,213,90,845,289,211,98,4,15,98,140,431,436,881,671,671];
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2;
    }
    console.log(arr);
}

//arraysChanging1();

//--------------

function arraysChanging2() {
    let arr = [671,999,17,269,254,453,290,57,198,701,764,260,774,336,190,90,126,99,134,77,90,211,198,9,199,211,900,211];
    for(let i = 0; i < arr.length; i++) {
        arr[i]--;
    }
    console.log(arr);
}

//arraysChanging2();

//--------------

function arraysChanging3() {
    let arr = [289,211,98,4,15,98,140,431,436];
    for(let i = 0; i < arr.length; i++) {
        arr[i]+=10;
    }
    console.log(arr);
}

//arraysChanging3();

//--------------

function objectsFilling1() {
    let arr1 = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'San', 'Sun'];
    let arr2 = [1, 2, 3, 4, 5, 6, 7];

    let obj = {};

    for(let i = 0; i < arr2.length; i++) {
        let key = arr1[i];
        obj[key] = arr2[i];
    }

    console.log(obj);
}

//objectsFilling1();

//--------------

function objectsFillings2() {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

    for(let key in obj) {
        if(obj[key] % 2 === 0) {
            console.log(key + ':' + obj[key]);
        }
    }
}

//objectsFillings2();

//--------------

function objectsFillings3() {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    let newObj = {};


    for(let key in obj) {
        let newKey = obj[key];
        newObj[newKey] = key;
    }

    console.log(newObj);
}

//objectsFillings3();

//--------------

function objectsChanging1() {
    let obj = {x: 1, y: 2, z: 3};
    for(let key in obj) {
        obj[key] = obj[key] ** 2;
        console.log(obj[key]);
    }

}

//objectsChanging1();

//--------------

function objectsChanging2() {
    let obj = {x: 1, y: 2, z: 3};
    for(let key in obj) {
        obj[key]++;
        console.log(obj[key]);
    }
}

//objectsChanging2();

//--------------

function loopsFlags1() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let flag = false;

    for(let elem of arr) {
        if(elem === 'c') {
            flag = true;
            break;
        }
    }

    //you can find out the answer: Do you have element 'c' after loop.
    if(flag === true) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//loopsFlags1()

//--------------

function loopsFlags2() {
    let number = prompt('Write the number');
    let flag = true;
    for(let i = 2; i <= number - 1; i++) {
        if(number % i === 0) {
            flag = false;
            break;
        }
    }
    if(flag === true) {
        console.log('We have the Prime numbers.');
    } else {
        console.log('We have the Composite numbers.');
    }
}

//loopsFlags2();

//--------------

function arrayCounting1() {
    let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
    let cnt = 0;
    for(let elem of arr) {
        if(elem === 3) {
            cnt++;
        }
    }
    console.log(cnt);
}

//arrayCounting1();

//--------------

function arrayCounting2() {
    let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
    let cntFirst = 0;
    let cntSecond = 0;

    for(let elem of arr) {
        if(elem === 3) {
            cntFirst++;
        } else if(elem === 2) {
            cntSecond++;
        }
    }
    console.log(cntFirst, cntSecond);
}

//arrayCounting2();

//--------------

function loopsObjectCounting() {
    let str = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    let obj = {};

    for(let i = 0; i <= str.length; i++) {
        if(obj[str[i]] === undefined) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }

    console.log(obj);
}

//loopsObjectCounting();

//--------------

function loopsNeighbors1() {
    let arr = [10, 21, 3, 99, 5];

    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i - 1] + arr[i]);
    }
}

//loopsNeighbors1();

//--------------

function loopsNeighbors2() {
    let arr = [12, 32, 64, 125, 5, 47];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + arr[i+1]);
    }
}

//loopsNeighbors2();

//--------------

function loopsNeighbors3() {
    let arr = [12, 32, 64, 125, 5, 47];

    for (let i = 2; i < arr.length; i++) {
        console.log(arr[i-1], arr[i-2]);
    }
}

//loopsNeighbors3();

//--------------

function loopsNeighbors4() {
    let arr = [12, 32, 64, 125, 5, 47];

    for (let i = 2; i < arr.length; i++) {
        console.log(arr[i-1] + arr[i-2] + arr[i]);
    }
}

//loopsNeighbors4();

//--------------

function loopsNeighbors5() {
    let arr = [12, 32, 64, 125, 5, 47];

    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i-1] + arr[i] + arr[i+1]);
    }
}

//loopsNeighbors5();

//--------------

function loopsCoding() {
    let arr = [10, 20, 30, 40, 21, 32, 51];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        let num = String(arr[i]);
        let chart = num[0];
        if (chart === '1' || chart === '2') {
            console.log(num);
            sum += Number(num);
        }
    }
    console.log(sum);
}

//loopsCoding();

//--------------

//you need to fix it
function loopsDebugging() {
    let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
    let sum = 0;

    for (let key in obj) {
        if (obj[key] === 1 && obj[key] === 2) {
            sum += +key;
        }
    }

    console.log(sum);
}

//loopsDebugging();

//--------------

function loopsMistakes1() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

//loopsMistakes1();

//--------------

function loopsMistakes2() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

//oopsMistakes2();

//--------------

function loopsMistakes3() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

//loopsMistakes3();

//--------------

function loopsMistakes4() {
    let i = 0;

    while (i <= 10) {
        console.log(i);
        i++;
    }
}

//loopsMistakes4();

//--------------

function loopsMistakes5() {
    let res = 0;

    for (let i = 1; i <= 10; i++) {
        res += i;
    }

    console.log(res);
}

//loopsMistakes5();

//--------------

function loopsMistakes6() {
    let res = 1;

    for (let i = 1; i <= 10; i++) {
        res *= i;
    }

    console.log(res);
}

//loopsMistakes6();

//--------------

function loopsMistakes7() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    console.log(sum);
}

//loopsMistakes7();

//--------------

function loopsMistakes8() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    console.log(sum);
}

//loopsMistakes8();

//--------------

function loopsMistakes9() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    console.log(sum);
}

//loopsMistakes9();

//--------------

function loopsMistakes10() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }

    console.log(sum);
}

//loopsMistakes10();

//--------------

function loopsMistakes11() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        sum += Number(arr[i]);
    }

    console.log(sum);
}

//loopsMistakes11();

//--------------

function loopsMistakes12() {
    let arr = ['1', '2', '3', '4', '5'];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        sum += Number(i);
    }

    console.log(sum);
}

//loopsMistakes12();

//--------------

function loopsMistakes13() {
    let arr = [1, 2, 3, 4, 5];
    let double = 0;

    for (let elem of arr) {
        double = elem ** 2;
        console.log(double);
    }
}

//loopsMistakes13();

//--------------

function loopsMistakes14() {
    let arr = [];

    for (let i = 1; i <= 5; i++) {
        arr.push(i);
    }

    console.log(arr);
}

//loopsMistakes14();

//--------------

function loopsMistakes15() {
    let obj = {a: 1, b: 2, c: 3};
    let sum = 0;

    for (let key in obj) {
        sum += obj[key];
    }

    console.log(sum);
}

//loopsMistakes15();

//--------------

function loopsMistakes16() {
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        if (elem === 3) {
            console.log('Yes');
        }
    }
}

//loopsMistakes16();

//--------------

function loopsMistakes17() {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i);
    }
    console.log(arr);
}

//loopsMistakes17();

//--------------

function loopsMistakes18() {
    let arr = [1, 2, 3, 4, 5];
    let res = false;

    for (let elem of arr) {
        if (elem === 3) {
            res = true;
            break;
        }
    }
    console.log(res);
}

//loopsMistakes18();

//--------------

function loopsMistakes19() {
    let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        if (elem % 2 === 0) {
            console.log(elem);
        }
    }
}

//loopsMistakes19();

//--------------

function loopsMistakes20() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secArr = [];

    for (let elem of arr) {
        if (elem % 2 !== 0) {
            secArr.push(elem);
        }
    }
    console.log(secArr);
}

loopsMistakes20();

//--------------

function loopsMistakes21() {

}

//loopsMistakes6();

//--------------

function loopsMistakes22() {

}

//loopsMistakes6();

//--------------

function loopsMistakes23() {

}

//loopsMistakes6();

//--------------

function loopsMistakes24() {

}

//loopsMistakes6();

//--------------

function loopsMistakes25() {

}

//loopsMistakes6();

//--------------

