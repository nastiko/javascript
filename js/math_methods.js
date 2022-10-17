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
    let sub = strSentence.substring(0, 4);
    let slice = strSentence.slice(4);
    console.log(sub + slice);
}

//inBuiltString2();

//--------------

function inBuiltString3() {
     let str = 'abcde';
     console.log(str.indexOf('c'));
     console.log(str.lastIndexOf('a'));
     console.log(str.indexOf('a', 0));
     console.log(str.indexOf('http://'));
     console.log(str.lastIndexOf('.html'));
}

//inBuiltString3();

//--------------

function inBuiltString4() {
    let str = 'https://anastasia.grinkevi.ch/';
    console.log(str.startsWith('https://'));
    console.log(str.endsWith('.html'));
}

//inBuiltString4();

//--------------

function inBuiltString5() {
    let str = '1-2-3-4-5';
    let arr = str.split('-');
    console.log(arr);
}

//inBuiltString5();

//--------------

function inBuiltString6() {
    let str = '12345';
    let arr = str.split('');
    console.log(arr);
}

//inBuiltString6();

//--------------

function inBuiltString7() {
    let arr = [1, 2, 3, 4, 5];
    let str = arr.join('');
    console.log(str);
}

//inBuiltString7();

//--------------

function inBuiltArray1() {
    let arr = [1, 2, 3];
    arr.push(4, 5, 6);

    console.log(arr);
}

//inBuiltArray1();

//--------------

function inBuiltArray2() {
    let arr = [1, 2, 3];
    arr.unshift(4, 5, 6);

    console.log(arr);
}

//inBuiltArray2();

//--------------

function inBuiltArray3() {
    let arr = [1, 2, 3];
    let elem = arr.shift();

    console.log(elem);
}

//inBuiltArray3();

//--------------

function inBuiltArray4() {
    let arr = [1, 2, 3];
    let elem = arr.pop();

    console.log(elem);
}

//inBuiltArray4();

//--------------

function inBuiltArray5() {
    let arr = [1, 2, 3, 4, 5];
    let sub = arr.slice(0, 3);

    console.log(sub);
}

//inBuiltArray5();

//--------------

function inBuiltArray6() {
    let arr = [1, 2, 3, 4, 5];
    let sub = arr.slice(3);

    console.log(sub);
}

//inBuiltArray6();

//--------------

function inBuiltArray7() {
   let arr = [1, 2, 3, 4, 5];
   let del = arr.splice(1, 2);

   console.log(arr);
}

//inBuiltArray7();

//--------------

function inBuiltArray8() {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 0, 'a' , 'b', 'c');

    console.log(arr);

}

//inBuiltArray8();

//--------------

function inBuiltArray9() {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 0, 'a', 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');

    console.log(arr);

}

//inBuiltArray9();

//--------------

function inBuiltArray10() {
    let arr = [1, 2, 3, 4, 5];
    let number = arr.indexOf(3);

    console.log(number);
}

//inBuiltArray10();

//--------------

function inBuiltArray11() {
    let arr = [1, 2, 3, 4, 5];
    let number = arr.includes(3);

    console.log(number);
}

//inBuiltArray11();

//--------------

function inBuiltPracticum1() {
    let str = 'london';
    let result = str.slice(0, 1).toUpperCase() + str.slice(1);

    console.log(result);
}

//inBuiltPracticum1();

//--------------

function inBuiltPracticum2() {
    let str = 'london';
    let result = str.slice(0, -1) + str.slice(5).toUpperCase();

    console.log(result);
}

//inBuiltPracticum2();

//--------------

function inBuiltPracticum3() {
    let str = 'london';
    let result = str.slice(0, 2).toUpperCase() + str.slice(2);

    console.log(result);
}

//inBuiltPracticum3();

//--------------

function inBuiltPracticum4() {
    let str = 'loNDon';
    let result = str.slice(0, 2) + str.slice(2, 4).toLowerCase() + str.slice(4);

    console.log(result);
}

//inBuiltPracticum4();

//--------------

function inBuiltPracticum5() {
    let str = 'word1 word2 word3';
    let words = str.split(' ');

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
    }

    let result = words.join(' ');

    console.log(result);
}

//inBuiltPracticum5();

//--------------

function inBuiltPracticum6() {
    let str = 'var_test_text';
    let arr = str.split('_');

    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }

    let result = arr.join('');

    console.log(result);
}

//inBuiltPracticum6();

//--------------

function inBuiltPracticum7() {
    let str = 'var_test_text';
    let arr = str.split('_');

    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }

    let result = arr.join('');

    console.log(result);
}

//inBuiltPracticum7();

//--------------

function inBuiltPracticum8() {
    let str = 'You are welcome';
    let result = str.split(' ').reverse().join(' ');

    console.log(result);
}

//inBuiltPracticum8();

//--------------

function inBuiltMistakes1() {
    let num = 12345;
    /*let str = String(num);
    let arr = str.split('');*/
    // you can write short a let:
    let arr = String(num).split('');
    let sum = 0;

    for (let elem of arr) {
        sum += Number(elem);
    }

    console.log(sum);
}

//inBuiltMistakes1();

//--------------

function inBuiltMistakes2() {
    let num = 12345;
    let arr = String(num).split('');
    let prod = 1;

    for (let elem of arr) {
        prod *= Number(elem);
    }

    console.log(prod);
}

//inBuiltMistakes2();

//--------------
