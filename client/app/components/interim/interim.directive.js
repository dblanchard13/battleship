import './interim.styl';
import {InterimController as controller} from './interim.controller';
import template from './interim.html';

export const interimDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
