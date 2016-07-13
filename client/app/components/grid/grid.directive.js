import './grid.styl';
import {GridController as controller} from './grid.controller';
import template from './grid.html';

export const gridDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'EA'
  }
};
