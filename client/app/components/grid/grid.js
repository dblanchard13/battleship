import {gridDirective} from './grid.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const grid = angular.module('grid', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('grid', {
      url: '/grid',
      template: '<grid></grid>'
    })
  })
  .directive('grid', gridDirective);
