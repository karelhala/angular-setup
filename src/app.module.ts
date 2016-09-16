import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app.component';
import { routing } from './app.routing';
import {DashboardComponent} from './components/dashboard.component';
import {upgradeAdapter} from './upgrade_adapter';

@NgModule({
  imports:      [
    BrowserModule,
    routing,
  ],
  declarations: [ AppComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
