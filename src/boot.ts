///<reference path="tsd.d.ts"/>
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
require('./styles/basic.scss');
platform.bootstrapModule(AppModule);
