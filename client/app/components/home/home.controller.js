class HomeController {
  constructor($timeout, $state, Gameplay) {
    Gameplay.reset();
    this.$timeout = $timeout;
    this.$state = $state;
    this.Gameplay = Gameplay;
    this.users = Gameplay.getUsers();
  }

  addUser(){
    if(!this.userName){
      this.showAlert('Gotta enter a user name first!');
      return;
    }

    if(this.users.length === 2){
      this.showAlert('You\'ve already created two users! If you\'d like to change one, click x by the name you with to change to remove it, then you can add another');
      return;
    }

    let user = {
      id: this.nextId ++,
      name: this.userName
    };

    this.Gameplay.createUser(this.userName);
    this.userName = '';
  }

  getActionText(){
    return this.lessThanTwoUsers() ? 'Submit' : 'Begin Game!';
  }

  homeAction(){
    this.lessThanTwoUsers() ? this.addUser() : this.beginGame();
  }

  removeUser(id){
    this.Gameplay.destroyUser(id);
  }

  lessThanTwoUsers(){
    return this.users.length < 2;
  }

  beginGame(){
    this.$state.go('interim');
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

HomeController.$inject = ['$timeout', '$state', 'Gameplay'];

export {HomeController};
