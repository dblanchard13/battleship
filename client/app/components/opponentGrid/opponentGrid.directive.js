import './opponentGrid.styl';
import {OpponentGridController as controller} from './opponentGrid.controller';
import template from './opponentGrid.html';

export const opponentGridDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
