import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

//My components
import {DashboardComponent} from './components/dashboard.component';
import { AppComponent }   from './components/app.component';

//Material
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';

@NgModule({
  imports:      [
    BrowserModule,
    MdCheckboxModule.forRoot(),
    MdRadioModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdToolbarModule.forRoot()
  ],
  declarations: [ AppComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
