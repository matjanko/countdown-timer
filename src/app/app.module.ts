import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TimerComponent } from './features/timer/timer.component';
import { TimerModule } from './features/timer/timer.module';

const routes: Routes = [
  {
    path: '',
    component: TimerComponent,
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    TimerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
