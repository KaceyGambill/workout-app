import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectDayComponent } from './select-day/select-day.component';
import { MainWorkoutComponent } from './select-day/main-workout/main-workout.component';
import { LiftComponent } from './select-day/main-workout/lift/lift.component';
import { SetComponent } from './select-day/main-workout/lift/set/set.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectDayComponent,
    MainWorkoutComponent,
    LiftComponent,
    SetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
