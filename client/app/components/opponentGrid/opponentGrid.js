import {opponentGridDirective} from './opponentGrid.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const opponentGrid = angular.module('opponentGrid', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('opponentGrid', {
      url: '/opponentGrid',
      template: '<opponent-grid></opponent-grid>'
    })
  })
  .directive('opponentGrid', opponentGridDirective);
