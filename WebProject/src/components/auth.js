import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Redirect } from 'react-router-dom'

class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            pass: ''
        };
        this.handleloginChange = this.handleloginChange.bind(this);
        this.handlepassChange = this.handlepassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    add() {
        var setpassword = localStorage.setItem('pass', '12345');
        var setlogin = localStorage.setItem('login', 'makegon');
        var getlogin = this.state.login;
        var getpassword = this.state.pass;
       /*   if(localStorage.getItem('item') == null){
            var item =[];
            item.push(password);
            localStorage.setItem('item', JSON.stringify(works));
        }else{

        }

        if(localStorage.getItem('pass') == getpassword && localStorage.getItem('login') == getlogin)
        {
            alert ("Успешно! Редирект на главную страницу...");
            return <Redirect from='/reg' to='/app'/>;

        }else{alert("Нет совпадений, попробуйте еще...");}*/

    }
    handleSubmit(){

        console.log('---','formSubmit');
    };
    handleloginChange(event){

        this.setState({login: event.target.value});
        console.log('--login',event.target.value);
    };
    handlepassChange(event){
        console.log('--password',event.target.value);
        this.setState({pass: event.target.value});
    };

    render () {
      var locpassword = localStorage.getItem('pass');
      var loclogin = localStorage.getItem('login')
      var getlogin = this.state.login;
      var getpassword = this.state.pass;
      if (locpassword == getpassword && loclogin == getlogin){
        alert ("Успешно! Редирект на главную страницу...");
        return <Redirect from='/reg' to='/app'/>;
      }

        return (
            <Fragment>
                <h3>Введите логин и пароль для входа</h3>
            <form onSubmit={this.handleSubmit}>
                <input style={{width:'50%'}}
                    id="login"
                    type="text"
                    placeholder="введите логин"
                    value={this.state.login}
                    onChange={this.handleloginChange}
                />
                <input style={{width:'50%'}}
                    id="pass"
                    type="text"
                    placeholder="введите пароль"
                    value={this.state.pass}
                    onChange={this.handlepassChange}
                />
                <input className="btn btn-primary btn-lg btn-dark align-content-center btn_blc" type="button" value="Войти" onClick={this.add.bind(this)}/>

            </form>
            </Fragment>

    )};

}

export default Auth;
