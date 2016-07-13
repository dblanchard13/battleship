class User {
  constructor(...opts){
    [this.id, this.name] = opts;
  }
};

export {User};
