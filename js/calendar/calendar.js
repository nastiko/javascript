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

    #date = new Date();
    #selectedDate = {};

    constructor(daysId, dayMonthId, yearId, leftArrow, rightArrow) {
        this.#days = document.getElementById(daysId);
        this.#month = document.getElementById(dayMonthId);
        this.#year = document.getElementById(yearId);
        this.#leftArrow = document.getElementById(leftArrow);
        this.#rightArrow = document.getElementById(rightArrow);
    }

    getDays() {
        let days = '';

        for (let k = this.getFirstDayIndex(); k > 0; k--) {
            days += `<div class="prev-date">${this.getPrevDays() - k + 1}</div>`;
        }

        for (let i = 1; i <= this.getLastDay(); i++) {
            let elClass = '';

            // check if current date is currently rendering element
            if (i === new Date().getDate() && this.#date.getMonth() === new Date().getMonth()) {
                elClass = "today";
            }

            // check if saved date is currently rendered element
            if(i === this.#selectedDate.day && this.#date.getMonth() === this.#selectedDate.month){
                elClass += " clicked";
            }

            days += `<div class="${elClass}" data-month="${this.#date.getMonth()}" data-day="${i}" data-year="${this.#date.getFullYear()}">${i}</div>`;
        }

        for (let j = 1; j <= this.getNextDays(); j++) {
            days += `<div class="next-date">${j}</div>`;
            this.#days.innerHTML = days;
        }
    }

    getLastDay() {
        return new Date(this.#date.getFullYear(), this.#date.getMonth() + 1, 0).getDate();
    }

    getPrevDays() {
        return new Date(this.#date.getFullYear(), this.#date.getMonth(), 0).getDate();
    }

    getNextDays() {
        return 7 - this.getLastDayIndex();
    }

    // get index of the first day of the month
    getFirstDayIndex() {
        return new Date(this.#date.getFullYear(), this.#date.getMonth(), 0).getDay();
    }

    getLastDayIndex() {
        return new Date(this.#date.getFullYear(), this.#date.getMonth() + 1, 0).getDay();
    }

    getDayMonth() {
        this.#month.innerHTML = `${(this.initMonth[this.#date.getMonth()]).toUpperCase()}`;
    }

    getYear() {
        this.#year.innerHTML = `${this.#date.getFullYear()}`;
    }

    getPrevMonth() {
        this.#date.setMonth(this.#date.getMonth() - 1);
        this.update();
    }

    getNextMonth() {
        this.#date.setMonth(this.#date.getMonth() + 1);
        this.update();
    }

    addClickAction() {
        let cells = document.querySelectorAll('#days div:not(.prev-date,.next-date)');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', (event) => this.clickHandler(event));
        }
    }

    clickHandler(event) {
        // visually mark element as clicked
        document.querySelectorAll('#days div.clicked').forEach((el) => {
            el.classList.remove('clicked');
        });
        event.target.classList.add('clicked');

        // save selected date
        this.#selectedDate.day = parseInt(event.target.dataset.day);
        this.#selectedDate.month = parseInt(event.target.dataset.month);
        this.#selectedDate.year = parseInt(event.target.dataset.year);
    }

    init() {
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

let calendar = new Calendar('days', 'day-month', 'year', 'left-arrow', 'right-arrow');
calendar.init();