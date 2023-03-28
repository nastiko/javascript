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

    for (let subArr of arr) {
        for (let elem of subArr) {
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

    for (let grandChildArr of arr) {
        for (let childArr of grandChildArr) {
            for (let elem of childArr) {
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

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    console.log(sum);

}

//multiArraysIteration3();

//--------------

//learning with mentor
function useOneLoop() {
    let arr = [
        13,
        [1, 2, 3, [4, 11, 12], 5],
        [6, 7, 8],
        [9, 10]
    ];

    function sumF(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                sum += sumF(arr[i]);
            } else {
                sum += arr[i];
            }
        }
        return sum;
    }

    let result = sumF(arr);

    console.log(result);
}

//useOneLoop();

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

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
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

    for (let i = 0; i < 3; i++) {
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

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 4; j++) {
            arr[i].push('x');
        }
    }

    console.log(arr);
}

//multiArraysFilling1();

//--------------

function multiArraysFilling2() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 2; j++) {
            arr[i][j] = [];
            for (let k = 0; k < 5; k++) {
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

    for (let i = 0; i < 4; i++) {
        arr[i] = [];
        for (let j = 0; j < 2; j++) {
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

    for (let i = 0; i < 4; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i].push(count += 2);
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

    for (let i = 0; i < 2; i++) {
        arr[i] = [];
        for (let j = 0; j < 2; j++) {
            arr[i][j] = [];
            for (let k = 0; k < 2; k++) {
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

function multiObjects1() {
    let obj = {
        a: {
            key1: 1,
            key2: 2,
            key3: 3,
        },
        b: {
            key1: 4,
            key2: 5,
            key3: 6,
        },
        c: {
            key1: 7,
            key2: 8,
            key3: 9,
        },
    }

    let sum = obj.a.key1 + obj.a.key2 + obj.a.key3 + obj.b.key1 + obj.b.key2 + obj.b.key3 + obj.c.key1 + obj.c.key2 + obj.c.key3;

    console.log(sum);
}

//multiObjects1();

//--------------

function multiObjects2() {
    let obj = {
        1: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        2: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        3: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }

    console.log(obj['2']['2'] + ' ' + obj['3']['1']);
}

//multiObjects2();

//--------------

function multiObjects3() {
    let obj = {
        key1: {
            a: 1, b: 2, c: {
                d: 3,
                e: 4,
            },
            f: 5,
        },
        key2: {
            g: 6, h: 7,
        },
    }

    let sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h;

    console.log(sum);
}

//multiObjects3();

//--------------

function multiObjectsIteration1() {
    let obj = {
        key1: {
            1: 11,
            2: 12,
            3: 13,
        },
        key2: {
            1: 21,
            2: 22,
            3: 23,
        },
        key3: {
            1: 24,
            2: 25,
            3: 26,
        },
    }
    let sum = 0;

    for (let key in obj) {
        let subObj = obj[key];
        for (let subKey in subObj) {
            sum += subObj[subKey];
        }
    }

    console.log(sum);
}

//multiObjectsIteration1();

//--------------

function multiObjectsIteration2() {
    let obj = {
        key1: {
            red: {
                1: 111,
                2: 112,
                3: 113,
            },
            yellow: {
                1: 121,
                2: 122,
                3: 123,
            },
        },
        key2: {
            green: {
                1: 211,
                2: 212,
                3: 213,
            },
            gray: {
                1: 221,
                2: 222,
                3: 223,
            },
        },
        key3: {
            orange: {
                1: 311,
                2: 312,
                3: 313,
            },
            white: {
                1: 321,
                2: 322,
                3: 323,
            },
        },
    }
    let sum = 0;

    for (let key in obj) {
        let subObj = obj[key];
        for (let subKey in subObj) {
            let underSubObj = obj[key][subKey];
            for (let underSubKey in underSubObj) {
                sum += obj[key][subKey][underSubKey];
            }
        }
    }

    console.log(sum);

}

//multiObjectsIteration2();

//--------------

function multiStructures() {
    let students = {
        'group1': ['name11', 'name12', 'name13'],
        'group2': ['name21', 'name22', 'name23'],
        'group3': ['name31', 'name32', 'name33'],
    };

    console.log(students.group3[0]);
}

//multiStructures();

//--------------

function multiStructuresIteration1() {
    let data = {
        1: [
            'data11',
            'data12',
            'data13',
        ],
        2: [
            'data21',
            'data22',
            'data23',
        ],
        3: [
            'data31',
            'data32',
            'data33',
        ],
        4: [
            'data41',
            'data42',
            'data43',
        ],
    };

    for (let key in data) {
        for (let number of data[key]) {
            console.log(number);
        }
    }
}

//multiStructuresIteration1();

//--------------

function multiStructuresIteration2() {
    let data = [
        {
            1: 'data11',
            2: 'data12',
            3: 'data13',
        },
        {
            1: 'data21',
            2: 'data22',
            3: 'data33',
        },
        {
            1: 'data31',
            2: 'data32',
            3: 'data33',
        },
    ];

    for (let elem of data) {
        for (let key in elem) {
            console.log(elem[key]);
        }
    }

    console.log(data[0]["1"]);
}

//multiStructuresIteration2();

//--------------

function multiStructuresIteration3() {
    let data = [
        {
            1: [
                'data111',
                'data112',
                'data113',
            ],
            2: [
                'data121',
                'data122',
                'data123',
            ],
        },
        {
            1: [
                'data211',
                'data212',
                'data213',
            ],
            2: [
                'data221',
                'data222',
                'data223',
            ],
        },
        {
            1: [
                'data411',
                'data412',
                'data413',
            ],
            2: [
                'data421',
                'data422',
                'data423',
            ],
        },
    ];

    for (let elem of data) {
        for (let key in elem) {
            for (let subElem of elem[key]) {
                console.log(subElem);
            }
        }
    }

    console.log(data[0]['1'][0]);
}

//multiStructuresIteration3();

//--------------

function multiArrayOfObjects1() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];

    for (let elem of employees) {
        console.log('name: ' + elem.name + ' - ' + 'salary: ' + elem.salary);
    }
}

//multiArrayOfObjects1();

//--------------

function multiArrayOfObjects2() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
        },
        {
            name: 'name2',
            salary: 400,
        },
        {
            name: 'name3',
            salary: 500,
        },
    ];

    let sum = 0;

    for (let elem of employees) {
        sum += elem.salary;
    }

    console.log(sum);

}

//multiArrayOfObjects2();

//--------------

function multiArrayOfObjects3() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
        {
            name: 'name4',
            salary: 600,
            age: 31,
        },
        {
            name: 'name5',
            salary: 700,
            age: 32,
        },
    ];

    let sum = 0;

    for (let elem of employees) {
        if (elem.age >= 30) {
            sum += elem.salary;
        }
    }

    console.log(sum);

}

//multiArrayOfObjects3();

//--------------

function multiVarsKeys1() {
    let months = {
        'ru': [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
        'en': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
    };
    let lang = 'en';
    let month = 5;

    console.log(months[lang][month]);
}

//multiVarsKeys1();

//--------------

function multiVarsKeys2() {
    let affairs = {
        '2018': {
            11: {
                29: ['case111', 'case112', 'case113'],
                30: ['case121', 'case122', 'case123'],
            },
            12: {
                30: ['case211', 'case212', 'case213'],
                31: ['case221', 'case222', 'case223'],
            },
        },
        '2019': {
            12: {
                29: ['case311', 'case312', 'case313'],
                30: ['case321', 'case322', 'case323'],
                31: ['case331', 'case332', 'case333'],
            }
        },
    }
    let year = '2019';
    let month = 12;
    let day = 31;

    console.log(affairs[year][month][day][2]);
}

//multiVarsKeys2();

//--------------

function multiVarsKeys3() {
    let obj = {
        key1: {
            key2: '12',
            key3: '13',
        },
        key2: {
            key4: '24',
            key5: '25',
        },
    }

    let key1 = 'key2';
    let key2 = 'key4';

    console.log(obj[key1][key2]);
}

//multiVarsKeys3();

//--------------

function multiArraysElementsAdding() {
    let employees = [
        {
            name: 'name1',
            salary: 300,
            age: 28,
        },
        {
            name: 'name2',
            salary: 400,
            age: 29,
        },
        {
            name: 'name3',
            salary: 500,
            age: 30,
        },
    ];

    employees.push(
        {
            name: 'name4',
            salary: 500,
            age: 31,
        }
    );

    console.log(employees);
}

//multiArraysElementsAdding();

//--------------

function objectsElementsAdding1() {
    let affairs = {
        '2019-12-28': ['data11', 'data12', 'data13'],
        '2019-12-29': ['data21', 'data22', 'data23'],
        '2019-12-30': ['data31', 'data32', 'data33'],
    }

    affairs["2019-12-29"].push('data24');

    affairs['2019-12-31'] = [];

    affairs['2019-12-31'].push('data41', 'data42');

    console.log(affairs);
}

//objectsElementsAdding1();

//--------------

function objectsElementsAdding2() {
    let students = {
        'group1': {
            'subgroup11': ['student111', 'student112', 'student113'],
            'subgroup12': ['student121', 'student122', 'student123'],
        },
        'group2': {
            'subgroup21': ['student211', 'student212', 'student213'],
            'subgroup22': ['student221', 'student222', 'student223'],
        },
        'group3': {
            'subgroup31': ['student311', 'student312', 'student313'],
            'subgroup32': ['student321', 'student322', 'student323'],
        },
    };

    students.group1.subgroup11.push('student114');

    students.group1.subgroup13 = [];

    students.group4 = [];

    students.group4.subgroup41 = [];

    students.group4.subgroup41.push('student411', 'student412');

    console.log(students);
}

//objectsElementsAdding2();

//--------------

