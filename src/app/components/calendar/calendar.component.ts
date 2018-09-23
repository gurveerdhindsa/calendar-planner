import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';
import { MONTHS_OF_YEAR, DAYS_OF_WEEK, MAX_CALENDAR_SLOTS } from '../../constants/constants';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  events: any;
  dayEvents = new Array();
  selectedDate: number
  isEventFound: boolean

  firstDayOffset: number
  numOfDaysInMonth: number
  calendarDays = new Array();
  dates = new Array();

  constructor(private calendarService : CalendarService) { }

  ngOnInit() {
    this.generateCalendarDays();
    this.getCalendarEvents();
  }

  generateCalendarDays() {
    //Determine which weekday the first of the month begins on
    this.firstDayOffset = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

    //Fill the array up till that with 0
    for (let i = 0; i < this.firstDayOffset; i++) {
     this.calendarDays.push(0);
    }

    //Determine the number of days in the month
    this.numOfDaysInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();

    //Now begin adding the calendar days for current month until the last day
    for (let j = 1; j < this.numOfDaysInMonth; j++) {
        this.calendarDays.push(j);
    }

    //Reorganize array into an array of arrays.
    for (var i = 0; i < this.calendarDays.length; i++) {
        if (i % 7 == 0) this.dates.push([]);
        this.dates[this.dates.length-1].push(this.calendarDays[i]);
    }
  }

  getCurrentMonth() {
    return MONTHS_OF_YEAR[new Date().getMonth()];
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  getDaysOfWeek() {
    return DAYS_OF_WEEK;
  }

  dateSelected(date) {
    //Update the selected date
    this.selectedDate = date;
    this.calendarService.setSelectedDate(date);

    //Clear the array
    this.dayEvents = [];

    console.log(this.events);


    for (var i = 0; i < this.events.length; i++) {
        var obj = this.events[i];

        if (obj.day == this.selectedDate) {
            this.dayEvents.push(obj);
        }
    }
  }

  isEventForDate(date) {
    for (var i = 0; i < this.events.length; i++) {
        var obj = this.events[i];

        if (obj.day == date) {
            return true;
        }
    }
  }


  getCalendarEvents() {
    this.calendarService.getAllEvents()
        .then((res) => {
            this.events = res;
            this.dateSelected(new Date().getDate());
        }, (err) => {
        console.log(err);
    });
  }

}
