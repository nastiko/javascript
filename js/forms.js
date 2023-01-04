//THEORY #1
function getText() {
    let textarea = document.querySelector('#form1 textarea');
    textarea.addEventListener('blur', writeText);

    function writeText() {
        let paragraph = document.getElementById('form1-text');
        paragraph.textContent += textarea.value;
    }
}

//getText();

//--------------

//THEORY #2
function disableInput() {
    let btn = document.querySelector('#form2 button');
    btn.addEventListener('click', disable);

    function disable() {
        let input = document.getElementById('form2-input');
        input.disabled = true;
    }
}

//disableInput();

//--------------

//THEORY #3
function disableEnable() {
    function disable() {
        input.disabled = true;
    }

    function enable() {
        input.disabled = false;
    }

    let btnDisabled = document.getElementById('form3-disabled');
    let btnEnabled = document.getElementById('form3-enabled');
    let input = document.getElementById('form3-input');

    btnDisabled.addEventListener('click', disable);
    btnEnabled.addEventListener('click', enable);
}

//disableEnable();

//--------------

//THEORY #4
function outputValue() {
    function getValue() {
        let input = document.getElementById('form4-input');
        console.log(input.disabled);
    }

    let btn = document.querySelector('#form4 button');
    btn.addEventListener('click', getValue);
}

//outputValue();

//--------------

//THEORY #5

function checkedUnchecked() {
    function checked() {
        input.checked = true;
    }

    function unchecked() {
        input.checked = false;
    }

    let btnChecked = document.getElementById('form5-checked');
    let btnUnchecked = document.getElementById('form5-unchecked');
    let input = document.getElementById('form5-input');

    btnChecked.addEventListener('click', checked);
    btnUnchecked.addEventListener('click', unchecked);
}

//checkedUnchecked();

//--------------

//THEORY #6
function outputWord() {
    function getValue() {
        let paragraph = document.getElementById('form6-text');
        input.checked ? paragraph.textContent += ' Hello' : paragraph.textContent += ' Bye';
    }

    let btn = document.querySelector('#form6 button');
    let input = document.getElementById('form6-input');

    btn.addEventListener('click', getValue);
}

//outputWord();

//--------------

//THEORY #7
function changeState() {
    function state() {
        let input = document.getElementById('form7-input');
        input.checked = !input.checked;
    }

    let btn = document.querySelector('#form7 button');
    btn.addEventListener('click', state);
}

//changeState();

//--------------

//THEORY #8
function outputCheckedValue() {
    function getChecked() {
        let inputs = document.querySelectorAll('#form8 input');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
                paragraph.textContent += ` ${inputs[i].value}`;
            }
        }
    }

    let btn = document.querySelector('#form8 button');
    let paragraph = document.getElementById('form8-text');

    btn.addEventListener('click', getChecked);
}

//outputCheckedValue();

//--------------

//THEORY #9
function changeValue() {
    let input = document.getElementById('form9-input');
    input.addEventListener('change', function () {
        let paragraph = document.getElementById('form9-text');
        paragraph.textContent += ` ${input.value}`;
    });
}

//changeValue();

//--------------

//THEORY #10
function displayState() {
    let input = document.getElementById('form10-input');
    let paragraph = document.getElementById('form10-text');
    input.checked = !input.checked;
    input.addEventListener('change', function () {
        paragraph.textContent += ` ${input.checked}`;
    });
}

//displayState();

//--------------

//THEORY #11
function checkLength() {
    let input = document.getElementById('form11-input');
    input.addEventListener('change', function () {
        input.value.length <= 5 ? input.classList.add('input-style_green') : input.classList.add('input-style_red');
    });
}

//checkLength();

//--------------

//THEORY #12
function getMessage() {
    let paragraph = document.getElementById('form12-text');
    let input = document.getElementById('form12-input');
    input.addEventListener('input', function () {
        if (input.value.length > 5) {
            paragraph.textContent += ' You can only have 5 length';
        }
    });
}

//getMessage();

//--------------

//THEORY #13
function getNumberSymbols() {
    let paragraph = document.getElementById('form13-text');
    let input = document.getElementById('form13-input');

    function checkInput() {
        let valueLength = parseInt(input.value.length);
        let maxLength = parseInt(input.dataset.length);

        if (valueLength < maxLength) {
            paragraph.innerHTML += ` You can write ${maxLength - valueLength} symbols more<br/>`;
        } else if (valueLength === maxLength) {
            paragraph.innerHTML += ` You can't write symbols anymore<br/>`;
        } else if (valueLength > maxLength) {
            paragraph.innerHTML += ` You exceed the limit on ${valueLength - maxLength} symbols<br/>`;
        }
    }

    // adding listener to validate input
    input.addEventListener('input', checkInput);
}

getNumberSymbols();

//--------------

//THEORY #14
function focusBlur() {
    let inputFirst = document.getElementById('form14-input_first');
    let inputSecond = document.getElementById('form14-input_second');

    inputFirst.addEventListener('keyup', focusStatus);
    inputSecond.addEventListener('keyup', blurStatus);

    function focusStatus() {
        let firstValueLength = inputFirst.value.length;
        if (firstValueLength === 2) {
            inputSecond.focus();
        }
    }

    function blurStatus() {
        let secondValueLength = inputSecond.value.length;
        if (secondValueLength === 2) {
            inputSecond.blur();
        }
    }
}

focusBlur();

//--------------

//THEORY #15
function getOption() {

    let select = document.getElementById('form15-select');
    let paragraph = document.getElementById('form15-text');
    let btn = document.getElementById('form15-btn');

    btn.addEventListener('click', getResult);

    function getResult() {
        paragraph.textContent += ` ${select.value}`;
    }

}

getOption();

//--------------

//THEORY #16
function findLeapYear() {
    let select = document.getElementById('form16-select');
    let paragraph = document.getElementById('form16-text');

    select.addEventListener('change', findYear);

    function findYear() {
        let year = parseInt(select.value);
        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
            paragraph.innerHTML += ' a leap year <br/>';
        } else {
            paragraph.innerHTML += ' not a leap year <br/>';
        }
    }
}

//findLeapYear();

//--------------

//THEORY #17
function getDay() {
    function getResult() {
        let day = parseInt(select.value);
        if(day === 0 || day === 6) {
            paragraph.textContent += ' weekend';
        } else {
            paragraph.textContent += ' workday';
        }
    }

    let paragraph = document.getElementById('form17-text');
    let select = document.getElementById('form17-select');

    select.addEventListener('change', getResult);
}

//getDay();

//--------------

//THEORY #18
function getCurrentMonth() {
    let select = document.getElementById('form18-select');
    let date = new Date();
    select.value = date.getMonth();
}

//getCurrentMonth();

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

//THEORY #15

//--------------

