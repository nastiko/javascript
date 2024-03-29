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
    //let resultArr = total([1, 2, 3, 4, 5]);
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

    //funcAsVariable = 123; //overwrites the variable funcAsVariable
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
    let obj = {
        num1: function () {
            return 1;
        },
        num2: function () {
            return 2;
        },
        num3: function () {
            return 3;
        },
    };

    //let sum = obj.num1() + obj.num2() + obj.num3();

    let sum = 0;

    for (let keys in obj) {
        sum += obj[keys]();
    }
    console.log(sum);
}

//advancedFunc8();

//--------------

function advancedFunc9() {
    let obj = {
        sum: function (arr) {
            let sum = 0;
            for (let elem of arr) {
                sum += elem;
            }
            return sum;
        },
        sumSquare: function (arr) {
            let sum = 0;
            for (let elem of arr) {
                sum += elem * elem;
            }
            return sum;
        },
        sumCube: function (arr) {
            let sum = 0;
            for (let elem of arr) {
                sum += elem * elem * elem;
            }
            return sum;
        },
    };

    let arrNumbers = [7, 2, 13, 32];
    let findSum = obj.sum(arrNumbers);
    let findSumSquare = obj.sumSquare(arrNumbers);
    let findSumCube = obj.sumCube(arrNumbers);

    console.log(findSum, findSumSquare, findSumCube);
}

//advancedFunc9();

//--------------

function advancedFunc10() {
    test(
        function () {
            return 1
        },
        function () {
            return 2
        },
        function () {
            return 3
        },
    )

    function test(num1, num2, num3) {
        console.log(num1() + num2() + num3());
    }
}

//advancedFunc10();

//--------------

function advancedFunc11() {
    function num1() {
        return 25;
    }

    function num2() {
        return 13;
    }

    function num3() {
        return 79;
    }

    test(num1, num2, num3);

    function test(func1, func2, func3) {
        console.log(func1() + func2() + func3());
    }

}

//advancedFunc11();

//--------------

function advancedFunc12() {
    let get1 = function () {
        return 25;
    }
    let get2 = function () {
        return 13;
    }
    let get3 = function () {
        return 79;
    }

    test(get1, get2, get3);

    function test(func1, func2, func3) {
        console.log(func1() + func2() + func3());
    }
}

//advancedFunc12();

//--------------

function advancedFunc13() {
    test(function (num) {
        return num * num * num;
    });

    function test(func) {
        console.log(func(3));
    }
}

//advancedFunc13();

//--------------

function advancedFunc14() {
    function func() {
        return 3;
    }

    test(func);

    function test(num) {
        console.log(num() * num() * num());
    }
}

//advancedFunc14();

//--------------

function advancedFunc15() {
    let func = function () {
        return 5;
    }

    test(func);

    function test(num) {
        console.log(num() * num() * num());
    }
}

//advancedFunc15();

//--------------

function advancedFunc16() {
    //passed function takes two parameters and return their sum
    function test(func) {
        console.log(func(2, 3));
    }

    //calling the passed function with two parameters
    test(function (num1, num2) {
        return num1 + num2;
    });
}

//advancedFunc16();

//--------------

function advancedFunc17() {
    function test(num, func1, func2) {
        console.log(func1(num) + func2(num));
    }

    test(
        3,
        function (num) {
            return num * num;
        },
        function (num) {
            return num * num * num;
        }
    );
}

//advancedFunc17();

//--------------

function advancedFunc18() {
    function test(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = func(arr[i]);
        }
        return arr;
    }

    let result = test([5, 10, 24], function (num) {
        return num * num * num;
    });

    console.log(result);
}

//advancedFunc18();

//--------------

function advancedFunc19() {
    function func(num1, num2) {
        function sumSquare(num) {
            return num * num;
        }

        function sumCube(num) {
            return num * num * num;
        }

        return sumSquare(num1) + sumCube(num2);
    }

    console.log(func(5, 3));
}

//advancedFunc19();

//--------------

function advancedFunc20() {
    function func1() {
        return function () {
            return 1;
        };
    }

    function func2() {
        return function () {
            return 2;
        };
    }

    console.log(func1()() + func2()());
}


//advancedFunc20();

//--------------

function advancedFunc21() {
    function func() {
        return function () {
            return function () {
                return function () {
                    return '!';
                };
            };
        };
    }

    console.log(func()()()());
}


//advancedFunc21();

//--------------

function advancedFunc22() {
    function func(num1) {
        return function (num2) {
            return function (num3) {
                return num1 + num2 + num3;
            };
        };
    }

    console.log(func(2)(3)(4));
}

//advancedFunc22();

//--------------

function advancedFunc23() {
    function func(num1) {
        return function (num2) {
            return function (num3) {
                return function (num4) {
                    return function () {
                        return arr.push(num1, num2, num3, num4);
                    };
                };
            };
        };
    }

    let arr = [];
    func(2)(3)(4)(5)();

    console.log(arr);
}

//advancedFunc23();

//--------------

function advancedFunc24() {
    function test() {
        let num = 1;
        return function () {
            console.log(num);
            num++;
        };
    }

    let closure = test();
    closure();
    closure();
    closure();
}

//advancedFunc24();

//--------------

function advancedFunc25() {
    function test() {
        let num = 10;
        return function () {
            console.log(num);
            num--;
            if (num < 0) {
                console.log('The countdown has ended');
            }
        };
    }

    let closure = test();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
    closure();
}

//advancedFunc25();

//--------------

function advancedFunc26() {
    let result = function () {
        return 1;
    }() + function () {
        return 2;
    }();

    console.log(result);
}

//advancedFunc26();

//--------------

function advancedFunc27() {
    let result = (function () {
        return '!';
    })();

    console.log(result);
}

//advancedFunc27();

//--------------

function advancedFunc28() {
    (function () {
        return function () {
            return function () {
                console.log('!');
            };
        };
    })()()();
}

//advancedFunc28();

//--------------

function advancedFunc29() {
    (function (num1) {
        return function (num2) {
            console.log(num1 + num2);
        }
    })(1)(2);
}

//advancedFunc29();

//--------------

function advancedFunc30() {
    (function (num1) {
        return function (num2) {
            return function (num3) {
                console.log(num1 + num2 + num3);
            }
        }
    })(1)(2)(3);
}

//advancedFunc30();

//--------------

function advancedFunc31() {
    let func = (function () {
        let num = 1;
        return function () {
            console.log(num);
            num++;
            if (num > 5) {
                num = 1;
            }
        };
    })();

    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
    func();
}

//advancedFunc31();

//--------------

function advancedFunc32() {
    function each(arr, callback) {
        let result = [];

        for (let elem of arr) {
            result.push(callback(elem)); // calling callback
        }

        return result;
    }

    let result = each([5, 14, 61, 2], function (num) {
        return num * 2;
    });

    console.log(result);
}

//advancedFunc32();

//--------------

function advancedFunc33() {
    function each(arr, callback) {
        let result = [];

        for (let elem of arr) {
            result.push(callback(elem));
        }

        return result;
    }

    let result = each(['Anastasia', 'Stanislau', 'Walle'], function (str) {
        return str.split('').reverse().join('');
    });

    console.log(result);
}

//advancedFunc33();

//--------------

function advancedFunc34() {
    function each(arr, callback) {
        let result = [];

        for (let elem of arr) {
            result.push(callback(elem));
        }

        return result;
    }

    let result = each(['anastasia', 'stanislau', 'walle'], function (str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    });

    console.log(result);
}

//advancedFunc34();

//--------------

function advancedFunc35() {
    function each(arr, cube) {
        let result = [];

        for (let elem of arr) {
            result.push(cube(elem));
        }

        return result;
    }

    function cube(num) {
        return num ** 3;
    }

    let result = each([1, 2, 3, 4, 5], cube);
    console.log(result);
}

//advancedFunc35();

//--------------

function advancedFunc36() {
    function every(arr, callback) {
        let result = [];

        for (let elem of arr) {
            result.push(callback(elem));
        }

        return result;
    }

    let result = every([1, 2, 3, 4, 5], elem => elem > 0);

    console.log(result);
}

//advancedFunc36();

//--------------

function advancedFunc37() {
    function every(arr, callback) {
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i], i));
        }

        return result;
    }

    let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

    console.log(result);
}

//advancedFunc37();

//--------------

function advancedFunc38() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    function each(arr, callback) {
        let result = [];

        //using a specific syntax - you put it in a box where you can't work with different levels multi arrays
        /*for(let i = 0; i < arr.length; i++) {
            result.push(callback(arr[i][i], i));
        }*/

        //you can use two loops to find result
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(callback(arr[i][j], i));
            }
        }

        return result;
    }

    let result = each(arr, (elem, index) => elem * index > 10);

    console.log(result);
}

//advancedFunc38();

//--------------

function advancedFunc39() {

    function makeRecursion(arr) {
        console.log(arr.shift());

        if (arr.length !== 0) {
            makeRecursion(arr);
        }

        return arr;
    }

    let arrNumber = [5, 16, 11];
    let result = makeRecursion(arrNumber);

    console.log(result);
}


//advancedFunc39();

//--------------

function advancedFunc40() {
    let i = 1;

    function func() {
        console.log(i);
        i++;

        if (i <= 10) {
            func(); // here is recursion
        }
    }

    func();
}


//advancedFunc40();

//--------------

function advancedFunc41() {
    function getSumSquare(arr) {
        let sum = arr.shift() ** 2;

        if (arr.length !== 0) {
            sum += getSumSquare(arr);
        }

        return sum;
    }

    let smallArr = [4, 9, 1, 5];
    let result = getSumSquare(smallArr);

    console.log(result);
}

//advancedFunc41();

//--------------

function advancedFunc42() {
    let multiObj = {
        a: 1,
        b:
            {c: 2, d: 3, e: 4},
        f:
            {
                g: 5, j: 6, k:
                    {
                        l: 7, m:
                            {n: 8, o: 9}
                    }
            }
    };

    function func(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                func(obj[key]);
            } else {
                console.log(obj[key]);
            }
        }

        return obj;
    }

    let result = func(multiObj);
    console.log(result);
}

//advancedFunc42();

//--------------

function advancedFunc43() {
    let arrMulti = [
        1,
        [2, 7, 8],
        [3, 4,
            [5,
                [6, 7]
            ]
        ]
    ];

    let newArr = [];

    function func(arr) {
        for(let elem of arr) {
            if(typeof elem === 'object') {
                func(elem);
            } else {
                newArr.push(elem);
            }
        }

        return arr;
    }

    func(arrMulti);
    console.log(newArr);
}

//advancedFunc43();

//--------------

function advancedFunc44() {
    let obj = {
        a: 1,
        b:
            {c: 2, d: 3, e: 4},
        f:
            {g: 5, j: 6, k:
                    {l: 7, m:
                            {n: 8, o: 9}
                    }
            }
    };

    function findSum(obj) {
        let sum = 0;
        for(let key in obj) {
            if(typeof obj[key] === 'object') {
                sum += findSum(obj[key]);
            } else {
                sum += obj[key];
            }
        }

        return sum;
    }

    let result = findSum(obj);
    console.log(result);
}

//advancedFunc44();

//--------------

function advancedFunc45() {
    let multiArr = [
        'a',
        ['b', 'c', 'd'],
        ['e', 'f',
            ['g',
                ['j', 'k']
            ]
        ]
    ];

    let str = '';

    function func(arr) {
        for(let elem of arr) {
            if(typeof elem === 'object') {
                func(elem);
            } else {
                str += elem;
            }
        }
    }

    func(multiArr);
    console.log(str);
}

//advancedFunc45();

//--------------

function advancedFunc46() {
    let multiArr = [
        1,
        [2, 7, 8],
        [3, 4],
        [5,
            [6, 7]]
    ];

    function func(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'object') {
                func(arr[i]);
            } else {
                console.log(arr[i] ** 2);
            }
        }
    }

    func(multiArr);
}

//advancedFunc46();

//--------------