function cube(num) {
    console.log(num ** 3);
}

//cube(2);

//--------------

function findPositive(num) {
    if(num > 0) {
        console.log('The number is positive');
    } else {
        console.log('The number is negative');
    }
}

//findPositive(5);

//--------------

function findSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

//findSum(25, 32, 1);

//--------------

/*function getCarModelByColor(color) {
    let car = '';
    switch (color){
        case 'red':
            car = 'Mazda';
            break;
        case 'yellow':
            car = 'Alfa Romeo';
            break;
        case 'blue':
            car = 'Smart';
            break;
        default:
            car = 'Unknown';
    }

    return car;
}

let temp = '';
let carColours = ['yellow','red','orange','blue'];

for(let x in carColours) {
    temp = getCarModelByColor(carColours[x]);
    console.log(temp);
}*/


//--------------

function calculateSquareArea(a){
    return a * a;
}

let squareSide = 5;
//let squareArea = calculateSquareArea(squareSide);
//console.log(squareArea);

//--------------

function findArea(num) {
    console.log(num ** 2);
}

let param = 2;
//findArea(param);

//--------------

function showSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

let param1 = 2;
let param2 = 5;
let param3 = 13;

//showSum(param1, param2, param3);

//--------------

function func(num = 5) {
    console.log(num * num);
}

//func(2);
//func(3);
//func();

//--------------

function func(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
}

//func(2, 3);
//func(3);
//func();

//--------------

function findCube(num = 1) {
    return num ** 2;
}

//let res = findCube(3);
//console.log(res);

//--------------

function findTotal(num) {
    return Math.sqrt(num);
}

let x = 0;
//x += findTotal(3);
//x += findTotal(4);

//console.log(x.toFixed(2));

//--------------

function printResult(finalNumber){
    console.log(`${finalNumber} will be our answer!`);
}

function doMath(number1, number2){
    return number1+number2+10;
}

//printResult(doMath(1,2));

//--------------

function sqrt1(num) {
    return Math.sqrt(num);
}

function round1(num) {
    return num.toFixed(3);
}

//let result = round1(sqrt1(2));
//console.log(result);

//--------------

function sqrt2(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

//let resultSum = sum(sqrt2(2), sqrt2(3), sqrt2(4));
//console.log(resultSum);

//--------------

function round2(num) {
    return num.toFixed(3);
}

function sumThirdNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

//let totalSum = round2(sumThirdNumbers(6.45895, 1.347823, 7.32148953));
//console.log(totalSum);

//--------------

function returnLoop(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

//console.log(returnLoop(5));

//--------------

function funFindNumbers(num) {

    while (num > 10) {
        num = num / 2;
    }
    return num;

}

//funFindNumbers(125);

//--------------

function func3(num1, num2) {

    if (num1 > 0 && num2 > 0) {
        return num1 * num2;
    } else {
        return num1 - num2;
    }
}

//console.log(func3(3, 4));

function isEvenNumbers(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

//isEvenNumbers([12, 24, 4, 62, 48]);

//--------------

function isOddNumbers(num) {
    let str = String(num);
    for(let i = 0; i < str.length; i++ ) {
        if(str[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}

//isOddNumbers(135);

//--------------

function sameNumbers(arr) {

    for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arr[i+1]) {
                return true;
            }
    }
    return false;
}

//sameNumbers([5, 23, 61, 9, 13, 5, 7, 7]);

//--------------

function logicalOperators1(a, b) {
    return a === b;
}

//logicalOperators1(5, 6);

//--------------

function logicalOperators2(a, b) {
    return a !== b;
}

//logicalOperators2(5, 6);

//--------------

function logicalOperators3(a, b) {
    return a + b >= 10;
}

//logicalOperators3(5, 6);

//--------------

function logicalOperators4(num) {
    return num >= 0;
}

//logicalOperators4(12);

//--------------

function findMeanArr(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum / arr.length;
}

//findMeanArr([1, 5, 26, 73, 2]);

//--------------

function findDivideArrays (arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }

    for(let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }

    return sum1 / sum2;
}

//findDivideArrays([15, 2, 47, 13, 2, 0], [5, -9, 6, 4, -78, 95]);

//--------------

function getMultiplier(arr) {

    let res = 1;

    for (let elem of arr) {
        res *= elem;
    }

    return res;
}

//getMultiplier([4, 8, 26, 3, 10]);

//--------------

function findMistakes1(num1, num2) {
    return num1 * num2;
}

//findMistakes1(3, 5);

//--------------

function findMistakes2(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

//findMistakes2([1, 2, 3, 4, 5]);

//--------------

function findMistakes3(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

//findMistakes3([10, 2, 58, 13, 4]);

//--------------

function findMistakes4() {
    return 3;
}
function findMistakes5() {
    return 5;
}

//let sumTwoFunctions = findMistakes4() + findMistakes5();

//console.log(sumTwoFunctions);

//--------------

let arrElements = [1, 2, 3, 4, 5];

function findSumElements(arrElements) {
    let sum = 0;

    for (let elem of arrElements) {
        sum += elem;
    }

    return sum;
}

//findSumElements(arrElements);

//--------------

//let resultArr = total([1, 2, 3, 4, 5]);
//console.log(resultArr);

function totalForOf(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum;

}

//--------------

function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
}

//add(10);

//--------------

function total(arr) {
    let res = 0;

    for (let elem of arr) {
        res += elem;
    }

    return res;
}

let arrNumbers = [1, 2, 3, 4, 5];
//let sumNumber = total(arrNumbers);
//console.log(sumNumber);

//--------------

function getDigitsSum(x) {
    let arr = String(x).split('');
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    return sum;
}

let num = 25487;
//let resNumber = getDigitsSum(num);
//console.log(resNumber);

//--------------

//console.log(isPrime(13)); // must show true

function isPrime(num) {
        return num % 2 !== 0;
}

//--------------

function findSumArrElements(arr) {
    let sumArr = 0;

    for(let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
    }

    return sumArr;
}

let arrOfNumbers = [25, 3, 0, 91, 11, 5];
//let sumOfElements = findSumArrElements(arrOfNumbers);

//console.log(sumOfElements);

//--------------

function findDividers(x) {

    let arr = [];
    for(let i = 1; i <= x; i++) {
        if(x % i === 0) {
            arr.push(i);
        }
    }

    return arr;
}

let number = 25;
//let dividerOfNumber = findDividers(number);

//console.log(dividerOfNumber);

//--------------

function pushArrString(str) {
    return str.split('');
}

let nameString = 'Congratulation';
//let findSymbols = pushArrString(nameString);

//console.log(findSymbols);

//--------------

function reverseString(color) {
    return color.split('').reverse().join('');

}

let favouriteColor = 'green';
//let reversed = reverseString(favouriteColor);

//console.log(reversed);

//--------------

function firstUpperLetter(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

let sentence = 'what is your name?';
//let upperletter = firstUpperLetter(sentence);

//console.log(upperletter);

//--------------

function UpperLetterWords(str) {
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);
    }

    let displayName = str.join(' ');

    return displayName;
}

let name = 'anastasia hrynkevich';
let words = name.split(' ');
//let upperLetter = UpperLetterWords(words);

//console.log(upperLetter);

//--------------

function createArr(arr) {
    for(let i = 1; i <= arr; i++) {
        readyArr.push(i);
    }

    return readyArr;
}

let readyArr = [];
let useNumber = 25;
//let fillArr  = createArr(useNumber);

//console.log(fillArr);

//--------------

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let differentNumbers = [15, 4, 21, 87, -8, 3, 14, 0, 54], j;
//let randomElement = findRandomElement(differentNumbers);

//console.log(randomElement);

//--------------

function findPrimeNumber(num) {
    for(let i = 2; i < num.length; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

//let promptNumber = prompt('Write the number');
//let primeNumber = findPrimeNumber(promptNumber);

//console.log(primeNumber);

//--------------

/**
 * This is it
 * @param {number} num number one
 * @returns {number} dividers sum
 */
function getDividersSum(num) {
    let sumDividers = 0;
    for(let i = 0; i <= num ; i++) {
        if(num % i === 0) {
            sumDividers += i;
        }
    }

    return sumDividers;
}

let firstNumber = 220;
let secondNumber = 284;

//let friendlinessNumbers = getDividersSum(firstNumber) === getDividersSum(secondNumber);
//console.log(friendlinessNumbers);

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
