import {dashboardDirective} from './dashboard.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const dashboard = angular.module('dashboard', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>'
    })
  })
  .directive('dashboard', dashboardDirective);
