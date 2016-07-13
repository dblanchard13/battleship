import {cellDirective} from './cell.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const cell = angular.module('cell', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('cell', {
      url: '/cell',
      template: '<cell></cell>'
    })
  })
  .directive('cell', cellDirective);
