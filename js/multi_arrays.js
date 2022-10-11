//--------------
function multiArrays1() {
    let arr = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
    ];

    console.log(arr[3][2] + ' ' + arr[1][1] + ' ' + arr[2][0] + ' ' + arr[0][0]);
}

//multiArrays1();

//--------------

function multiArrays2() {
    let arr = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];

    let sumArr1 = arr[0][0] + arr[0][1];
    let sumArr2 = arr[1][0] + arr[1][1];
    let sumArr3 = arr[2][0] + arr[2][1];
    let total = sumArr1 + sumArr2 + sumArr3;

    console.log(total);
}

//multiArrays2();

//--------------

function multiArrays3() {
    let arr = [
        [
            [1, 2],
            [3, 4],
        ],
        [
            [5, 6],
            [7, 8],
        ],
    ];

    let total = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1];

    console.log(arr);
}

//multiArrays3();

//--------------

function multiArrays4() {
    let arr = [
        [1, 2, 3,
            [4, 5,
                [6, 7]
            ]
        ],
        [8,
            [9, 10]
        ]
    ];

    let total = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];

    console.log(total);
}

//multiArrays4();

//--------------

function multiArraysIteration1() {
    let arr = [
        [1, 2, 3],
        [4, 5],
        [6]
    ];

    let res = 0;

    for(let subArr of arr) {
        for(let elem of subArr) {
            res += elem;
        }
    }
    console.log(res);
}

//multiArraysIteration1();

//--------------

function multiArraysIteration2() {
    let arr = [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ];

    let res = 0;

    for(let grandChildArr of arr) {
        for(let childArr of grandChildArr) {
            for(let elem of childArr) {
                res += elem;
            }
        }
    }
    console.log(res);
}

//multiArraysIteration2();

//--------------

function multiArraysIteration3() {
    let arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8],
        [9, 10]
    ];

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    console.log(sum);

}

//multiArraysIteration3();

//--------------

function multiArraysIteration4() {
    let arr = [
        [
            [1, 2],
            [3, 4]
        ],
        [
            [5, 6],
            [7, 8]
        ]
    ];

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            for(let k = 0; k < arr[j].length; k++) {
                sum += arr[i][j][k];
            }
        }
    }
    console.log(sum);
}

//multiArraysIteration4();

//--------------

function multiArraysFilling() {
    let arr = [];

    for(let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 5; j++) {
            arr[i].push(j + 1); //will start with 1!
        }
    }

    console.log(arr);
}

//multiArraysFilling();

//--------------

function multiArraysFilling1() {
    let arr = [];

    for(let i = 0; i < 3; i++) {
        arr[i] = [];
        for(let j = 0; j < 4; j++) {
            arr[i].push('x');
        }
    }

    console.log(arr);
}

//multiArraysFilling1();

//--------------

function multiArraysFilling2() {
    let arr = [];

    for(let i = 0; i < 3; i++) {
        arr[i] = [];
        for(let j = 0; j < 2; j++) {
            arr[i][j] = [];
            for(let k = 0; k < 5; k++) {
                arr[i][j].push(k + 1);
            }
        }
    }

    //console.log(arr);
    print_out(arr);
}

//multiArraysFilling2();

//--------------

function multiArraysProblems() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 1; j <= 5; j++) {
            arr[i].push(j);
        }
    }

    //print_out(arr);
}

//multiArraysProblems();

//--------------

function multiArraysOrder1() {
    let arr = [];
    let count = 1;

    for(let i = 0; i < 4; i++) {
        arr[i] = [];
        for(let j = 0; j < 2; j++) {
            arr[i].push(count++);
        }
    }

    //print_out(arr);
}

//multiArraysOrder1();

//--------------

function multiArraysOrder2() {
    let arr = [];
    let count = 0;

    for(let i = 0; i < 4; i++) {
        arr[i] = [];
        for(let j = 0; j < 3; j++) {
            arr[i].push(count+=2);
        }
    }

    console.log(arr);
    //print_out(arr);
}

//multiArraysOrder2();

//--------------

function multiArraysOrder3() {
    let arr = [];
    let count = 1;

    for(let i = 0; i < 2; i++) {
        arr[i] = [];
        for(let j = 0; j < 2; j++) {
            arr[i][j] = [];
            for(let k = 0; k < 2; k++) {
                arr[i][j].push(count++);
            }
        }
    }

    console.log(arr);
    //print_out(arr);
}

//multiArraysOrder3();

//--------------

function multiArraysOrder4() {
    let arr = [];
    let count = 1;

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i].push(count);
            count++;
        }
    }

    console.log(arr);
    print_out(arr);
}

//multiArraysOrder4();

//--------------

function multiArraysOrder5() {

}

//multiArraysOrder5();

//--------------

function multiArraysOrder6() {

}

//multiArraysOrder6();

//--------------

function multiArraysOrder7() {

}

//multiArraysOrder7();

//--------------

function multiArraysOrder8() {

}

//multiArraysOrder8();

//--------------

function multiArraysOrder9() {

}

//multiArraysOrder9();

//--------------

function multiArraysOrder10() {

}

//multiArraysOrder10();

//--------------

function multiArraysOrder11() {

}

//multiArraysOrder11();

//--------------

function multiArraysOrder12() {

}

//multiArraysOrder12();

//--------------

function multiArraysOrder13() {

}

//multiArraysOrder13();

//--------------
//--------------
//--------------