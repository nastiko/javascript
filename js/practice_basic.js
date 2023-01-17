//PRACTICE #1
function createElemArray1() {
    let block = document.getElementById('basic1-block');
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        let paragraphs = document.createElement('p');
        paragraphs.textContent = ` Number: ${arr[i]}`;

        paragraphs.addEventListener('click', function () {
            paragraphs.textContent = ` Number: ${++arr[i]}`;
        });

        block.appendChild(paragraphs);
    }
}

//createElemArray1();

//--------------

//PRACTICE #2
function createElemArray2() {
    let list = document.getElementById('basic2-list');
    let arr = ['Orchid', 'Rose', 'Cyclamen', 'Calamondin Orange Plan'];

    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement('li');
        item.textContent = arr[i];

        item.addEventListener('click', function addText() {
            item.textContent += '!';
            item.removeEventListener('click', addText);
        });

        list.appendChild(item);
    }

}

//createElemArray2();

//--------------

//PRACTICE #3
function getTable() {
    let table = document.getElementById('basic3-table');

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');

        for (let j = 1; j <= 5; j++) {
            let td = document.createElement('td');
            td.textContent += 'x';

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

//getTable();

//--------------

//PRACTICE #4
function getGeneratorTable() {
    function createTable() {
        let columnHeight = parseInt(inputColumn.value);
        let rowWidth = parseInt(inputRow.value);

        let table = document.createElement('table');
        block.appendChild(table);

        for (let i = 0; i <= columnHeight; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 0; j <= rowWidth; j++) {
                let td = document.createElement('td');
                td.textContent = 'x';

                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
    }

    let block = document.getElementById('basic4-block');
    let inputColumn = document.getElementById('basic4-column');
    let inputRow = document.getElementById('basic4-row');
    let btn = document.getElementById('basic4-btn');

    btn.addEventListener('click', createTable);
}

//getGeneratorTable();

//--------------

//PRACTICE #5
function sequentialPopulating() {
    let table = document.getElementById('basic5-table');
    let num = 1;

    for (let i = 0; i <= 4; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j <= 4; j++) {
            let td = document.createElement('td');
            td.textContent = num.toString();
            tr.appendChild(td);

            num++;
        }

        table.appendChild(tr);
    }
}

//sequentialPopulating();

//--------------

//PRACTICE #6
function modifyTask() {
    let table = document.getElementById('basic6-table');
    let min = 2;

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < 5; j++) {
            // generate element
            let td = document.createElement('td');
            td.textContent = min.toString();
            tr.appendChild(td);

            // increment
            min += 2;
        }

        table.appendChild(tr);
    }
}

//modifyTask();

//--------------

//PRACTICE #7
function useDimensionalArray() {
    let table = document.getElementById('basic7-table');
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < arr[i].length; j++) {
            let td = document.createElement('td');
            td.textContent = arr[i][j].toString();
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

//useDimensionalArray();

//--------------

//PRACTICE #8
function createTableObject() {
    let table = document.getElementById('basic8-table');
    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];

    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = employees[i].name;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = employees[i].age;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = employees[i].salary;
        tr.appendChild(td3);

        table.appendChild(tr);

        td2.addEventListener('click', function () {
            let age = parseInt(td2.textContent);
            td2.textContent = (++age).toString();
        });

        td3.addEventListener('click', function () {
            let increaseSalary = parseInt(td3.textContent);
            td3.textContent = (increaseSalary + ((increaseSalary * 10) / 100)).toString();
        });
    }
}

//createTableObject();

//--------------

//PRACTICE #9
function addColumns() {
    function addColumn() {
        let tr = document.createElement('tr');

        for (let i = 0; i <= 5; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let table = document.getElementById('basic9-table');
    let btn = document.getElementById('basic9-btn');

    btn.addEventListener('click', addColumn);
}

//addColumns();

//--------------

//PRACTICE #10
function addRows() {
    function addRow() {
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            trs[i].appendChild(td);
        }
    }

    let trs = document.querySelectorAll('#basic10-table tr');
    let btn = document.getElementById('basic10-btn');

    btn.addEventListener('click', addRow);
}

//addRows();

//--------------

//PRACTICE #11
function increaseNum() {
    function increaseOnTwo() {
        for (let i = 0; i < tds.length; i++) {
            let tdNum = parseInt(tds[i].textContent);
            tds[i].textContent = (tdNum + 2).toString();
        }
    }

    let tds = document.querySelectorAll('#basic11-table td');
    let btn = document.getElementById('basic11-btn');

    btn.addEventListener('click', increaseOnTwo);
}

//increaseNum();

//--------------

//PRACTICE #12
function removeElem() {
    function addElem() {
        let item = document.createElement('li');
        item.textContent = 'text';
        list.appendChild(item);

        let items = document.querySelectorAll('li');
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function () {
                this.remove();
            });
        }
    }

    let list = document.getElementById('basic12-list');
    let btn = document.getElementById('basic12-btn');
    btn.addEventListener('click', addElem);
}

//removeElem();

//--------------

//PRACTICE #13
function removeLink() {
    let paragraph = document.getElementById('basic13-text');
    let link = document.getElementById('basic13-link');

    link.addEventListener('click', function (event) {
        paragraph.remove();
        event.preventDefault();
    });
}

//removeLink();

//--------------

//PRACTICE #14
function removeItem() {
    let items = document.querySelectorAll('#basic14 li');

    for (let i = 0; i < items.length; i++) {
        let link = document.createElement('a');
        link.href = '';
        link.textContent = ' Remove me';
        items[i].appendChild(link);

        items[i].addEventListener('click', function(event) {
            items[i].remove();
            event.preventDefault();
        });
    }
}

//removeItem();

//--------------

//PRACTICE #15
function removeRow() {
    let trs = document.querySelectorAll('#basic15-table tr');
    for (let i = 0; i < trs.length; i++) {
        let td = document.createElement('td');
        trs[i].appendChild(td);

        let link = document.createElement('a');
        link.href = '';
        link.textContent = 'Remove row..';
        td.appendChild(link);

        trs[i].addEventListener('click', function(event) {
            trs[i].remove();
            event.preventDefault();
        });
    }
}

//removeRow();

//--------------

//PRACTICE #16
function changeText() {
    function getText() {
        paragraph.textContent = input.value;
    }

    let paragraph = document.getElementById('basic16-text');
    let input = document.getElementById('basic16-input');
    input.value = paragraph.textContent;

    input.addEventListener('keypress', getText);
}

//changeText();

//--------------

//PRACTICE #17
function getInput() {
    function createInput() {
        let input = document.createElement('input');
        input.value = paragraph.textContent;
        paragraph.parentElement.appendChild(input);

        input.addEventListener('blur', function() {
            paragraph.textContent = input.value;
            input.remove();
        });
    }

    let paragraph = document.getElementById('basic17-text');
    paragraph.addEventListener('click', createInput);
}

//getInput();

//--------------

//PRACTICE #18
function HiddenShowInput() {
    function addInput() {
        let input = document.createElement('input');
        input.value = paragraph.textContent;
        paragraph.textContent = '';
        paragraph.appendChild(input);

        paragraph.removeEventListener('click', addInput);

        input.addEventListener('blur', function() {
            paragraph.textContent = input.value;
            paragraph.addEventListener('click', addInput);
        });
    }


    let paragraph = document.getElementById('basic18-text');
    paragraph.addEventListener('click', addInput);
}

HiddenShowInput();

//--------------

//PRACTICE #1

//--------------

//PRACTICE #1

//--------------

//PRACTICE #1

//--------------

//PRACTICE #1

//--------------

//PRACTICE #1

//--------------

//PRACTICE #1

//--------------

