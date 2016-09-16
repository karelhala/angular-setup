import * as angular from 'angular';
import {upgradeAdapter} from './upgrade_adapter';
import {AppComponent} from './components/app.component';

angular.module('testModule', ['ngMaterial'])
  .directive('myApp', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));
upgradeAdapter.bootstrap(document.body, ['testModule'], {strictDi: true});
