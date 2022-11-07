function destructuringPractice1() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [firstName, secondName, course, profession, year] = arr;

    console.log(course);
}

//destructuringPractice1();

//--------------

function destructuringPractice2() {
    function func() {
        return ['John', 'Smit', 'development', 'programmer', 2000];
    }

    let [firstName, secondName, course, profession, year] = func();
    console.log(secondName);
}

//destructuringPractice2();

//--------------

function destructuringPractice3() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [,, course, profession,] = arr;

    console.log(course, profession);
}

//destructuringPractice3();

//--------------

function destructuringPractice4() {
    let arr = [2025, 12, 31, 23, 59, 59];
    let [year, month, day] = arr;

    console.log(year);
    console.log(month);
    console.log(day);
}

//destructuringPractice4();

//--------------

function destructuringPractice5() {
    let arr = ['John', 'Smit', 'development', 'programmer', 2000];
    let [firstName, secondName, ...rest] = arr;

    console.log(rest);
}

//destructuringPractice5();

//--------------

function destructuringPractice6() {
    let arr = ['John', 'Smit', 'development', 'programmer'];
    let [name, surname, department, position] = arr;

    if (position !== undefined) {
        position = 'trainee';
    }

    console.log(position);
}

//destructuringPractice6();

//--------------

function destructuringPractice7() {
    function isYear() {
        return (new Date).getFullYear();
    }

    function isMonth() {
        return (new Date).getMonth() + 1;
    }

    function isDate() {
        return (new Date).getDate();
    }

    let arr = [2022,,];
    let [year = isYear(), month = isMonth(), day = isDate()] = arr;

    console.log(year, month, day);
}

//destructuringPractice7();

//--------------

function destructuringPractice8() {
    let arr = [2025, 12, 31];
    let year;
    let month;
    let day;

    [year, month, day] = arr;

    console.log(year, month, day);
}

//destructuringPractice8();

//--------------

function destructuringPractice9() {
    let options = {
        color: 'red',
        width:  400,
        height: 500,
    };

    let {color, width, height} = options;
    console.log(color, width, height);
}

//destructuringPractice9();

//--------------

function destructuringPractice10() {
    let options = {
        color: 'red',
        width:  400,
        height: 500,
    };

    let {color: c, width: w, height: h} = options;
    console.log(c, w, h);
}

//destructuringPractice10();

//--------------

function destructuringPractice11() {
    let obj = {
        month: 12,
        day:   31,
    };

    let {year = 2025, month, day} = obj;
    console.log(year, month, day);
}

//destructuringPractice11();

//--------------

function destructuringPractice12() {
    let options = {
        width:  400,
        height: 500,
    };

    let {color, width, height} = options;

    if (color === undefined) {
        color = 'black';
    }

    console.log(color, width, height);
}

//destructuringPractice12();

//--------------

function destructuringPractice13() {
    let options = {
        width:  400,
        height: 500,
    };

    let {color: c = 'black', width: w, height: h} = options;

    console.log(c, w, h);
}

//destructuringPractice13();

//--------------

function destructuringPractice14() {
    let obj = {
        year:  2025,
        month: 12,
        day:   31,
    };

    ({year, month, day} = obj);

    console.log(year, month, day);
}

//destructuringPractice14();

//--------------

function destructuringPractice15() {
    func(['John', 'Smit', 'development', 'programmer', 2000]);

    function func([name, surname, department, position, salary]) {
        console.log(name);
        console.log(position);
        console.log(salary);
    }
}

//destructuringPractice15();

//--------------

function destructuringPractice16() {
    func(['John', 'Smit', 'development', 'str1']);

    function func([name, surname, department, position]) {
        if (position !== undefined) {
            position = 'Junior';
        }
        console.log(position);
    }
}

//destructuringPractice16();

//--------------

function destructuringPractice17() {
    func('development', ['John', 'Smit'], [2018, 12, 31]);

    function func(department, [employee1, employee2], [year, month, day]) {
        console.log(employee2);
    }
}

//destructuringPractice17();

//--------------

function destructuringPractice18() {
    func({color: 'red', width: 400, height: 500});

    function func({color, width, height}) {
        console.log(color);
        console.log(width);
        console.log(height);
    }
}

//destructuringPractice18();

//--------------

function destructuringPractice19() {
    func({color: 'red', width: 400, height: 500});

    function func({color, width, height}) {
        if (color !== undefined) {
            color = 'black';
        }
        console.log(color);
    }
}

//destructuringPractice19();

//--------------
