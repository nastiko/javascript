//THEORY #1
function findMistakes1() {
    let input = document.querySelector('#context1-input');
    input.addEventListener('blur', func);

    function func() {
        let self = this;
        console.log(square(self.value));

        function square() {
            self.value = self.value ** 2;
            return self.value;
        }
    }
}

//findMistakes1();

//--------------

//THEORY #2
function findMistake2() {
    let input = document.querySelector('#context2-input');
    input.addEventListener('blur', func);

    function func() {
        square(this);

        function square(num) {
            num.value = num.value ** 2;
            return num.value;
        }
    }
}

//findMistake2();

//--------------

//THEORY #3
function findMistake3() {
    let input = document.querySelector('#context3-input');
    input.addEventListener('blur', func);

    function func() {
        console.log(this.value);

        let square = () => {
            this.value = this.value ** 2;
            return this.value;
        }

        square();
    }
}

//findMistake3();

//--------------

//THEORY #4
function displayResults() {
    let inputFirst = document.getElementById('context4-first');
    let inputSecond = document.getElementById('context4-second');
    let inputThird = document.getElementById('context4-third');

    function getResult() {
        console.log(this.value);
    }

    getResult.call(inputFirst);
    getResult.call(inputSecond);
    getResult.call(inputThird);
}

//displayResults();

//--------------

//THEORY #5
function getCallResult() {
    let input = document.querySelector('#context5-input');

    function func(name, surname) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    func.call(input, 'John', 'Smith');
}

//getCallResult();

//--------------

//THEORY #6
function getApplyResult() {
    let input = document.getElementById('context6-input');

    function func(name, surname) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    func.apply(input, ['John', 'Smith']);
}

//getApplyResult();

//--------------

//THEORY #7
function getBindResult() {
    let input = document.getElementById('context7-input');

    function func(name, surname) {
        console.log(this.value + ', ' + name + ' ' + surname);
    }

    func = func.bind(input);
    func('John', 'Smith');
    func('Eric', 'Luis');
}

//getBindResult();

//--------------
