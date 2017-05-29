/**
 * Created by surajnew55 on 25/05/2017.
 */
import React from 'react';
import Auth from '../services/AuthService'

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registerValues: {}
        };
    }

    handleChangeevent(event){
        event.preventDefault();
        let registerValue = this.state.registerValues;
        let name = event.target.name;
        let value = event.target.value;

        registerValue[name] = value;
        this.setState({registerValues})

    }



        signup(e) {
        e.preventDefault();
        Auth.signup(this.state.registerValues)
            .catch(function(err) {
                alert("There's an error logging in");
                console.log("Error logging in", err);
            });
    }

    render() {
        return (
        <div className="row">
            <div className="three column"></div>
            <div className="six columns">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" onChange={this.state.registerValues['user']} className="form-control" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.state.registerValues['password']} className="form-control" name="password" id="password" ref="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password again</label>
                        <input type="password" onChange={this.state.registerValues['conform']} className="form-control" name="conform" placeholder="Password again" />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
                </form>
            </div>
            <div className="three column"></div>
        </div>

        );
    }
}

