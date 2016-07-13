import 'normalize.css';
import {appDirective} from './app.directive';

// import angular libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngFx from 'ng-fx';

// import components
import {home} from './components/home/home';
import {interim} from './components/interim/interim';
import {dashboard} from './components/dashboard/dashboard';
import {grid} from './components/grid/grid';
import {opponentGrid} from './components/opponentGrid/opponentGrid';
import {cell} from './components/cell/cell';
import {gameOver} from './components/gameOver/gameOver';
import {common} from './components/common/common';
import {shared} from './shared/shared';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngFx,
  home.name,
  interim.name,
  dashboard.name,
  grid.name,
  opponentGrid.name,
  cell.name,
  gameOver.name,
  common.name,
  shared.name,
])
.config(($urlRouterProvider) => { $urlRouterProvider.otherwise('/home'); })
.directive('app', appDirective);
