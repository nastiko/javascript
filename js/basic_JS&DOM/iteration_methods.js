function iterationPractices1() {
    let arr = [5, 17, 2, 36];
    let newArr = [];

    let result = arr.map(function (elem) {
        return Math.sqrt(newArr.push(elem));
    });

    console.log(result);
}

//iterationPractices1();

//--------------

function iterationPractices2() {
    let arr = ['hello', 'weather', 'rain', 'cat'];

    let result = arr.map(function (elem) {
        return elem += '!';
    });

    console.log(result);
}

//iterationPractices2();

//--------------

function iterationPractices3() {
    let arr = ['Jake', 'dogs', 'nature'];

    let result = arr.map(function (elem) {
        return elem.split('').reverse().join('');
    });

    console.log(result);
}

//iterationPractices3();

//--------------

function iterationPractices4() {
    let arr = ['123', '456', '789'];

    let result = arr.map(function (elem) {
        return elem.split('');
    });

    console.log(result);
}

//iterationPractices4();

//--------------

function iterationPractices5() {
    let arr = [52, 19, 3, 47, 21, 10, 7, 0];

    let result = arr.map(function (elem, index) {
        return elem * index;
    });

    console.log(result);
}

//iterationPractices5();

//--------------

function iterationPractices6() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    let result = arr.map(function (elem) {
        return elem.map(num => num * num);
    });

    console.log(result);
}

//iterationPractices6();

//--------------

function iterationPractices7() {
    let arr = [8, 5, 3, 9, 10];
    let sum = 0;

    arr.forEach(function(elem) {
        sum += elem ** 2;
    });

    console.log(sum);
}

//iterationPractices7();

//--------------

function iterationPractices8() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.filter(elem => elem >= 0);

    console.log(result);
}

//iterationPractices8();

//--------------

function iterationPractices9() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.filter(elem => elem < 0);

    console.log(result);
}

//iterationPractices9();

//--------------

function iterationPractices10() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.filter(elem => elem > 0 && elem < 10);

    console.log(result);
}

//iterationPractices10();

//--------------

function iterationPractices11() {
    let arr = ['May', 'June', 'September', 'July'];
    let result = arr.filter(elem => elem.length > 5);

    console.log(result);
}

//iterationPractices11();

//--------------

function iterationPractices12() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.filter((elem, index) => elem * index < 30);

    console.log(result);
}

//iterationPractices12();

//--------------

//find subarrays
function iterationPractices13() {
    let arr = [1, 2, [3, 4], 5, [6, 7]];
    let result = arr.filter(elem => Array.isArray(elem));

    console.log(result);
}

//iterationPractices13();

//--------------

//find ordinary elements
function iterationPractices14() {
    let arr = [1, 2, [3, 4], 5, [6, 7]];
    let result = arr.filter(elem => !Array.isArray(elem));

    console.log(result);
}

//iterationPractices14();

//--------------

function iterationPractices15() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.filter(elem => elem < 0).length;

    console.log(result);
}

//iterationPractices15();

//--------------

function iterationPractices16() {
    let arr = [6, 0, 14, 3, 21, 1];
    let result = arr.every(elem => elem >= 0);

    console.log(result);
}

//iterationPractices16();

//--------------

function iterationPractices17() {
    let arr = [-5, 6, 0, 14, -98, 3, -25, 21, 1];
    let result = arr.every((elem, index) => elem * index < 30);

    console.log(result);
}

//iterationPractices17();

//--------------

function iterationPractices18() {
    let arr = [52, 19, 3, 47, 21, 10, 7, 0];
    let result = arr.some(elem => elem > 0);

    console.log(result);
}

//iterationPractices18();

//--------------

function iterationPractices19() {
    let arr = [52, 19, 3, 47, 21, 10, 7, 0];
    let result = arr.some((elem, index) => elem * index > 30);

    console.log(result);
}

//iterationPractices19();

//--------------

