/**
 * Created by surajnew55 on 25/05/2017.
 */
import React from 'react';

import request from 'reqwest';
import when from 'when';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           formValues: {},
        };
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;
        this.setState({formValues})
    }


     formHandler(e) {
        e.preventDefault();
        this.login(this.state.formValues.email, this.state.formValues.password)
            .catch(function (err) {
                alert("There's an error logging in");
                console.log("Error logging in", err)
            });
    }
    login(email, password) {
        return this.handleAuth(when(request({
            url: 'http://localhost:3001/user_token',
            method: 'POST',
            crossOrigin:'true',
            type: 'json',
            data: {
                "auth":{"email":email,"password":password}}
        })));
    }

    handleAuth(loginPromise) {
        let self =this;
        return loginPromise
            .then(function(response){
                var jwt = response.jwt;
                localStorage.removeItem(jwt);
                localStorage.setItem('jwt', jwt);
                self.redirectLogin();

            });
    }

    loggedIn(){
        let jwt = localStorage.getItem('jwt');
        if(jwt !=='') {
            return false;
        }
        return true;
    }

    redirectLogin(){
    this.props.history.push('/protected')
    }


    render() {


        return(
        <div className="row">
            <div className="four columns"></div>
            <div className="four columns">
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name='email' type="text" value={this.state.formValues['email']} onChange={this.handleChange.bind(this)} className="form-control "
                                   placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input name="password" type="password" value={this.state.formValues['password']} onChange={this.handleChange.bind(this)}  className="form-control" placeholder="Password" required/>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.formHandler.bind(this)}>Submit</button>
                    </form>
            </div>
            <div className="four columns">
                You can log in with default User below: <br/><br/>
                Email: <h4><strong>abc@123.com</strong></h4><br/>
                Password: <h4><strong>securepassword</strong></h4>

            </div>
        </div>
        );
    }
}





