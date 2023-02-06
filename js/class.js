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
    arr = [];

    constructor(arr) {
        // property our class assigns parameter value
        this.arr = arr;
    }

    isNumberEven(number, multiplier = 2) {
        // return parameter 'number'
        return number % multiplier === 0;
    }

    getEvenNumbers(multiplier = 2) {
        let result = [];

        for (let i = 0; i < this.arr.length; i++) {
            if (this.isNumberEven(this.arr[i], multiplier)) {
                result.push(this.arr[i]);
            }
        }

        return result;
    }

    solve(){
        // basic method to solve
    }
}

class Task1 extends ArithmeticOperations{
    solve() {
        let paragraph = document.getElementById('class4-arr');
        for (let number of this.getEvenNumbers()) {
            paragraph.textContent += ` ${number} |`;
        }
    }
}
class Task2 extends ArithmeticOperations{
    solve() {
        console.log('Done!');
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
task1.solve();
task2.solve();

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

//CLASS #1

//--------------

//CLASS #1

//--------------

//CLASS #1

//--------------

//CLASS #1

//--------------

//CLASS #1

//--------------