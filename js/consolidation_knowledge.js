//PRACTICUM #1

function getEmoji() {
    let block = document.getElementById('practice1-block');

    function drawCat(howManyTimes, whatDraw) {
        for(let i = 0; i < howManyTimes; i++) {
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

        secondsInYear: function() {
            for(let key in time) {
                if(typeof (time[key]) === 'number') {
                    totalSeconds *= time[key];
                }
            }

            return totalSeconds;
        },

        howOld: function(result) {
            let span = document.getElementById('practice2-result');
            span.textContent = ` ${(result * myAge).toString()} sec`;
        },
    };

    totalSeconds = time.secondsInYear();
    time.howOld(totalSeconds);
}

calculatorYearsSec();

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------

//PRACTICUM #1

//--------------