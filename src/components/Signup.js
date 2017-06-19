/*
/!**
 * Created by surajnew55 on 25/05/2017.
 *!/
import React from 'react';

import request from 'reqwest';
import when from 'when';


export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registerValues: {},

        };
    }

    handleChangeevent(event){
        event.preventDefault();
        let registerValues = this.state.registerValues;
        let name = event.target.name;
        let value = event.target.value;

        registerValues[name] = value;
        this.setState({registerValues})

    }



        formHandler(e) {
        e.preventDefault();
        console.log(this.state.registerValues);
        this.signUp(this.state.registerValues.email,this.state.registerValues.password, this.state.registerValues.conform)
            .catch(function(err) {
                console.log("Error logging in", err);
            });
    }
    signUp(email, password) {
        return this.handleAuth(when(request({
            url: 'http://localhost:3001/users',
            method: 'POST',
            crossOrigin: true,
            type: 'json',
            data: {
                "user":{"email":email,"password":password}            }
        })));
    }
    handleAuth(signUpPromise) {
        let self = this;
        return signUpPromise
            .then(function(response){
                console.log(response);
                self.redirectSignUp();

            });
    }
    redirectSignUp(){
        this.props.history.push('/login');
    }




    render() {

        return (
        <div className="row">
            <div className="three column"></div>
            <div className="six columns">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="text" value={this.state.registerValues['email']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="email" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.registerValues['password']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="password" id="password" ref="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password again</label>
                        <input type="password" value={this.state.registerValues['conform']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="conform" placeholder="Password again" required/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.formHandler.bind(this)}>Submit</button>
                </form>
            </div>
            <div className="three column"></div>
        </div>

        );
    }
}

*/
