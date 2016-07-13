import './gameOver.styl';
import {GameOverController as controller} from './gameOver.controller';
import template from './gameOver.html';

export const gameOverDirective = () => {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
