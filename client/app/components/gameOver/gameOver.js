import {gameOverDirective} from './gameOver.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const gameOver = angular.module('gameOver', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('gameOver', {
      url: '/gameOver',
      template: '<game-over></game-over>'
    })
  })
  .directive('gameOver', gameOverDirective);
