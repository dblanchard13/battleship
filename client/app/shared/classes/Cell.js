class Cell {
  constructor(...specs){
    [this.x, this.y, this.grid] = specs;
    this.hit = false;
    this.ship = null;
    this.displayValue = this.opponentDisplayValue = 'O';
  }

  takeHit() {
    this.hit = true;
    this.displayValue = this.opponentDisplayValue = 'M';
    if(this.ship){
      this.displayValue = this.opponentDisplayValue = 'X';
      this.ship.takeHit();
      return this.ship;
    }
  }

  canPlaceShipHorizontally(size) {
    let flag = true;
    _.times(size, (i) => {
      const x = this.x + i;
      if(x > 9 || this.grid[this.y][x].ship){
        flag = false;
      }
    });
    return flag;
  }

  canPlaceShipVertically(size){
    let flag = true;
    _.times(size, (i) => {
      const y = this.y + i;
      if(y > 9 || this.grid[y][this.x].ship){
        flag = false;
      }
    });
    return flag;
  }

  placeShipVertically(ship){
    _.times(ship.size, (i) => {
      let cell = this.grid[this.y + i][this.x];
      cell.ship = ship;
      cell.displayValue = 'S';
      cell.opponentDisplayValue = 'O';
    });
  }

  placeShipHorizontally(ship){
    _.times(ship.size, (i) => {
      let cell = this.grid[this.y][this.x + i];
      cell.ship = ship;
      cell.displayValue = 'S';
      cell.opponentDisplayValue = 'O';
    });
  }
};

export {Cell};
