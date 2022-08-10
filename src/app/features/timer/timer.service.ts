import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Timer } from './timer.model';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor() {}

  calculateRemainingTime(targetDate: Date): Observable<Timer> {
    const difference = targetDate.getTime() - new Date().getTime();
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return of({ days, hours, minutes, seconds } as Timer);
  }
}
