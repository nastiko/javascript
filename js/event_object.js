//THEORY #1
function getEvent() {
    let btn = document.getElementById('event1-btn');
    btn.addEventListener('click', function () {
        console.log(event);
    });
}

//getEvent();

//--------------

//THEORY #2
function displayCoordinates() {
    let block = document.getElementById('event2-block');
    block.addEventListener('mousemove', function () {
        block.innerHTML = event.pageX + ' : ' + event.pageY;
    });
}

//displayCoordinates();

//--------------

//THEORY #3
function addStyles() {
    let btn = document.querySelector('#event3-btn');

    btn.addEventListener('click', func);
    btn.addEventListener('dblclick', func);

    function func() {
        event.type === 'click' ? btn.classList.add('right') : btn.classList.add('wrong');
    }
}

//addStyles();

//--------------

//THEORY #4
function clickHandler() {
    let list = document.getElementById('event4-list');
    list.addEventListener('click', getTarget);

    function getTarget(event) {
        let elemTarget = event.target.tagName.toLowerCase();
        if (elemTarget === 'ul') {
            list.innerHTML += '<li>text</li>';
        }

        if (elemTarget === 'li') {
            let items = document.querySelectorAll('#event4-list li');
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', addText);
            }

            function addText() {
                this.innerHTML += '!';
                list.removeEventListener('click', getTarget);
            }
        }
    }
}

//clickHandler();

//--------------

//THEORY #5
function displayKeyCode() {
    let input = document.getElementById('event5-input');
    input.addEventListener('keypress', function(event) {
        console.log(event.key);
        //console.log(event.code);
    });
}

//displayKeyCode();

//--------------

//THEORY #6
function clearInput() {
    function copyText(event) {
        if(event.key === 'Enter') {
            paragraph.textContent += ` ${input.value}`;
            input.value = '';
        }
    }

    let paragraph = document.getElementById('event6-text');
    let input = document.getElementById('event6-input');

    input.addEventListener('keypress', copyText);
}

//clearInput();

//--------------

//THEORY #7
function changeColor() {
    function clickAlt(event) {
        if(event.altKey) {
            btn.classList.add('wrong');
        }
    }

    let btn = document.getElementById('event7-btn');
    btn.addEventListener('click', clickAlt);
}

//changeColor();

//--------------

//THEORY #8
function getResult() {
    let lists = document.querySelectorAll('#event8-list li');
    for(let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', function(event) {
            if(event.ctrlKey) {
                lists[i].textContent += '1';
            }
            if(event.shiftKey) {
                lists[i].textContent += '2';
            }
        });
    }
}

//getResult();

//--------------

//THEORY #9
function noTransitionLink() {
    function getHref(event) {
        event.preventDefault();
        link.textContent += ` :${link.href}`;
    }

    let link = document.getElementById('event9-link');
    link.addEventListener('click', getHref);
}

//noTransitionLink();

//--------------

//THEORY #10
function calculateSum() {
    function getSum() {
        let firstNum = parseInt(inputFirst.value);
        let secondNum = parseInt(inputSecond.value);
        paragraph.textContent += ` ${firstNum + secondNum}`;
    }

    let inputFirst = document.getElementById('event10_first');
    let inputSecond = document.getElementById('event10_second');
    let paragraph = document.getElementById('event10-text');
    let link = document.getElementById('event10-link');

    link.addEventListener('click', getSum);
}

calculateSum();

//--------------

//THEORY #1

//--------------

//THEORY #1

//--------------

//THEORY #1

//--------------

//THEORY #1

//--------------