import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, map, mergeMap, Observable, startWith, timer } from 'rxjs';
import { Timer } from './timer.model';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less'],
})
export class TimerComponent implements OnInit {
  timer$: Observable<Timer> | undefined;

  constructor(
    private route: ActivatedRoute,
    private timerService: TimerService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(map((params) => params['date']))
      .subscribe((date) => {
        const targetDate = new Date(date);
        this.timer$ = timer(0, 100).pipe(
          mergeMap(() => this.timerService.calculateRemainingTime(targetDate))
        );
      });
  }
}
