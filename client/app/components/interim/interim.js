import {interimDirective} from './interim.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const interim = angular.module('interim', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('interim', {
      url: '/interim',
      template: '<interim></interim>'
    })
  })
  .directive('interim', interimDirective);
