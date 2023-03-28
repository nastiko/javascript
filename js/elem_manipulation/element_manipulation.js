//THEORY #1
function insertItem1() {
    let list = document.getElementById('manipulation1-list');
    let item = document.createElement('li');
    item.textContent = 'item';

    list.appendChild(item);
}

//insertItem1();

//--------------

//THEORY #2
function insertItem2() {
    function addItem() {
        let item = document.createElement('li');
        item.textContent = 'item';

        list.appendChild(item);
    }

    let list = document.getElementById('manipulation2-list');
    let btn = document.getElementById('manipulation2-btn');

    btn.addEventListener('click', addItem);
}

//insertItem2();

//--------------

//THEORY #3
function bindEventInsertion() {
    function eventItem() {
        let item = document.createElement('li');
        item.textContent = 'item';

        item.addEventListener('click', function () {
            item.textContent += '!';
        });

        list.appendChild(item);
    }

    let list = document.getElementById('manipulation3-list');
    let btn = document.getElementById('manipulation3-btn');

    btn.addEventListener('click', eventItem);
}

//bindEventInsertion();

//--------------

//THEORY #4
function runLoop() {
    let list = document.getElementById('manipulation4-list');
    for (let i = 0; i <= 10; i++) {
        let item = document.createElement('li');
        item.textContent = 'item';

        list.appendChild(item);
    }
}

//runLoop();

//--------------

//THEORY #5
function attachHandlersLoop() {
    let paragraph = document.getElementById('manipulation5-text');
    let block = document.getElementById('manipulation5-block');
    for(let i = 0; i <= 4; i++) {
        let input = document.createElement('input');
        input.value = '';

        input.addEventListener('blur', function() {
            paragraph.textContent += ` ${input.value}`;
        });

        block.appendChild(input);
    }
}

//attachHandlersLoop();

//--------------

//THEORY #6
function removeItem() {
    let items = document.querySelectorAll('#manipulation6-list li');
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            items[i].remove();
        });
    }
}

//removeItem();

//--------------

//THEORY #7
function removeLastElem() {
    function removeElem() {
        let items = document.querySelectorAll('#manipulation7-list li');
        for(let i = 0; i < items.length; i++) {
            let lastElem = items[items.length - 1];
            lastElem.remove();
        }
    }

    let btn = document.getElementById('manipulation7-btn');
    btn.addEventListener('click', removeElem);
}

//removeLastElem();

//--------------

//THEORY #8
function appendPrepend() {
    let list = document.getElementById('manipulation8-list');

    let firstElem = document.createElement('li');
    firstElem.textContent = 'start';

    let lastElem = document.createElement('li');
    lastElem.textContent = 'finish';

    list.prepend(firstElem);
    list.append(lastElem);
}

//appendPrepend();

//--------------

//THEORY #9
function insertBefore() {
    let list = document.getElementById('manipulation9-list');
    let item = document.getElementById('manipulation9-item');

    let extraItem = document.createElement('li');
    extraItem.textContent = 'added text, click on the element';

    extraItem.addEventListener('click', function() {
       extraItem.textContent += '!';
    });

    list.insertBefore(extraItem, item);
}

//insertBefore();

//--------------

//THEORY #10
function addElem1() {
    let block = document.getElementById('manipulation10-block');

    let paragraph = document.createElement('p');
    paragraph.textContent = '!!!';

    block.insertAdjacentElement('beforeBegin', paragraph); //insertion before reference task: beforeBegin
}

//addElem1();

//--------------

//THEORY #11
function addElem2() {
    let block = document.getElementById('manipulation11-block');

    let paragraph = document.createElement('p');
    paragraph.textContent = '!!!';

    block.insertAdjacentElement('afterEnd', paragraph); //insertion after reference task: afterEnd
}

//addElem2();

//--------------

//THEORY #12
function addElem3() {
    let block = document.getElementById('manipulation12-block');

    let paragraph = document.createElement('p');
    paragraph.textContent = '!!!';

    block.insertAdjacentElement('afterBegin', paragraph); //insertion begin inside the element and reference task: afterBegin
}

//addElem3();

//--------------

//THEORY #13
function addElem4() {
    let block = document.getElementById('manipulation13-block');

    let paragraph = document.createElement('p');
    paragraph.textContent = '!!!';

    block.insertAdjacentElement('beforeEnd', paragraph); //insertion before end inside the element and reference task: beforeEnd
}

//addElem4();

//--------------

//THEORY #14
function addTag() {
    let block = document.getElementById('manipulation14-block');
    block.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>')
}

//addTag();

//--------------

//THEORY #15
function cloneElem() {
    function cloneInput() {
        let clone = input.cloneNode(true);
        block.appendChild(clone);
    }

    let block = document.getElementById('manipulation15-block');
    let input = document.getElementById('manipulation15-input');
    let btn = document.getElementById('manipulation15-btn');

    btn.addEventListener('click', cloneInput);
}

//cloneElem();

//--------------

//THEORY #16
function matchElem() {
    let block = document.getElementById('manipulation16-block');
    console.log(block.matches('div.www'));
    console.log(block.matches('p'));
}

//matchElem();

//--------------

//THEORY #17
function containElem() {
    let parentBlock = document.getElementById('manipulation17-block_parent');
    let childBlock = document.getElementById('manipulation17-block_child');

    let contains = parentBlock.contains(childBlock);
    console.log(contains);
}

//containElem();

//--------------

