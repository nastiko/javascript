//PRACTICUM #1

function getEmoji() {
    let block = document.getElementById('practice1-block');

    function drawCat(howManyTimes, whatDraw) {
        for (let i = 0; i < howManyTimes; i++) {
            let paragraph = document.createElement('p');
            paragraph.textContent += whatDraw;

            block.appendChild(paragraph);
        }
    }

    drawCat(5, '=^.^='); //can use different values
}

//getEmoji();

//--------------

//PRACTICUM #2

function calculatorYearsSec() {
    const myAge = 30;
    let totalSeconds = 1;

    let time = {
        daysInYear: 365,
        hoursInDay: 24,
        minutesInHour: 60,
        secondsInMinute: 60,

        getSecondsInYear: function (years) {
            for (let key in time) {
                if (typeof (time[key]) === 'number') {
                    totalSeconds *= time[key];
                }
            }

            totalSeconds *= years;

            return totalSeconds;
        },

        setMyAge: function (years) {
            let span = document.getElementById('practice2-result');
            span.textContent = ` ${(this.getSecondsInYear(years)).toString()} sec`;
        },
    };

    time.setMyAge(myAge);
}

//calculatorYearsSec();

//--------------

//PRACTICUM #3

function getTriple1() {
    for (let i = 3; i < 10000; i = i * 3) {
        console.log(i);
    }
}

function getTriple2() {
    let startNumber = 1;
    while (startNumber < 10000) {
        startNumber *= 3;
        console.log(startNumber);
    }
}

//getTriple1();
//getTriple2();

//--------------

//PRACTICUM #4

class createGame {
    spanHiddenLetters;
    idHiddenLetters = 'hidden-letters';
    userWord = '';
    guessedLetters = [];

    setWord() {
        // ask for user input
        let userWord = prompt('Write any word, please...').toLowerCase();

        // divide string on symbols and hide letters
        this.spanHiddenLetters.textContent = '_ '.repeat(userWord.length);

        // save data inside object
        this.userWord = userWord;

        return userWord;
    }

    setLetters() {
        let letter = prompt('Write any letter, please...');
        let result = '';

        // check user input
        if (letter === null) {
            alert('Could you type any letter, please!');
        } else if (letter.length !== 1) {
            alert('Could you type only one letter, please!');
        }

        for (let i = 0; i < this.userWord.length; i++) {
            if (this.userWord[i] === letter) {
                result += letter;
                this.guessedLetters.push(letter);
            } else if (this.guessedLetters.includes(this.userWord[i])) {
                result += this.userWord[i];
            } else {
                result += '_ ';
            }

            // check if game ended
            if (result === this.userWord) {
                alert('Hurray!');
            }
        }
        this.spanHiddenLetters.textContent = result;
    }

    leaveGame() {
        alert('See you later!');
        this.spanHiddenLetters.textContent = '';
    }

    init(idSetWord, idSetLetters, idLeaveGame) {
        // save span for later use as global object variable
        this.spanHiddenLetters = document.getElementById(this.idHiddenLetters);

        // add event listeners for buttons
        document.getElementById(idSetWord).addEventListener('click', () => this.setWord());
        document.getElementById(idSetLetters).addEventListener('click', () => this.setLetters());
        document.getElementById(idLeaveGame).addEventListener('click', () => this.leaveGame());
    }
}

let game1 = new createGame();
game1.init('practice4-setWord_btn', 'practice4-setLetter_btn', 'practice4-leaveGame_btn');

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------