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

    console.log(total);
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
//--------------
//--------------
//--------------