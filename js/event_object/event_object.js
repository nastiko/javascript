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

//THEORY #11
function eventBubbling() {
    let blockFirst = document.getElementById('event11-parent');
    let blockSecond = document.getElementById('event11-subparent');
    let blockThird = document.getElementById('event11-child');

    blockFirst.addEventListener('click', function() {
        console.log('Red');
    });

    blockSecond.addEventListener('click', function() {
        console.log('Yellow');
    });

    blockThird.addEventListener('click', function() {
        console.log('Green');
    });
}

//eventBubbling();

//--------------

//THEORY #12
function determineTags() {
    let block = document.getElementById('event12-block');
    block.addEventListener('click', function(event) {
        console.log(event.target);
    });
}

//determineTags();

//--------------

//THEORY #13
function modifyTask() {
    function addHtml(event) {
        if (event.target.matches('ul')) {
            list.innerHTML += '<li class="list-group-item list-group-item-success p-2">text</li>'
        }

        if(event.target.matches('li')) {
            let lists = document.querySelectorAll('#event13-list li');
            for(let i = 0; i < lists.length; i++) {
                lists[i].addEventListener('click', addMark);
            }
            function addMark() {
                this.innerHTML += '!';
                block.removeEventListener('click', addHtml);
            }
        }
    }

    let list = document.getElementById('event13-list');
    let block = document.getElementById('event13-block');
    block.addEventListener('click', addHtml);
}

//modifyTask();

//--------------

//THEORY #14
function stopEventBubbling() {
    let parent = document.querySelector('#event14-parent');
    let btn = document.querySelector('#event14-btn');
    let block  = document.querySelector('#event14-block');

    btn.addEventListener('click', function(event) {
        block.classList.add('show');
        event.stopImmediatePropagation();
    });

    parent.addEventListener('click', function(event) {
        block.classList.remove('show');
    });
}

//stopEventBubbling();

//--------------

//THEORY #15
function eventCapturing() {

    let blockFirst = document.getElementById('event15-parent');
    let blockSecond = document.getElementById('event15-subparent');
    let blockThird = document.getElementById('event15-child');

    blockFirst.addEventListener('click', function() {
        console.log('red - capturing');
    }, true);

    blockFirst.addEventListener('click', function() {
        console.log('red - bubbling');
    }, false);

    blockSecond.addEventListener('click', function() {
        console.log('yellow - capturing');
    }, true);

    blockSecond.addEventListener('click', function() {
        console.log('yellow - bubbling');
    }, false);

    blockThird.addEventListener('click', function() {
        console.log('green - capturing');
    }, true);

    blockThird.addEventListener('click', function() {
        console.log('green- bubbling');
    }, false);
}

//eventCapturing();

//--------------

//THEORY #16
function eventDelegation() {
    let list = document.getElementById('event16-list');
    let btn = document.getElementById('event16-btn');

    btn.addEventListener('click', function() {
        list.innerHTML += '<li>item</li>';
    });

    list.addEventListener('click', function(event) {
        event.target.innerHTML += '!';
    });

}

eventDelegation();

//--------------

//THEORY #17
function advanceDelegation() {
    let list = document.getElementById('event17-list');
    let btn = document.getElementById('event17-btn');

    btn.addEventListener('click', function() {
        list.innerHTML += '<li>item <i>italic</i> item</li>';
    });

    list.addEventListener('click', function(event) {
        let li = event.target.closest('li');
        if (li) {
            li.innerHTML = li.innerHTML + '!';
        }
    });
}

//advanceDelegation();

//--------------
