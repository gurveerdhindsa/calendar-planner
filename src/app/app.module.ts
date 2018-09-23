import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { CalendarService } from './services/calendar.service';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarCreateComponent } from './components/calendar-create/calendar-create.component';

const ROUTES = [
    { path: '', redirectTo: 'calendar', pathMatch: 'full' },
    { path: 'calendar', component: CalendarComponent},
    { path: 'create-event', component: CalendarCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CalendarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
