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

    renderTable(){
        // render table header row
        this.table.appendChild(this.renderTitle(this.employees[0]));

        // walk through all employees, render each one and add to the table
        for (let employee of this.employees){
            // add employee to the table
            this.table.appendChild(this.renderRow(employee));
        }

        // return result - the whole table with title and employees rows
        return this.table;
    }

    showTable(){
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

//CLASS #1

//--------------

//CLASS #1

//--------------

//CLASS #1

//--------------