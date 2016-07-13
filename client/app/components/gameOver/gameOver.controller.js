class GameOverController {
  constructor(Gameplay, $state) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }

    this.winner = Gameplay.getWinner();
  }

  getWinnerName() {
    return this.winner.name;
  }
};

GameOverController.$inject = ['Gameplay', '$state'];

export {GameOverController};
