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

createElemArray2();

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

        items[i].addEventListener('click', function (event) {
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

        trs[i].addEventListener('click', function (event) {
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

        input.addEventListener('blur', function () {
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

        input.addEventListener('blur', function () {
            paragraph.textContent = input.value;
            paragraph.addEventListener('click', addInput);
        });
    }


    let paragraph = document.getElementById('basic18-text');
    paragraph.addEventListener('click', addInput);
}

//HiddenShowInput();

//--------------

//PRACTICE #19
function createInputs() {
    let lists = document.querySelectorAll('#basic19-list li');
    for (let i = 0; i < lists.length; i++) {
        let input = document.createElement('input');
        input.value = lists[i].textContent;
        lists[i].textContent = '';

        lists[i].appendChild(input);
    }
}

//createInputs();

//--------------

//PRACTICE #20
function editItems() {
    let tds = document.querySelectorAll('#basic20-table td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function editItem() {
            let input = document.createElement('input');
            input.value = tds[i].textContent;
            tds[i].textContent = '';
            tds[i].appendChild(input);

            tds[i].removeEventListener('click', editItem);

            input.addEventListener('blur', function getResult() {
                tds[i].textContent = input.value;
                tds[i].addEventListener('click', editItem);
            });
        });
    }
}

//editItems();

//--------------

//PRACTICE #21
function addRemoveLink() {
    let paragraphs = document.querySelectorAll('#basic21-block span');

    for (let i = 0; i < paragraphs.length; i++) {

        let span = document.createElement('span');
        span.textContent = paragraphs[i].textContent;
        paragraphs[i].textContent = '';
        paragraphs[i].appendChild(span);

        paragraphs[i].addEventListener('click', function addInput() {
            let input = document.createElement('input');
            input.value = paragraphs[i].textContent;
            paragraphs[i].textContent = '';
            paragraphs[i].appendChild(input);

            paragraphs[i].removeEventListener('click', addInput);

            input.addEventListener('blur', function () {
                paragraphs[i].textContent = input.value;
                paragraphs[i].addEventListener('click', addInput);
            });
        });

        let link = document.createElement('a');
        link.href = '';
        link.textContent = ' remove me...';
        paragraphs[i].insertAdjacentElement('afterEnd', link);

        link.addEventListener('click', function (event) {
            paragraphs[i].remove();
            link.remove();
            event.preventDefault();
        });
    }
}

//addRemoveLink();

//--------------

//PRACTICE #22
function manipulationSpan() {
    let paragraphs = document.querySelectorAll('#basic22-block p');
    for (let i = 0; i < paragraphs.length; i++) {
        let span = document.createElement('span');
        span.textContent = paragraphs[i].textContent;
        paragraphs[i].textContent = '';
        paragraphs[i].appendChild(span);
    }

    let spans = document.querySelectorAll('#basic22-block span');

    for (let j = 0; j < spans.length; j++) {
        spans[j].addEventListener('click', function addInput() {
            let input = document.createElement('input');
            input.value = spans[j].textContent;
            spans[j].textContent = '';
            spans[j].appendChild(input);

            spans[j].removeEventListener('click', addInput);

            input.addEventListener('blur', function () {
                spans[j].textContent = input.value;
                spans[j].addEventListener('click', addInput);
            });
        });

        let link = document.createElement('a');
        link.href = '';
        link.textContent = ' remove me...';
        spans[j].insertAdjacentElement('afterEnd', link);

        link.addEventListener('click', function (event) {
            spans[j].remove();
            link.remove();
            event.preventDefault();
        });
    }
}

//manipulationSpan();

//--------------

//PRACTICE #23
function styleElems() {
    let paragraphs = document.querySelectorAll('#basic23-block p');
    for (let i = 0; i < paragraphs.length; i++) {
        let span = document.createElement('span');
        span.textContent = paragraphs[i].textContent;
        paragraphs[i].textContent = '';
        paragraphs[i].appendChild(span);

        let link = document.createElement('a');
        link.href = '';
        link.textContent = ' decoration text';
        paragraphs[i].appendChild(link);

        link.addEventListener('click', function (event) {
            span.style.textDecoration = 'line-through';
            link.remove();
            event.preventDefault();
        });
    }
}

//styleElems();

//--------------

//PRACTICE #24
function styleColumns() {
    let lists = document.querySelectorAll('#basic24-table tr');
    for (let i = 0; i < lists.length; i++) {
        let td = document.createElement('td');
        lists[i].appendChild(td);

        let link = document.createElement('a');
        link.href = '';
        link.textContent = 'Change bg-color';
        td.appendChild(link);

        link.addEventListener('click', function setBgColorGreen(event) {
            let tr = this.closest('tr');
            tr.classList.toggle('bg-color');
            event.preventDefault();
        });
    }
}

//styleColumns();

//--------------

//PRACTICE #25
function showHiddenElem() {
    function showHidden() {
        paragraph.classList.toggle('hidden');
    }

    let paragraph = document.getElementById('basic25-text');
    let input = document.getElementById('basic25-toggle');

    input.addEventListener('click', showHidden);
}

//showHiddenElem();

//--------------

//PRACTICE #26
function toggleCorrespondingElem() {
    let paragraphs = document.querySelectorAll('#basic26-block p');
    let btns = document.querySelectorAll('#basic26-block button');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            paragraphs[i].classList.toggle('hidden');
        });
    }
}

//toggleCorrespondingElem();

//--------------

//PRACTICE #27
function addStyleItem() {
    let list = document.querySelectorAll('#basic27-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {
            list[i].classList.toggle('bg-color');
        });
    }
}

//addStyleItem();

//--------------

//PRACTICE #28
function styleCells() {
    let tds = document.querySelectorAll('#basic28-table td');
    let color = 'color1';

    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function () {
        });
    }
}

//styleCells();

//--------------

//PRACTICE #29
function getList() {
    let inputBtn = document.getElementById('basic29-input_btn');
    inputBtn.addEventListener('click', (event) => addItem(event.target));

    let arr = ['HTML', 'CSS', 'JavaScript'];

    for (let i = 0; i < arr.length; i++) {
        let list = document.createElement('ul');
        let item = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = arr[i];
        list.appendChild(item);
        item.appendChild(span);
        inputBtn.insertAdjacentElement('beforebegin', item);

        item.addEventListener('click', (event) => rewriteText(event.target));

        addLink(span, item);
    }

    function addLink(span, item) {
        let link = document.createElement('a');
        link.href = '';
        link.textContent = 'Decoration text';
        item.insertAdjacentElement('beforeend', link);

        link.addEventListener('click', function (event) {
            span.classList.toggle('text-decoration');
            event.preventDefault();
            event.stopPropagation();
        });
    }

    function rewriteText(item) {
        let input = document.createElement('input');
        input.value = item.textContent;
        item.textContent = '';
        item.appendChild(input);

        input.addEventListener('click', (event) => {
            event.stopPropagation()
        });
        input.addEventListener('blur', function () {
            item.textContent = input.value;
        });

        input.focus();
    }

    function addItem(span, item, link) {

        let newItem = document.createElement('li');
        let newSpan = document.createElement('span');
        let newLink = document.createElement('a');
        newSpan.textContent = 'Please, change context';
        newItem.appendChild(newSpan);
        newSpan.appendChild(newLink);
        inputBtn.insertAdjacentElement('beforebegin', newItem);

        //newItem.addEventListener('click', (event) => rewriteText(event.target));

        addLink(span, item, link);
    }

}

//getList();

//--------------

//PRACTICE #30
function arrayObject() {
    let block = document.getElementById('basic30-block');

    let employees = [
        {name: 'employee1', age: 30, salary: 400},
        {name: 'employee2', age: 31, salary: 500},
        {name: 'employee3', age: 32, salary: 600},
    ];

    function createTable() {
        let table = document.createElement('table');

        for (let i = 0; i < employees.length; i++) {

            //create table with using date
            let row = document.createElement('tr');

            let td1 = document.createElement('td');
            td1.textContent = employees[i].name;
            row.appendChild(td1);

            let td2 = document.createElement('td');
            td2.textContent = ` Age: ${employees[i].age}`;
            row.appendChild(td2);

            let td3 = document.createElement('td');
            td3.textContent = ` Salary: ${employees[i].salary}`;
            row.appendChild(td3);

            //create extra column
            let td4 = document.createElement('td');
            let link = document.createElement('a');
            link.href = '';
            link.textContent = 'Delete rows';
            td4.appendChild(link);
            row.appendChild(td4);

            link.addEventListener('click', function (event) {
                row.remove();
                event.preventDefault();
                //event.stopPropagation();
            });

            /*employees[i].name.addEventListener('click', rewriteItem);
            employees[i].age.addEventListener('click', rewriteItem);
            employees[i].salary.addEventListener('click', rewriteItem);*/

            /*function rewriteItem() {
                let input = document.createElement('input');
                input.value = employees[i].textContent;
                employees[i].textContent = '';
                employees[i].appendChild(input);

                employees[i].removeEventListener('click', rewriteItem);

                input.addEventListener('blur', function () {
                    employees[i].textContent = input.value;
                    employees[i].addEventListener('click', rewriteItem);
                });
            }*/


            table.appendChild(row);
        }

        block.appendChild(table);

        rewriteItem();
    }

    function rewriteItem(item) {

        // tds[i].addEventListener('click', rewriteItem);

        /*function rewriteItem() {
            let input = document.createElement('input');
            input.value = tds[i].textContent;
            tds[i].textContent = '';
            tds[i].appendChild(input);

            tds[i].removeEventListener('click', rewriteItem);

            input.addEventListener('blur', function () {
                tds[i].textContent = input.value;
                tds[i].addEventListener('click', rewriteItem);
            });
        }*/

    }

    createTable();

}


arrayObject();

//--------------

//PRACTICE #1

//--------------

