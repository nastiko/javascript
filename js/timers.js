//THEORY #1
function setIntervalConsole() {
    setInterval(function () {
        console.log('Hello, we\'re closed!');
    }, 3000);
}

//setIntervalConsole();

//--------------

//THEORY #2
function decreaseValue1() {
    let num = 100;
    setInterval(() => console.log(--num), 1000);
}

function decreaseValue2() {
    let num = 100;
    setInterval(function () {
        num--;
        console.log(num);
    }, 1000);
}

//decreaseValue1();
//decreaseValue2();

//--------------

//THEORY #3
function stopTimer() {
    let startNum = 10;
    let timerId = setInterval(function () {
        console.log(--startNum);

        if (startNum === 0) {
            clearInterval(timerId);
        }

    }, 1000);
}

//stopTimer();

//--------------

//THEORY #4
function getResult() {
    function decreaseNum() {
        let start = 100;
        setInterval(function () {
            console.log(--start);
        }, 1000);

        this.removeEventListener('click', decreaseNum);
    }

    let btn = document.getElementById('timer4-btn');
    btn.addEventListener('click', decreaseNum);
}

//getResult();

//--------------

//THEORY #5
function useButtons() {
    function decreaseNumber() {
        timerId = setInterval(function () {
            console.log(--startNumber);

            if (startNumber === 0) {
                clearInterval(timerId);
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerId);
    }

    let timerId; //make variable is global for using in different buttons
    let startNumber = 25;
    let btnStart = document.getElementById('timer5-btn_start');
    let btnStop = document.getElementById('timer5-btn_stop');

    btnStart.addEventListener('click', decreaseNumber);
    btnStop.addEventListener('click', stopTimer);
}

//useButtons();

//--------------

//THEORY #6
function findMistakes1() {
    let start = document.querySelector('#timer6-start');
    let stop = document.querySelector('#timer6-stop');
    let timerId;

    start.addEventListener('click', function () {
        timerId = setInterval(function () {
            let date = new Date;
            console.log(date.getMinutes() + ' ' + date.getSeconds());
        }, 1000);
    });

    stop.addEventListener('click', function () {
        clearInterval(timerId);
    });
}

//findMistakes1();

//--------------

//THEORY #7
function findMistakes2() {
    let timer;
    let start = document.querySelector('#timer7-start');
    let stop = document.querySelector('#timer7-stop');

    start.addEventListener('click', getTime);

    function getTime() {
        timer = setInterval(function () {
            let date = new Date;
            console.log(date.getMinutes() + ' ' + date.getSeconds());
        }, 1000);

        start.removeEventListener('click', getTime);
    }

    stop.addEventListener('click', function () {
        clearInterval(timer);

        start.addEventListener('click', getTime);
    });
}

//findMistakes2();

//--------------

//THEORY #8
function setTimer() {
    let input = document.getElementById('timer8-input');
    let timerInput = setInterval(function () {
        let num = parseInt(input.value);
        input.value = num - 1;

        if (Number(input.value) === 0) {
            clearInterval(timerInput);
        }

    }, 1000);
}

//setTimer();

//--------------

//THEORY #9
function findMistakes3() {
    let input = document.querySelector('#timer9-input');

    input.addEventListener('click', function () {
        let self = this;
        setInterval(function () {
            self.value = Number(input.value) + 1;
        }, 1000);
    });
}

function findMistakes4() {
    let input = document.querySelector('#timer9-input');
    input.addEventListener('click', function () {
        setInterval(() => this.value = Number(input.value) + 1, 1000)
    });
}


//findMistakes3();
//findMistakes4();

//--------------

//THEORY #10
function findMistakes5() {
    let input = document.querySelector('#timer10-input');

    input.addEventListener('click', function () {
        setInterval(function (self) {
            self.value--;
        }, 1000, this);
    });
}

//findMistakes5();

//--------------

//THEORY #11
function practice1() {
    function getTimer() {
        setInterval(function () {
            let num = parseInt(paragraph.textContent);
            paragraph.textContent = (num + 1).toString();
        }, 1000);
    }

    let paragraph = document.getElementById('timer11-text');
    let btn = document.getElementById('timer11-btn');

    btn.addEventListener('click', getTimer);
}

//practice1();

//--------------

//THEORY #12
function practice2() {
    function decreaseStopTimer() {
        timer = setInterval(function () {
            let num = parseInt(paragraph.textContent);
            paragraph.textContent = (num - 1).toString();

            if (Number(paragraph.textContent) === 0) {
                clearInterval(timer);
            }

        }, 1000);
    }

    let timer;
    let paragraph = document.getElementById('timer12-text');
    let btn = document.getElementById('timer12-btn');

    btn.addEventListener('click', decreaseStopTimer);
}

//practice2();

//--------------

//THEORY #13
function practice3() {
    let input = document.getElementById('timer13-input');
    setInterval(function () {
        let num = parseInt(input.value);
        input.value = (num ** 2);
    }, 1000);
}

//practice3();

//--------------

//THEORY #14
function practice4() {
    function countDown() {
        paragraph.textContent = input.value;

        timer = setInterval(function () {
            let num = Number(paragraph.textContent);
            paragraph.textContent = (num - 1).toString();

            if (Number(paragraph.textContent) === 0) {
                clearInterval(timer);
            }

        }, 1000);
    }

    let timer;
    let paragraph = document.getElementById('timer14-text');
    let input = document.getElementById('timer14-input');
    input.addEventListener('blur', countDown);
}

//practice4();

//--------------

//THEORY #15
function practice5() {
    function setCountdown() {
        paragraph.textContent = input.value;

        timer = setInterval(function () {
            let userNums = parseInt(paragraph.textContent);
            paragraph.textContent = (userNums - 1).toString();

            if (Number(paragraph.textContent) === 0) {
                clearInterval(timer);
            }

        }, 1000);

        btn.removeEventListener('click', setCountdown);
    }

    let timer;
    let input = document.getElementById('timer15-input');
    let paragraph = document.getElementById('timer15-text');
    let btn = document.getElementById('timer15-btn');

    btn.addEventListener('click', setCountdown);
}

//practice5();

//--------------

//THEORY #16
function practice6() {
    function startCount() {
        timer = setInterval(function () {
            paragraph.textContent = (++num).toString();
        }, 750);
    }

    function stopCount() {
        clearInterval(timer);
    }

    let timer;
    let num = 0;
    let paragraph = document.getElementById('timer16-text');

    let startBtn = document.getElementById('timer16-start_btn');
    startBtn.addEventListener('click', startCount);

    let stopBtn = document.getElementById('timer16-stop_btn');
    stopBtn.addEventListener('click', stopCount);
}

//practice6();

//--------------

//THEORY #17
function practice7() {
    let paragraph = document.getElementById('timer17-text');
    setInterval(function () {
        if(paragraph.style.color === 'red') {
            paragraph.style.color = 'green';
        } else {
            paragraph.style.color = 'red';
        }
    }, 1000);
}

//practice7();

//--------------

//THEORY #18
function practice8() {
    let paragraph = document.getElementById('timer18-text');
    setInterval(function() {
        let date = new Date();
        paragraph.textContent = (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }, 1000);
}

//practice8();

//--------------