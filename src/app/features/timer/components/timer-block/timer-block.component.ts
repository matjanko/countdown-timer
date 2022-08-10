import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-block',
  templateUrl: './timer-block.component.html',
  styleUrls: ['./timer-block.component.less'],
})
export class TimerBlockComponent implements OnInit {
  @Input() value!: number;
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
