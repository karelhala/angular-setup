import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'my-app',
  template: 'sdfsdf'
})
export class AppComponent {
  constructor() {
    console.log(_.VERSION);
  }
}
