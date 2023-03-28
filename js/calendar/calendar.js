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

    constructor(days, month, year, leftArrow, rightArrow) {
        this.#days = days;
        this.#month = month;
        this.#year = year;
        this.#leftArrow = leftArrow;
        this.#rightArrow = rightArrow;
    }

    getDays() {
        let days = '';

        for (let k = this.getFirstDayIndex(); k > 0; k--) {
            days += `<div class="prev-date">${this.getPrevDays() - k + 1}</div>`;
        }

        for (let i = 1; i <= this.getLastDay(); i++) {
            if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days += `<div class="today">${i}</div>`;
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
        return 7 - this.getLastDayIndex();
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

    init(daysId, dayMonthId, yearId, leftArrow, rightArrow) {
        this.#days = document.getElementById(daysId);
        this.#month = document.getElementById(dayMonthId);
        this.#year = document.getElementById(yearId);
        this.leftArrow = document.getElementById(leftArrow);
        this.rightArrow = document.getElementById(rightArrow);

        this.leftArrow.addEventListener('click', () => this.getPrevMonth());
        this.rightArrow.addEventListener('click', () => this.getNextMonth());

        this.update();
    }

    update() {
        this.getDays();
        this.getLastDay();
        this.getDayMonth();
        this.getYear();
    }
}

let calendar = new Calendar();
let date = new Date();

// check last day in month: date.setMonth(1);

calendar.init('days', 'day-month', 'year', 'left-arrow', 'right-arrow');
