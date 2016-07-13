class CellController {
  constructor($timeout, $scope, $state, Gameplay) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }

    this.$timeout = $timeout;
    this.$scope = $scope;
    this.$state = $state;
    this.Gameplay = Gameplay;
    this.grid = $scope.grid;
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

CellController.$inject = ['$timeout', '$scope', '$state', 'Gameplay'];

export {CellController};
