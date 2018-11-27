import {autorun, observable, action, computed} from 'mobx'

class Person {
  @observable fname = 'Фамилия';
  @observable lname ='Имя';
  @observable nickname;

  @computed get fullName() {
    return this.fname +''+this.lname;


  }



}
