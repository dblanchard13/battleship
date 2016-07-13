import './cell.styl';
import {CellController as controller} from './cell.controller';
import template from './cell.html';

export const cellDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
