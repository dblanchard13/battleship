import angular from 'angular';

import {gameplay} from './gameplay.js';

export const shared = angular.module('shared', [])
  .factory('Gameplay', gameplay);
