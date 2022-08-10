import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TimerModule } from './features/timer/timer.module';

const routes: Routes = [];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), TimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
