import './dashboard.styl';
import {DashboardController as controller} from './dashboard.controller';
import template from './dashboard.html';

export const dashboardDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
