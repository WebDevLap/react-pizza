class UI {
  constructor(name, age){
    this._name = name
    this._age = age
  };
  get name(){
    return this._name
  }
  set name(value){
    this._name = value
  }

}

let user1 = new UI('Вася', 32)