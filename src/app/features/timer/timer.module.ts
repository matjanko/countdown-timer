import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { TimerBlockComponent } from './components/timer-block/timer-block.component';

@NgModule({
  declarations: [TimerComponent, TimerBlockComponent],
  imports: [CommonModule],
  exports: [TimerComponent],
})
export class TimerModule {}
