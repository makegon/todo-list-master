import React, {Component, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Redirect} from 'react-router-dom'
import App from './App'

class Reg extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            login:'',
            pass:''
        }
    }

    handleSubmit= () => {

        console.log('--','formSubmit');
    };
    handleEmailChange= (event) =>{

        console.log(event.target.value,'emailChange');
        this.setState({email: event.target.value});
    };
    handleloginChange= (event) =>{
        console.log(event.target.value,'login');
        this.setState({login: event.target.value});
    };
    handlepassChange= (event) =>{

        console.log(event.target.value,'password');
        this.setState({pass: event.target.value});
    };

    render () {

        {/*return <Redirect from='/reg' to='/app'/>;*/}
        return (

            <Fragment>
            <h3>Регистрация нового пользователя</h3>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="введите логин"
                    value={this.state.login}
                    onChange={this.handleloginChange}
                />
                <input
                    type="text"
                    placeholder="введите email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <input
                    type="text"
                    placeholder="введите пароль"
                    value={this.state.pass}
                    onChange={this.handlepassChange}
                />
                    <input type="button" value="Регистрация"  className="btn btn-primary btn-lg btn-dark align-content-end btn_blc" />
            </form>
            </Fragment>

    )};

}

export default Reg;
