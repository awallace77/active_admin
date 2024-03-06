class Trainer{
  constructor(name, email, password, specialty){
    this.name = name;
    this.email = email;
    this.password = password;
    this.specialty = specialty;
  }

  toArr(){
    return [this.name, this.email, this.password, this.specialty];
  }
}

module.exports = Trainer;