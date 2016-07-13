import './home.styl'
import {HomeController as controller} from './home.controller';
import template from './home.html';

export const homeDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
