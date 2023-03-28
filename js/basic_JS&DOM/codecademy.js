function findFahrenheit() {
    const kelvin = 0;
    const celsius = kelvin - 273;
    let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    let newton = Math.floor(celsius * (33 / 100));
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
    console.log(`The temperature is ${newton} degrees Newton`);
}

//findFahrenheit();

//--------------

function convertHumanToDogYears() {
    // My age.
    let myAge = 30;

//Variable will change.
    let earlyYears = 2;
    earlyYears = earlyYears * 10.5;

//Result equal to a variable called laterYears.
    let laterYears = myAge - 2;

//Calculate of dog years and assign in one step.
    laterYears *= 4;

//Add two variables' name together.
    let myAgeInDogYears = laterYears + earlyYears;

//The toLowerCase method returns a string with all lowercase letters.
    let myName = 'anastasia'.toUpperCase();

//Displays my name and age in dog years.
    console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);

    console.log(earlyYears);
    console.log(laterYears);
    console.log(myAgeInDogYears);
}

//convertHumanToDogYears();

//--------------

function fundNumberInEightBall() {
    let userName = 'Anastasia';
    let eightBallReply = '';

//shorthand syntax
    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// random number
    let randomNumber = Math.floor(Math.random() * 8);
    console.log(`Random number will be ${randomNumber}`);
    switch (randomNumber) {
        case 1:
            eightBallReply = 'It is certain';
            break;
        case 2:
            eightBallReply = 'It is decidedly so';
            break;
        case 3:
            eightBallReply = 'Reply hazy try again';
            break;
        case 4:
            eightBallReply = 'Cannot predict now';
            break;
        case 5:
            eightBallReply = 'Do not count on it';
            break;
        case 6:
            eightBallReply = 'My sources say no';
            break;
        case 7:
            eightBallReply = 'Outlook not so good';
            break;
        case 8:
            eightBallReply = 'Signs point to yes';
            break;
        default:
            eightBallReply = 'Try again';
            break;
    }
    console.log(`The Magic Eight Ball\'s answer is "${eightBallReply}".`);
}

//fundNumberInEightBall();

//--------------

function findRaceDay() {
    let raceNumber = Math.floor(Math.random() * 1000);
    raceNumber += 1000;
    console.log(`Race number is ${raceNumber}`);

    let runRegistration = false;
    runRegistration = runRegistration ? 'early' : 'late';

    let runnerAge = 16;

    if (runnerAge > 18 && runRegistration === 'early') {
        console.log('You will race at 9:30am');
    } else if (runnerAge > 18 && runRegistration === 'late') {
        console.log('You will race at 11:00am');
    } else if (runnerAge <= 18 && runRegistration === 'early') {
        console.log('You will race at 12:30am');
    } else if (runnerAge <= 18 && runRegistration === 'late') {
        console.log('You will race at 12:30am');
    } else {
        console.log('We let you know later.');
    }
}

//findRaceDay();

//--------------

function findRockPaperScissor() {
    let getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
            return userInput;
        } else {
            console.log('Error');
        }
    };

    let getComputerChoice = () => {
        if (Math.floor(Math.random() * 3) === 0) {
            return 'rock';
        } else if (Math.floor(Math.random() * 3) === 1) {
            return 'paper';
        } else if (Math.floor(Math.random() * 3) === 2) {
            return 'scissors';
        } else {
            return 'Error';
        }
    };

    let determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'The game is a tie!';
        }

        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'The computer won';
            } else {
                return 'You won';
            }
        }

        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'The computer won';
            } else {
                return 'You won';
            }
        }

        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won';
            } else {
                return 'You won';
            }
        }
    }

    function playGame() {
        let userChoice = getUserChoice('rock');
        let computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);

        console.log(determineWinner(userChoice, computerChoice));
    }

    playGame();

}

//findRockPaperScissor();

//--------------

function calculateSleepTime() {
    function getSleepHours(day) {
        if (day === 'monday') {
            return 8;
        } else if (day === 'tuesday') {
            return 7;
        } else if (day === 'wednesday') {
            return 6;
        } else if (day === 'thursday') {
            return 6;
        } else if (day === 'friday') {
            return 7;
        } else if (day === 'saturday') {
            return 10;
        } else if (day === 'sunday') {
            return 9;
        }

    }

    function getActualSleepHours() {
        let totalHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
        return totalHours;
    }

    function getIdealSleepHours() {
        let idealHours = 7.20;
        return idealHours * 7;
    }

    function calculateSleepDebt() {
        let actualSleepHours = getActualSleepHours();
        let idealSleepHours = getIdealSleepHours();

        if (actualSleepHours === idealSleepHours) {
            console.log('The perfect amount of sleep.');
        } else if (actualSleepHours > idealSleepHours) {
            console.log('You got more sleep than needed.');
        } else if (actualSleepHours < idealSleepHours) {
            console.log('You should get some rest, because you sleep ' + (actualSleepHours - idealSleepHours) + ' hour(s) less than you needed this week.');
        }
    }

    calculateSleepDebt();
}

//calculateSleepTime();

//--------------

function isBlocksDefineScope() {
    const city = 'New York City';

    function logCitySkyline() {
        let skyscraper = 'Empire State Building';
        return 'The stars over the ' + skyscraper + ' in ' + city;
    }

    console.log(logCitySkyline());
}

//isBlocksDefineScope();

//--------------

function findTrainingDay() {
    let getRandEvent = () => {
        let random = Math.floor(Math.random() * 3);
        if (random === 0) {
            return 'Marathon';
        } else if (random === 1) {
            return 'Triathlon';
        } else if (random === 2) {
            return 'Pentathlon';
        }
    };

// The scope of `days` is too tight
    let getTrainingDays = event => {
        let days;
        if (event === 'Marathon') {
            days = 50;
        } else if (event === 'Triathlon') {
            days = 100;
        } else if (event === 'Pentathlon') {
            days = 200;
        }

        return days;
    };

    let name = 'Nala';
// The scope of `name` is too tight
    let logEvent = (name, event) => {
        console.log(`${name}'s event is: ${event}`);
    };

    let logTime = (name, event) => {
        console.log(`${name}'s time to train is: ${event} days`);
    };

    let event = getRandEvent();
    let days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime


    logEvent(name, event);
    logTime(name, days);

    let event2 = getRandEvent();
    let days2 = getTrainingDays(event2);
    let name2 = 'Warren';

    logEvent(name2, event2);
    logTime(name2, days2);

}

//findTrainingDay();

//--------------

function fundSecretMessage() {
    let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

    secretMessage.pop();
    secretMessage.push('to', 'Program');
    secretMessage[7] = 'right';
    secretMessage.shift();
    secretMessage.unshift('Programming');
    secretMessage.splice(6, 5, 'know,');

    console.log(secretMessage.join(' '));
}

//fundSecretMessage();

//--------------

function findWhaleTalk() {
    let input = "Hello Words, I'm glad to learn new skills.";
    const vowels = ["a", "e", "i", "o", "u"];
    let resultArray = [];
    for (let outer = 0; outer < input.length; outer++) {
        if (input[outer] === 'e') {
            resultArray.push(input[outer]);
        } else if (input[outer] === 'u') {
            resultArray.push(input[outer]);
        }
        for (let inner = 0; inner < vowels.length; inner++) {
            if (input[outer] === vowels[inner]) {
                resultArray.push(input[outer]);
            }
        }
    }

    let resultString = resultArray.join('').toUpperCase();
    console.log(resultString);
}

//findWhaleTalk();

//--------------

function findMistakes() {
    let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

    let storyWords = story.split(' ');
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';

    let count = 0;
    storyWords.forEach((word) => {
        count++;
    });
    console.log(count);

    storyWords = storyWords.filter((word) => {
        return word !== unnecessaryWord;
    });

    storyWords = storyWords.map((word) => {
        return word === misspelledWord ? 'beautiful' : word;
    });

    let badWordIndex = storyWords.findIndex((word) => {
        return word === badWord;
    });
    console.log(badWordIndex);

    storyWords[78] = 'really';

    let lengthCheck = storyWords.every((word) => {
        return word.length < 10;
    });
    console.log(lengthCheck);

    storyWords.forEach((word) => {
        word.length > 10 && console.log(word);
    })

    console.log(storyWords.join(' '));
}

//findMistakes();

//--------------

function getMealMaker() {
    let menu = {
        _meal: '',
        _price: 0,
        set meal(mealToCheck) {
            if (typeof mealToCheck === 'string') {
                return this._meal = mealToCheck;
            }
        },
        set price(priceToCheck) {
            if (typeof priceToCheck === 'number') {
                return this._price = priceToCheck;
            }
        },
        get todaysSpecial() {
            if (this._meal && this._price) {
                return `Today’s Special is ${this._meal} for $${this._price}!`;
            } else {
                return 'Meal or price was not set correctly!';
            }
        }
    };

    menu._meal = 'Tomatoes Pasta';
    menu._price = 12.5;

    console.log(menu.todaysSpecial);
}

//getMealMaker();

//--------------

function isTeamStats() {
    let team = {
        _players: [
            {
                firstName: 'Anastasia',
                lastName: 'Hrynkevich',
                age: 30
            },
            {
                firstName: 'Stanislau',
                lastName: 'Hrynkevich',
                age: 32
            },
            {
                firstName: 'Jame',
                lastName: 'Hugh',
                age: 32
            }
        ],
        _games: [
            {
                opponent: 'Red',
                teamPoints: 12,
                opponentPoints: 42
            },
            {
                opponent: 'Green',
                teamPoints: 28,
                opponentPoints: 19
            },
            {
                opponent: 'Yellow',
                teamPoints: 34,
                opponentPoints: 57
            }
        ],
        get players() {
            return this._players;
        },
        get games() {
            return this._games;
        },
        addPlayer(newFirstName, newLastName, NewAge) {
            let player = {
                firstName: newFirstName,
                lastName: newLastName,
                age: NewAge
            };
            this.players.push(player);
        },
        addGame(newOpponent, newTeamPoints, newOpponentPoints) {
            let game = {
                opponent: newOpponent,
                teamPoints: newTeamPoints,
                opponentPoints: newOpponentPoints
            };
            this.games.push(game);
        }
    };

    team.addPlayer('Bugs', 'Bunny', 76);
    team.addGame('Titans', 100, 98);

    console.log(team.games);
}

//isTeamStats();

//--------------


