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

    getData(){
        return this.#arr;
    }
    setData(arr){
       this.#arr = arr;
    }

    constructor(arr) {
        // property our class assigns parameter value
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
        if(age > 0 && age <= 100) {
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

let users = [
    new StudentCollege('student1'),
    new StaffCollege('staff1'),
    new StudentCollege('student2'),
    new StaffCollege('staff2'),
    new StudentCollege('student3'),
    new StaffCollege('staff3'),
    new StudentCollege('student4'),
];

console.log(users instanceof StaffCollege); //why is false?

for(let i = 0; i < users.length; i++) {
    if(users instanceof StaffCollege) {
        console.log(users[i].name);
    } else {
        console.log('false');
    }
}

//--------------

//CLASS #1

//--------------

//CLASS #1

//--------------