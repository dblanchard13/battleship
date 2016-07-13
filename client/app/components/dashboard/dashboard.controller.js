class DashboardController {
  constructor($state, Gameplay) {
    if(Gameplay.noUsers()){
      $state.go('home');
    }
  }
};

DashboardController.$inject = ['$state', 'Gameplay'];

export {DashboardController};
