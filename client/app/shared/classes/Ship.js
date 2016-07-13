class Ship {
  constructor(...opts){
    [this.size, this.name, this.grid] = opts;

    this.hitsTaken = 0;
    this.sunk = false;
  }

  takeHit(){
    this.hitsTaken ++;
    if(this.hitsTaken === this.size){
      this.sunk = true;
      this.grid.shipsSunk ++;
    }
  }
};

export {Ship};
