class Member {
  constructor(name, email, password){
    this.name = name;
    this.email = email ;
    this.password = password;
  }

  toArr(){
    return [this.name, this.email, this.password];
  }
}
module.exports = Member;
