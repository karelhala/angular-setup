import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//My components
import {DashboardComponent} from './components/dashboard.component';
import { AppComponent }   from './components/app.component';
import {MaterialModule} from '@angular/material';

@NgModule({
  imports:      [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  declarations: [ AppComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
