import {homeDirective} from './home.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const home = angular.module('home', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      url: '/home',
      template: '<home></home>'
    })
  })
  .directive('home', homeDirective);
