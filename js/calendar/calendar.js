class Calendar {

    initMonth = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    #days;
    #month;
    #year;
    #leftArrow;
    #rightArrow;
    #cells

    constructor(days, month, year, leftArrow, rightArrow, cells) {
        this.#days = days;
        this.#month = month;
        this.#year = year;
        this.#leftArrow = leftArrow;
        this.#rightArrow = rightArrow;
        this.#cells = cells;
    }

    getDays() {
        let days = '';

        for (let k = this.getFirstDayIndex(); k > 0; k--) {
            days += `<div class="prev-date">${this.getPrevDays() - k + 1}</div>`;
        }

        for (let i = 1; i <= this.getLastDay(); i++) {
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days += `<div class="today clicked">${i}</div>`;
            } else {
                days += `<div>${i}</div>`;
            }
        }

        for (let j = 1; j <= this.getNextDays(); j++) {
            days += `<div class="next-date">${j}</div>`;
            this.#days.innerHTML = days;
        }
    }

    getLastDay() {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    getPrevDays() {
        return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    }

    getNextDays() {
        return 7 - this.getLastDayIndex() - 1;
    }

    getFirstDayIndex() {
        return date.getDay();
    }

    getLastDayIndex() {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    }

    getDayMonth() {
        this.#month.innerHTML = `${(this.initMonth[date.getMonth()]).toUpperCase()}`;
    }

    getYear() {
        this.#year.innerHTML = `${date.getFullYear()}`;
    }

    getPrevMonth() {
        date.setMonth(date.getMonth() - 1);
        this.update();
    }

    getNextMonth() {
        date.setMonth(date.getMonth() + 1);
        this.update();
    }

    addClickAction() {
        this.#cells = document.querySelectorAll('#days div:not(.prev-date,.next-date)');
        for (let i = 0; i < this.#cells.length; i++) {
            this.#cells[i].addEventListener('click', function () {
                document.querySelectorAll('#days div.clicked').forEach((el) => {
                    el.classList.remove('clicked')
                });
                this.classList.add('clicked');
            });
        }
    }


    init(daysId, dayMonthId, yearId, leftArrow, rightArrow) {
        this.#days = document.getElementById(daysId);
        this.#month = document.getElementById(dayMonthId);
        this.#year = document.getElementById(yearId);
        this.#leftArrow = document.getElementById(leftArrow);
        this.#rightArrow = document.getElementById(rightArrow);

        this.#leftArrow.addEventListener('click', () => this.getPrevMonth());
        this.#rightArrow.addEventListener('click', () => this.getNextMonth());

        this.update();
    }

    update() {
        this.getDays();
        this.getLastDay();
        this.getDayMonth();
        this.getYear();
        this.addClickAction();
    }
}

let calendar = new Calendar();
let date = new Date();

// check last day in month: date.setMonth(1);

calendar.init('days', 'day-month', 'year', 'left-arrow', 'right-arrow');
calendar.addClickAction();
