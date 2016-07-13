import _ from 'lodash';

import {Cell} from './Cell';
import {Ship} from './Ship';

class Grid {
  constructor() {
    this.shipsSunk = 0;
    this.grid = [];

    _.times(10, (y) => {
      let row = [];

      _.times(10, (x) => {
        row.push(new Cell(x, y, this.grid))
      });

      this.grid.push(row);
    });

    this.placeShips();

    return this.grid;
  }

  placeShips() {
    const ships = [[5, 'Aircraft Carrier'], [4, 'Battleship'], [3, 'Cruiser'], [2, 'Destroyer'], [1, 'Submarine']];

    _.each(ships, (specs) => {
      const [length, name] = specs;
      const ship = new Ship(length, name, this);
      this.placeShipRandomly(ship);
    });
  }

  placeShipRandomly(ship) {
    let possiblePlacements = [];

    _.each(this.grid, (row, y) => {
      _.each(row, (cell, x) => {
        if(cell.canPlaceShipHorizontally(ship.size)){
          possiblePlacements.push({x, y, dir: 'horizontal'});
        }
        if(cell.canPlaceShipVertically(ship.size)){
          possiblePlacements.push({x, y, dir: 'vertical'});
        }
      })
    });

    const randomNum = Math.floor(Math.random() * possiblePlacements.length);
    const placement = possiblePlacements[randomNum];
    const cell = this.grid[placement.y][placement.x];

    placement.dir === 'vertical' ? cell.placeShipVertically(ship) : cell.placeShipHorizontally(ship);
  }

  allShipsSunk() {
    return this.shipsSunk === 5;
  }
};

export {Grid};
