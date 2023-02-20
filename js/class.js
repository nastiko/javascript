//CLASS #1

class ChangeText {
    constructor(id, createElem, loremIpsum) {
        this.createElem = createElem;
        this.outputId = id;
        this.loremIpsum = loremIpsum;
    }

    result() {
        this.writeOutput(`${this.loremIpsum}`);
    }

    writeOutput(text) {
        let newParagraph = document.createElement(this.createElem);
        let paragraph = document.getElementById(this.outputId);
        newParagraph.innerHTML += text;

        paragraph.appendChild(newParagraph);
    }
}

let firstParagraph = new ChangeText('class1-block', 'p', 'Learning JavaScript');
let secondParagraph = new ChangeText('class1-block', 'p', 'Learning Frameworks');

firstParagraph.result();
secondParagraph.result();

//--------------

//CLASS #2

class appendText {
    constructor(selector, text) {
        this.selector = selector;
        this.text = text;
    }

    writeOutput() {
        let paragraphs = document.querySelectorAll(this.selector);
        for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].textContent = `${this.text} ${i}`;
        }
    }
}

let addText = new appendText('.class2-text', 'Lorem Ipsum');
addText.writeOutput();

//--------------

//still working
//CLASS #3
class Employee {
    constructor(name, age, gender, position, salary, bonus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.position = position;
        this.salary = salary;
        this.bonus = bonus;
    }

    totalIncome;
}

class DataTable {
    // data storage for all employees
    employees = [];

    // main table element
    table = document.createElement('table');

    constructor(outputElementId) {
        this.outputElementId = outputElementId;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee() {
        //
    }


    //--------------------------
    //--------------------------
    //--------------------------


    renderRow(employee) {
        let tr = document.createElement('tr');

        // get all columns titles
        for (const key of Object.keys(employee)) {
            let td = document.createElement('td');
            td.innerHTML = `${employee[key]}`;
            tr.appendChild(td);
        }

        return tr;
    }

    renderTitle(employee) {
        let tr = document.createElement('tr');

        // get all columns titles
        for (const key of Object.keys(employee)) {
            let th = document.createElement('th');
            th.innerHTML = key.charAt(0).toUpperCase() + key.slice(1);
            tr.appendChild(th);
        }

        return tr;
    }

    renderTable() {
        // render table header row
        this.table.appendChild(this.renderTitle(this.employees[0]));

        // walk through all employees, render each one and add to the table
        for (let employee of this.employees) {
            // add employee to the table
            this.table.appendChild(this.renderRow(employee));
        }

        // return result - the whole table with title and employees rows
        return this.table;
    }

    showTable() {
        this.init();
        let output = document.getElementById(this.outputElementId);
        output.innerHTML = '';
        output.appendChild(this.renderTable());
    }

    init() {
        this.table = document.createElement('table');
    }

}

let employee1 = new Employee('Holly', 58, 'female', 'worker', 32500, 500);
let employee2 = new Employee('Molly', 48, 'female', 'worker', 22500, 400);
let employee3 = new Employee('Dolly', 38, 'female', 'worker', 12500, 300);

let table = new DataTable('class3-table');

table.addEmployee(employee1);
table.addEmployee(employee2);
table.addEmployee(employee3);

table.showTable();

//--------------

//CLASS #4

//still working
class ArithmeticOperations {
    // declare property "arr" with type array
    #arr = [];

    getData() {
        return this.#arr;
    }

    setData(arr) {
        this.#arr = arr;
    }

    constructor(arr) {
        // property of the class assigns parameter value
        this.#arr = arr;
    }

    #isNumberEven(number, multiplier = 2) {
        // return parameter 'number'
        return number % multiplier === 0;
    }

    getEvenNumbers(multiplier = 2) {
        let result = [];

        for (let i = 0; i < this.getData().length; i++) {
            if (this.#isNumberEven(this.getData()[i], multiplier)) {
                result.push(this.getData()[i]);
            }
        }

        return result;
    }

    solve() {
        // basic method to solve
    }
}

class Task1 extends ArithmeticOperations {
    showCurrentArr() {
        let paragraph = document.getElementById('class4-arr');
        for (let elem of input) {
            paragraph.textContent += ` ${elem} |`;
        }
    }

    solve() {
        let paragraph = document.getElementById('class4-even_nums');
        for (let number of this.getEvenNumbers()) {
            paragraph.textContent += ` ${number} |`;
        }
    }

    solveMean() {

    }
}

class Task2 extends ArithmeticOperations {
    solveLargestNum() {
        let max = this.getData()[0];
        let paragraph = document.getElementById('class4-large_num');
        for (let i = 0; i < this.getData().length; i++) {
            if (this.getData()[i] > max) {
                max = this.getData()[i];
            }
        }
        paragraph.textContent += ` ${max}`;
    }

    solveSmallestNum() {
        let min = this.getData()[0];
        let paragraph = document.getElementById('class4-small_num');
        for (let i = 0; i < this.getData().length; i++) {
            if (this.getData()[i] < min) {
                min = this.getData()[i];
            }
        }
        paragraph.textContent += ` ${min}`;
    }

    solveLargestEvenNum(multiply = 5) {
        let max = this.getEvenNumbers()[0];
        let paragraph = document.getElementById('class4-large_even');
        for (let number of this.getEvenNumbers(multiply)) {
            if (number > max) {
                max = number;
            }
        }

        paragraph.textContent += ` ${max}`;
    }

    solveTotalEvenElem() {
        let total = 0;
        let paragraph = document.getElementById('class4-total_evenElems');
        total = this.getEvenNumbers().length;

        paragraph.textContent += ` ${total}`;
    }
}

let input = [
    1, 23, 523, 213, 90, 845, 289, 211, 98, 4, 15,
    140, 431, 436, 881, 671, 671, 23, 55, 671, 999,
    17, 269, 254, 453, 290, 57, 198, 701, 764, 260,
    774, 336, 190, 90, 126, 99, 134, 77, 90, 211, 198,
    9, 199, 211, 900, 211, 98
];
let task1 = new Task1(input);
let task2 = new Task2(input);

task1.showCurrentArr();
task1.solve();

task2.solveLargestNum();
task2.solveSmallestNum();
task2.solveLargestEvenNum();
task2.solveTotalEvenElem();

//--------------

//CLASS #5

class Student {
    show(name, surn) {
        name = 'anastasia';
        surn = 'hrynkevich';
        console.log(this.cape(`${name}`) + ' ' + this.cape(`${surn}`));
    }

    cape(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

let student1 = new Student();
student1.show();

//--------------

//CLASS #6

class Employer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    show() {
        console.log(`My name is ${this.name}. I earn ${this.getBonus(this.salary)}`);
    }

    getBonus() {
        return this.salary * 10;
    }
}

let employer1 = new Employer('John', 35600);
employer1.show();

//--------------

//CLASS #7

class ZooEmployee {
    #name;
    #age;
    #salary;

    constructor(name, age, salary) {
        this.#name = name;
        this.#age = age;
        this.#salary = salary;
    }

    show() {
        console.log(`My name is ${this.#name}. I'm ${this.#age} and I get £${this.#salary} per year.`)
    }
}

let zooEmployee1 = new ZooEmployee('Owly', 28, 35500);
zooEmployee1.show();

//--------------

//CLASS #8

class PetEmployee {

    //declare property at the beginning of the class code
    #name;
    #age;
    #salary;

    /*constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }*/

    setName(name) {
        this.#name = name;
        // call one after another in a chain in 'set'
        return this;
    }

    setAge(age) {
        //check value
        if (age > 0 && age <= 100) {
            this.#age = age;
        } else {
            // get error in console
            throw new Error('name is incorrect');
        }
        return this;
    }

    setSalary(salary) {
        this.#salary = salary;
        return this;
    }

    // allow to read this property
    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getSalary() {
        return this.#addSign(this.#salary);
    }

    #addSign(num) {
        return num + '$';
    }
}

//let petEmployee1 = new PetEmployee('Henry', 65210); //if you use constructor, you need declare variable with parameters
//petEmployee1.getSalary();

// declare 'set' method
let petEmployee1 = new PetEmployee;
petEmployee1.setName('John').setAge(45).setSalary(45000);

console.log(petEmployee1.getName());
console.log(petEmployee1.getAge());
console.log(petEmployee1.getSalary());

//--------------

//CLASS #9

class StudentCollege {
    constructor(name) {
        this.name = name;
    }
}

class StaffCollege {
    constructor(name) {
        this.name = name;
    }
}

// create class instance
let users = [
    new StudentCollege('student1'),
    new StaffCollege('staff1'),
    new StudentCollege('student2'),
    new StaffCollege('staff2'),
    new StudentCollege('student3'),
    new StaffCollege('staff3'),
    new StudentCollege('student4'),
];

for (let staff of users) {
    if (staff instanceof StaffCollege) {
        console.log(staff.name);
    }
}

//--------------

//CLASS #10

class Validator {

    #elem;

    constructor(elem) {
        this.#elem = elem;
    }

    #checkElem() {
        if (typeof this.#elem === 'string') {
            return this.#elem;
        } else {
            return 'The element is not string!';
        }
    }

    show(elemId) {
        let paragraph = document.getElementById(elemId);
        paragraph.textContent += ` ${this.#checkElem(this.#elem)}`;
    }
}

let string = new Validator('Hello, there!');
string.show('class10-result');

//--------------

//CLASS #11

class Email {

    #email;

    constructor(email) {
        this.#email = email;
    }

    #checkEmail() {
        if (this.#email.indexOf('@')) {
            return this.#email;
        } else {
            return 'Write a correct email, please!';
        }
    }

    show(elemId) {
        let paragraph = document.getElementById(elemId);
        paragraph.textContent += `You wrote a correct email: ${this.#checkEmail(this.#email)}`;
    }
}

let isEmail = new Email('anastasia.hrynkevich@outlook.com');
isEmail.show('class11-result');

//--------------

//CLASS #12

class Client {
    constructor(name, position, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }

    show(elemId) {
        let paragraph = document.getElementById(elemId);
        paragraph.textContent += ` Our client is ${this.name}. He's ${client1.position.name} of ${client1.department.name} department.`;
    }
}

class Position {
    constructor(name) {
        this.name = name;
    }
}

class Department {
    constructor(name) {
        this.name = name;
    }
}

let position = new Position('SEO, director');
let department = new Department('Marketing');

let client1 = new Client('Wolfy', position, department);

client1.show('class12-result');

//--------------

//CLASS #13

class Flowers {
    #name;
    #price;

    constructor(name, price) {
        this.#name = name;
        this.#price = price;
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return ` - £${this.#price}`;
    }
}

let result = document.getElementById('class13-result');

let flowers = [
    new Flowers('Orchid', 15),
    new Flowers('Rose', 9),
    new Flowers('Sunflower', 25),
    new Flowers('Gardenias', 3.5)
];

for (let item of flowers) {
    result.innerHTML += `${item.getName()} ${item.getPrice()}` + '<br>';
}

//--------------

//CLASS #14

class Employees {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }
}

//manipulation of objects employees
class EmployeesCollection {
    #employees;

    constructor(totalResult, meanResult) {
        this.totalResult = totalResult;
        this.meanResult = meanResult;
        this.#employees = [];
    }

    add(employee) {
        this.#employees.push(employee);
    }

    show(elemId) {
        let result = document.getElementById(elemId);
        for (let employee of this.#employees) {
            result.innerHTML += `${employee.getName()} - salary: £${employee.getSalary()}` + '<br>';
        }
    }

    #calculateTotal() {
        let sum = 0;

        for (let employee of this.#employees) {
            sum += employee.getSalary();
        }

        this.totalResult.textContent += ` £${sum}`;

        return sum;
    }

    calculateMean() {
        this.meanResult.textContent += ` £${(Math.ceil((this.#calculateTotal() / this.#employees.length)).toString())}`;
    }

    init(totalId, meanId) {
        this.totalResult = document.getElementById(totalId);
        this.meanResult = document.getElementById(meanId);
    }
}


let collection = new EmployeesCollection;

// add class instance
collection.add(new Employees('John', 45000));
collection.add(new Employees('Eric', 28500));
collection.add(new Employees('Kyle', 32750));

collection.init('class14-total', 'class14-mean');

collection.show('class14-result');
collection.calculateMean();


//--------------

//CLASS #15

class Circle {
    #radius;

    constructor(radius, areaResult, circumferenceResult) {
        this.#radius = radius;
        this.areaResult = areaResult;
        this.circumferenceResult = circumferenceResult;
    }

    calculateArea() {
        this.areaResult.textContent += ` ${(Math.PI * (this.#radius ** 2)).toFixed(2)}`;
    }

    calculateCircumference() {
        this.circumferenceResult.textContent += ` ${(2 * Math.PI * this.#radius).toFixed(2)}`;
    }

    init(areaId, circumferenceId) {
        this.areaResult = document.getElementById(areaId);
        this.circumferenceResult = document.getElementById(circumferenceId);
    }


}

let circle = new Circle(5);

circle.init('class15-area', 'class15-circumference');

circle.calculateArea();
circle.calculateCircumference();

//--------------

//CLASS #16

class Rectangle {
    #width;
    #length;

    constructor(width, length) {
        this.#width = width;
        this.#length = length;
    }

    #getArea() {
        return this.#width * this.#length;
    }

    #getPerimeter() {
        return 2 * (this.#width + this.#length);
    }

    getRatio() {
        let paragraph = document.getElementById('class16-ratio');
        paragraph.textContent += ` ${(this.#getArea() / this.#getPerimeter()).toFixed(2)}`;
    }
}

class Square extends Rectangle {
    constructor(a) {
        super(a, a);
    }
}

let rectangle = new Rectangle(7, 5);
rectangle.getRatio();

let square = new Square(5);
square.getRatio();

//--------------

//CLASS #17
class Text {
    newArr = [];

    constructor(input, numSymbols, numLetters, numSpaces, numOnlySymbols, arrSymbols, arrSentences) {
        this.input = input;
        this.numSymbols = numSymbols;
        this.numLetters = numLetters;
        this.numSpaces = numSpaces;
        this.numOnlySymbols = numOnlySymbols;
        this.arrSymbols = arrSymbols;
        this.arrSentences = arrSentences;
    }

    getText() {
        return this.input.value;
    }

    getNumberSymbols() {
        return this.numSymbols.textContent = `${this.getText().length}`;
    }

    getOnlyNumbersLetters() {
        // only count letters and numbers
        let regex = /[a-zA-Z0-9]/g;
        this.numLetters.textContent = ` ${this.getText().match(regex).length}`;
    }

    getNumberSpaces() {
        // only count spaces between words and symbols
        return this.numSpaces.textContent = ` ${this.getText().split(" ").length - 1}`;
    }

    getSymbolsExcludingSpaces() {
        this.numOnlySymbols.textContent = ` ${this.getNumberSymbols() - this.getNumberSpaces()}`;
    }

    getArrSymbols() {
        return this.arrSymbols.textContent = ` ${this.newArr.push(this.getText()) - 1}`;
    }

    getArrSentences() {
        this.arrSentences.textContent = ` ${this.newArr}`;
    }

    init(inputId, spanSymbolsId, spanLettersId, spanSpacesId, spanOnlySymbolsId, spanArrSymbolsId, spanArrSentencesId) {
        this.input = document.getElementById(inputId);
        this.numSymbols = document.getElementById(spanSymbolsId);
        this.numLetters = document.getElementById(spanLettersId);
        this.numSpaces = document.getElementById(spanSpacesId);
        this.numOnlySymbols = document.getElementById(spanOnlySymbolsId);
        this.arrSymbols = document.getElementById(spanArrSymbolsId);
        this.arrSentences = document.getElementById(spanArrSentencesId);

        this.input.addEventListener('keyup', () => this.getNumberSymbols());
        this.input.addEventListener('keyup', () => this.getOnlyNumbersLetters());
        this.input.addEventListener('keyup', () => this.getNumberSpaces());
        this.input.addEventListener('keyup', () => this.getSymbolsExcludingSpaces());
        this.input.addEventListener('keyup', () => this.getArrSymbols());
        this.input.addEventListener('keyup', () => this.getArrSentences());
    }
}

let manipulation = new Text;

manipulation.init('class17-text', 'class17-symbols', 'class17-number_letters', 'class17-space',
    'class17-only_symbols', 'class17-arr_symbols', 'class17-arr_sentences');

manipulation.getNumberSymbols();

//--------------

//CLASS #18

class Zate {

    #year;
    #month;
    #day;

    constructor(spanYear, spanMonth, spanDayMonth, spanDate, spanNumWeek, spanWeek) {
        this.spanYear = spanYear;
        this.spanMonth = spanMonth;
        this.spanDayMonth = spanDayMonth;
        this.spanDate = spanDate;
        this.spanNumWeek = spanNumWeek;
        this.spanWeek = spanWeek;
    }

    setYear(year) {
        this.#year = year;
        // return this for declare methods one after another in a chain
        return this;
    }

    setMonth(month) {
        this.#month = month;
        return this;
    }

    setDate(day) {
        this.#day = day;
        return this;
    }


    getFullYear() {
        return this.spanYear.textContent = ` ${this.#year}`;
    }

    getMonth() {
        this.spanMonth.textContent = ` ${this.#month}`;
    }

    getDayMonth() {
        this.spanDayMonth.textContent = ` ${initMonth[date.getMonth()]}`;
    }

    getDate() {
        this.spanDate.textContent = ` ${this.#day}`;
    }

    getNumWeek() {
        this.spanNumWeek.textContent = ` ${initDayWeek[date.getDay()]}`;
    }

    getDayWeek() {
        this.spanWeek.textContent = ` ${initDays[date.getDay()]}`;
    }


    init(yearId, monthId, dayMonthId, dateId, numWeekId, weekId) {
        this.spanYear = document.getElementById(yearId);
        this.spanMonth = document.getElementById(monthId);
        this.spanDayMonth = document.getElementById(dayMonthId);
        this.spanDate = document.getElementById(dateId);
        this.spanNumWeek = document.getElementById(numWeekId);
        this.spanWeek = document.getElementById(weekId);
    }
}

const initMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const initDayWeek = [7, 1, 2, 3, 4, 5, 6];
const initDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let today = new Zate;
let date = new Date();

today.init('class18-year', 'class18-num_month', 'class18-day_month', 'class18-date', 'class18-num_week', 'class18-week');
today.setYear(date.getFullYear()).setMonth(date.getMonth() + 1).setDate(date.getDate());

today.getFullYear();
today.getMonth();
today.getDayMonth();
today.getDate();
today.getNumWeek();
today.getDayWeek();

//--------------

//CLASS #19

class Store {

    //data storage in object
    #storage = {};

    get(dataKey) {
        let [key, property] = dataKey.split('.');

        if (this.#storage[key] === undefined) {
            return false;
        }

        let value = this.#storage[key];

        if (property) {
            value = value[property];
        }

        //return value
        return value;
    }

    set(dataKey, newValue) {
        let [key, property] = dataKey.split('.');

        if (property) {
            if (this.get(key)) {
                this.#storage[key][property] = newValue;
            } else {
                this.set(key, {[property]: newValue});
            }
        } else {
            this.#storage[key] = newValue;
        }
    }

    delete(dataKey) {
        let [key, property] = dataKey.split('.');

        return delete this.#storage[key][property];
    }

}

let store = new Store;
store.set('fruits', {mango: 1, apple: 3, banana: 6});

store.set('books.fantasy', '50');
store.delete('books.fantasy');

//--------------

//CLASS #1

//--------------