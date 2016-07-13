class GridController {
  constructor(Gameplay, $state) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }

    this.Gameplay = Gameplay;
    this.grid = Gameplay.getGrid(true);
  }

  getCellInterior(coords){
    const [y, x] = coords.split('');
    const cell = this.grid[y][x];
    return cell.displayValue || 'O';
  }

  getCurrentPlayerName() {
    const player = this.Gameplay.getCurrentPlayer();
    return player.name;
  }

};

GridController.$inject = ['Gameplay', '$state'];

export {GridController};
