import { autorun, observable, action, computed} from "mobx";

export default class TestStore{
  @observable test1 = 'test';
  @observable token = 'vlKd3hoPHZxLojCGSasWeaFi1Kw7G6SDnL1vm5PKmqyjyfHVGeeaEic0UAbGb06S';
  @observable btnMobx = 'test';
  @observable btnName = 'nickname';
  @observable classMobx = 'btn btn-primary btn-lg btn-dark float-left btn_blc';
  @observable className = 'nickname';

  @action actTest = () => {
    this.test1 = 'newTest';
    this.btnMobx = 'end:(';
    this.classMobx = 'btn btn-primary btn-lg btn-blue float-left btn_blc';

  }
  @observable fname = 'Фамилия';
  @observable lname ='Имя';
  @observable nickName;

  @computed get fullName() {
    return this.fname +' '+this.lname;
  }
  @action setNickName = () => {
    this.nickName = "Warrior";
    this.btnMobx = 'nickname?';
    this.classMobx = 'btn btn-primary btn-lg btn-dark float-left btn_blc';
  }


}

