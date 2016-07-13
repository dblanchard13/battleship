class OpponentGridController {
  constructor($timeout, $scope, $state, Gameplay) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }

    this.$timeout = $timeout;
    this.$state = $state;
    this.Gameplay = Gameplay;
    this.grid = Gameplay.getGrid();
  }

  dropBomb(event){
    event.preventDefault();

    const [y, x] = event.target.id.split('');
    const ship = this.grid[y][x].takeHit();

    if(ship){
      this.showAlert('Hit Ship!');
      if(ship.sunk){
        this.showAlert(`Sunk the ${ship.name}`);
        if(ship.grid.allShipsSunk()){
          this.showAlert('All opponent ships have been sunk!');
          this.Gameplay.crownWinner();
          this.$state.go('gameOver');
        }
      }
    }
    else{
      this.showAlert('Missed!');
    }
    this.$timeout(() => {
      this.Gameplay.incrementTurn();
      this.$state.go('interim');
    }, 1000);
  }

  getCellInterior(coords){
    const [y, x] = coords.split('');
    const cell = this.grid[y][x];
    return cell.opponentDisplayValue;
  }

  getOpponentCellInterior(coords){
    const [y, x] = coords.split('');
    const cell = this.grid[y][x];
    return cell.opponentDisplayValue;
  }

  getOpponentName() {
    const player = this.Gameplay.getWaitingPlayer();
    return player.name;
  }


  showAlert(e){
    this.showingAlert = true;
    this.alert = e || 'Nope';
    this.credits = {};
    this.$timeout(() => {
      this.showingAlert = false;
      this.alert = '';
    }, 3000);
  }

};

OpponentGridController.$inject = ['$timeout', '$scope', '$state', 'Gameplay'];

export {OpponentGridController};
