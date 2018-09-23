import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';
import { MONTHS_OF_YEAR } from '../../constants/constants';

@Component({
  selector: 'app-calendar-create',
  templateUrl: './calendar-create.component.html',
  styleUrls: ['./calendar-create.component.less']
})
export class CalendarCreateComponent implements OnInit {

  event = {};
  date: number;

  constructor(private calendarService: CalendarService, private router: Router) {
  }

  ngOnInit() {
    this.date = this.calendarService.selectedDate;
    if (!this.date) {
        this.router.navigate(['calendar']);
    }
  }

  saveEvent() {
    this.event['day'] = this.calendarService.selectedDate;
    this.calendarService.saveEvent(this.event);
    this.router.navigate(['calendar']);
  }

  getCurrentMonth() {
    return MONTHS_OF_YEAR[new Date().getMonth()];
  }
}
