import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//My components
import {DashboardComponent} from './components/dashboard.component';
import { AppComponent }   from './components/app.component';
import {MaterialModule} from '@angular/material';
import {SideNav} from './components/sidenav.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports:      [
    BrowserModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot()
  ],
  declarations: [ AppComponent, DashboardComponent, SideNav],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
