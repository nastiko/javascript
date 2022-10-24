function cube(num) {
    console.log(num ** 3);
}

//cube(2);

//--------------

function findPositive(num) {
    if (num > 0) {
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
function funcPracticum1() {
    function getCarModelByColor(color) {
        let car = '';
        switch (color) {
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
    let carColours = ['yellow', 'red', 'orange', 'blue'];

    for (let x in carColours) {
        temp = getCarModelByColor(carColours[x]);
        console.log(temp);
    }
}

//funcPracticum1();

//--------------

function funcPracticum2() {
    function calculateSquareArea(a) {
        return a * a;
    }

    let squareSide = 5;
    let squareArea = calculateSquareArea(squareSide);
    console.log(squareArea);
}

//funcPracticum2();

//--------------

function findArea(num) {
    console.log(num ** 2);
}

let param = 2;
//findArea(param);

//--------------

function funcPracticum3() {
    function showSum(num1, num2, num3) {
        console.log(num1 + num2 + num3);
    }

    let param1 = 2;
    let param2 = 5;
    let param3 = 13;

    showSum(param1, param2, param3);
}

//funcPracticum3();


//--------------

function funcPracticum4() {
    function func(num = 5) {
        console.log(num * num);
    }

    func(2);
    func(3);
    func();
}

//funcPracticum4();

//--------------

function funcPracticum5() {
    function func(num1 = 0, num2 = 0) {
        console.log(num1 + num2);
    }

    func(2, 3);
    func(3);
    func();
}

//funcPracticum5();

//--------------

function funcPracticum6() {
    function findCube(num = 1) {
        return num ** 2;
    }

    let res = findCube(3);
    console.log(res);
}

//funcPracticum6();

//--------------

function funcPracticum7() {
    function findTotal(num) {
        return Math.sqrt(num);
    }

    let x = 0;
    x += findTotal(3);
    x += findTotal(4);

    console.log(x.toFixed(2));
}

//funcPracticum7();

//--------------

function funcPracticum8() {
    function printResult(finalNumber) {
        console.log(`${finalNumber} will be our answer!`);
    }

    function doMath(number1, number2) {
        return number1 + number2 + 10;
    }

    printResult(doMath(1, 2));
}

//funcPracticum8();

//--------------

function funcPracticum9() {
    function sqrt1(num) {
        return Math.sqrt(num);
    }

    function round1(num) {
        return num.toFixed(3);
    }

    let result = round1(sqrt1(2));
    console.log(result);
}

//funcPracticum9();

//--------------

function funcPracticum10() {
    function sqrt2(num) {
        return Math.sqrt(num);
    }

    function sum(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    let resultSum = sum(sqrt2(2), sqrt2(3), sqrt2(4));
    console.log(resultSum);
}

//funcPracticum10();

//--------------

function funcPracticum11() {
    function round2(num) {
        return num.toFixed(3);
    }

    function sumThirdNumbers(num1, num2, num3) {
        return num1 + num2 + num3;
    }

    let totalSum = round2(sumThirdNumbers(6.45895, 1.347823, 7.32148953));
    console.log(totalSum);
}

//funcPracticum11();

//--------------

function funcPracticum12() {
    function returnLoop(num) {
        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum += i;
        }

        return sum;
    }

    console.log(returnLoop(5));
}

//funcPracticum12();

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

//--------------

function isEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

//isEvenNumbers([12, 24, 4, 62, 48]);

//--------------

function isOddNumbers(num) {
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            return false;
        }
    }
    return true;
}

//isOddNumbers(135);

//--------------

function sameNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
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

function findDivideArrays(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }

    for (let j = 0; j < arr2.length; j++) {
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

function funcPracticum13() {
    function findMistakes4() {
        return 3;
    }

    function findMistakes5() {
        return 5;
    }

    let sumTwoFunctions = findMistakes4() + findMistakes5();

    console.log(sumTwoFunctions);
}

//funcPracticum13();

//--------------

function funcPracticum14() {
    let arrElements = [1, 2, 3, 4, 5];

    function findSumElements(arrElements) {
        let sum = 0;

        for (let elem of arrElements) {
            sum += elem;
        }

        return sum;
    }

    findSumElements(arrElements);
}

//funcPracticum14();


//--------------

function funcPracticum15() {
    let resultArr = total([1, 2, 3, 4, 5]);
    console.log(resultArr);

    function totalForOf(arr) {
        let sum = 0;

        for (let elem of arr) {
            sum += elem;
        }

        return sum;
    }
}

//funcPracticum15();

//--------------

function add(num) {
    if (num <= 9) {
        return '0' + num;
    }
}

//add(10);

//--------------

function funcPracticum16() {
    function total(arr) {
        let res = 0;

        for (let elem of arr) {
            res += elem;
        }

        return res;
    }

    let arrNumbers = [1, 2, 3, 4, 5];
    let sumNumber = total(arrNumbers);
    console.log(sumNumber);
}

//funcPracticum16();

//--------------

function funcPracticum17() {
    function getDigitsSum(x) {
        let arr = String(x).split('');
        let sum = 0;

        for (let elem of arr) {
            sum += Number(elem);
        }

        return sum;
    }

    let num = 25487;
    let resNumber = getDigitsSum(num);
    console.log(resNumber);
}

//funcPracticum17();

//--------------

function funcPracticum18() {
    console.log(isPrime(13)); // must show true

    function isPrime(num) {
        return num % 2 !== 0;
    }
}

//funcPracticum18();

//--------------

function funcPracticum19() {
    function findSumArrElements(arr) {
        let sumArr = 0;

        for (let i = 0; i < arr.length; i++) {
            sumArr += arr[i];
        }

        return sumArr;
    }

    let arrOfNumbers = [25, 3, 0, 91, 11, 5];
    let sumOfElements = findSumArrElements(arrOfNumbers);

    console.log(sumOfElements);
}

//funcPracticum19();

//--------------

function funcPracticum20() {
    function findDividers(x) {

        let arr = [];
        for (let i = 1; i <= x; i++) {
            if (x % i === 0) {
                arr.push(i);
            }
        }

        return arr;
    }

    let number = 25;
    let dividerOfNumber = findDividers(number);

    console.log(dividerOfNumber);
}

//funcPracticum20();

//--------------

function funcPracticum21() {
    function pushArrString(str) {
        return str.split('');
    }

    let nameString = 'Congratulation';
    let findSymbols = pushArrString(nameString);

    console.log(findSymbols);
}

//funcPracticum21();

//--------------

function funcPracticum22() {
    function reverseString(color) {
        return color.split('').reverse().join('');
    }

    let favouriteColor = 'green';
    let reversed = reverseString(favouriteColor);

    console.log(reversed);
}

//funcPracticum22();

//--------------

function funcPracticum23() {
    function firstUpperLetter(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    let sentence = 'what is your name?';
    let upperletter = firstUpperLetter(sentence);

    console.log(upperletter);
}

//funcPracticum23();

//--------------

function funcPracticum24() {
    function UpperLetterWords(str) {
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);
        }

        let displayName = str.join(' ');

        return displayName;
    }

    let name = 'anastasia hrynkevich';
    let words = name.split(' ');
    let upperLetter = UpperLetterWords(words);

    console.log(upperLetter);
}

//funcPracticum24();

//--------------

function funcPracticum25() {
    function createArr(arr) {
        for (let i = 1; i <= arr; i++) {
            readyArr.push(i);
        }

        return readyArr;
    }

    let readyArr = [];
    let useNumber = 25;
    let fillArr = createArr(useNumber);

    console.log(fillArr);
}

//funcPracticum25();

//--------------

function funcPracticum26() {
    function findRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    let differentNumbers = [15, 4, 21, 87, -8, 3, 14, 0, 54], j;
    let randomElement = findRandomElement(differentNumbers);

    console.log(randomElement);
}

//funcPracticum26();

//--------------

function funcPracticum27() {
    function findPrimeNumber(num) {
        for (let i = 2; i < num.length; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    let promptNumber = prompt('Write the number');
    let primeNumber = findPrimeNumber(promptNumber);

    console.log(primeNumber);
}

//funcPracticum27();

//--------------

function funcPracticum28() {
    /**
     * This is it
     * @param {number} num number one
     * @returns {number} dividers sum
     */
    function getDividersSum(num) {
        let sumDividers = 0;
        for (let i = 0; i <= num; i++) {
            if (num % i === 0) {
                sumDividers += i;
            }
        }

        return sumDividers;
    }

    let firstNumber = 220;
    let secondNumber = 284;

    let friendlinessNumbers = getDividersSum(firstNumber) === getDividersSum(secondNumber);
    console.log(friendlinessNumbers);

// learning with mentor

    let dividers = {};

    for (let i = 2; i <= 1000; i++) {
        dividers[i] = getDividersSum(i);
    }

    console.log(dividers);

    for (let i in dividers) {
        for (let j in dividers) {
            if (i <= j) continue;
            if (dividers[i] === dividers[j] && i !== j) {
                console.log(i, j);
            }
        }
    }
}

//funcPracticum28();

//--------------

function funcPracticum29() {
    function getSumProperDivisors(num) {

        for (let i = 0; i < num; i++) {
            if (num % i === 0) {
                SumProperDivisors += i;
            }

        }

        return SumProperDivisors;

    }

    let anyNumber = 6;
    let SumProperDivisors = 0;
    let perfection = getSumProperDivisors(anyNumber) === SumProperDivisors;

    console.log(perfection);
}

//funcPracticum29();

//--------------

function funcPracticum30() {
    function findHappierTicket(num) {
        let strNumber = String(num);
        let firstSum = Number(strNumber[0]) + Number(strNumber[1]) + Number(strNumber[2]);
        let secondSum = Number(strNumber[3]) + Number(strNumber[4]) + Number(strNumber[5]);

        return firstSum === secondSum;
    }

    let numberOfTicket = 123015;
    let happierTicket = findHappierTicket(numberOfTicket);

    console.log(happierTicket);
}

//funcPracticum30();

//--------------
function funcPracticum31() {
    function getCommonDividers(num1, num2) {
        function getDividers(num) {
            let arrDividers = [];
            for (let i = 0; i <= num; i++) {
                if (num % i === 0) {
                    arrDividers.push(i);
                }
            }

            return arrDividers;
        }

        let dividersNum1 = getDividers(num1);
        let dividersNum2 = getDividers(num2);

        let commonDividers = [];
        for (let x of dividersNum1) {
            for (let y of dividersNum2) {
                if (x === y) {
                    commonDividers.push(x);
                }
            }
        }
        return commonDividers;
    }

    let oneNumber = 12;
    let twoNumber = 24;

    let commonDividers = getCommonDividers(oneNumber, twoNumber);
    console.log(commonDividers);
}

//funcPracticum31();

//--------------

//learning with mentor
function funcPracticum32() {
    /**
     * How to translit words
     * @param str
     * @returns {string}
     */
    function getBelarusName(str) {
        let convert = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
            'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
            'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
            'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
            'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
            'э': 'e', 'ю': 'yu', 'я': 'ya',

            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
            'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
            'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
            'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
            'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
            'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
            'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
        };

        let translit = '';
        let letters = str.split('');
        for (let x in letters) {
            //for (let i=0;i<letters.length;i++){
            translit += convert[letters[x]];
        }
        return translit;
    }

    let strName = 'Анастасия';
    let convertName = getBelarusName(strName);

    console.log(convertName);
}

//funcPracticum32();

//--------------


//Advanced theory of functions

//--------------

function advancedFunc1() {
    function funcAsVariable() {
        return 'I have been learning the advanced theory of functions.'
    }

    funcAsVariable();

    funcAsVariable = 123; //overwrites the variable funcAsVariable
    console.log(funcAsVariable);
}

//advancedFunc1();

//--------------

function advancedFunc2() {
    function funcl() {
        return 3;
    }

    let funcl2 = funcl();
    console.log(funcl() + funcl2);
}

//advancedFunc2();

//--------------

function advancedFunc3() {
    let func = function () {
        console.log('!');
    };

    func();
}

//advancedFunc3();

//--------------

function advancedFunc4() {
    let func1 = function () {
        console.log('!');
    };

    let func2 = function () {
        console.log('!');
    };

    function func3() {
        console.log('!');
    }
}

//advancedFunc4();

//--------------

function advancedFunc5() {
    test();  // function Expression
    let test = function () {
        console.log('!');
    }

}

//advancedFunc5();

//--------------

function advancedFunc6() {
    func(); // Function Declaration

    function func() {
        console.log('!');
    }
}

//advancedFunc6();

//--------------

function advancedFunc7() {
    let arr = [
        function () {
            //return 1;
            console.log('1');
        },
        function () {
            //return 2;
            console.log('2');
        },
        function () {
            //return 3;
            console.log('3');
        }
    ]

    for (let func of arr) {
        func();
    }

    //console.log(arr[0]() + arr[1]() + arr[2]());
}

//advancedFunc7();

//--------------

function advancedFunc8() {

}


//advancedFunc2();

//--------------

function advancedFunc9() {

}


//advancedFunc2();

//--------------