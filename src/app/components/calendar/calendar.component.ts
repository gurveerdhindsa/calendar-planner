import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  events: any;
  currentMonth: string;

  constructor(private calendarService : CalendarService) { }

  ngOnInit() {
    this.getCalendarEvents();
    this.getCurrentMonth();
  }

  getCurrentMonth() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.currentMonth = monthNames[new Date().getMonth()];
  }

  isEventFound() {
    return false;
  }


  getCalendarEvents() {
    this.calendarService.getAllEvents()
        .then((res) => {
            this.events = res;
        }, (err) => {
        console.log(err);
    });
  }

}
