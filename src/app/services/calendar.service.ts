import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class CalendarService {

    constructor(private http: Http) {
    }

    getAllEvents() {
        return new Promise((resolve, reject) => {
        this.http.get('/calendar')
            .pipe(map(res => res.json()))
            .subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

      showEvent(id) {
        return new Promise((resolve, reject) => {
            this.http.get('/calendar/' + id)
              .pipe(map(res => res.json()))
              .subscribe(res => {
                resolve(res)
            }, (err) => {
              reject(err);
            });
        });
      }

      saveEvent(event) {
        return new Promise((resolve, reject) => {
            this.http.post('/calendar', event)
              .pipe(map(res => res.json()))
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
        });
      }

       deleteEvent(id) {
         return new Promise((resolve, reject) => {
             this.http.delete('/calendar/'+id)
               .subscribe(res => {
                 resolve(res);
               }, (err) => {
                 reject(err);
               });
         });
       }


}
