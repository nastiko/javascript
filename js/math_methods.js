//--------------

function inBuiltMath1() {
    console.log(Math.pow(2,10));
    console.log(Math.sqrt(245));
}

//inBuiltMath1();

//--------------

function inBuiltMath2() {
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;
    let sqrt = 0;

    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
        sum += arr[i];
        sqrt = Math.sqrt(sum);
    }

    console.log(sqrt);
}

//inBuiltMath2();

//--------------

function inBuiltMath3() {
    let num = 379;
    let sqrt = Math.sqrt(num);

    console.log(sqrt.toFixed(2));
}

//inBuiltMath3();

//--------------

function inBuiltMath4() {
    let num = 587;
    let sqrt = Math.sqrt(num);
    let floor = Math.floor(sqrt);
    let ceil = Math.ceil(sqrt);

    console.log(floor, ceil);
}

//inBuiltMath4();

//--------------

function inBuiltMath5() {
    console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
    console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
}

//inBuiltMath5();

//--------------

/*function getRandom(min, max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

console.log(getRandom(1, 100));*/

//--------------

function inBuiltMath6() {
    function getRandomNumbers(min, max) {
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }
    for(let i = 0; i < 10; i++) {
        console.log(getRandomNumbers(1, 100));
    }
}

//inBuiltMath6();

//--------------

function inBuiltMath7() {
    let a = Math.abs(5);
    let b = Math.abs(-10);

    console.log(a, b);
}

//inBuiltMath7();

//--------------

function inBuiltString1() {
    let strUpper = 'js';
    let strLower = 'JS';

    console.log(strUpper.toUpperCase());
    console.log(strLower.toLowerCase());
}

//inBuiltString1();

//--------------

function inBuiltString2() {
    let strSentence = 'JavaScript';
    let sub = strSentence.substring(4);
    console.log(sub);
}

inBuiltString2();

//--------------

function inBuiltString3() {

}

//inBuiltString3();

//--------------

function inBuiltString4() {

}

//inBuiltString4();

//--------------

function inBuiltString5() {

}

//inBuiltString5();

//--------------

function inBuiltString6() {

}

//inBuiltString6();

//--------------

function inBuiltString7() {

}

//inBuiltString7();

//--------------

function inBuiltString8() {

}

//inBuiltString8();

//--------------

function inBuiltString9() {

}

//inBuiltString9();

//--------------
//--------------
//--------------
//--------------
//--------------
//--------------
