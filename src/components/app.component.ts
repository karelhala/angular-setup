import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent {
  constructor() {
    console.log(_.VERSION);
  }
}
