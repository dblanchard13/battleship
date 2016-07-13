import _ from 'lodash';

import {Grid} from './classes/Grid';
import {User} from './classes/User';

const gameplay = () => {
  let currentTurn = 1;
  let grids = {};
  let users = [];
  let nextId = 0;
  let winner = null;

  const reset = () => {
    winner = null;
    users = [];
    grids = {};
    currentTurn = 1;
    nextId = 0;
  };

  const getCurrentTurn = () => currentTurn;

  const incrementTurn = () => currentTurn ++;

  const getCurrentPlayer = () => currentTurn % 2 === 0 ? users[1] : users[0];

  const getWaitingPlayer = () => currentTurn % 2 === 0 ? users[0] : users[1];

  const crownWinner = () => winner = getCurrentPlayer();

  const getWinner = () => winner;

  const getUsers = () => users;

  const noUsers = () => users.length === 0;

  const getGrid = (showShips) => {
    const player = showShips ? getCurrentPlayer() : getWaitingPlayer();
    if(!grids[player.name]){
      grids[player.name] = new Grid();
    }
    return grids[player.name];
  };

  const createUser = (name) => {
    const user = new User(nextId++, name);
    users.push(user);
  };

  const destroyUser = (id) => {
    let idx = _.findIndex(users, {id});
    users.splice(idx, 1);
  };

  return {
    reset,
    getCurrentTurn,
    incrementTurn,
    getCurrentPlayer,
    getWaitingPlayer,
    crownWinner,
    getWinner,
    getUsers,
    noUsers,
    getGrid,
    createUser,
    destroyUser
  };

};

gameplay.$inject = [];

export {gameplay};
