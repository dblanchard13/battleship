class InterimController {
  constructor($timeout, $state, Gameplay) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }

    this.$timeout = $timeout;
    this.$state = $state;
    this.Gameplay = Gameplay;
    this.greeting = 'InterimController!';
    this.currentPlayer = Gameplay.getCurrentPlayer();
  }

  currentPlayerName(){
    return this.currentPlayer.name;
  }

  beginTurn(){
    this.$state.go('dashboard');
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

InterimController.$inject = ['$timeout', '$state', 'Gameplay'];

export {InterimController};
