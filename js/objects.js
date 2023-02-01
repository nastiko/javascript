/*let obj = {Mon:1, Tue:2, Wed:3, Thur:4, Fri:5, Sat:6, Sun:7};
console.log(obj);*/

//--------------

/*let obj = {Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12};
console.log(obj['May']);*/

//--------------

/*let user = {firstName:'Anastasia', LastName:'Hrynkevich', age:29};
console.log(user.firstName + ' ' + user.LastName + ' ' + user.age);*/

//--------------

/*let birthDay = {year:1992, month:10, day:13};
console.log(birthDay.day + '-' + birthDay.month + '-' +birthDay.year);*/

//--------------

/*let obj = {
    '1a': 1,
    'b2': 2,
    'c-c': 3,
    'd 4': 4,
    'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);*/

//--------------

/*let obj = {x:1, y:2, z:3};
obj.x = 1;
obj.y = 4;
obj.z = 9;

console.log(obj);*/

//--------------

/*let obj = {a:1, b:2, c:3};
obj['a'] = '!';
obj.b = '!';

console.log(obj);*/

//--------------

/*let obj = {};
obj.subject = 'JavaScript';
obj.learning = 'Objects';
obj.chapter = 3;

console.log(obj);*/

//--------------

/*let obj = {7:'a', 50:'b', 23:'c'};
console.log(obj);*/

//--------------

/*let obj = {a:1, b:2, c:3};
let keys = Object.keys(obj);

console.log(keys);*/

//--------------

/*let obj = {x:1, y:2, z:3};
let keys = Object.keys(obj);

console.log(keys);*/

//--------------

//how to find length in object
/*let obj = {x:1, y:2, z:3};
console.log(Object.keys(obj).length);*/

//--------------

/*let obj = {a:1, b:2, c:3};
let key = 'a';

console.log(obj[key]);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};
let key = 'x';

console.log(obj[key]);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj[prop]);*/

//--------------

/*/!*let obj = {a:1, b:2, c:3};*!/
let key = 'a';

/!*let obj = {[key]:1, b:2, c:3};*!/
let obj = {[key + '1']:1, [key + '2']:2, [key + '3']:3};

console.log(obj);*/

//--------------

/*let key = 'x';

let obj = {
    [key]: 1,
    y: 2,
    z: 3
};

console.log(obj);*/

//--------------

/*let obj = {
    x: 1,
    y: 2,
    z: 3
};*/

/*let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj = {
    [key1]: 1,
    [key2]: 2,
    [key3]: 3,
}

console.log(obj);*/

//--------------

/*let obj = {
    a:1,
    b:2,
    c:3
}

console.log('d' in obj);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};
let sum = obj['x'] + obj['y'] + obj['x'];

console.log(sum);*/

//--------------

/*let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);*/

//--------------

/*//learning with mentor how to work with function inside obj
let car = {
    model: 'Mazda',

    getModel(){
        return `Your car is ${this.model}`;
    },

    setModel(newModel){
        return this.model = newModel;
    }
}

console.log(car.getModel());*/

//--------------

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries) {
    sum += parseInt(salaries[key]);
}

console.log(sum);*/

//--------------

function multiplyNum() {
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                obj[key] *= 2;
            }
        }
        console.log(obj);
    }

    multiplyNumeric(menu);
}

//multiplyNum();

//--------------

function responseUser() {
    let user = {
        name: "",
        age: 30
    };

    user.name = prompt('What\'s your name?', '');

    user.sayHello = function () {
        console.log(`Hello, ${user.name}`);
    };

    //user.sayHello();
}

function responseUser1() {
    let user = {
        sayHi: function () {
            alert('Hello!');
        }
    };

    user.sayHi();
}

//responseUser();
//responseUser1();

//--------------

function createCalculator() {

    let calculator = {
        num1: 0,
        num2: 0,

        readNumbers: function () {
            this.num1 = parseInt(prompt('First number...'));
            this.num2 = parseInt(prompt('Second number...'));
        },

        getSum: function () {
            this.readNumbers();
            console.log(`Sum = ${this.num1 + this.num2}`);
        },

        getMul: function () {
            console.log(`Mul = ${this.num1 * this.num2}`);
        }
    };

    calculator.getSum();
    calculator.getMul();
}

//createCalculator();

//--------------

function getElemInsideArr() {
    let paragraph = document.getElementById('object4-text');
    let name = '';
    let obj = {
        name: "John",
        age: 30,
        cars: [
            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }

    for(let key1 in obj.cars) {
        name += '<h2>' + obj.cars[key1].name + '</h2>';
        for(let key2 in obj.cars) {
            name += obj.cars[key1].models[key2] + '<br>';
        }
    }

    paragraph.innerHTML = name;
}

//getElemInsideArr();

//--------------

//--------------

//--------------

//--------------

//--------------






